"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./About";
import MyWork from "./MyWork";
import Projects from "./Projects";

gsap.registerPlugin(ScrollTrigger);

// Lazy load `Contact` and load only when needed
const Contact = dynamic(() => import("./Contact"), { ssr: false });

export default function Home() {
  const splineContainerRef = useRef(null);
  const [showFloatingDiv, setShowFloatingDiv] = useState(true);
  const [isContactLoaded, setIsContactLoaded] = useState(false);
  const contactRef = useRef(null);
  let scrollTimeout = useRef();

  useEffect(() => {
    const splineContainer = splineContainerRef.current;

    gsap.fromTo(
      splineContainer,
      {
        xPercent: 100,
        ease: "ease-in-out",
      },
      {
        xPercent: 0,
        ease: "ease-in-out",
        duration: 2,
        scrollTrigger: {
          trigger: splineContainer,
          start: "top top",
          end: "+=3000",
          scrub: true,
          pin: true,
        },
      }
    );
  }, []);

  // Use Intersection Observer to preload `Contact`
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsContactLoaded(true);
            observer.disconnect(); // Load once and stop observing
          }
        });
      },
      { rootMargin: "400px" } // Start loading slightly before it's in view
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <main className="">
      <div className="h-full">
        <div className="section1">
          <Hero className="" />
        </div>
        <div>
          <About />
        </div>
        <div className="relative">
          <MyWork />
        </div>
        <div className="w-screen">
          <Projects />
        </div>
        {/* Adjust margin for Contact and remove h-screen */}
        <div className="pt-10" ref={contactRef}>
          {isContactLoaded && <Contact />}
        </div>
      </div>
    </main>
  );
}
