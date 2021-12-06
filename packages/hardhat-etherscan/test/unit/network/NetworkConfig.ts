import { assert } from "chai";
import { networkConfig } from "../../../src/network/NetworkConfig";

describe("Network Config", () => {
  it("should have no duplicate chain ids", () => {
    const chainIds = Object.values(networkConfig);

    const uniqueIds = [...new Set(chainIds)];

    assert.notEqual(0, uniqueIds.length);
    assert.equal(uniqueIds.length, chainIds.length);
  });
});
