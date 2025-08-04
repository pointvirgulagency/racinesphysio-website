"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const cardsData = [
  {
    title: "Transparence",
    desc: "Infos claires sur les soins et les tarifs.",
    icon: "/images/icons/optimisee.svg",
  },
  {
    title: "Qualité",
    desc: "Équipements modernes et techniques avancées.",
    icon: "/images/icons/mentioned.svg",
  },
  {
    title: "Ponctualité",
    desc: "Respect des horaires, gestion optimisée.",
    icon: "/images/icons/Reeducation.svg",
  },
  {
    title: "Écoute",
    desc: "Chaque patient est accueilli avec attention et bienveillance.",
    icon: "/images/icons/Innovation.svg",
  },
];

export default function Valeurs() {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // You can adjust this breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Different scroll speeds for mobile and desktop
  const scrollSpeedFactor = isMobile ? 0.8 : 1.5; // Slower on mobile

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", latestValue => {
      const numCards = cardsData.length;
      const newCardIndex = Math.floor(latestValue * numCards);
      const clampedIndex = Math.min(newCardIndex, numCards - 1);
      if (clampedIndex !== current) {
        setCurrent(clampedIndex);
      }
    });
  }, [scrollYProgress, current]);

  return (
    <div
      ref={containerRef}
      className="relative z-30"
      style={{ height: `${cardsData.length * 100 * scrollSpeedFactor}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative flex items-center justify-center w-full h-full"
          >
            {/* Mobile and Desktop responsive container */}
            <div className="relative w-80 sm:w-96 md:w-96 lg:w-96 h-[30rem] sm:h-[35rem] md:h-[35rem]">
              {/* Top decorative elements - responsive */}
              <div className="absolute top-7 xl1440:top-0 left-1/2 -translate-x-1/2 w-20 sm:w-40 md:w-40 h-10 sm:h-12 md:h-12 bg-white rounded-[45px] shadow-lg shadow-shadowColor/100"></div>

              <div className="absolute top-10 sm:top-6 md:top-6 left-1/2 -translate-x-1/2 w-32 sm:w-56 md:w-56 h-10 sm:h-12 md:h-12 bg-white rounded-[45px] shadow-lg shadow-shadowColor/100"></div>

              <div className="absolute top-14 sm:top-12 md:top-12 left-1/2 -translate-x-1/2 w-48 sm:w-80 md:w-80 h-10 sm:h-20 md:h-20 bg-white rounded-t-[45px] shadow-lg shadow-shadowColor/100"></div>

              {/* Main card container - responsive */}
              <div className="absolute top-20 sm:top-20 md:top-20 left-1/2 -translate-x-1/2 w-60 sm:w-96 md:w-96 lg:w-96 h-[20rem] sm:h-[30rem] md:h-[30rem] bg-white rounded-[45px] shadow-lg shadow-shadowColor/100">
                <div className="flex flex-col items-center justify-center h-full gap-4 sm:gap-5 px-6 sm:px-8">
                  <Image
                    src={cardsData[current].icon}
                    alt={cardsData[current].title}
                    width={100}
                    height={100}
                    className="mb-3 sm:mb-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                  />

                  <div className="flex flex-col gap-2 sm:gap-3 justify-center items-center">
                    <h3 className="text-main font-bold text-xl sm:text-xl md:text-xl text-center">
                      {cardsData[current].title}
                    </h3>

                    <p className="text-textP w-4/5 sm:w-2/3 text-center text-sm sm:text-base leading-relaxed">
                      {cardsData[current].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
