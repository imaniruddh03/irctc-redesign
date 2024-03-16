import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import FElement from "../Component/foorelement";

const Footer = (props) => {
  return (
    <div className="w-full h-screen  z-40">
    <div className="w-full  bg-[#181A1C]   px-20  py-10">
      <div className="w-full flex ">
        <div>
          <img
            src="https://zeevector.com/wp-content/uploads/IRCTC-logo-Transparent-PNG.png"
            alt=""
            className="w-60 h-40"
          />
        </div>
        <div className="w-full  flex items-center justify-end text-3xl text-white gap-5">
          <div className="link hover:text-blue-600">
            <FaFacebook />
          </div>
          <div className="link hover:text-blue-600 ">
            <FaGithub />
          </div>
          <div className="link hover:text-blue-600">
            <FaLinkedin />
          </div>
          <div className="link hover:text-blue-600">
            <BsTwitterX />
          </div>
        </div>
      </div>

      <div class="footerelement w-full  mt-10">
        <div class="flex flex-wrap justify-start items-center gap-10 ">
          <div className="upperbox flex flex-wrap justify-evenly w-full">
            <div class="w-1/6">
              <FElement />
            </div>
            <div class="w-1/6">
              <FElement />
            </div>
            <div class="w-1/6">
              <FElement />
            </div>
            <div class="w-1/6">
              <FElement />
            </div>
            <div class="w-1/6">
              <FElement />
            </div>
            <div class="w-1/6">
              <FElement />
            </div>
          </div>
          <div className="lowerbox flex flex-wrap justify-evenly w-full">
            <div class="w-1/6">
              <FElement />
            </div>
            <div class="w-1/6">
              <FElement />
            </div>
            <div class="w-1/6">
              <FElement />
            </div>
            <div class="w-1/6">
              <FElement />
            </div>
            <div class="w-1/6">
              <FElement />
            </div>
            <div class="w-1/6">
              <FElement />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-slate-50 mt-8"></div>
    </div>
    </div>
  );
};

export default Footer;
