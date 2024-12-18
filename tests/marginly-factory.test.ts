import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
} from "matchstick-as/assembly/index";
import { Address, BigInt } from "@graphprotocol/graph-ts";
import { OwnershipTransferStarted } from "../generated/schema";
import { OwnershipTransferStarted as OwnershipTransferStartedEvent } from "../generated/MarginlyFactory/MarginlyFactory";
import { createOwnershipTransferStartedEvent } from "./marginly-factory-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {});

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Test", () => {
    // Tests should be here
  });
});
