import {
  HARDHAT_NETWORK_NAME,
  NomicLabsHardhatPluginError,
} from "hardhat/plugins";
import { EthereumProvider } from "hardhat/types";

import { pluginName } from "../constants";
import { EtherscanNetworkEntry, NetworkConfig } from "../types";
import { networkConfig } from "./NetworkConfig";

const chainIdsToNames = new Map(
  Object.entries(networkConfig).map(([network, config]) => [
    config.chainId,
    network,
  ])
);

export async function getEtherscanEndpoints(
  provider: EthereumProvider,
  networkName: string
): Promise<EtherscanNetworkEntry> {
  if (networkName === HARDHAT_NETWORK_NAME) {
    throw new NomicLabsHardhatPluginError(
      pluginName,
      `The selected network is ${networkName}. Please select a network supported by Etherscan.`
    );
  }

  const chainID = parseInt(await provider.send("eth_chainId"), 16);

  const network = chainIdsToNames.get(chainID) as keyof NetworkConfig;

  const endpoints = network !== undefined ? networkConfig[network] : undefined;

  if (endpoints === undefined) {
    throw new NomicLabsHardhatPluginError(
      pluginName,
      `An etherscan endpoint could not be found for this network. ChainID: ${chainID}. The selected network is ${networkName}.

Possible causes are:
  - The selected network (${networkName}) is wrong.
  - Faulty hardhat network config.`
    );
  }

  return { network, urls: endpoints.urls };
}

export async function retrieveContractBytecode(
  address: string,
  provider: EthereumProvider,
  networkName: string
): Promise<string> {
  const bytecodeString = (await provider.send("eth_getCode", [
    address,
    "latest",
  ])) as string;
  const deployedBytecode = bytecodeString.startsWith("0x")
    ? bytecodeString.slice(2)
    : bytecodeString;
  if (deployedBytecode.length === 0) {
    throw new NomicLabsHardhatPluginError(
      pluginName,
      `The address ${address} has no bytecode. Is the contract deployed to this network?
The selected network is ${networkName}.`
    );
  }
  return deployedBytecode;
}
