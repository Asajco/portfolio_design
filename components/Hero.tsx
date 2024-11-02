"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Spline from "@splinetool/react-spline";

const LazySpline = React.lazy(() => import("@splinetool/react-spline"));

interface IHero {
  className: string;
}

const Hero: React.FC<IHero> = (props) => {
  const { className } = props;
  const nameRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    const split = new SplitText(nameRef.current, { type: "chars" });
    const name = split.chars;

    const tl = gsap.timeline();
    tl.fromTo(
      name,
      {
        y: -10,
        opacity: 0.5,
      },
      {
        y: 0,
        ease: "none",
        stagger: 0.1,
        duration: 0.1,
        opacity: 1,
      }
    );

    name.forEach((char) => {
      const wiggleAnim = gsap.fromTo(
        char,
        { y: 0 },
        {
          y: -8,
          duration: 0.15,
          ease: "bounce.inOut",
          paused: true,
        }
      );
      char.addEventListener("pointerover", () => wiggleAnim.play());
      char.addEventListener("pointerleave", () => wiggleAnim.reverse());
      char.addEventListener("pointerout", () => wiggleAnim.pause());
    });

    // Scroll listener for fading out the text
    const handleScroll = () => {
      const fadeOutPosition = window.innerHeight * 0.05;
      const scrollPosition = window.scrollY * 0.1;

      if (scrollPosition > fadeOutPosition) {
        gsap.to(nameRef.current, {
          opacity: 0,
          display: "none",
          duration: 0.5,
        });
      } else {
        gsap.to(nameRef.current, {
          opacity: 1,
          display: "block",
          duration: 0.5,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function onLoad(spline: any) {
    const obj = spline.findObjectByName("Particles");
    console.log(obj);
    if (obj && window.innerWidth < 768) {
      obj.scale.set(0.5, 0.5, 0.5);
      obj.position.set(350, -200, -400);
    } else {
      if (obj) {
        obj.scale.set(1, 1, 1);
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={`flex flex-col  relative justify-start items-start custom-gradient w-screen h-screen p-0 ${className}`}
    >
      <div className="section1">
        <h1
          className="font-sans font-light w-screen fixed  lg:mt-[3rem] xl:mt-[0rem]  text-[3.25rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[15rem] text-[#000000] z-50 pl-[3rem]"
          ref={nameRef}
        >
          <p className="mt-[3rem] sm:mt-[0rem]">Jakub</p>
          <p className="md:-mt-[4rem] 2xl:mt-[-8rem]">Petergac</p>
          <p className="text-[2rem] mt-[4rem] md:text-[2.25rem] xl:text-[3.9rem]  2xl 3xl:mt-[10rem]">
            <div className="flex flex-col md:flex-row md:gap-[1rem]">
              <p> Developer, </p>
              <p>Engineer, </p>
              <p> Enthusiast</p>
            </div>
          </p>
        </h1>
      </div>

      <React.Suspense fallback={<p>Loading Spline...</p>}>
        <LazySpline
          scene="https://prod.spline.design/j68fnJWp2hiwWSMo/scene.splinecode"
          className="fixed top-0 left-0 h-[100dvh] z-0   scale-100 "
          style={{
            background: "linear-gradient(135deg, #FFFFFF, #E0E0E0, #B0B0B0)", // Custom gradient colors
          }}
          onLoadStart={(e) => console.log("onLoadStart", e)}
          onLoad={(spline) => onLoad(spline)}
          // onLoad={() => {
          //   console.log("onLoad");
          //   setTimeout(() => {
          //     setIsLoading(false);
          //   }, 2000); // Set loading state to false when loaded
          // }}
          onError={(e) => console.log("onError", e)}
        />
      </React.Suspense>
    </div>
  );
};

export default Hero;
