import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import axios from 'axios';
import { create as ipfsHttpClient } from 'ipfs-http-client';

import { MarketAddress, MarketAddressABI } from './constants';

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

export const NFTContext = React.createContext();

export const NFTProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const nftCurrency = 'ETH';

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return alert('Make sure you have MetaMask!');

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });

    if (accounts.length) {
      setCurrentAccount(accounts[0]);
      console.log('Found ethereum object');
    } else {
      console.log('No Accounts Found');
    }
    console.log({ accounts });
  };

  const connectWallet = async () => {
    if (!window.ethereum) return alert('Make sure you have MetaMask!');
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    setCurrentAccount(accounts[0]);

    window.location.reload();
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const uploadToIPFS = async (fileUrl) => {
    try {
      const added = await client.add({ content: fileUrl });

      const url = `https://ipfs.infura.io/ipfs/${added.path}`;

      return url;
    } catch (error) {
      console.log('Error uploading file to IPFS', error);
    }
  };

  return (
    <NFTContext.Provider value={{ nftCurrency, connectWallet, currentAccount, uploadToIPFS }}>
      {children}
    </NFTContext.Provider>
  );
};
