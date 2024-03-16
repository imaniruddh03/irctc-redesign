import { data } from 'autoprefixer';
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calender = () => {
    const [selectdate, setselectdate] = useState()

  return (
    <DatePicker
        selected = {selectdate}
        onChange = {date => setselectdate(date)}
        className=' w-[10vw] px-2  bg-[#292C34] text-white  rounded-xl'
        dateFormat="dd/MM/yyyy"
    />
    
  )
}

export default Calender
