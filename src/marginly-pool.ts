import { Address, BigInt } from "@graphprotocol/graph-ts";
import {
  BaseDebtRepaid as BaseDebtRepaidEvent,
  ClosePosition as ClosePositionEvent,
  DepositBase as DepositBaseEvent,
  DepositQuote as DepositQuoteEvent,
  EmergencyWithdraw as EmergencyWithdrawEvent,
  EnactMarginCall as EnactMarginCallEvent,
  Long as LongEvent,
  ParametersChanged as ParametersChangedEvent,
  QuoteDebtRepaid as QuoteDebtRepaidEvent,
  ReceivePosition as ReceivePositionEvent,
  SellBaseForQuote as SellBaseForQuoteEvent,
  SellQuoteForBase as SellQuoteForBaseEvent,
  Short as ShortEvent,
  WithdrawBase as WithdrawBaseEvent,
  WithdrawQuote as WithdrawQuoteEvent,
  MarginlyPool as MarginlyPoolContract,
  Reinit as ReinitEvent,
} from "../generated/MarginlyPool/MarginlyPool";
import { Pool, UserPosition } from "../generated/schema";
import {
  PositionType,
  positionTypeToString,
  updatePool,
  updatePoolParams,
} from "./utils";

function updateUserPosition(user: Address, poolAddress: Address): void {
  const id = poolAddress.concat(user);

  let userPositionEntity = UserPosition.load(id);
  if (userPositionEntity == null) {
    const pool = Pool.load(poolAddress);
    if (pool == null) {
      throw new Error(
        "MarginlyPool not found by address " + poolAddress.toHexString()
      );
    }

    userPositionEntity = new UserPosition(id);
    userPositionEntity.pool = poolAddress;
    userPositionEntity.user = user;
    userPositionEntity.baseToken = pool.baseToken;
    userPositionEntity.quoteToken = pool.quoteToken;
  }

  const X96One = BigInt.fromI32(2).pow(96);

  const marginlyPool = MarginlyPoolContract.bind(poolAddress);

  const baseCollateralCoeff = marginlyPool.baseCollateralCoeff();
  const baseDebtCoeff = marginlyPool.baseDebtCoeff();
  const baseDelevCoeff = marginlyPool.baseDelevCoeff();

  const quoteCollateralCoeff = marginlyPool.quoteCollateralCoeff();
  const quoteDebtCoeff = marginlyPool.quoteDebtCoeff();
  const quoteDelevCoeff = marginlyPool.quoteDelevCoeff();

  const position = marginlyPool.positions(user);
  const positionType = position.get_type();
  userPositionEntity.positionType = positionTypeToString(positionType);
  userPositionEntity.discountedBaseAmount = position.getDiscountedBaseAmount();
  userPositionEntity.discountedQuoteAmount =
    position.getDiscountedQuoteAmount();

  if (positionType == PositionType.Lend) {
    userPositionEntity.baseAmount = baseCollateralCoeff
      .times(position.getDiscountedBaseAmount())
      .div(X96One);

    userPositionEntity.quoteAmount = quoteCollateralCoeff
      .times(position.getDiscountedQuoteAmount())
      .div(X96One);
  } else if (positionType == PositionType.Short) {
    // baseAmount in debt, negative
    userPositionEntity.baseAmount = baseDebtCoeff
      .times(position.getDiscountedBaseAmount())
      .div(X96One)
      .neg();

    userPositionEntity.quoteAmount = quoteCollateralCoeff
      .times(position.getDiscountedQuoteAmount())
      .div(X96One)
      .minus(
        quoteDelevCoeff.times(position.getDiscountedBaseAmount()).div(X96One)
      );
  } else if (positionType == PositionType.Long) {
    userPositionEntity.baseAmount = baseCollateralCoeff
      .times(position.getDiscountedBaseAmount())
      .div(X96One)
      .minus(
        baseDelevCoeff.times(position.getDiscountedQuoteAmount()).div(X96One)
      );

    // quoteAmount in debt, negative
    userPositionEntity.quoteAmount = quoteDebtCoeff
      .times(position.getDiscountedQuoteAmount())
      .div(X96One)
      .neg();
  } else {
    userPositionEntity.positionType = positionTypeToString(positionType);
    userPositionEntity.baseAmount = BigInt.zero();
    userPositionEntity.quoteAmount = BigInt.zero();
  }

  userPositionEntity.save();
}

export function handleBaseDebtRepaid(event: BaseDebtRepaidEvent): void {
  updateUserPosition(event.params.user, event.address);
}

export function handleClosePosition(event: ClosePositionEvent): void {
  updateUserPosition(event.params.user, event.address);
}

export function handleDepositBase(event: DepositBaseEvent): void {
  updateUserPosition(event.params.user, event.address);
}

export function handleDepositQuote(event: DepositQuoteEvent): void {
  updateUserPosition(event.params.user, event.address);
}

export function handleEmergencyWithdraw(event: EmergencyWithdrawEvent): void {
  updateUserPosition(event.params.who, event.address);
}

export function handleEnactMarginCall(event: EnactMarginCallEvent): void {
  updateUserPosition(event.params.user, event.address);
}

export function handleLong(event: LongEvent): void {
  updateUserPosition(event.params.user, event.address);
}

export function handleParametersChanged(event: ParametersChangedEvent): void {
  let pool = Pool.load(event.address);
  if (pool == null) {
    // ParametersChanged is emitted before CreatePool event
    return;
  }

  updatePoolParams(pool);
  pool.save();
}

export function handleQuoteDebtRepaid(event: QuoteDebtRepaidEvent): void {
  updateUserPosition(event.params.user, event.address);
}

export function handleReceivePosition(event: ReceivePositionEvent): void {
  updateUserPosition(event.params.position, event.address);
}

export function handleSellBaseForQuote(event: SellBaseForQuoteEvent): void {
  updateUserPosition(event.params.user, event.address);
}

export function handleSellQuoteForBase(event: SellQuoteForBaseEvent): void {
  updateUserPosition(event.params.user, event.address);
}

export function handleShort(event: ShortEvent): void {
  updateUserPosition(event.params.user, event.address);
}

export function handleWithdrawBase(event: WithdrawBaseEvent): void {
  updateUserPosition(event.params.user, event.address);
}

export function handleWithdrawQuote(event: WithdrawQuoteEvent): void {
  updateUserPosition(event.params.user, event.address);
}

export function handleReinit(event: ReinitEvent): void {
  let pool = Pool.load(event.address);
  if (pool == null) {
    throw new Error(
      "MarginlyPool not found by address " + event.address.toHexString()
    );
  }

  updatePool(pool);
  pool.save();
}
