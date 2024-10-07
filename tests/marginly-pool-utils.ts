import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  BalanceSync,
  BaseDebtRepaid,
  ClosePosition,
  Deleverage,
  DepositBase,
  DepositQuote,
  Emergency,
  EmergencyWithdraw,
  EnactMarginCall,
  Long,
  ParametersChanged,
  QuoteDebtRepaid,
  ReceivePosition,
  Reinit,
  SellBaseForQuote,
  SellQuoteForBase,
  Short,
  WithdrawBase,
  WithdrawQuote
} from "../generated/MarginlyPool/MarginlyPool"

export function createBalanceSyncEvent(): BalanceSync {
  let balanceSyncEvent = changetype<BalanceSync>(newMockEvent())

  balanceSyncEvent.parameters = new Array()

  return balanceSyncEvent
}

export function createBaseDebtRepaidEvent(
  user: Address,
  realBaseDebtDelta: BigInt,
  discountedBaseDebtDelta: BigInt
): BaseDebtRepaid {
  let baseDebtRepaidEvent = changetype<BaseDebtRepaid>(newMockEvent())

  baseDebtRepaidEvent.parameters = new Array()

  baseDebtRepaidEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  baseDebtRepaidEvent.parameters.push(
    new ethereum.EventParam(
      "realBaseDebtDelta",
      ethereum.Value.fromUnsignedBigInt(realBaseDebtDelta)
    )
  )
  baseDebtRepaidEvent.parameters.push(
    new ethereum.EventParam(
      "discountedBaseDebtDelta",
      ethereum.Value.fromUnsignedBigInt(discountedBaseDebtDelta)
    )
  )

  return baseDebtRepaidEvent
}

export function createClosePositionEvent(
  user: Address,
  token: Address,
  collateralDelta: BigInt,
  swapPriceX96: BigInt,
  collateralDiscountedDelta: BigInt
): ClosePosition {
  let closePositionEvent = changetype<ClosePosition>(newMockEvent())

  closePositionEvent.parameters = new Array()

  closePositionEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam(
      "collateralDelta",
      ethereum.Value.fromUnsignedBigInt(collateralDelta)
    )
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam(
      "swapPriceX96",
      ethereum.Value.fromUnsignedBigInt(swapPriceX96)
    )
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam(
      "collateralDiscountedDelta",
      ethereum.Value.fromUnsignedBigInt(collateralDiscountedDelta)
    )
  )

  return closePositionEvent
}

export function createDeleverageEvent(
  positionType: i32,
  totalCollateralReduced: BigInt,
  totalDebtReduced: BigInt
): Deleverage {
  let deleverageEvent = changetype<Deleverage>(newMockEvent())

  deleverageEvent.parameters = new Array()

  deleverageEvent.parameters.push(
    new ethereum.EventParam(
      "positionType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(positionType))
    )
  )
  deleverageEvent.parameters.push(
    new ethereum.EventParam(
      "totalCollateralReduced",
      ethereum.Value.fromUnsignedBigInt(totalCollateralReduced)
    )
  )
  deleverageEvent.parameters.push(
    new ethereum.EventParam(
      "totalDebtReduced",
      ethereum.Value.fromUnsignedBigInt(totalDebtReduced)
    )
  )

  return deleverageEvent
}

export function createDepositBaseEvent(
  user: Address,
  amount: BigInt,
  newPositionType: i32,
  baseDiscountedAmount: BigInt
): DepositBase {
  let depositBaseEvent = changetype<DepositBase>(newMockEvent())

  depositBaseEvent.parameters = new Array()

  depositBaseEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  depositBaseEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  depositBaseEvent.parameters.push(
    new ethereum.EventParam(
      "newPositionType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newPositionType))
    )
  )
  depositBaseEvent.parameters.push(
    new ethereum.EventParam(
      "baseDiscountedAmount",
      ethereum.Value.fromUnsignedBigInt(baseDiscountedAmount)
    )
  )

  return depositBaseEvent
}

export function createDepositQuoteEvent(
  user: Address,
  amount: BigInt,
  newPositionType: i32,
  quoteDiscountedAmount: BigInt
): DepositQuote {
  let depositQuoteEvent = changetype<DepositQuote>(newMockEvent())

  depositQuoteEvent.parameters = new Array()

  depositQuoteEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  depositQuoteEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  depositQuoteEvent.parameters.push(
    new ethereum.EventParam(
      "newPositionType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newPositionType))
    )
  )
  depositQuoteEvent.parameters.push(
    new ethereum.EventParam(
      "quoteDiscountedAmount",
      ethereum.Value.fromUnsignedBigInt(quoteDiscountedAmount)
    )
  )

  return depositQuoteEvent
}

