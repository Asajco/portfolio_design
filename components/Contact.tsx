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
        <h1 className="font-sans text-[2.7rem] text-center md:text-left xl:text-[10rem] bg-transparent md:pl-[2rem]">
          Interested?
        </h1>
        <h1 className="font-sans lg:px-[2rem] xl:text-[4.5rem] xxl:text-[7rem]">
          Lets shake hands and grow together
        </h1>

        {/* Animated contact text with Flip */}
      </div>
      <div className="absolute flex flex-col  justify-between bottom-0 z-[100] text-white rounded-t-[2rem] w-screen left-1/2 -translate-x-1/2 h-1/3  text-center md:text-left  bg-[#34343481]  pb-[1rem] cursor-pointer px-[3rem]">
        <div className="flex flex-row w-full justify-between items-start py-[2rem]">
          <h1 className="font-sans text-[1.7rem] text-center md:text-left">
            jakub petergac
          </h1>
          <p className="font-sans text-[3.5rem]">Contact Me</p>
          <div className="font-aenik text-[1.5rem] h-[5rem] flex flex-col items-left justify-between gap-[2rem">
            <p>linkeding</p>
            <p>petergacj@gmail.com</p>
          </div>
        </div>
        <p className="self-center">all rights reserved</p>
      </div>
    </div>
  );
};

export default Contact;
