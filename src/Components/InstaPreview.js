"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArticle } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";

const InstagramSection = () => {
  const instagramUrl = "https://www.instagram.com/cabinet.racines/";

  return (
    <section className="lg:py-20 font-sans">
      <div className="container mx-auto xl1440:px-6 px-4 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-2 items-center">
          {/* Left Column: Text Content and CTA */}
          <div className="text-main">
            <h2 className="xl1440:text-5xl text-2xl md:text-5xl font-semibold mb-6 mt-14 md:leading-[3.5rem]">
              Prolongez l&apos;expérience Racines, en ligne
            </h2>
            <h5 className="xl1440:text-2xl text-lg font-semibold mb-4 opacity-90 text-white xl1440:text-main">
              Des conseils, de l&apos;inspiration et des ressources utiles, où
              que vous soyez.
            </h5>
            <p className="xl1440:text-lg text-gray-50 mb-8 opacity-80">
              Suivez notre actualité sur Instagram : conseils en physiothérapie,
              témoignages de patients, coulisses du cabinet… Et explorez notre
              blog &apos;Équilibre & Savoir&apos; : des articles, vidéos et
              exercices personnalisés pour continuer à prendre soin de vous à la
              maison.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-4">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#2A4C4C] text-white px-6 py-3 rounded-full xl1440:text-base text-xs font-semibold hover:bg-[#1E3A3A] transition-colors shadow-lg flex items-center gap-2">
                    <CiInstagram className="w-5 h-5 xl1440:w-7 xl1440:h-7" />
                    Suivez-nous
                  </button>
                </a>
                <Link href="/blog">
                  <button className="bg-[#2A4C4C] text-white px-6 py-3 rounded-full xl1440:text-base text-xs font-semibold hover:bg-[#1E3A3A] transition-colors shadow-lg flex items-center gap-2">
                    <MdOutlineArticle className="w-5 h-5 xl1440:w-7 xl1440:h-7" />
                    Accéder au blog
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup linking to Instagram */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center group"
          >
            <Image
              src="/images/instaphone.svg"
              alt="Instagram profile preview for Cabinet Racines"
              className="object-cover rounded-[30px] transition-transform duration-300 group-hover:scale-105"
              width={500}
              height={550}
            />
          </a>
        </div>
        <div className="w-full h-[2px] bg-white xl1440:mt-20 mt-20"></div>
      </div>
    </section>
  );
};

export default InstagramSection;
