import { PoolCreated as PoolCreatedEvent } from "../generated/MarginlyFactory/MarginlyFactory";
import { ERC20 } from "../generated/MarginlyFactory/ERC20";
import { Pool, Token } from "../generated/schema";
import { MarginlyPool } from "../generated/templates";
import { Address } from "@graphprotocol/graph-ts";
import { updatePool, updatePoolParams } from "./utils";

function getTokenEntity(tokenAddress: Address): Token {
  const erc20Contract = ERC20.bind(tokenAddress);
  let tokenEntity = new Token(tokenAddress.toHexString());
  tokenEntity.symbol = erc20Contract.symbol();
  tokenEntity.decimals = erc20Contract.decimals();
  tokenEntity.name = erc20Contract.name();

  return tokenEntity;
}

export function handlePoolCreated(event: PoolCreatedEvent): void {
  let quoteTokenEntity = Token.load(event.params.quoteToken.toHexString());
  if (quoteTokenEntity == null) {
    quoteTokenEntity = getTokenEntity(event.params.quoteToken);
    quoteTokenEntity.save();
  }

  let baseTokenEntity = Token.load(event.params.baseToken.toHexString());
  if (baseTokenEntity == null) {
    baseTokenEntity = getTokenEntity(event.params.baseToken);
    baseTokenEntity.save();
  }

  let poolEntity = new Pool(event.params.pool);
  poolEntity.createdAtBlockNumber = event.block.number;
  poolEntity.createdAtTimestamp = event.block.timestamp;
  poolEntity.baseToken = baseTokenEntity.id;
  poolEntity.quoteToken = quoteTokenEntity.id;
  updatePool(poolEntity);
  updatePoolParams(poolEntity);
  poolEntity.save();

  MarginlyPool.create(event.params.pool);
}
