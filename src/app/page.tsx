import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container p-5 mx-auto space-y-36 md:p-0">
        <Hero />
        <About />
        <Services />
      </main>
      <Footer />
    </>
  );
}
