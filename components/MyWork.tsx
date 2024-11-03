// "use client";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "@splinetool/react-spline";
import Contact from "./Contact";

gsap.registerPlugin(ScrollTrigger);

const MyWork = () => {
  const containerRef = useRef(null);
  const jobItemsRef = useRef([]);
  const workItemsRef = useRef([]);
  const [showSpline, setShowSpline] = useState(false);

  const jobs = [
    {
      title: "Frontend Developer",
      description: "",
      place: "BeCode, s. r. o.",
      year: "2022-2023",
    },
    {
      title: "Intern Frontend Developer",
      place: "WebCreators, s. r. o.",
      description: "Developed frontend applications.",
      year: "2023",
    },
    {
      title: "Fulltime Frontend Developer",
      place: "Showmore, s. r. o.",
      description: "Worked on large scale projects.",
      year: "Ongoing",
    },
  ];

  const education = [
    {
      title: "Bachelor Degree",
      description: "Majored in Computer Science.",
      place: "University Of Matej Bel",
      year: "2019 - 2023",
    },
    {
      title: "Erasmus project",
      description: "Studyfield Web Development",
      place: "OAMK",
      year: "2022 - 2022",
    },
    {
      title: "Masters Degree",
      description: "Major in Computer Science",
      place: "Danish Technical University",
      year: "Ongoing",
    },
  ];

  useEffect(() => {
    if (!jobItemsRef.current.length || !workItemsRef.current.length) return;

    const ctx = gsap.context(() => {
      jobItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            { opacity: 0, x: -200, y: 200 }, // From bottom left corner
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      workItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            { opacity: 0, x: 200, y: 200 }, // From bottom right corner
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,

                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, containerRef);

    // Lazy load Spline when the user scrolls close
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShowSpline(true);
        observer.disconnect();
      }
    });
    //@ts-ignore
    observer.observe(containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full  h-auto flex flex-col items-center mt-[10rem] relative">
      <h1 className="font-sans text-[4.25rem] text-center md:text-[6rem] xl:text-[7rem] 2xl:text-[12rem] mb-[3rem] md:mb-[5rem]">
        My Journey
      </h1>
      <div
        ref={containerRef}
        className="w-full h-full overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 px-5 md:px-10 pb-[3rem] md:pb-[5rem]"
      >
        {/* Jobs Column */}
        <div className="space-y-5 lg:space-y-10 flex flex-col items-center lg:items-end justify-end">
          {jobs.map((item, index) => (
            <div
              key={index}
              //@ts-ignore
              ref={(el) => (jobItemsRef.current[index] = el)}
              className="flex-none w-full max-w-[800px] h-[400px] bg-gray-100 p-4 lg:p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-center text-[1.5rem] md:text-[2rem] font-sans transition-all duration-200 ease-out hover:rounded-[30px] md:hover:rounded-[50px]"
            >
              <h2 className="text-[2rem] md:text-[3rem] lg:text-[2.5rem] xl:text-[3rem] font-bold mb-2 md:mb-4">
                {item.title}
              </h2>
              <p className="text-[1.2rem] md:text-[1.5rem] mb-[0.5rem] md:mb-[1rem]">
                {item.place}
              </p>
              <p className="text-[1rem] md:text-[1.5rem] mb-2">
                {item.description}
              </p>
              <p className="text-[1rem] md:text-[1.2rem] text-gray-500 font-mono font-extrabold">
                {item.year}
              </p>
            </div>
          ))}
        </div>

        {/* Work/Education Column */}
        <div className="space-y-5 md:space-y-10 flex flex-col items-center lg:items-start">
          {education.map((item, index) => (
            <div
              key={index}
              //@ts-ignore
              ref={(el) => (workItemsRef.current[index] = el)}
              className="flex-none w-full  h-[400px] max-w-[800px] bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-center text-[1.5rem] md:text-[2rem] font-sans transition-all duration-200 ease-out hover:rounded-[30px] md:hover:rounded-[50px] z-50"
            >
              <h2 className="text-[2rem] md:text-[3rem] lg:text-[2.5rem] xl:text-[3rem] font-bold mb-2 md:mb-4 user-select-none">
                {item.title}
              </h2>
              <p className="text-[1.2rem] md:text-[1.5rem] mb-[0.5rem] md:mb-[1rem] user-select-none">
                {item.place}
              </p>
              <p className="text-[1rem] md:text-[1.5rem] mb-2 user-select-none">
                {item.description}
              </p>
              <p className="text-[1rem] md:text-[1.2rem] text-gray-500 font-mono font-extrabold user-select-none">
                {item.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
