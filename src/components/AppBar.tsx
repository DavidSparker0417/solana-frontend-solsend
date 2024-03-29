import { FC } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);
import dynamic from "next/dynamic";

const AppBar: FC = () => {
    return (
        <div className={styles.AppHeader}>
          <Image alt="solana-logo" src="/solanaLogo.png" height={30} width={20} />
          <span>Wallet-Adapter Example</span>
          <WalletMultiButtonDynamic />
        </div>
    )
}

export default AppBar;