export function createEmergencyEvent(mode: i32): Emergency {
  let emergencyEvent = changetype<Emergency>(newMockEvent())

  emergencyEvent.parameters = new Array()

  emergencyEvent.parameters.push(
    new ethereum.EventParam(
      "mode",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(mode))
    )
  )

  return emergencyEvent
}

export function createEmergencyWithdrawEvent(
  who: Address,
  token: Address,
  amount: BigInt
): EmergencyWithdraw {
  let emergencyWithdrawEvent = changetype<EmergencyWithdraw>(newMockEvent())

  emergencyWithdrawEvent.parameters = new Array()

  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("who", ethereum.Value.fromAddress(who))
  )
  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return emergencyWithdrawEvent
}

export function createEnactMarginCallEvent(
  user: Address,
  swapPriceX96: BigInt
): EnactMarginCall {
  let enactMarginCallEvent = changetype<EnactMarginCall>(newMockEvent())

  enactMarginCallEvent.parameters = new Array()

  enactMarginCallEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  enactMarginCallEvent.parameters.push(
    new ethereum.EventParam(
      "swapPriceX96",
      ethereum.Value.fromUnsignedBigInt(swapPriceX96)
    )
  )

  return enactMarginCallEvent
}

export function createLongEvent(
  user: Address,
  amount: BigInt,
  swapPriceX96: BigInt,
  quoteDiscountedDelta: BigInt,
  baseDiscountedDelta: BigInt
): Long {
  let longEvent = changetype<Long>(newMockEvent())

  longEvent.parameters = new Array()

  longEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  longEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  longEvent.parameters.push(
    new ethereum.EventParam(
      "swapPriceX96",
      ethereum.Value.fromUnsignedBigInt(swapPriceX96)
    )
  )
  longEvent.parameters.push(
    new ethereum.EventParam(
      "quoteDiscountedDelta",
      ethereum.Value.fromUnsignedBigInt(quoteDiscountedDelta)
    )
  )
  longEvent.parameters.push(
    new ethereum.EventParam(
      "baseDiscountedDelta",
      ethereum.Value.fromUnsignedBigInt(baseDiscountedDelta)
    )
  )

  return longEvent
}

export function createParametersChangedEvent(): ParametersChanged {
  let parametersChangedEvent = changetype<ParametersChanged>(newMockEvent())

  parametersChangedEvent.parameters = new Array()

  return parametersChangedEvent
}

export function createQuoteDebtRepaidEvent(
  user: Address,
  realQuoteDebtDelta: BigInt,
  discountedQuoteDebtDelta: BigInt
): QuoteDebtRepaid {
  let quoteDebtRepaidEvent = changetype<QuoteDebtRepaid>(newMockEvent())

  quoteDebtRepaidEvent.parameters = new Array()

  quoteDebtRepaidEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  quoteDebtRepaidEvent.parameters.push(
    new ethereum.EventParam(
      "realQuoteDebtDelta",
      ethereum.Value.fromUnsignedBigInt(realQuoteDebtDelta)
    )
  )
  quoteDebtRepaidEvent.parameters.push(
    new ethereum.EventParam(
      "discountedQuoteDebtDelta",
      ethereum.Value.fromUnsignedBigInt(discountedQuoteDebtDelta)
    )
  )

  return quoteDebtRepaidEvent
}

export function createReceivePositionEvent(
  liquidator: Address,
  position: Address,
  newPositionType: i32,
  newPositionQuoteDiscounted: BigInt,
  newPositionBaseDiscounted: BigInt
): ReceivePosition {
  let receivePositionEvent = changetype<ReceivePosition>(newMockEvent())

  receivePositionEvent.parameters = new Array()

  receivePositionEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  receivePositionEvent.parameters.push(
    new ethereum.EventParam("position", ethereum.Value.fromAddress(position))
  )
  receivePositionEvent.parameters.push(
    new ethereum.EventParam(
      "newPositionType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newPositionType))
    )
  )
  receivePositionEvent.parameters.push(
    new ethereum.EventParam(
      "newPositionQuoteDiscounted",
      ethereum.Value.fromUnsignedBigInt(newPositionQuoteDiscounted)
    )
  )
  receivePositionEvent.parameters.push(
    new ethereum.EventParam(
      "newPositionBaseDiscounted",
      ethereum.Value.fromUnsignedBigInt(newPositionBaseDiscounted)
    )
  )

  return receivePositionEvent
}

export function createReinitEvent(reinitTimestamp: BigInt): Reinit {
  let reinitEvent = changetype<Reinit>(newMockEvent())

  reinitEvent.parameters = new Array()

  reinitEvent.parameters.push(
    new ethereum.EventParam(
      "reinitTimestamp",
      ethereum.Value.fromUnsignedBigInt(reinitTimestamp)
    )
  )

  return reinitEvent
}

