import { NomicLabsHardhatPluginError } from "hardhat/src/plugins";
import { pluginName } from "./constants";
import { networkConfig } from "./NetworkConfig";
import { EtherscanConfig, NetworkConfig } from "./types";

const isNetworkKey = (network: string): network is keyof NetworkConfig => {
  return network in networkConfig;
};

const checkKey = (key: string | undefined): string => {
  if (key === undefined || key === "") {
    throw new NomicLabsHardhatPluginError(
      pluginName,
      `Please provide an Etherscan API token via hardhat config.
  E.g.: { [...], etherscan: { apiKey: 'an API key' }, [...] }
  or { [...], etherscan: { apiKey: { ropsten: 'an API key' } }, [...] }
  See https://etherscan.io/apis`
    );
  }

  return key;
};

const resolveEtherscanApiKey = (
  etherscan: EtherscanConfig,
  network: string
): string => {
  if (etherscan.apiKey === undefined || typeof etherscan.apiKey === "string") {
    return checkKey(etherscan.apiKey);
  }

  const apiKeys = etherscan.apiKey;

  if (!isNetworkKey(network)) {
    throw new NomicLabsHardhatPluginError(
      pluginName,
      `Unrecognized network: ${network}`
    );
  }

  const key = apiKeys[network];

  return checkKey(key);
};

export default resolveEtherscanApiKey;
