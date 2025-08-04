"use client";

import VideoPlayer from "../../../Components/VideoPlayer";
import Faq from "@/Components/Faq";
import Map from "@/Components/ui/container-scroll-animation";
import Navbar from "@/Components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import BeforeFooterTwo from "@/Components/BeforeFooterTwo";
import ScrollToTop from "@/Components/ui/ScrollToTop";
import Link from "next/link";
function page() {
  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeInOut" },
    viewport: { once: true },
  };

  const containerRef = useRef(null);

  return (
    <>
      <section ref={containerRef}>
        {/* Backgound */}
        <div className="absolute hidden xl1440:block">
          <div className="w-full h-screen relative z-10">
            <Image
              src="/images/contactbg.svg"
              alt="Hero Background"
              width={1900}
              height={800}
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
        <Navbar />
        <ScrollToTop />
        <motion.div
          {...sectionAnimation}
          className="relative z-20 flex flex-col xl1440:mt-44 mt-24"
        >
          <div className="flex flex-col xl1440:w-1/2 gap-4 justify-center items-center m-auto text-center">
            <h2 className="text-main font-bold xl1440:text-5xl text-3xl leading-[3.5rem] w-10/12">
              Votre parcours de soin chez Racines
            </h2>
            <p className=" text-[#FEFFFF] xl1440:text-2xl xl1440:mt-2 opacity-90 w-[90%] mb-8">
              Chez Racines, chaque parcours est pensé avec clarté, bienveillance
              et expertise. Pas à pas, nous vous accompagnons vers la guérison,
              pour vous ancrer durablement dans le mouvement.
            </p>
            <Link href="#video" className="w-full flex justify-center">
              <button className="bg-[#3D7778] text-white xl1440:px-12 px-10 py-3 xl1440:text-xl rounded-full text-base hover:bg-main transition-colors font-medium shadow-lg shadow-shadowColor/10">
                Découvrez votre parcours de soin
              </button>
            </Link>
          </div>
          <VideoPlayer />
        </motion.div>
        <div className="relative z-20 -mt-32">
          <Faq />
          <div className=" xl1440:-mt-80">
            <div className="z-0 relative -mt-96 mb-[45rem]">
              <Map />
            </div>
          </div>
          <BeforeFooterTwo />
        </div>
      </section>
    </>
  );
}

export default page;
