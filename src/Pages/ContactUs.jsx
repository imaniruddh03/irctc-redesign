import React from 'react'
import { motion } from "framer-motion"

const ContactUs = () => {
  return (
    <div className=' w-full h-screen bg-black flex items-center justify-center  flex-col '>
        <div className='w-full  h-[25vw] bg-[url("./assets/call2.png")] bg-cover   text-white relative  '>
            <div className='w-full  h-[25vw] z-40 bg-gradient-to-r from-black '>
                <div className=' absolute top-[40%] left-10 px-10 w-1/3 flex flex-col gap-5 '>
                <h1 className=' text-2xl'>Have a question or need assistance? We're here to help </h1>
                <button className='px-4 py-4 bg-blue-500 rounded-lg text-xl w-1/4 hover:bg-blue-700 duration-150'>Call</button>
                </div>
            </div>
        </div>
        <div className='flex text-white w-full bg-red-600 overflow-hidden  whitespace-nowrap'>
            <motion.p initial={{x:"0"}}
            animate={{x:"-100%"}}
            transition={{repeat:Infinity, ease:"linear", duration:14}}
            className=' px-4 py-1 flex font-bold leading-none uppercase  w-full'
            >Irctc never ask for your Personal banking information such as Debit/Credit Card Number / OTP / CVV PAN or Date Of Birth </motion.p>
            <motion.p initial={{x:"0"}}
            animate={{x:"-100%"}}
            transition={{repeat:Infinity, ease:"linear", duration:14}}
            className=' px-4 py-1 flex font-bold leading-none uppercase  w-full'
            >Irctc never ask for your Personal banking information such as Debit/Credit Card Number / OTP / CVV PAN or Date Of Birth </motion.p>
          

        </div>
      
    </div>
  )
}

export default ContactUs


