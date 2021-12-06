import { NetworkConfig } from "../types";

// See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md#list-of-chain-ids
export const networkConfig: NetworkConfig = {
  mainnet: {
    chainId: 1,
    urls: {
      apiURL: "https://api.etherscan.io/api",
      browserURL: "https://etherscan.io",
    },
  },
  ropsten: {
    chainId: 3,
    urls: {
      apiURL: "https://api-ropsten.etherscan.io/api",
      browserURL: "https://ropsten.etherscan.io",
    },
  },
  rinkeby: {
    chainId: 4,
    urls: {
      apiURL: "https://api-rinkeby.etherscan.io/api",
      browserURL: "https://rinkeby.etherscan.io",
    },
  },
  goerli: {
    chainId: 5,
    urls: {
      apiURL: "https://api-goerli.etherscan.io/api",
      browserURL: "https://goerli.etherscan.io",
    },
  },
  kovan: {
    chainId: 42,
    urls: {
      apiURL: "https://api-kovan.etherscan.io/api",
      browserURL: "https://kovan.etherscan.io",
    },
  },
  bsc: {
    chainId: 56,
    urls: {
      apiURL: "https://api.bscscan.com/api",
      browserURL: "https://bscscan.com",
    },
  },
  bsc_testnet: {
    chainId: 97,
    urls: {
      apiURL: "https://api-testnet.bscscan.com/api",
      browserURL: "https://testnet.bscscan.com",
    },
  },
  heco: {
    chainId: 128,
    urls: {
      apiURL: "https://api.hecoinfo.com/api",
      browserURL: "https://hecoinfo.com",
    },
  },
  heco_testnet: {
    chainId: 256,
    urls: {
      apiURL: "https://api-testnet.hecoinfo.com/api",
      browserURL: "https://testnet.hecoinfo.com",
    },
  },
  opera: {
    chainId: 250,
    urls: {
      apiURL: "https://api.ftmscan.com/api",
      browserURL: "https://ftmscan.com",
    },
  },
  ftm_testnet: {
    chainId: 4002,
    urls: {
      apiURL: "https://api-testnet.ftmscan.com/api",
      browserURL: "https://testnet.ftmscan.com",
    },
  },
  optimistic_ethereum: {
    chainId: 10,
    urls: {
      apiURL: "https://api-optimistic.etherscan.io/api",
      browserURL: "https://optimistic.etherscan.io/",
    },
  },
  optimistic_kovan: {
    chainId: 69,
    urls: {
      apiURL: "https://api-kovan-optimistic.etherscan.io/api",
      browserURL: "https://kovan-optimistic.etherscan.io/",
    },
  },
  polygon: {
    chainId: 137,
    urls: {
      apiURL: "https://api.polygonscan.com/api",
      browserURL: "https://polygonscan.com",
    },
  },
  polygon_mumbai: {
    chainId: 80001,
    urls: {
      apiURL: "https://api-testnet.polygonscan.com/api",
      browserURL: "https://mumbai.polygonscan.com/",
    },
  },
  arbitrum_one: {
    chainId: 42161,
    urls: {
      apiURL: "https://api.arbiscan.io/api",
      browserURL: "https://arbiscan.io/",
    },
  },
  arbitrum_testnet: {
    chainId: 421611,
    urls: {
      apiURL: "https://api-testnet.arbiscan.io/api",
      browserURL: "https://testnet.arbiscan.io/",
    },
  },
  avalanche: {
    chainId: 43114,
    urls: {
      apiURL: "https://api.snowtrace.io/api",
      browserURL: "https://snowtrace.io/",
    },
  },
  avalanche_fuji_testnet: {
    chainId: 43113,
    urls: {
      apiURL: "https://api-testnet.snowtrace.io/api",
      browserURL: "https://testnet.snowtrace.io/",
    },
  },
  moonriver: {
    chainId: 1285,
    urls: {
      apiURL: "https://api-moonriver.moonscan.io/api",
      browserURL: "https://moonscan.io",
    },
  },
  moonbase_alpha: {
    chainId: 1287,
    urls: {
      apiURL: "https://api-moonbase.moonscan.io/api",
      browserURL: "https://moonbase.moonscan.io/",
    },
  },
};
