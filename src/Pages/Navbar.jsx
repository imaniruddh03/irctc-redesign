import React from 'react'
import {motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.div 
    initial={{y:"-100%"}}
    animate={{y:"0"}}
    transition={{ease: "linear",
    duration: 2,}}
    
    className=' w-full  px-20 py-4   flex items-center gap-10 text-white backdrop-blur-sm fixed top-0 z-50'>
        <div className='logo flex justify-start  '>
            <img src="https://www.svgrepo.com/show/504492/irctc.svg" className=' w-12 h-[4vw] ' alt="" />
        </div>
        <div className='flex  justify-center w-full  gap-10  '>
            {["Train", "Food" , "Ask Disha" , "Room", "Contact us" , "Other Service" , "More"].map((items)=>{
                return(
                    <li className=' flex ml-8 cursor-pointer '>{items}</li>
                )
            })}
        </div>
        <div className='flex gap-10'>
            <button className='px-5 py-2 rounded-2xl border-2'>Register</button>
            <button className=' bg-blue-700 hover:bg-blue-800 duration-300 px-5 py-2 rounded-2xl '>Login</button>
        </div>
        
      
    </motion.div>
  )
}

export default Navbar
