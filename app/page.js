import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import HeroNew from "@/components/HeroNew";
import SafeBanner from "@/components/SafeBanner";
import DBupsell from "@/components/DBupsell";
import DBupgrade from "@/components/DBupgrade";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <HeroNew />
      <SafeBanner />
      <DBupsell />
      <DBupgrade />
    </main>
  );
}
