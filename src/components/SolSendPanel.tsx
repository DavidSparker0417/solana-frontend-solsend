import { FC, useState } from "react";
import styles from "../styles/Home.module.css"
import * as web3 from "@solana/web3.js"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const InputSet: FC<any> = (props) => {
  console.log(props)
  return (
    <div className={styles.inputBox}>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type="text" required />
    </div>
  )
}
const SolSendPanel: FC = () => {
  const [txSig, setTxSig] = useState('');
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const link = () => {
    return txSig ? `https://explorer.solana.com/tx/${txSig}?cluster=devnet` : ''
  }
  const sendSol = (event: any) => {
    event.preventDefault()
    if (!publicKey) return;

    const transaction = new web3.Transaction();
    const recipientAddr = new web3.PublicKey(event.target.recipient.value)
    const solAmount = event.target.amount.value * LAMPORTS_PER_SOL;
    const sendSolInstruction = web3.SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: recipientAddr,
      lamports: solAmount
    });
    transaction.add(sendSolInstruction);
    sendTransaction(transaction, connection)
      .then(sig => {
        setTxSig(sig)
      })
  }
  return (
    <div>
      <form onSubmit={sendSol}>
        <InputSet
          id="amount"
          label="Amount (in SOL) to send:"
        />
        <InputSet
          id="recipient"
          label="Send SOL to:"
        />
        <button type="submit" className={styles.button}>Send</button>
      </form>
      {txSig ?
        <div>
          <p>View your transaction on</p>
          <a href={link()}>Solana Explorer</a>
        </div>
        : null
      }
    </div>
  )
}

export default SolSendPanel;