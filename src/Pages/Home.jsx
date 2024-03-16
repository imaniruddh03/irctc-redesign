import React from 'react'
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Booking from '../Component/Booking';
import Try from '../Component/try'
import {motion } from 'framer-motion';


const Home = () => {
  return (
    
    <div className='w-full h-screen flex items-center justify-center gap-32 flex-col relative  bg-gradient-to-t from-black px-80'>
        <div className='flex mt-72 w-full items-center justify-center   '>
            <motion.h1 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1.2 }}
                  transition={{
                    ease: "linear",
                    duration: 2,
                    x: { duration: 1 }
                  }}
            className=' text-[4vw] flex text-white leading-none font-semibold  '>Welcome to  Indian Railways</motion.h1>
        </div>
        
        <motion.div className=' flex  '>
            <Booking/>
        </motion.div>
        

        
    </div>
  )
}

export default Home
