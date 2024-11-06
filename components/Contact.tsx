// components/Contact.js
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

import linkedin from "../assets/icons/Linkedin.svg";
import github from "../assets/icons/github.svg";
import gmail from "../assets/icons/gmail.svg";

// Register the Flip plugin
gsap.registerPlugin(Flip);

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const contactText = document.querySelector(".contact-text");

    // Set up hover animations with Flip
    contactText?.addEventListener("mouseover", () => {
      const state = Flip.getState(contactText);
      contactText.textContent = "petergacj@gmail.com";
      Flip.from(state, {
        duration: 1.5,
        fade: true,
        ease: "power1.inOut",
      });
    });

    contactText?.addEventListener("mouseleave", () => {
      const state = Flip.getState(contactText);
      contactText.textContent = "Contact Me";
      Flip.from(state, {
        duration: 1.5,

        ease: "power1.inOut",
      });
    });
    console.log("contactText", contactText);

    return () => {
      contactText?.removeEventListener("mouseover", () => {});
      contactText?.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div className="w-full h-screen relative">
      <Spline
        scene="https://prod.spline.design/MKeNaZOtUGbaCSg9/scene.splinecode"
        className="w-screen h-screen absolute -z-10 "
      />

      <div className="bg-transparent absolute text-black text-center md:text-left left-1/2 -translate-x-1/2 w-full 2xl:mt-[5rem]">
        <h1 className="font-sans mt-[1rem] md:mt-[3rem] text-[3.5rem] md:text-[4rem] text-center md:text-left xl:text-[8rem] bg-transparent md:pl-[2rem]">
          Ready to connect?
        </h1>
        <h1 className="font-sans mt-[2.5rem] md:mt-[4rem] md:px-[2rem] text-[1.75rem] md:text-[3rem] xl:text-[2.5rem] xxl:text-[7rem]">
          Lets work together, <br />
          grow together
        </h1>

        {/* Animated contact text with Flip */}
      </div>
      <div className="absolute flex flex-col justify-between bottom-0 z-[100] text-white rounded-t-[2rem] w-screen left-1/2 -translate-x-1/2 h-2/4 sm:h-1/4 text-center md:text-left bg-[#34343481] pb-4 cursor-pointer px-6 md:px-12">
        <div className="flex flex-col md:flex-row h-full w-full justify-between items-center md:items-start py-4 md:py-8">
          <h1 className="font-sans text-lg text-[1.25rem] md:text-[2rem] text-center md:text-left leading-[120%]">
            jakub <br className="" /> petergac
          </h1>
          <p className="font-sans text-3xl md:text-[2rem] mt-2 md:mt-0">
            Contact Me
          </p>
          <div className="font-aenik text-sm md:text-lg h-20 flex flex-col items-center md:items-start justify-between gap-4 md:gap-8 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/jakub-peterg%C3%A1%C4%8D-050338238/">
              linkedin
            </a>
            <a href="mailto:petergacj@gmail.com">petergacj@gmail.com</a>
          </div>
        </div>
        <p className="self-center font-aenik mt-[2rem]  text-xs md:text-base">
          all rights reserved
        </p>
      </div>
    </div>
  );
};

export default Contact;
