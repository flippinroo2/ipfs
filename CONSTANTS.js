export const ID = '';

export const NETWORKS = {
  localhost: {
    name: 'localhost',
    color: '#FF00FF',
    chainId: 31337,
    blockExplorer: '',
    rpcUrl: `http://${window.location.hostname}:8545`,
  },
};

export const NETWORK = (chainId) => {
  for (const network in NETWORKS) {
    if (NETWORKS[network].chainId === chainId) {
      return NETWORKS[network];
    }
  }
};
