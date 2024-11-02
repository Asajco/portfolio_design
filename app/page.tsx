"use client";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Loading from "@/components/Loader";
import AnimatedCursor from "react-animated-cursor";

// Dynamically load `Doc` component without showing the loading fallback initially
const Doc = dynamic(() => import("@/components/Doc"), {
  ssr: false,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDocLoaded, setIsDocLoaded] = useState(false);

  useEffect(() => {
    // Preload Doc component
    const loadDoc = async () => {
      await import("@/components/Doc");
      setIsDocLoaded(true);
    };

    loadDoc();

    // Simulate a forced loading time of 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust the duration as needed

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full h-full scroll-smooth ">
      <>
        <AnimatedCursor
          innerScale={0.5}
          outerSize={25}
          outerStyle={{
            border: "2px solid #000",

            //set bg as invert of color im on
          }}
          innerStyle={{
            background: "black",
          }}
          outerScale={2.5}
          color="0, 0, 0"
        />
        <Header />
        <Doc />
      </>
    </main>
  );
}
