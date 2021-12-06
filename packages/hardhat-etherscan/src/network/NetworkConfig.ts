import { NetworkIdMap, NetworkMap } from "../types";

// See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md#list-of-chain-ids
export const networkIds: NetworkIdMap = {
  mainnet: 1,
  ropsten: 3,
  rinkeby: 4,
  goerli: 5,
  kovan: 42,
  // binance smart chain
  bsc: 56,
  bsc_testnet: 97,
  // huobi eco chain
  heco: 128,
  heco_testnet: 256,
  // fantom mainnet
  opera: 250,
  ftm_testnet: 4002,
  // optimistim
  optimistic_ethereum: 10,
  optimistic_kovan: 69,
  // polygon
  polygon: 137,
  polygon_mumbai: 80001,
  // arbitrum
  arbitrum_one: 42161,
  arbitrum_testnet: 421611,
  // avalanche
  avalanche: 43114,
  avalanche_fuji_testnet: 43113,
  // moonriver
  moonriver: 1285,
  moonbase_alpha: 1287,
};

export const networkNameToEndpoints: NetworkMap = {
  mainnet: {
    apiURL: "https://api.etherscan.io/api",
    browserURL: "https://etherscan.io",
  },
  ropsten: {
    apiURL: "https://api-ropsten.etherscan.io/api",
    browserURL: "https://ropsten.etherscan.io",
  },
  rinkeby: {
    apiURL: "https://api-rinkeby.etherscan.io/api",
    browserURL: "https://rinkeby.etherscan.io",
  },
  goerli: {
    apiURL: "https://api-goerli.etherscan.io/api",
    browserURL: "https://goerli.etherscan.io",
  },
  kovan: {
    apiURL: "https://api-kovan.etherscan.io/api",
    browserURL: "https://kovan.etherscan.io",
  },
  bsc: {
    apiURL: "https://api.bscscan.com/api",
    browserURL: "https://bscscan.com",
  },
  bsc_testnet: {
    apiURL: "https://api-testnet.bscscan.com/api",
    browserURL: "https://testnet.bscscan.com",
  },
  heco: {
    apiURL: "https://api.hecoinfo.com/api",
    browserURL: "https://hecoinfo.com",
  },
  heco_testnet: {
    apiURL: "https://api-testnet.hecoinfo.com/api",
    browserURL: "https://testnet.hecoinfo.com",
  },
  opera: {
    apiURL: "https://api.ftmscan.com/api",
    browserURL: "https://ftmscan.com",
  },
  ftm_testnet: {
    apiURL: "https://api-testnet.ftmscan.com/api",
    browserURL: "https://testnet.ftmscan.com",
  },
  optimistic_ethereum: {
    apiURL: "https://api-optimistic.etherscan.io/api",
    browserURL: "https://optimistic.etherscan.io/",
  },
  optimistic_kovan: {
    apiURL: "https://api-kovan-optimistic.etherscan.io/api",
    browserURL: "https://kovan-optimistic.etherscan.io/",
  },
  polygon: {
    apiURL: "https://api.polygonscan.com/api",
    browserURL: "https://polygonscan.com",
  },
  polygon_mumbai: {
    apiURL: "https://api-testnet.polygonscan.com/api",
    browserURL: "https://mumbai.polygonscan.com/",
  },
  arbitrum_one: {
    apiURL: "https://api.arbiscan.io/api",
    browserURL: "https://arbiscan.io/",
  },
  arbitrum_testnet: {
    apiURL: "https://api-testnet.arbiscan.io/api",
    browserURL: "https://testnet.arbiscan.io/",
  },
  avalanche: {
    apiURL: "https://api.snowtrace.io/api",
    browserURL: "https://snowtrace.io/",
  },
  avalanche_fuji_testnet: {
    apiURL: "https://api-testnet.snowtrace.io/api",
    browserURL: "https://testnet.snowtrace.io/",
  },
  moonriver: {
    apiURL: "https://api-moonriver.moonscan.io/api",
    browserURL: "https://moonscan.io",
  },
  moonbase_alpha: {
    apiURL: "https://api-moonbase.moonscan.io/api",
    browserURL: "https://moonbase.moonscan.io/",
  },
};