export function createSellBaseForQuoteEvent(
  user: Address,
  baseDelta: BigInt,
  quoteDelta: BigInt,
  discountedBaseCollateralDelta: BigInt,
  discountedQuoteCollateralDelta: BigInt
): SellBaseForQuote {
  let sellBaseForQuoteEvent = changetype<SellBaseForQuote>(newMockEvent())

  sellBaseForQuoteEvent.parameters = new Array()

  sellBaseForQuoteEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  sellBaseForQuoteEvent.parameters.push(
    new ethereum.EventParam(
      "baseDelta",
      ethereum.Value.fromUnsignedBigInt(baseDelta)
    )
  )
  sellBaseForQuoteEvent.parameters.push(
    new ethereum.EventParam(
      "quoteDelta",
      ethereum.Value.fromUnsignedBigInt(quoteDelta)
    )
  )
  sellBaseForQuoteEvent.parameters.push(
    new ethereum.EventParam(
      "discountedBaseCollateralDelta",
      ethereum.Value.fromUnsignedBigInt(discountedBaseCollateralDelta)
    )
  )
  sellBaseForQuoteEvent.parameters.push(
    new ethereum.EventParam(
      "discountedQuoteCollateralDelta",
      ethereum.Value.fromUnsignedBigInt(discountedQuoteCollateralDelta)
    )
  )

  return sellBaseForQuoteEvent
}

export function createSellQuoteForBaseEvent(
  user: Address,
  quoteDelta: BigInt,
  baseDelta: BigInt,
  discountedQuoteCollateralDelta: BigInt,
  discountedBaseCollateralDelta: BigInt
): SellQuoteForBase {
  let sellQuoteForBaseEvent = changetype<SellQuoteForBase>(newMockEvent())

  sellQuoteForBaseEvent.parameters = new Array()

  sellQuoteForBaseEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  sellQuoteForBaseEvent.parameters.push(
    new ethereum.EventParam(
      "quoteDelta",
      ethereum.Value.fromUnsignedBigInt(quoteDelta)
    )
  )
  sellQuoteForBaseEvent.parameters.push(
    new ethereum.EventParam(
      "baseDelta",
      ethereum.Value.fromUnsignedBigInt(baseDelta)
    )
  )
  sellQuoteForBaseEvent.parameters.push(
    new ethereum.EventParam(
      "discountedQuoteCollateralDelta",
      ethereum.Value.fromUnsignedBigInt(discountedQuoteCollateralDelta)
    )
  )
  sellQuoteForBaseEvent.parameters.push(
    new ethereum.EventParam(
      "discountedBaseCollateralDelta",
      ethereum.Value.fromUnsignedBigInt(discountedBaseCollateralDelta)
    )
  )

  return sellQuoteForBaseEvent
}

export function createShortEvent(
  user: Address,
  amount: BigInt,
  swapPriceX96: BigInt,
  quoteDiscountedDelta: BigInt,
  baseDiscountedDelta: BigInt
): Short {
  let shortEvent = changetype<Short>(newMockEvent())

  shortEvent.parameters = new Array()

  shortEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  shortEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  shortEvent.parameters.push(
    new ethereum.EventParam(
      "swapPriceX96",
      ethereum.Value.fromUnsignedBigInt(swapPriceX96)
    )
  )
  shortEvent.parameters.push(
    new ethereum.EventParam(
      "quoteDiscountedDelta",
      ethereum.Value.fromUnsignedBigInt(quoteDiscountedDelta)
    )
  )
  shortEvent.parameters.push(
    new ethereum.EventParam(
      "baseDiscountedDelta",
      ethereum.Value.fromUnsignedBigInt(baseDiscountedDelta)
    )
  )

  return shortEvent
}

export function createWithdrawBaseEvent(
  user: Address,
  amount: BigInt,
  baseDiscountedDelta: BigInt
): WithdrawBase {
  let withdrawBaseEvent = changetype<WithdrawBase>(newMockEvent())

  withdrawBaseEvent.parameters = new Array()

  withdrawBaseEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawBaseEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawBaseEvent.parameters.push(
    new ethereum.EventParam(
      "baseDiscountedDelta",
      ethereum.Value.fromUnsignedBigInt(baseDiscountedDelta)
    )
  )

  return withdrawBaseEvent
}

export function createWithdrawQuoteEvent(
  user: Address,
  amount: BigInt,
  quoteDiscountedDelta: BigInt
): WithdrawQuote {
  let withdrawQuoteEvent = changetype<WithdrawQuote>(newMockEvent())

  withdrawQuoteEvent.parameters = new Array()

  withdrawQuoteEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawQuoteEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawQuoteEvent.parameters.push(
    new ethereum.EventParam(
      "quoteDiscountedDelta",
      ethereum.Value.fromUnsignedBigInt(quoteDiscountedDelta)
    )
  )

  return withdrawQuoteEvent
}
