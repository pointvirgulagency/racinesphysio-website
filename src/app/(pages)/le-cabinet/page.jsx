"use client";
import React from "react";
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
      <section ref={containerRef} className="relative min-h-screen">
        {/* Background */}
        <div className="absolute hidden xl1440:block">
          <div className="w-full h-screen relative z-10">
            <Image
              src="/images/lecabinetbg.svg"
              alt="Hero Background"
              width={1900}
              height={800}
              className="object-contain object-center"
              priority
            />
          </div>
        </div>

        {/* Mobile bg */}

        <div className="absolute block r440:hidden xl1440:hidden">
          <div className="w-full h-screen relative z-10">
            <Image
              src="/images/lecabinetmobilebg.svg"
              alt="Hero Background"
              width={440}
              height={1305}
              className="object-contain object-center"
              priority
            />
          </div>
        </div>

        <div className="relative">
          <Navbar />
          <ScrollToTop />
        </div>

        <motion.div
          {...sectionAnimation}
          className="relative z-20 flex flex-col xl1440:pt-44 pt-24 pb-32"
        >
          {/* Hero Section */}
          <div className="flex flex-col w-full max-w-2xl gap-4 justify-center items-center mx-auto text-center px-4">
            <h2 className="text-main font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
              Le Cabinet Racines
            </h2>
            <p className="text-[#FEFFFF] text-lg md:text-xl lg:text-2xl mt-2 opacity-90 xl1440:max-w-[85%]">
              Explorez nos articles sur la santé, la physiothérapie et le
              bien-être
            </p>
          </div>

          <div className="relative min-h-[200vh] w-full">
            {/* Top - Origine */}
            <div className="w-40 h-10 xl1440:h-14 xl1440:w-52 shadow-lg shadow-shadowColor/10 rounded-full bg-white absolute xl1440:top-[12rem] top-[8rem] left-1/2 transform -translate-x-1/2 lg:left-[32.5rem] lg:transform-none flex justify-center items-center">
              <h3 className="text-second text-center xl1440:text-2xl text-xl font-semibold">
                Origine
              </h3>
            </div>
            <div className=" w-72 h-60 xl1440:w-96 xl1440:h-96 shadow-lg shadow-shadowColor/10 rounded-3xl bg-white absolute xl1440:top-[12rem] top-[8rem] left-1/2 transform -translate-x-1/2 mt-20 lg:mt-0 lg:right-[12.5rem] lg:left-auto lg:transform-none flex justify-center items-center px-4 xl1440:px-10">
              <p className="text-[#2F5859] text-sm xl1440:text-xl">
                Le cabinet est né d"une volonté d"offrir des soins personnalisés
                et de qualité, axés sur la récupération et l"amélioration
                durable de la mobilité. Composé de kinésithérapeutes hautement
                qualifiés et cumulant plusieurs années d"expérience, le cabinet
                garantit des traitements adaptés aux besoins spécifiques de
                chaque patient.
              </p>
            </div>

            {/* Middle - Philosophie */}
            <div className="w-40 h-10 xl1440:h-14 xl1440:w-52 shadow-lg shadow-shadowColor/10 rounded-full bg-white absolute xl1440:top-[42rem] top-[36rem] left-1/2 transform -translate-x-1/2 lg:right-[23.75rem] lg:left-auto lg:transform-none flex justify-center items-center">
              <h3 className="text-second text-center xl1440:text-2xl text-xl font-semibold">
                Philosophie
              </h3>
            </div>
            <div className="w-72 h-60 xl1440:w-96 xl1440:h-96 shadow-lg shadow-shadowColor/10 rounded-3xl bg-white absolute xl1440:top-[42rem] top-[36rem] left-1/2 transform -translate-x-1/2 mt-20 lg:mt-0 lg:left-[31.25rem] lg:transform-none flex justify-center items-center px-4 xl1440:px-10">
              <p className="text-[#2F5859] text-sm xl1440:text-xl">
                nous adoptons une approche globale et personnalisée, où chaque
                patient est au centre de notre démarche. Chaque étape de la
                guérison, de la prise de rendez-vous à l"élaboration du
                programme de fin de traitement, est considérée comme essentielle
                pour assurer une guérison complète et durable.
              </p>
            </div>

            {/* Third - Cabinet Racines */}
            <div className="w-48 h-10 xl1440:h-14 xl1440:w-52 shadow-lg shadow-shadowColor/10 rounded-full bg-white absolute xl1440:top-[73rem] top-[64rem]  left-1/2 transform -translate-x-1/2 lg:left-[33.75rem] lg:transform-none flex justify-center items-center">
              <h3 className="text-second text-center xl1440:text-2xl text-xl font-semibold">
                Cabinet Racines
              </h3>
            </div>
            <div className="w-72 h-60 xl1440:w-96 xl1440:h-80 shadow-lg shadow-shadowColor/10 rounded-3xl bg-white absolute xl1440:top-[73rem] top-[64rem] left-1/2 transform -translate-x-1/2 mt-20 lg:mt-0 lg:right-[18.75rem] lg:left-auto lg:transform-none flex justify-center items-center px-4 xl1440:px-10">
              <p className="text-[#2F5859] text-sm xl1440:text-xl">
                nous accordons une importance primordiale à l"écoute, aux
                valeurs humaines et au respect des besoins spécifiques de chaque
                patient. Chaque personne bénéficie d"un suivi personnalisé et
                d"une attention particulière, afin de garantir un rétablissement
                optimal.
              </p>
            </div>

            {/* Last - Notre objectif */}
            <div className="w-48 h-10 xl1440:h-14 xl1440:w-52 shadow-lg shadow-shadowColor/10 rounded-full bg-white absolute xl1440:top-[97rem] top-[90rem] left-1/2 transform -translate-x-1/2 lg:right-[32.5rem] lg:left-auto lg:transform-none flex justify-center items-center">
              <h3 className="text-second text-center xl1440:text-2xl text-xl font-semibold">
                Notre objectif
              </h3>
            </div>
            <div className="w-72 h-60 xl1440:w-96 xl1440:h-96 shadow-lg shadow-shadowColor/10 rounded-3xl bg-white absolute xl1440:top-[97rem] top-[90rem] left-1/2 transform -translate-x-1/2 mt-20 lg:mt-0 lg:left-[18.75rem] lg:transform-none flex justify-center items-center px-4 xl1440:px-10">
              <p className="text-[#2F5859] text-sm xl1440:text-xl">
                est de répondre au besoin croissant de la patientèle marocaine
                en matière de soins de santé. Nous nous engageons à développer,
                maintenir et restaurer le mouvement et la fonction physique pour
                améliorer la qualité de vie de nos patients, qu"il s"agisse de
                rééducation après une blessure ou de gestion de douleurs
                chroniques.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="relative z-20 -pt-48">
          <BeforeFooter />
        </div>
      </section>
    </>
  );
}

export default page;
