import React from 'react'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Service from './Pages/Service'
import ContactUs from './Pages/ContactUs'
import Holidays from './Pages/Holidays'
import Footer from './Pages/Footer'
import LocomotiveScroll from 'locomotive-scroll';

import { scroll } from "framer-motion/dom";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
    <div className="bg-[url('./assets/timg.jpg')] bg-cover   ">
      <Navbar/>
      <Home/>
    </div>
      <Service/>
      <ContactUs/>
      <Holidays/>
      <Footer/>
      
    </>
  )
}

export default App




