import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import showmore from "../assets/icons/showmore-t.jpg";
import projects2 from "../assets/icons/autocentrum.jpg";
import projects3 from "../assets/icons/wise.jpg";
import manage from "../assets/icons/manage.jpg";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const images = imagesRef.current;

    // Initial setup
    gsap.set(title, {
      opacity: 0,
      scale: 0.95,
    });

    gsap.set(images, {
      scale: 0.4,
      yPercent: 100, // Start images below the viewport
      opacity: 1,
      duration: 2,
    });

    // Title intro animation before scroll
    gsap.to(title, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
    });

    // Main scroll timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
        markers: false,
      },
    });

    // Animate each image
    images.forEach((image, index) => {
      if (index > 0) {
        tl.to({}, { duration: 0.9 }); // Add small delay between images
      }

      tl.to(image, {
        scale: 0.9,
        yPercent: 0,
        borderRadius: "1rem",
        opacity: 1,
        duration: 5,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen relative  overflow-hidden"
    >
      {/* Centered Title */}
      <h1
        ref={titleRef}
        className="absolute w-auto h-auto leading-[120%] text-center   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] sm:text-[7rem] md:text-[7rem] text-black font-sans xl:text-[10rem] "
      >
        Proud of these
      </h1>

      {/* Images Container */}
      <div className="relative w-screen h-screen">
        {/* Image 1 */}
        <div
          //@ts-ignore
          ref={(el) => (imagesRef.current[0] = el)}
          className="absolute inset-0 w-screen h-screen flex "
          style={{ zIndex: 1 }}
        >
          <div className="absolute h-full  flex flex-col  md:items-end md:justify-between   z-[2]">
            <Link href="https://www.showmore.cz/" target="_blank">
              <p className="text-[3rem] mb-[2rem]  md:mb-0 sm:text-[5rem] md:text-[7rem] px-[2rem] xl:text-[10rem] font-sans text-white z-[2]">
                Showmore
              </p>
            </Link>
            <p className="font-aenik  text-[1.5rem]  px-[1rem] mb-[1rem] text-left self-start lg:w-2/3  3xl:w-1/3 tracking-[0.8px] text-white xl:px-[2rem] z-[2] w-full  xl:py-[2rem] ">
              As a member of the Showmore team, I contributed to creating a
              visually engaging web portfolio. My primary focus was on the
              visual aspects of the code, ensuring the design was captivating
              and cohesive. I also worked extensively on implementing smooth
              animations to enhance the user experience.
            </p>
          </div>
          <Image
            src={showmore}
            alt="projects"
            fill
            className="object-cover"
            onClick={() => window.open("https://www.showmore.cz/")}
            priority
          />
        </div>

        {/* Image 2 */}
        <div
          //@ts-ignore
          ref={(el) => (imagesRef.current[1] = el)}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 2 }}
        >
          <div className="absolute h-full  flex flex-col  md:items-end md:justify-between   z-[2]">
            <Link href="https://becode.sk/" target="_blank">
              <p className="text-[3rem] mb-[2rem] md:mb-0 sm:text-[5rem] md:text-[7rem] px-[2rem] xl:text-[10rem] font-sans text-white z-[2]">
                BeCode
              </p>
            </Link>
            <p className="font-aenik text-[1.5rem]  px-[1rem] mb-[1rem] text-left self-start lg:w-2/3 3xl:w-1/3 tracking-[0.8px] text-white xl:px-[2rem] z-[2] w-full  xl:py-[2rem] ">
              As a member of the BeCode team, I contributed to developing a CRM
              application specifically designed for a car dealership and
              restaurant ordering system. My primary focus was on delivering a
              fast, scalable system to streamline dealership operations and
              improve customer relationship management.
            </p>
          </div>
          <Image
            src={projects2}
            alt="projects"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Image 3 */}
        <div
          //@ts-ignore
          ref={(el) => (imagesRef.current[2] = el)}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 3 }}
        >
          <div className="absolute h-full w-full  flex flex-col  md:items-end md:justify-between   z-[2]">
            <Link href="https://www.wisebets.sk/" target="_blank">
              <p className="text-[3rem] mb-[2rem] md:mb-0 sm:text-[5rem] md:text-[7rem] px-[2rem] xl:text-[10rem] font-sans text-white z-[2]">
                Wisebets
              </p>
            </Link>
            <p className="font-aenik   text-[1.5rem]  px-[1rem] mb-[1rem] text-left self-start lg:w-2/3 3xl:w-1/3 tracking-[0.8px] text-white xl:px-[2rem] z-[2] w-full  xl:py-[2rem] ">
              Online market when you can buy memebership for AI generated bets.
              Developed whole aplication from scrach and designed for cliet
              needs.
            </p>
          </div>
          <Image
            src={projects3}
            alt="projects"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Image 4 */}
        <div
          //@ts-ignore
          ref={(el) => (imagesRef.current[3] = el)}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 4 }}
        >
          <div className="absolute h-full w-full  flex flex-col  md:items-end md:justify-between z-[2]">
            <Link
              href="https://github.com/Asajco/manageIt_demo"
              target="_blank"
            >
              <p className="text-[3rem] mb-[2rem]  md:mb-0 sm:text-[5rem] md:text-[7rem] px-[2rem] xl:text-[10rem] font-sans text-white z-[2]">
                ManageIT
              </p>
            </Link>
            <p className="font-aenik  text-[1.5rem]  px-[1rem] mb-[1rem] text-left self-start lg:w-2/3 3xl:w-1/3 tracking-[0.8px] text-white xl:px-[2rem] z-[2] w-full  xl:py-[2rem] ">
              Simple storage management system with user authentication and
              authorization. I developed the entire application from scratch
              based on my needs from previous jobs.
            </p>
          </div>
          <Image
            src={manage}
            alt="projects"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Optional overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-40 opacity-0" />
    </div>
  );
};

export default Projects;
