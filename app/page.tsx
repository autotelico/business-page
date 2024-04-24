import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
    </>
  );
}
