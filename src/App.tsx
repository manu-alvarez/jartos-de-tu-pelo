import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import JsonLd from "./components/JsonLd";
import Home from "./pages/Home";
import { AvisoLegal, Cookies, Privacidad } from "./pages/Legal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    // basename = subruta de GitHub Pages. Con dominio propio, quitarlo.
    <BrowserRouter basename="/prometheus-salon">
      <ScrollToTop />
      <JsonLd />
      <a
        href="#servicios"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-full focus:bg-cream-50 focus:px-5 focus:py-2 focus:text-sm focus:font-bold focus:text-ink-950"
      >
        Saltar al contenido
      </a>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
