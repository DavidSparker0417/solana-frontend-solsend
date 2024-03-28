import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { FC, useEffect, useState } from "react";

const BalanceDisplay: FC = () => {
  const { publicKey, connected } = useWallet()
  const { connection } = useConnection()
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const fetchBalance = async () => {
      if (connected && publicKey) {
        const balance = await connection.getBalance(publicKey);
        setBalance(balance / LAMPORTS_PER_SOL)
      } else {
        setBalance(0)
      }
    }
    fetchBalance();
  }, [connected])

  return (
    <div>
      Balance: {balance}
    </div>
  )
}

export default BalanceDisplay;