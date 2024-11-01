"use client";
import Image from "next/image";
import React from "react";
import linkedin from "../assets/icons/Linkedin.svg";
import github from "../assets/icons/github.svg";
import gmail from "../assets/icons/gmail.svg";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[10000000000] hidden md:flex items-center justify-end gap-[3rem] h-[48px] px-[3rem] ">
      <a
        href="https://linkedin.com"
        target="_blank"
        className="font-raleway text-[1.5rem] border-[1px] border-black rounded-lg px-[0.5rem] mt-[2.5rem] transition-transform ease-in-out duration-200 py-[0.25rem] bg-[#ffffff81]  hover:scale-110"
      >
        <Image src={linkedin} alt="linkedin" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        className="font-raleway text-[1.5rem] border-[1px] border-black rounded-lg px-[0.5rem] mt-[2.5rem] transition-transform ease-in-out duration-200 py-[0.25rem] bg-[#ffffff81] hover:scale-110 "
      >
        <Image src={github} alt="github" />
      </a>
      <a
        href="mailto:petergacj@gmail.com"
        className="font-raleway text-[1.5rem] border-[1px] border-black rounded-lg px-[0.5rem] mt-[2.5rem] transition-transform ease-in-out duration-200 py-[0.25rem] bg-[#ffffff81]  hover:scale-110"
      >
        <Image src={gmail} alt="gmail" />
      </a>
    </div>
  );
};

export default Header;
