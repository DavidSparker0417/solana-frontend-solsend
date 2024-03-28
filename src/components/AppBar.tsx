import { FC } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const AppBar: FC = () => {
    return (
        <div className={styles.AppHeader}>
          <Image alt="solana-logo" src="/solanaLogo.png" height={30} width={20} />
          <span>Wallet-Adapter Example</span>
          <WalletMultiButton />
        </div>
    )
}

export default AppBar;