export type NetworkMap = {
  mainnet: EtherscanURLs;
  ropsten: EtherscanURLs;
  rinkeby: EtherscanURLs;
  goerli: EtherscanURLs;
  kovan: EtherscanURLs;
  // binance smart chain
  bsc: EtherscanURLs;
  bsc_testnet: EtherscanURLs;
  // huobi eco chain
  heco: EtherscanURLs;
  heco_testnet: EtherscanURLs;
  // fantom mainnet
  opera: EtherscanURLs;
  ftm_testnet: EtherscanURLs;
  // optimistim
  optimistic_ethereum: EtherscanURLs;
  optimistic_kovan: EtherscanURLs;
  // polygon
  polygon: EtherscanURLs;
  polygon_mumbai: EtherscanURLs;
  // arbitrum
  arbitrum_one: EtherscanURLs;
  arbitrum_testnet: EtherscanURLs;
  // avalanche
  avalanche: EtherscanURLs;
  avalanche_fuji_testnet: EtherscanURLs;
  // moonriver
  moonriver: EtherscanURLs;
  moonbase_alpha: EtherscanURLs;
};

export type NetworkIdMap = {
  [network in keyof NetworkMap]: number;
};

export type EtherscanApiKeys = {
  [Network in keyof NetworkMap]?: string;
};

export interface EtherscanConfig {
  apiKey?: string | EtherscanApiKeys;
}

export interface EtherscanURLs {
  apiURL: string;
  browserURL: string;
}
