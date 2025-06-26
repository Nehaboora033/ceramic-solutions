import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Header from './components/Header'
import Howitworks from './components/Howitworks'
import Interested from './components/Interested'
import Ourblog from './components/Ourblog'
import Ourcustomers from './components/Ourcustomers'
import Services from './components/Services'
import Whatwedo from './components/Whatwedo'
import Whychooseus from './components/whychooseus'

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
      <Header />
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
