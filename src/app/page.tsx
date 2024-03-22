import About from "@/components/About";
import BottomNavbar from "@/components/BottomNavbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partnerships from "@/components/Partnerships";
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
      <BottomNavbar />
    </>
  );
}
