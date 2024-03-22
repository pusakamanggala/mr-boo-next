import About from "@/components/About";
import BottomNavbar from "@/components/BottomNavbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

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
