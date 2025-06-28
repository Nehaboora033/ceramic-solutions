import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Howitworks from './components/Howitworks'
import Interested from './components/Interested'
import Ourblog from './components/Ourblog'
import Ourcustomers from './components/Ourcustomers'
import Services from './components/Services'
import Whatwedo from './components/Whatwedo'
import Whychooseus from './components/Whychooseus'
import HeroSection from './components/HeroSection';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
    });
  }, []);
  return (
    <>
      <HeroSection />
      <Whatwedo />
      <Whychooseus />
      <Ourcustomers />
      <Howitworks />
      <Interested />
      <Ourblog />
      <FAQ />
      <Services />
      <Footer />
    </>
  )
}

export default App
