import React, { useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Data from "../exampleData";
import SearchBar from "./SearchBar";
import Calender from "./Calender";
import { motion, useScroll } from "framer-motion";

const Booking = () => {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const exchangeValues = () => {
    const temp = fromValue;
    setFromValue(toValue);
    setToValue(temp);
  };

  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      <div className="w-full px-20 py-10   bg-[#181A1C] flex flex-col gap-4 rounded-3xl ">
        <div className=" text-white flex  flex-col    w-full  gap-5 ">
          <h3 className=" font-semibold text-[#C5C5C5]">Search For Train</h3>
          <div className="line1 flex items-center justify-center w-full gap-28  ">
            <div className="from flex flex-col ">
              <label className="text-[#676767] text-[12px]" htmlFor="">
                From
              </label>
              <SearchBar
                data={Data}
                value={fromValue}
                onChange={setFromValue}
              />
            </div>
            <div
              className="flex bg-[#2475EE]  px-3 py-3 cursor-pointer rounded-full"
              onClick={exchangeValues}
            >
              <FaArrowRightArrowLeft onClick={exchangeValues} />
            </div>
            <div className="flex flex-col">
              <label className="text-[#676767] text-[12px]" htmlFor="">
                To
              </label>
              <SearchBar data={Data} value={toValue} onChange={setToValue} />
            </div>
          </div>
        </div>

        <div className="line2 flex flex-row w-full  gap-5 ">
          <div className="box">
            <label className="text-[#676767] text-[12px]" htmlFor="">
              Departure Date
            </label>
            <Calender />
          </div>
          <div className="box">
            <label className="text-[#676767] text-[12px]" htmlFor="">
              Return Date
            </label>
            <Calender />
          </div>
          <div className="box">
            <label className="text-[#676767] text-[12px]" htmlFor="">
              Quota
            </label>
            <select
              name="Quota"
              id=""
              className="w-[10vw] px-2  text-white bg-[#292C34] rounded-xl"
            >
              {[
                "General",
                "Ladies",
                "LowerBerth/Sr.Citizen",
                " Person with Disablitiy",
                "Duty Pass",
                "Tatkal",
                "Premium Tatkal",
              ].map((items, index) => {
                return (
                  <option key={index} value={items}>
                    {items}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="box">
            <label className="text-[#676767] text-[12px]" htmlFor="">
              Class
            </label>
            <select
              name="Quota"
              id=""
              className="w-[10vw] px-2  text-white bg-[#292C34] rounded-xl"
            >
              {[
                "All Classes",
                "Anubhutii Class (EA)",
                "AC First Class (1A)",
                "Vistadome Class (EV)",
                "Exec Chair Car (EC)",
                "AC 2 Tier (2AC)",
                "First Class(FC)",
                "AC 3 Tier (3A)",
                "AC 3 Economy (3E)",
                "Vistadome Chair Car (VC)",
                "AC Chair Car (CC)",
                "Sleeper(SL)",
                "Vistadome Non AC(VS)",
                "Second Sitting (2S)",
              ].map((items, index) => {
                return (
                  <option key={index} value={items}>
                    {items}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="line3 flex mt-4 ">
          <h4 className="text-[#676767]">Filters</h4>
          <div className="filter-box flex gap-4 text-[12px] items-center justify-end w-full ">
            <div
              className={`filters px-2 py-1 rounded-full text-white bg-[#292C34] cursor-pointer ${
                selectedFilter === "Flixible with Date"
                  ? "border-2 border-blue-600"
                  : ""
              }`}
              onClick={() => handleFilterClick("Flixible with Date")}
            >
              Flixible with Date
            </div>
            <div
              className={`filters px-2 py-1 rounded-full text-white bg-[#292C34] cursor-pointer ${
                selectedFilter === "Disability Concession"
                  ? "border-2 border-blue-600"
                  : ""
              }`}
              onClick={() => handleFilterClick("Disability Concession")}
            >
              Disability Concession
            </div>
            <div
              className={`filters px-2 py-1 rounded-full text-white bg-[#292C34] cursor-pointer ${
                selectedFilter === "Connecting Journey"
                  ? "border-2 border-blue-600"
                  : ""
              }`}
              onClick={() => handleFilterClick("Connecting Journey")}
            >
              Connecting Journey
            </div>
            <div
              className={`filters px-2 py-1 rounded-full text-white bg-[#292C34] cursor-pointer ${
                selectedFilter === "Railway Pass"
                  ? "border-2 border-blue-600"
                  : ""
              }`}
              onClick={() => handleFilterClick("Railway Pass")}
            >
              Railway Pass
            </div>
          </div>
        </div>
        <div className="line4 flex w-full items-center justify-between text-white mt-5">
          <button className=" px-2 py-2 border-2 border-white rounded-lg">
            Try Ask Disha 2.0
          </button>
          <button className="px-4 py-4 bg-blue-700 hover:bg-blue-900 duration-300 rounded-lg">
            Search Train
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Booking;
