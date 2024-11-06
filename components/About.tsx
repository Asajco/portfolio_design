import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "@splinetool/react-spline";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Refs for the container and individual text elements
  const aboutRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const additionalTextRef = useRef(null);

  useEffect(() => {
    // Create a GSAP context for scoped animations (optional but recommended)
    const ctx = gsap.context(() => {
      // Create a timeline for sequential animations when entering the component
      const tl = gsap.timeline({
        //@ts-ignore
        scrollTrigger: {
          trigger: aboutRef.current, // Element that triggers the animation
          start: "top top", // When the top of the trigger hits the top of the viewport
          end: "bottom top", // When the bottom of the trigger hits the top of the viewport
          pin: true, // Pin the element during the animation
          scrub: 1, // Smoothly scrubs the animation
          scroll: "smooth",
        },
      });

      // Animate the heading
      tl.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 2,
        ease: "power2.out",
      });

      // Animate the first paragraph
      tl.from(
        paragraphRef.current,
        {
          opacity: 0,
          y: 100,
          duration: 3,
          ease: "power2.out",
        },
        "-=0.7" // Overlap with the previous animation by 0.7 seconds
      );

      // Animate the additional text
      tl.from(
        additionalTextRef.current,
        {
          opacity: 0,
          x: 50,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5" // Overlap with the previous animation
      );
    }, aboutRef); // Scope the context to the aboutRef

    // Cleanup function to remove animations on unmount
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={aboutRef}
      className="w-full min-h-screen flex gap-[1rem] sm:gap-[5rem] flex-col justify-center xl:justify-start items-center px-4 relative bg-transparent"
      // style={{
      //   backgroundImage:
      //     "linear-gradient(to bottom, #000000, #3b1820, #752433, #b1323f, #ef4444)",
      // }}
    >
      {/* <Spline
        scene="https://prod.spline.design/DcnEfxZV9BUaZ0Dj/scene.splinecode"
        className="w-full h-full absolute overflow-hidden scale-[1.25]"
      /> */}

      {/* <Spline
        scene="https://prod.spline.design/6EMMGA8EH7Hk4ITE/scene.splinecode"
        className="w-full h-full absolute overflow-hidden scale-[1.25]"
      /> */}
      <p
        ref={headingRef}
        className="text-[5rem] sm:text-[7rem] md:text-[9rem] 2xl:text-[13rem] mt-[-2rem] xl:mt-[5rem] font-sans text-black mb-8 text-center"
      >
        Who am I?
      </p>
      <div className="flex self-start  ">
        <p
          ref={paragraphRef}
          className="text-black font-aenik text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3.15rem] 3xl:w-[80%] mx-auto self-center text-center mb-4 px-[1rem]"
        >
          I am a 23 year old developer based in Slovakia with almost two years
          of professional experience. Throughout my career, I have worked on
          various projects, improving my skills in a wide range of technologies.
        </p>
      </div>
      {/* Add more text elements with refs here if needed */}
    </div>
  );
};

export default About;
