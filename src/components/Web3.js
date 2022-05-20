/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

// import { ethers } from "ethers";

// web3 connection
// import { ADDRESS, ABI } from "../contracts/config";

const Web3 = () => {
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("no wallet");
    } else {
      console.log("wallet is good");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("no authoried account found");
    }
  };
  checkWalletIsConnected();

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert(
        "Please install the Metamask browser extension or use the Metamask mobile app!"
      );
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (e) {
      console.log(e.message);
    }
  };

  // const mintNftHandler = async () => {
  //   try {
  //     const { ethereum } = window;

  //     if (ethereum) {
  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner();
  //       const nftContract = new ethers.Contract(ADDRESS, ABI, signer);

  //       console.log("Initialize payment");
  //       let nftTxn = await nftContract.mintSlowmates(1, {
  //         value: ethers.utils.parseEther("0.04"),
  //       });

  //       console.log("Mining... Please wait");
  //       await nftTxn.wait();

  //       console.log("minted");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const connectWalletButton = () => {
    return (
      <button
        onClick={connectWalletHandler}
        className="cta-button connect-wallet-button"
      >
        Connect Your Wallet
      </button>
    );
  };

  // const mintNftButton = () => {
  //   return (
  //     <button
  //       onClick={mintNftHandler}
  //       className="disable cta-button mint-nft-button"
  //     >
  //       Mint your Slowmate!
  //     </button>
  //   );
  // };

  return (
    <div className="web3">
      <div>{currentAccount ? connectWalletButton() : connectWalletButton()}</div>
      <a id="mint-href" />
    </div>
  );
};

export default Web3;
