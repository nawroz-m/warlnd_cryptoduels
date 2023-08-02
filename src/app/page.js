// import styles from "./page.module.css";
"use client";

import { ethers } from "ethers";
import { useState } from "react";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useRouter } from "next/navigation";

export default function Home() {
  let signer = null;

  let provider;

  const [open, setOpen] = useState(false);
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState(null);

  const router = useRouter();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const vertical = "bottom";
  const horizontal = "right";

  const handlerConnectWallet = async () => {
    try {
      if (window.ethereum == null) {
        // If MetaMask is not installed, we use the default provider,
        // which is backed by a variety of third-party services (such
        // as INFURA). They do not have private keys installed so are
        // only have read-only access
        console.log("MetaMask not installed; using read-only defaults");
        provider = ethers.getDefaultProvider();
      } else {
        // Connect to the MetaMask EIP-1193 object. This is a standard
        // protocol that allows Ethers access to make all read-only
        // requests through MetaMask.
        provider = new ethers.BrowserProvider(window.ethereum);

        // It also provides an opportunity to request access to write
        // operations, which will be performed by the private key
        // that MetaMask manages for the user.
        signer = await provider.getSigner();
      }

      setMessage("Connected to Wallet !");
      setOpen(true);
      setConnected(true);
    } catch (err) {
      if (err) {
        setMessage("Not connected to wallet!");
      }
    }
  };

  const handleLobby = (e) => {
    router.push("/lobby");
  };
  return (
    <main className="container ">
      <div className="connect_to_wallet">
        {!connected ? (
          <button onClick={handlerConnectWallet} className="mainBtn">
            connect to wallet
          </button>
        ) : (
          <button onClick={handleLobby} className="mainBtn">
            Ok
          </button>
          // <Link href="/about">About</Link>
        )}

        <div>
          <Snackbar
            open={open}
            anchorOrigin={{ vertical, horizontal }}
            autoHideDuration={4000}
            onClose={handleClose}
            message={message}

            // action={action}
          />
        </div>
      </div>
    </main>
  );
}
