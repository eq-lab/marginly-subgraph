import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferStarted,
  OwnershipTransferred,
  PoolCreated,
  SwapRouterChanged
} from "../generated/MarginlyFactory/MarginlyFactory"

export function createOwnershipTransferStartedEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferStarted {
  let ownershipTransferStartedEvent = changetype<OwnershipTransferStarted>(
    newMockEvent()
  )

  ownershipTransferStartedEvent.parameters = new Array()

  ownershipTransferStartedEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferStartedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferStartedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPoolCreatedEvent(
  quoteToken: Address,
  baseToken: Address,
  priceOracle: Address,
  defaultSwapCallData: BigInt,
  pool: Address
): PoolCreated {
  let poolCreatedEvent = changetype<PoolCreated>(newMockEvent())

  poolCreatedEvent.parameters = new Array()

  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "quoteToken",
      ethereum.Value.fromAddress(quoteToken)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("baseToken", ethereum.Value.fromAddress(baseToken))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "priceOracle",
      ethereum.Value.fromAddress(priceOracle)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "defaultSwapCallData",
      ethereum.Value.fromUnsignedBigInt(defaultSwapCallData)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromAddress(pool))
  )

  return poolCreatedEvent
}

export function createSwapRouterChangedEvent(
  newSwapRouter: Address
): SwapRouterChanged {
  let swapRouterChangedEvent = changetype<SwapRouterChanged>(newMockEvent())

  swapRouterChangedEvent.parameters = new Array()

  swapRouterChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newSwapRouter",
      ethereum.Value.fromAddress(newSwapRouter)
    )
  )

  return swapRouterChangedEvent
}
