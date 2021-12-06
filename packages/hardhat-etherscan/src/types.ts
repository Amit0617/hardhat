/* eslint-disable @typescript-eslint/naming-convention */

export interface NetworkConfig {
  mainnet: EtherscanNetworkConfig;
  ropsten: EtherscanNetworkConfig;
  rinkeby: EtherscanNetworkConfig;
  goerli: EtherscanNetworkConfig;
  kovan: EtherscanNetworkConfig;
  // binance smart chain
  bsc: EtherscanNetworkConfig;
  bsc_testnet: EtherscanNetworkConfig;
  // huobi eco chain
  heco: EtherscanNetworkConfig;
  heco_testnet: EtherscanNetworkConfig;
  // fantom mainnet
  opera: EtherscanNetworkConfig;
  ftm_testnet: EtherscanNetworkConfig;
  // optimistim
  optimistic_ethereum: EtherscanNetworkConfig;
  optimistic_kovan: EtherscanNetworkConfig;
  // polygon
  polygon: EtherscanNetworkConfig;
  polygon_mumbai: EtherscanNetworkConfig;
  // arbitrum
  arbitrum_one: EtherscanNetworkConfig;
  arbitrum_testnet: EtherscanNetworkConfig;
  // avalanche
  avalanche: EtherscanNetworkConfig;
  avalanche_fuji_testnet: EtherscanNetworkConfig;
  // moonriver
  moonriver: EtherscanNetworkConfig;
  moonbase_alpha: EtherscanNetworkConfig;
}

export type EtherscanApiKeys = {
  [Network in keyof NetworkConfig]?: string;
};

export interface EtherscanConfig {
  apiKey?: string | EtherscanApiKeys;
}

export interface EtherscanURLs {
  apiURL: string;
  browserURL: string;
}

export interface EtherscanNetworkConfig {
  chainId: number;
  urls: EtherscanURLs;
}
