/* eslint-disable for-direction, no-plusplus, no-restricted-syntax, no-prototype-builtins, no-underscore-dangle, no-unused-vars, no-undef, no-var */
import debug from './debug.jsx';

// https://stackoverflow.com/questions/38402025/how-to-create-helper-file-full-of-functions-in-react-native

const DEBUG = false;

export const transactions = {
  getContracts: async (_provider) => {
    const chainID = await _provider.getChainId();
    debug(`chainID: ${chainID}`);
    // const ERC20EXAMPLE = '';
    // return provider.eth.Contract(ABI, ADDRESS);
  },
  deployContract: async () => {
    debug('deployContract()');
  },
};

export const getActiveNetwork = async (_networks, _chainID) => {
  debug('getActiveNetwork()');
  debug('_networks');
  debug(_networks);
  debug(`_chainID: ${_chainID}`);
  if (_networks[_chainID]) {
    const activeChain = _networks[_chainID];
    debug('activeChain');
    debug(activeChain);
    return activeChain;
  }
  return null;
};

export const getContract = async (_provider, { abi, address }) => {
  debug('getContract()');
  const contract = new _provider.Contract(abi, address);
  debug('contract');
  debug(contract);
  return contract;
};

export const getContracts = async (_provider, _networks) => {
  debug('getContracts()');
  debug('_provider');
  debug(_provider);
  debug('_networks');
  debug(_networks);
  const chainID = await _provider.getChainId();
  const network = await getActiveNetwork(_networks, chainID);
  const contractMetadata = Object.values(network.localhost.contracts);
  const contracts = await Promise.all(
    contractMetadata.map(async (contractAbstraction) => {
      debug(contractAbstraction);
      return getContract(_provider, contractAbstraction);
    }),
  );
  debug(contracts);
  const [ERC20EXAMPLE, ERC721EXAMPLE, ERC1155EXAMPLE, PolitiCoin, Token] =
    contracts;

  // debug(ERC20EXAMPLE);
  // debug(ERC721EXAMPLE);
  // debug(ERC1155EXAMPLE);
  // debug(PolitiCoin);
  // debug(Token);

  const data = await Promise.all(
    contracts.map(async (item) => {
      const { _address } = item;
      let name, symbol;
      if (_address == '0x10E2bb67a74C9f9e8AA8017E5B24B520dB543751') {
        return {
          address: _address,
          name: await item.methods.name().call(),
          symbol: await item.methods.symbol().call(),
          contract: item,
        };
      }
      if (_address == '0x48e8cf26b9d25Ca4b103d34047dEe8bAE689eDC7') {
        return {
          address: _address,
          name: await item.methods._name().call(),
          symbol: await item.methods._symbol().call(),
          contract: item,
        };
      }
      return {
        address: _address,
        contract: item,
      };
    }),
  );
  debug(data);
  return data;
};
