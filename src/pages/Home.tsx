import About from "../components/About";
import BookingCTA from "../components/BookingCTA";
import Contact from "../components/Contact";
import CoverBand from "../components/CoverBand";
import DjSection from "../components/DjSection";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <CoverBand />
      <Marquee />
      <Services />
      <DjSection />
      <About />
      <Gallery />
      <Testimonials />
      <BookingCTA />
      <Contact />
    </main>
  );
}
