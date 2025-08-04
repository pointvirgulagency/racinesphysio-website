"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArticle } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { BiMessageSquareDetail } from "react-icons/bi";

const InstagramSection = () => {
  return (
    <section className="lg:py-20 font-sans">
      <div className="container mx-auto xl1440:px-6 px-4 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-2 items-center">
          {/* Left Column: Text Content and CTA */}
          <div className="text-main">
            <h2 className="xl1440:text-5xl text-2xl md:text-5xl font-semibold mb-6 mt-14 md:leading-[3.5rem]">
              Racines - Le journal du mouvement
            </h2>

            <p className="xl1440:text-lg text-white mb-8 opacity-90">
              Des articles pensés comme des repères, pas des remèdes. Chez
              Racines, nos contenus vous aident à mieux comprendre votre corps,
              à prolonger les effets de vos séances et à avancer, en toute
              autonomie. Parce que la vraie rééducation se vit d&apos;abord au
              cabinet — mais se poursuit aussi au quotidien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-4">
                <a href="/blog" rel="noopener noreferrer">
                  <button className="bg-[#2A4C4C] text-white px-6 py-3 rounded-full xl1440:text-base text-xs font-semibold hover:bg-[#1E3A3A] transition-colors shadow-lg flex items-center gap-2">
                    <MdOutlineArticle className="w-5 h-5 xl1440:w-7 xl1440:h-7" />
                    Consulter le Blog
                  </button>
                </a>
                <Link href="/contact">
                  <button className="bg-[#2A4C4C] text-white px-6 py-3 rounded-full xl1440:text-base text-xs font-semibold hover:bg-[#1E3A3A] transition-colors shadow-lg flex items-center gap-2">
                    <BiMessageSquareDetail className="w-5 h-5 xl1440:w-7 xl1440:h-7" />{" "}
                    Prendre RDV
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup linking to Instagram */}
          {/* blog */}
          <div>
            <div className="w-[100%] xl1440:w-[70%] m-auto p-8 bg-[#c5e7df] rounded-3xl my-6">
              <div className="flex justify-between gap-10 flex-col">
                <div className="h-60 rounded-3xl">
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
                  <h3 className="font-semibold text-xl  text-main">
                    Physiothérapie et grossesse : ce que vous devez savoir
                  </h3>
                  <p className="text-[#6B7280] text-base leading-7 mt-2 pb-4">
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
        </div>
        <div className="w-full h-[2px] bg-white"></div>
      </div>
    </section>
  );
};

export default InstagramSection;
