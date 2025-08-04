"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

// Accordion Item Component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className=" bg-white rounded-2xl z-20">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-4 px-6 focus:outline-none"
      >
        <span className="text-main font-bold">{question}</span>
        <div className="bg-main rounded-full p-1">
          <ChevronDown
            className={`w-4 h-4 text-white  transition-transform duration-300 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-6 pt-0 text-main opacity-50">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

// Main FAQ Section Component
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question:
        "Ai-je besoin d'une ordonnance pour consulter un kinésithérapeute ?",
      answer:
        "Oui, une ordonnance médicale est obligatoire. Elle doit être établie par votre médecin traitant et inclure un diagnostic clair.",
    },
    {
      question: "La première séance, appelée “bilan”, est-elle nécessaire ?",
      answer:
        "Oui, cette séance est essentielle. Elle permet d'évaluer précisément vos besoins et d'élaborer un plan de traitement adapté à votre situation.",
    },
    {
      question: "Combien de séances sont généralement nécessaires ?",
      answer:
        "Cela dépend de votre état initial, de votre pathologie et de votre évolution au fil des séances. Votre kinésithérapeute vous guidera au fur et à mesure.",
    },
    {
      question: "Combien de temps dure une séance ?",
      answer:
        "En moyenne, une séance dure entre 45 minutes et 1 heure, selon les techniques utilisées et vos besoins du jour.",
    },
    {
      question: "Quelles pathologies traitez-vous ?",
      answer:
        "Nous prenons en charge un large éventail de troubles : musculosquelettiques, neurologiques, respiratoires, posturaux et bien d'autres.",
    },
    {
      question: "Les séances sont-elles douloureuses ?",
      answer:
        "Certaines techniques peuvent être légèrement inconfortables, mais notre priorité est toujours de respecter votre seuil de douleur et d'assurer un soin en douceur.",
    },
    {
      question: "Quel matériel utilisez-vous lors des séances ?",
      answer:
        "Nous combinons techniques manuelles, équipements de rééducation et dispositifs adaptés à chaque besoin spécifique.",
    },
    {
      question: "Quels vêtements porter pour une séance ?",
      answer:
        "Optez pour une tenue confortable et ample, qui facilite le mouvement et l'accès aux zones à traiter.",
    },
    {
      question: "Les séances sont-elles remboursées ?",
      answer:
        "Oui, selon votre couverture. Des organismes comme la CNOPS, CNSS, FAR et les assurances privées prennent en charge les séances, selon votre contrat.",
    },
    {
      question: "Puis-je faire du sport pendant mon traitement ?",
      answer:
        "Oui, dans la majorité des cas. Mais suivez toujours les recommandations de votre kinésithérapeute.",
    },
    {
      question: "Faut-il annuler une séance si j'ai mal ?",
      answer:
        "Pas forcément. La douleur peut faire partie du processus de rééducation. Il est toutefois important d'en informer votre kinésithérapeute avant la séance.",
    },
  ];

  return (
    <div className=" text-white xl1440:py-20 lg:py-32 xl1440:mt-40 mt-20 xl1440:px-48 xl1440:mb-60 z-30">
      <div className="container mx-auto xl1440:px-6 px-4 lg:px-24 z-30">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start z-30">
          {/* Left Column: Title and CTA */}
          <div className="flex flex-col justify-center items-center xl1440:items-start xl1440:text-start text-center lg:pt-8 z-20">
            <h2 className="xl1440:text-5xl text-2xl md:text-5xl font-bold mb-4">
              Des questions ? <br></br> Nous avons les réponses
            </h2>
            <p className=" xl1440:text-lg text-gray-300 mb-8 max-w-md text-base">
              Vous vous demandez si une ordonnance est nécessaire, combien de
              temps dure une séance, ou si les soins sont remboursés ? Cette
              section répond aux questions les plus courantes pour vous
              accompagner sereinement dans votre parcours chez Racines.
            </p>
            <Link href="/contact">
              <button className="bg-white text-main px-8 py-3 rounded-full text-base font-semibold hover:bg-gray-200 transition-colors xl1440:self-start shadow-lg z-50">
                Nous contacter
              </button>
            </Link>
            <div className="w-full h-px bg-white mt-12"></div>
          </div>

          {/* Right Column: Accordion with Scroll */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/40">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() => handleAccordionClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
