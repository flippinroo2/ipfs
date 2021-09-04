/* eslint-disable no-unused-vars, react/jsx-closing-bracket-location */
import React, { useState, useEffect, useContext } from 'react';

import ContractProvider from './contracts/ContractProvider.jsx';
import Contract from './contracts/Contract.jsx';

const DEBUG = true;

const Content = (props) => {
  const context = useContext(ContractProvider);
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    if (!contracts.length) {
      getContracts();
    }
  }, []);

  async function getContracts() {
    setContracts(await context);
  }

  return contracts.map((item, index) => {
    const { address, contract } = item;
    return <Contract key={index} address={address} contract={contract} />;
  });
};

export default Content;
