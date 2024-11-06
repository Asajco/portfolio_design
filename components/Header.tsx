"use client";
import Image from "next/image";
import React from "react";
import linkedin from "../assets/icons/Linkedin.svg";
import github from "../assets/icons/github.svg";
import gmail from "../assets/icons/gmail.svg";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[10000000000] hidden md:flex items-end justify-end gap-[0.5rem]  px-[3rem] mt-[1.5rem] ">
      <a
        href="https://www.linkedin.com/in/jakub-peterg%C3%A1%C4%8D-050338238/"
        target="_blank"
        className="font-aeniks text-[1.5rem]  px-[0.5rem]  transition-transform ease-in-out duration-200 py-[0.25rem]   hover:underline"
      >
        {/* <Image src={linkedin} alt="linkedin" /> */}
        <p>linkedin</p>
      </a>
      <a
        href="https://github.com/Asajco"
        target="_blank"
        className="font-aeniks text-[1.5rem]  px-[0.5rem]  transition-transform ease-in-out duration-200 py-[0.25rem]  hover:underline "
      >
        {/* <Image src={github} alt="github" /> */}
        <p>github</p>
      </a>
      <a
        href="mailto:petergacj@gmail.com"
        className="font-aeniks text-[1.5rem]  px-[0.5rem]  transition-transform ease-in-out duration-200 py-[0.25rem]   hover:underline"
      >
        <p>mail</p>
        {/* <Image src={gmail} alt="gmail" /> */}
      </a>
    </div>
  );
};

export default Header;
