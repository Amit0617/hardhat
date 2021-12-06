/* eslint-disable @typescript-eslint/naming-convention */

export enum Networks {
  mainnet = "mainnet",
  ropsten = "ropsten",
  rinkeby = "rinkeby",
  goerli = "goerli",
  kovan = "kovan",
  // binance smart chain
  bsc = "bsc",
  bsc_testnet = "bsc_testnet",
  // huobi eco chain
  heco = "heco",
  heco_testnet = "heco_testnet",
  // fantom mainnet
  opera = "opera",
  ftm_testnet = "ftm_testnet",
  // optimistim
  optimistic_ethereum = "optimistic_ethereum",
  optimistic_kovan = "optimistic_kovan",
  // polygon
  polygon = "polygon",
  polygon_mumbai = "polygon_mumbai",
  // arbitrum
  arbitrum_one = "arbitrum_one",
  arbitrum_testnet = "arbitrum_testnet",
  // avalanche
  avalanche = "avalanche",
  avalanche_fuji_testnet = "avalanche_fuji_testnet",
  // moonriver
  moonriver = "moonriver",
  moonbase_alpha = "moonbase_alpha",
}

export type NetworkConfig = {
  [Network in Networks]: EtherscanNetworkConfig;
};

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

export interface EtherscanNetworkEntry {
  network: Networks;
  urls: EtherscanURLs;
}
