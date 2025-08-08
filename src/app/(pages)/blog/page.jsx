"use client";

import Faq from "@/Components/Faq";
import Map from "@/Components/ui/container-scroll-animation";
import Navbar from "@/Components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import BeforeFooter from "@/Components/BeforeFooter";
import CardGrid from "@/Components/CardGrid";
import { FaArrowRight } from "react-icons/fa6";
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
            <h2 className="text-main font-bold text-3xl xl1440:text-5xl leading-[3.5rem] w-10/12">
              Blog Racines
            </h2>
            <p className=" text-[#FEFFFF] text-xl xl1440:text-2xl mt-2 opacity-90 w-[85%]">
              Explorez nos articles sur la santé, la physiothérapie et le
              bien-être
            </p>
          </div>
          {/* blog */}
          <div className="w-full relative bg-[url(/images/blog/blogone.png)] mt-28">
            <div className=" xl1440:w-[70%] w-[90%] m-auto p-8 bg-white rounded-3xl my-6">
              <div className="flex justify-between gap-10 flex-col xl1440:flex-row">
                <div className="h-60 xl1440:h-96 rounded-3xl">
                  <Link href="/blog/blogone">
                    <Image
                      src="/images/blog/blogone.png"
                      alt="Blog Image"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </Link>
                </div>
                <div className="flex flex-col justify-between relative">
                  <h3 className="font-semibold text-xl xl1440:text-2xl xl1440:leading-8 text-main xl1440:pt-10">
                    Physiothérapie et grossesse : ce que vous devez savoir
                  </h3>
                  <p className="text-[#6B7280] xl1440:text-lg text-base leading-7 mt-2 xl1440:pb-28 pb-4">
                    Conseils et techniques adaptées pour soulager les inconforts
                    liés à la grossesse.
                  </p>
                  <span className="text-[#6b7280] pb-6">2 Mars 2025</span>
                  <Link href="/blog/blogone">
                    <button className="absolute bottom-0 right-0 bg-main w-14 h-14 rounded-full flex justify-center items-center text-white hover:bg-second transition-colors duration-300">
                      <FaArrowRight className="w-8 h-8" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <CardGrid />
        </motion.div>
        <div className="relative z-20">
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
