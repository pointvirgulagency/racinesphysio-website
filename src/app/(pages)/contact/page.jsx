"use client";
import React from "react";
import ContactFrom from "@/Components/ContactForm";
import Faq from "@/Components/Faq";
import Map from "@/Components/ui/container-scroll-animation";
import Navbar from "@/Components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import BeforeFooter from "@/Components/BeforeFooter";
import ScrollToTop from "@/Components/ui/ScrollToTop";

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
            <h2 className="text-main font-bold xl1440:text-5xl text-3xl xl1440:leading-[3.5rem] w-10/12">
              Contact Racines
            </h2>
            <p className=" text-[#FEFFFF] xl1440:text-2xl text-xl mt-2 opacity-90 w-[85%]">
              Explorez nos articles sur la santé, la physiothérapie et le
              bien-être
            </p>
          </div>
        </motion.div>
        <ContactFrom />
        <div className="relative z-20 pt-32 xl1440:pt-0">
          <Faq />
          <div className=" xl1440:-mt-80">
            <div className="z-0 relative -mt-96 mb-[45rem]">
              <Map />
            </div>
          </div>
          <BeforeFooter />
        </div>
      </section>
    </>
  );
}

export default page;
