import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import Services from "./components/sections/Services";
import PricingModels from "./components/sections/PricingModels";
import Portfolio from "./components/sections/Portfolio";
import Process from "./components/sections/Process";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import Comparison from "./components/sections/Comparison";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <PricingModels />
      <Portfolio />
      <Comparison />
      <Testimonials />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
}