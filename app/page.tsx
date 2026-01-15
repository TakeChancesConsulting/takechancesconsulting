import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyTakeChances from "./components/WhyTakeChances";
import WhatIDo from "./components/WhatIDo";
import HowIWork from "./components/HowIWork";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyTakeChances />
      <WhatIDo />
      <HowIWork />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  );
}
