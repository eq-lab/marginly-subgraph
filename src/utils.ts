import { Address, BigInt } from "@graphprotocol/graph-ts";
import { MarginlyPool } from "../generated/MarginlyPool/MarginlyPool";
import { Pool } from "../generated/schema";

export const X96One = BigInt.fromI32(2).pow(96);

export enum PositionType {
  Uninitialized = 0,
  Lend = 1,
  Short = 2,
  Long = 3,
}

export function positionTypeToString(type: PositionType): string {
  switch (type) {
    case PositionType.Lend:
      return "LEND";
    case PositionType.Short:
      return "SHORT";
    case PositionType.Long:
      return "LONG";
    default:
      return "UNINITIALIZED";
  }
}

export function updatePool(poolEntity: Pool): Pool {
  const poolContract = MarginlyPool.bind(Address.fromBytes(poolEntity.id));

  poolEntity.baseDebtCoeff = poolContract.baseDebtCoeff();
  poolEntity.baseCollateralCoeff = poolContract.baseCollateralCoeff();
  poolEntity.baseDelevCoeff = poolContract.baseDelevCoeff();

  poolEntity.quoteCollateralCoeff = poolContract.quoteCollateralCoeff();
  poolEntity.quoteDebtCoeff = poolContract.quoteDebtCoeff();
  poolEntity.quoteDelevCoeff = poolContract.quoteDelevCoeff();

  poolEntity.discountedBaseCollateral = poolContract.discountedBaseCollateral();
  poolEntity.discountedBaseDebt = poolContract.discountedBaseDebt();
  poolEntity.discountedQuoteCollateral =
    poolContract.discountedQuoteCollateral();
  poolEntity.discountedQuoteDebt = poolContract.discountedQuoteDebt();

  const systemLeverage = poolContract.systemLeverage();

  poolEntity.shortLeverage = systemLeverage.getShortX96();
  poolEntity.longLeverage = systemLeverage.getLongX96();

  return poolEntity;
}

export function updatePoolParams(poolEntity: Pool): Pool {
  const poolContract = MarginlyPool.bind(Address.fromBytes(poolEntity.id));
  const params = poolContract.params();

  poolEntity.maxLeverage = params.getMaxLeverage();
  poolEntity.fee = params.getFee();
  poolEntity.swapFee = params.getSwapFee();
  poolEntity.interestRate = params.getInterestRate();
  poolEntity.quoteLimit = params.getQuoteLimit();
  poolEntity.mcSlippage = params.getMcSlippage();
  poolEntity.positionMinAmount = params.getPositionMinAmount();

  return poolEntity;
}
