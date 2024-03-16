import React from 'react'
import { MdOutlineFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { MdOutlineShareLocation } from "react-icons/md";
import { MdOutlineFastfood } from "react-icons/md";
import { BsBusFront } from "react-icons/bs";
import { TbBeach } from "react-icons/tb";
import { MdOutlineDirectionsRailway } from "react-icons/md";
import { FaMountainCity } from "react-icons/fa6";
import { PiTrainFill } from "react-icons/pi";


const RailServices = () => {

    const Services = [
        {id:1 , icon:<MdOutlineFlight />, text: 'Flight' },
        {id:2 , icon:<FaHotel />, text: 'Hotel' },
        {id:3 , icon:<MdOutlineShareLocation/>, text: 'Rail Dristi' },
        {id:4 , icon:<MdOutlineFastfood />, text: 'E-catering' },
        {id:5 , icon:<BsBusFront />, text: 'Bus' },
        {id:6 , icon:<TbBeach />, text: 'Holiday packs' },
        {id:7 , icon:<MdOutlineDirectionsRailway />, text: 'Tourist Rail' },
        {id:8 , icon:<FaMountainCity />, text: 'Hill Railways' },
        {id:9 , icon:<PiTrainFill/>, text: 'Charter Train' },
    ];

    return (
        <div>
            <div className='flex items-center justify-evenly flex-wrap px-20 gap-10 '>
                {Services.map((item)=>{
                    return(
                        <div className='w-1/6 p-4 bg-[#181A1C] h-[10vw] flex items-center justify-center flex-col gap-2 rounded-2xl hover:scale-105 transition-all duration-150 shadow-lg shadow-indigo-500/75  overflow-y-hidden '>
                            <div className='w-16 h-16 flex items-center justify-center bg-[#1F2022] text-3xl text-white rounded-full'>{item.icon}</div>
                            <div className='text-xl text-white '>{item.text}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default RailServices;