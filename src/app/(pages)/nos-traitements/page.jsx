"use client";
import React from "react";
import Services from "@/Components/Services";
import Faq from "@/Components/Faq";
import Map from "@/Components/ui/container-scroll-animation";
import Navbar from "@/Components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import BeforeFooter from "@/Components/BeforeFooter";
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
            <h2 className="text-main font-bold xl1440:text-5xl text-3xl xl1440:leading-[3.5rem] w-10/12">
              Nos traitements personnalisés
            </h2>
            <p className=" text-[#FEFFFF] xl1440:text-2xl text-lg mt-2 opacity-90 w-[85%]">
              Chaque patient est unique, nos soins aussi. Découvrez nos
              approches pour vous accompagner vers la guérison.
            </p>
          </div>
          <Services />
        </motion.div>

        {/* Transition*/}

        <motion.div
          {...sectionAnimation}
          className="relative z-20 flex flex-col mx-2 xl1440:gap-10 gap-6 items-center justify-center xl1440:mt-72 xl1440:mb-72 mt-24 mb-40"
        >
          <h3 className="xl1440:text-5xl/tight font-medium text-white text-center text-3xl xl1440:w-1/2">
            De la Thérapie à la Récupération
          </h3>
          <div className="xl1440:w-1/2 px-2 flex flex-col xl1440:gap-12 gap-4">
            <p className="text-lg/6 xl1440:text-3xl/10  opacity-85 text-white text-center font-normal">
              "Nos traitements sont conçus pour soulager, rééduquer et renforcer
              votre mobilité. Mais chaque patient est unique, et la prise en
              charge ne s'arrête pas au traitement. Découvrez comment nous vous
              accompagnons à chaque étape, de la première consultation jusqu'à
              votre retour à une pleine autonomie."
            </p>
            <Link
              href="/parcours-patients"
              className="w-full flex justify-center"
            >
              <button className="bg-[#3D7778] text-white xl1440:px-12 px-10 py-3 xl1440:text-xl rounded-full text-base hover:bg-main transition-colors font-medium shadow-lg shadow-shadowColor/10">
                Découvrez votre parcours de soin
              </button>
            </Link>
          </div>
        </motion.div>
        <div className="relative z-30 xl1440:-mt-32">
          <Faq />
          <div className=" xl1440:-mt-80">
            <div className="z-10 relative -mt-96 mb-[45rem]">
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
