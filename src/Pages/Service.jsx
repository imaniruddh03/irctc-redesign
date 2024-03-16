import React from 'react'
import RailServices from '../Component/RailServices';
import { MdOutlineFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { MdOutlineShareLocation } from "react-icons/md";
import { MdOutlineFastfood } from "react-icons/md";
import { BsBusFront } from "react-icons/bs";
import { TbBeach } from "react-icons/tb";
import { MdOutlineDirectionsRailway } from "react-icons/md";
import { FaMountainCity } from "react-icons/fa6";
import { PiTrainFill } from "react-icons/pi";

const Service = () => {

    const Services = [
        {id:1 , icon:<MdOutlineFlight />, text: 'Flight' },
        {id:2 , icon:<FaHotel />, text: 'Hotel' },
        {id:3 , icon:<MdOutlineShareLocation/>, text: 'Rail Dristi' },
        {id:4 , icon:<MdOutlineFastfood />, text: 'E-catering' },
        {id:5 , icon:<BsBusFront />, text: 'Bus' },
        {id:6 , icon:<TbBeach />, text: 'Holiday packs' },
        {id:7 , icon:<MdOutlineDirectionsRailway />, text: 'Tourist Rail' },
        {id:8 , icon:<FaMountainCity />, text: 'Hill Railways' },
        {id:9 , icon:< PiTrainFill/>, text: 'Charter Train' },
    

    ]






  return (
    <div className='w-full bg-black h-screen'>
        <div className='w-full text-white text-[7vw]  flex items-center justify-center'>
            <h1 className='flex mt-10 '>Our Other Popular Service</h1>
        </div>

        <div className='w-full mt-20'>
            <RailServices/>

        </div>
      
    </div>
  )
}

export default Service
