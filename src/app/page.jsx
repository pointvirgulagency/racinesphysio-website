"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/Components/Navbar";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Nosmissions from "@/Components/ui/Nosmissions";
import Valeurs from "@/Components/ui/Valeurs";
import Speciality from "@/Components/ui/Speciality";

import ScrollToTop from "@/Components/ui/ScrollToTop";

import dynamic from "next/dynamic";

const MapCard = dynamic(() =>
  import("@/Components/ui/container-scroll-animation")
);
const TestimonialSlider = dynamic(() =>
  import("@/Components/TestimonialSlider")
);
const Faq = dynamic(() => import("@/Components/Faq"));
const BeforeFooter = dynamic(() => import("@/Components/BeforeFooter"));

const LeCabinet = () => {
  // This ref is for the hero text animation
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // State for visibility toggle
  const [showContent] = useState(true);

  // For navbar transparency effect on scroll
  const [, setScrolled] = useState(false);

  // Animating text and buttons position
  const textPosition = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const buttonsPosition = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  useEffect(() => {
    // Handle navbar background change on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYProgress]);

  // NEW: Define a reusable animation for sections on scroll
  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeInOut" },
    viewport: { once: true }, // Animation will only play once
  };

  const buttonContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        // A delay so buttons animate after the main text
        delayChildren: 0.6,
        // Stagger the animation of each button
        staggerChildren: 0.2,
      },
    },
  };

  // ADD: Animation variants for each individual hero button
  const buttonItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* The hero section already has its own entry animations */}
      <section ref={containerRef}>
        <div>
          <Navbar />
          {/* Content */}
          {/* Mobile Hero */}
          <div className="xl1440:hidden flex flex-col items-start gap-4 justify-center mt-20 z-20 relative px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-main">
              Cabinet Racines <br />
              <span className="text-white">
                ensemble
                <br /> faisons le premier pas
              </span>
              <br /> vers la guerison
            </h1>
            <p className="mb-2 text-sm sm:text-base md:text-lg lg:text-xl text-white opacity-80">
              Chez Racines Physio, nous combinons expertise et soins
              personnalisés pour une rééducation complète et durable
            </p>
            <Link href="/nos-traitements">
              <button className="bg-white text-main px-8 py-2 rounded-full text-sm hover:bg-main transition-colors font-bold shadow-lg shadow-shadowColor/10 xl1440:hidden">
                Découvrez nos traitements
              </button>
            </Link>
          </div>

          {/* Hero */}
          <div className="relative flex justify-start">
            {/* Foreground Content */}
            {showContent && (
              <div className="ml-56 z-20 xl1440:flex flex-col mt-28 hidden">
                <section className="container uppercase text-main flex flex-col md:flex-row justify-between items-center mx-auto gap-6 md:gap-10">
                  <div className="font-medium text-3xl sm:text-5xl md:text-6xl lg:text-8xl w-full">
                    <motion.h1
                      style={{ x: textPosition }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="ml-0 md:ml-[-50px] lg:ml-[-150px] mb-3">
                        Cabinet Racines
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
                        <div className="text-white mb-3">ensemble</div>
                        <p className="text-xs sm:text-sm uppercase w-full sm:w-96">
                          Chez Racines Physio, nous combinons expertise et soins
                          personnalisés pour une rééducation complète et
                          durable.
                        </p>
                      </div>
                    </motion.h1>
                    <motion.div
                      style={{ x: buttonsPosition }}
                      className="uppercase"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <div className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl mb-4 ml-0 md:ml-[-50px] text-white lg:ml-[-150px]">
                        faisons le premier pas
                      </div>
                      <div className="ml-1 w-full text-main py-2 px-4 text-center">
                        <div>vers la guérison.</div>
                      </div>
                    </motion.div>
                  </div>
                </section>
              </div>
            )}
          </div>
          <motion.div
            className="ml-36 mt-20 gap-6 z-20 relative hidden xl1440:flex"
            variants={buttonContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={buttonItemVariants}>
              <Link href="/nos-traitements">
                <button className="bg-second text-white xl1440:text-xl px-12 py-3 rounded-full text-lg hover:bg-main transition-colors font-bold shadow-lg shadow-shadowColor/10">
                  Découvrez nos traitements
                </button>
              </Link>
            </motion.div>
            <motion.div variants={buttonItemVariants}>
              <Link href="/contact">
                <button className="bg-main text-white px-12 xl1440:text-xl py-3 rounded-full text-lg hover:bg-hoverBtn transition-colors font-medium shadow-lg shadow-shadowColor/10">
                  Prendre RDV
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Background Image for desk */}
          <div className="hidden xl1440:block w-full h-[180vh] absolute top-0 z-10 bg-gradient-to-br from-[#6FC2A7] to-[#6FC2A7]">
            <Image
              src="/images/png/metahuman.png"
              alt="Hero Background"
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </div>

        <ScrollToTop />

        {/* Transition 1 */}

        <motion.div
          {...sectionAnimation}
          className="relative z-20 flex flex-col mx-2 xl1440:gap-10 gap-6 items-center justify-center xl1440:mt-72 xl1440:mb-72 mt-32 mb-32"
        >
          <h3 className="xl1440:text-5xl/tight font-medium text-white text-center text-3xl xl1440:w-1/2">
            Une Méthode Structurée pour des Résultats Durables.
          </h3>
          <div className="xl1440:w-1/2 px-2 flex flex-col xl1440:gap-12 gap-4">
            <p className="text-lg/6 xl1440:text-3xl/10  opacity-85 text-white text-center font-normal">
              De votre premier bilan jusqu&apos;à votre récupération complète,
              nous vous accompagnons à chaque étape de votre guérison.
            </p>
          </div>
        </motion.div>

        {/* Nos Missions */}
        <motion.div
          {...sectionAnimation}
          className="relative z-20 xl1440:px-36 xl1440:mt-44 mt-24 flex flex-col"
        >
          <h2 className="text-main font-medium xl1440:text-6xl text-2xl mb-20 px-4">
            Nos Missions :
          </h2>
          <div>
            <Nosmissions />
          </div>
        </motion.div>

        {/* Behind Hero bg, Shadow Background */}
        <div className="absolute bottom-[-50rem] hidden xl1440:block">
          <div className="w-full h-screen relative z-10">
            <Image
              src="/images/greenbg.svg"
              alt="Hero Background"
              width={1900}
              height={800}
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* Home Background 1990px */}
        <div className="absolute bottom-[-85rem] hidden xl1900:block">
          <div className="w-full h-screen relative z-10">
            <Image
              src="/images/homebg.svg"
              alt="Hero Background"
              width={1900}
              height={800}
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* Home Background for xl1440 */}
        <div className="absolute hidden bottom-[-85rem] xl1440:block xl1900:hidden">
          <div className="w-full h-screen relative z-10">
            <Image
              src="/images/png/homedeskbg.jpg"
              alt="Hero Background"
              width={1900}
              height={800}
              className="object-contain object-center"
              priority
            />
          </div>
        </div>

        {/* Histoire and Philosophie */}

        <motion.div
          {...sectionAnimation}
          className="relative z-20 flex flex-col mx-2 xl1440:gap-16 gap-6 items-center justify-center xl1440:mt-44 mt-24"
        >
          <h3 className="xl1440:text-5xl font-medium text-white text-center text-3xl">
            Histoire et Philosophie
          </h3>
          <div className="xl1440:w-1/2 px-2 flex flex-col xl1440:gap-12 gap-4">
            <p className="text-lg/6 xl1440:text-3xl/10  opacity-85 text-white text-center font-normal">
              Nous sommes nés d&apos;une volonté d&apos;offrir des soins
              personnalisés, alliant expertise et bienveillance. Chaque patient
              bénéficie d&apos;un suivi adapté, axé sur une récupération
              complète et durable.
            </p>
            <p className="text-lg/6 xl1440:text-3xl/10  opacity-85 text-white text-center font-normal">
              Notre approche globale place vos besoins au cœur de nos actions,
              pour améliorer votre qualité de vie avec professionnalisme et
              humanité.
            </p>
          </div>
        </motion.div>

        {/* Testimonials Section */}

        <motion.div
          {...sectionAnimation}
          className="relative z-20 flex flex-col gap-16 items-center justify-center xl1440:mt-[30rem] mt-60"
        >
          <div className="relative xl1440:w-[60%] px-3 flex flex-col gap-12">
            <div className="absolute -top-24 xl1440:left-20 left-10 -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/images/icons/mentioned.svg"
                alt="Mentioned"
                width={80}
                height={80}
                className="object-contain w-10 h-10 "
              />
            </div>
            <p className="xl1440:text-4xl/[3.5rem] text-xl opacity-85 text-main text-center italic">
              Un cabinet, c'est avant tout une vision … Racines est né d'une
              volonté : offrir une prise en charge fondée sur la science,
              l'écoute et un profond respect du corps. Découvrez ce qui nous
              anime et comment nous avons bâti cette approche.
            </p>
            <h6 className="text-center text-main font-medium xl1440:text-2xl">
              - La Fondatrice
            </h6>
            <Link href="/le-cabinet" className="w-full flex justify-center">
              <button
                className={`bg-main text-white px-10 py-3 w-auto self-center rounded-full text-sm hover:bg-teal-900 transition-colors font-medium`}
              >
                Découvrez notre cabinet
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Nos Valeurs */}
        <motion.div
          {...sectionAnimation}
          className="relative z-20 xl1440:px-36 xl1440:mt-[20rem] mt-28 flex flex-col"
        >
          <h2 className="text-white font-medium  xl1440:text-6xl text-3xl px-4">
            Nos Valeurs :
          </h2>
          <div>
            <Valeurs />
          </div>
        </motion.div>

        {/* Speciality */}
        <motion.div
          {...sectionAnimation}
          className="relative z-20 xl1440:px-36 flex flex-col"
        >
          <div className="flex flex-col items-center xl1440:items-start xl1440:w-1/2 gap-4">
            <h2 className="text-white font-medium xl1440:ml-24 px-4 xl1440:text-5xl text-3xl xl1440:leading-[3.5rem]">
              Des soins spécialisés adaptés à vos besoins
            </h2>
            <p className="xl1440:ml-24 text-white opacity-80 px-4">
              De la rééducation post-opératoire aux programmes de prévention,
              découvrez nos traitements innovants.
            </p>
            <Link href="/nos-traitements">
              <button className="bg-main text-white px-12 xl1440:py-3 py-2 rounded-full text-base xl1440:ml-24 hover:bg-hoverBtn transition-colors font-medium shadow-lg shadow-shadowColor/10">
                Explorez tous nos traitements
              </button>
            </Link>
          </div>
          <Speciality />
        </motion.div>

        {/* testimonials */}
        <motion.div
          {...sectionAnimation}
          className="relative z-20 flex flex-col xl1440:mt-44 -mt-36"
        >
          <div className="flex flex-col xl1440:w-1/2 xl1440:gap-4 justify-center items-center m-auto text-center">
            <h2 className="text-main font-bold xl1440:text-5xl text-2xl/7 xl1440:leading-[3.5rem] w-10/12">
              Ils ont retrouvé leurs capacités, pourquoi pas vous ?
            </h2>
            <p className=" text-[#FEFFFF] xl1440:text-lg mt-4 mb-4 opacity-90 xl1440:w-[65%] px-4">
              Laissez-vous inspirer par nos patients et franchissez le premier
              pas vers une récupération optimale.
            </p>
            <Link
              target="blank"
              href="https://www.google.com/search?sca_esv=df549bc08c278101&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8rS7astlvlJkCuTmO-xD2H8lE7eC2yqtGlhFgnYgPEz5aAL4B5aRAaz6G8WS4ogzblzuDOytAEjxZz5_g_1mqGkIk5cJIVtf8P6CJkPLosn400b_YkWFn3DG4OgXuFQgpZkoeo%3D&q=Cabinet+racines+de+physio-kin%C3%A9sith%C3%A9rapie+Avis&sa=X&ved=2ahUKEwjC0bCkq9WOAxWodqQEHf9rL2IQ0bkNegQIMBAD&biw=1697&bih=822&dpr=0.8#"
            >
              <button className="bg-[#3D7778] text-white xl1440:px-12 px-10 py-3 rounded-full text-base hover:bg-main transition-colors font-medium shadow-lg shadow-shadowColor/10">
                Je donne mon avis
              </button>
            </Link>
          </div>
          <div>
            <TestimonialSlider />
          </div>
        </motion.div>

        {/* Transition 2 */}

        <motion.div
          {...sectionAnimation}
          className="relative z-50 flex flex-col mx-2 xl1440:gap-10 gap-6 items-center justify-center xl1440:mt-44 xl1440:mb-72 mt-24 mb-40"
        >
          <h3 className="xl1440:text-5xl/tight font-medium text-white text-center text-3xl xl1440:w-1/2">
            UNE MÉTHODE STRUCTURÉE POUR DES RÉSULTATS DURABLES.
          </h3>
          <div className="xl1440:w-1/2 px-2 flex flex-col xl1440:gap-12 gap-4">
            <p className="text-lg/6 xl1440:text-3xl/10  opacity-85 text-white text-center font-normal">
              De votre premier bilan au programme personnalisé, chaque étape est
              pensée pour votre guérison. Découvrez notre parcours patient
              thérapeutique
            </p>
            <Link
              href="/parcours-patients"
              className="w-full flex justify-center"
            >
              <button className="bg-[#3D7778] text-white xl1440:px-12 px-10 py-3 xl1440:text-xl rounded-full text-base hover:bg-main transition-colors font-medium shadow-lg shadow-shadowColor/10 z-50">
                En savoir plus
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Map cta */}
        <motion.div
          {...sectionAnimation}
          className="relative z-20 xl1440:mt-44"
        >
          <div className="relative flex flex-col xl1440:w-1/2 gap-4 justify-center items-center m-auto text-center -mb-96 xl1440:-mb-96 z-50">
            <h2 className="text-white font-bold xl1440:text-5xl text-xl xl1440:leading-[3.5rem]">
              Comment s'y rendre ?
            </h2>
            <p className=" text-[#FEFFFF] xl1440:text-lg opacity-90 xl1440:w-[90%] px-4 mb-2">
              “Besoin d'un itinéraire précis ? Utilisez Google Maps ou une
              application de navigation pour un trajet en temps réel.” puis
              l'adresse exacte “20C Résidence Maâmora, Immeuble 7 - Sala Al
              Jadida - 11100 Salé - Maroc
            </p>
            <Link href="/contact">
              <button className="hover:bg-[#3D7778] text-white px-12 py-3 rounded-full text-base bg-main transition-colors font-medium shadow-lg shadow-shadowColor/10">
                Prendre RDV
              </button>
            </Link>
          </div>
          <div className="z-0 relative">
            <MapCard />
          </div>
        </motion.div>

        {/* faq */}
        <motion.div
          {...sectionAnimation}
          className="relative z-20 xl1440:px-36 xl1440:mt-44 mt-[40rem] flex flex-col"
        >
          <Faq />
        </motion.div>

        {/* instagram */}
        {/* <motion.div
          {...sectionAnimation}
          className="relative z-20 xl1440:px-36 xl1440:mt-10 flex flex-col mt-24"
        >
          <div className="relative flex flex-col xl1440:w-1/2 xl1440:gap-8 gap-4 justify-center items-center m-auto text-center z-50 xl1440:mt-20">
            <h2 className="text-main font-semibold xl1440:text-5xl text-2xl/7 xl1440:leading-[3.5rem]">
              Prêt à commencer votre <br /> parcours de guérison?
            </h2>
            <p className=" text-main opacity-50 xl1440:text-lg font-medium mb-2 px-4">
              Vous êtes à un clic de votre nouvelle vie sans douleurs. Prenez
              rendez-vous dès aujourd'hui pour votre séance bilan avec nos
              kinésithérapeutes
            </p>
            <div className="flex xl1440:gap-6 gap-2 mt-4">
              <Link href="/">
                <button className="flex gap-3 justify-center items-center xl1440:px-12 px-4 py-3 rounded-full xl1440:text-base text-sm hover:bg-main hover:text-white bg-transparent border border-main text-main transition-colors shadow-lg font-semibold shadow-shadowColor/10">
                  <FaPhoneAlt className="xl1440:text-xl text-lg" />
                  +212 641-380-017
                </button>
              </Link>
              <Link href="/">
                <button className="hover:bg-[#3D7778] text-white xl1440:px-12 px-4 py-3 rounded-full xl1440:text-base text-sm bg-main transition-colors font-medium shadow-lg shadow-shadowColor/10">
                  Prendre RDV
                </button>
              </Link>
            </div>
          </div>
          <InstaPreview />
        </motion.div> */}
        <div className="-mt-60 xl1440:-mt-[40rem]">
          <BeforeFooter />
        </div>

        {/* Footer */}
        {/* <Footer /> */}
      </section>
    </>
  );
};

export default LeCabinet;
