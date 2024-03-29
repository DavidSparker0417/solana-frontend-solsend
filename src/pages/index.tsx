import Image from "next/image";
import { Inter } from "next/font/google";
import WalletContextProvider from "@/components/WalletContextProvider";
import AppBar from "@/components/AppBar";
import BalanceDisplay from "@/components/BalanceDisplay";
import SolSendPanel from "@/components/SolSendPanel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <WalletContextProvider>
        <AppBar />
        <BalanceDisplay />
        <SolSendPanel />
      </WalletContextProvider>
    </main>
  );
}
