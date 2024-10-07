import {
  BalanceSync as BalanceSyncEvent,
  BaseDebtRepaid as BaseDebtRepaidEvent,
  ClosePosition as ClosePositionEvent,
  Deleverage as DeleverageEvent,
  DepositBase as DepositBaseEvent,
  DepositQuote as DepositQuoteEvent,
  Emergency as EmergencyEvent,
  EmergencyWithdraw as EmergencyWithdrawEvent,
  EnactMarginCall as EnactMarginCallEvent,
  Long as LongEvent,
  ParametersChanged as ParametersChangedEvent,
  QuoteDebtRepaid as QuoteDebtRepaidEvent,
  ReceivePosition as ReceivePositionEvent,
  Reinit as ReinitEvent,
  SellBaseForQuote as SellBaseForQuoteEvent,
  SellQuoteForBase as SellQuoteForBaseEvent,
  Short as ShortEvent,
  WithdrawBase as WithdrawBaseEvent,
  WithdrawQuote as WithdrawQuoteEvent
} from "../generated/MarginlyPool/MarginlyPool"
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
} from "../generated/schema"

export function handleBalanceSync(event: BalanceSyncEvent): void {
  let entity = new BalanceSync(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBaseDebtRepaid(event: BaseDebtRepaidEvent): void {
  let entity = new BaseDebtRepaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.realBaseDebtDelta = event.params.realBaseDebtDelta
  entity.discountedBaseDebtDelta = event.params.discountedBaseDebtDelta

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClosePosition(event: ClosePositionEvent): void {
  let entity = new ClosePosition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.token = event.params.token
  entity.collateralDelta = event.params.collateralDelta
  entity.swapPriceX96 = event.params.swapPriceX96
  entity.collateralDiscountedDelta = event.params.collateralDiscountedDelta

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeleverage(event: DeleverageEvent): void {
  let entity = new Deleverage(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.positionType = event.params.positionType
  entity.totalCollateralReduced = event.params.totalCollateralReduced
  entity.totalDebtReduced = event.params.totalDebtReduced

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositBase(event: DepositBaseEvent): void {
  let entity = new DepositBase(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.newPositionType = event.params.newPositionType
  entity.baseDiscountedAmount = event.params.baseDiscountedAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositQuote(event: DepositQuoteEvent): void {
  let entity = new DepositQuote(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.newPositionType = event.params.newPositionType
  entity.quoteDiscountedAmount = event.params.quoteDiscountedAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEmergency(event: EmergencyEvent): void {
  let entity = new Emergency(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.mode = event.params.mode

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEmergencyWithdraw(event: EmergencyWithdrawEvent): void {
  let entity = new EmergencyWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.who = event.params.who
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEnactMarginCall(event: EnactMarginCallEvent): void {
  let entity = new EnactMarginCall(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.swapPriceX96 = event.params.swapPriceX96

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLong(event: LongEvent): void {
  let entity = new Long(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.swapPriceX96 = event.params.swapPriceX96
  entity.quoteDiscountedDelta = event.params.quoteDiscountedDelta
  entity.baseDiscountedDelta = event.params.baseDiscountedDelta

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleParametersChanged(event: ParametersChangedEvent): void {
  let entity = new ParametersChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleQuoteDebtRepaid(event: QuoteDebtRepaidEvent): void {
  let entity = new QuoteDebtRepaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.realQuoteDebtDelta = event.params.realQuoteDebtDelta
  entity.discountedQuoteDebtDelta = event.params.discountedQuoteDebtDelta

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReceivePosition(event: ReceivePositionEvent): void {
  let entity = new ReceivePosition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.liquidator = event.params.liquidator
  entity.position = event.params.position
  entity.newPositionType = event.params.newPositionType
  entity.newPositionQuoteDiscounted = event.params.newPositionQuoteDiscounted
  entity.newPositionBaseDiscounted = event.params.newPositionBaseDiscounted

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReinit(event: ReinitEvent): void {
  let entity = new Reinit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.reinitTimestamp = event.params.reinitTimestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSellBaseForQuote(event: SellBaseForQuoteEvent): void {
  let entity = new SellBaseForQuote(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.baseDelta = event.params.baseDelta
  entity.quoteDelta = event.params.quoteDelta
  entity.discountedBaseCollateralDelta =
    event.params.discountedBaseCollateralDelta
  entity.discountedQuoteCollateralDelta =
    event.params.discountedQuoteCollateralDelta

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSellQuoteForBase(event: SellQuoteForBaseEvent): void {
  let entity = new SellQuoteForBase(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.quoteDelta = event.params.quoteDelta
  entity.baseDelta = event.params.baseDelta
  entity.discountedQuoteCollateralDelta =
    event.params.discountedQuoteCollateralDelta
  entity.discountedBaseCollateralDelta =
    event.params.discountedBaseCollateralDelta

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleShort(event: ShortEvent): void {
  let entity = new Short(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.swapPriceX96 = event.params.swapPriceX96
  entity.quoteDiscountedDelta = event.params.quoteDiscountedDelta
  entity.baseDiscountedDelta = event.params.baseDiscountedDelta

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawBase(event: WithdrawBaseEvent): void {
  let entity = new WithdrawBase(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.baseDiscountedDelta = event.params.baseDiscountedDelta

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawQuote(event: WithdrawQuoteEvent): void {
  let entity = new WithdrawQuote(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.quoteDiscountedDelta = event.params.quoteDiscountedDelta

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
