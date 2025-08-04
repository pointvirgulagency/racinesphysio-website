import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

const PhysiotherapySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Rééducation Fonctionnelle",
      description:
        "Restaurez force, équilibre et mobilité après une blessure, une opération ou une maladie. Nos techniques visent une reprise d'activité normale et sans douleur.",
      image: "/nostraitment/1.jpg",
      souTitle: "Pour retrouver force et mobilité",
      price: "Plus",
      popUp:
        "La rééducation fonctionnelle est un ensemble de techniques utilisées pour rétablir les capacités physiques d'un patient après une blessure, une opération ou une maladie. Elle vise à améliorer la force musculaire, la mobilité articulaire et l'équilibre, tout en rééduquant les gestes du quotidien, afin de permettre une reprise d'activité normale et sans douleur.",
    },
    {
      id: 2,
      title: "Thérapie Manuelle",
      description:
        "Techniques de manipulation pour réduire la douleur, améliorer la mobilité et restaurer la fonction articulaire et musculaire.",
      image: "/api/placeholder/300/200",
      souTitle: "Techniques de manipulation ciblées",
      price: "Plus",
      popUp:
        "La thérapie manuelle consiste en l'utilisation de techniques spécifiques de manipulation des articulations, muscles et tissus mous, afin de réduire la douleur, améliorer la mobilité et restaurer la fonction. Cela peut inclure des manipulations, des mobilisations et des étirements pour traiter diverses pathologies musculosquelettiques.",
    },
    {
      id: 3,
      title: "Kinésithérapie Respiratoire",
      description:
        "Spécialisée pour adultes et enfants, elle améliore la ventilation pulmonaire et aide à désencombrer les voies respiratoires.",
      image: "/api/placeholder/300/200",
      souTitle: "Adultes et enfants",
      price: "Plus",
      popUp:
        "La kinésithérapie respiratoire est une spécialité qui vise à traiter les affections respiratoires en utilisant des techniques de désencombrement des voies respiratoires et d'amélioration de la ventilation pulmonaire. Elle est particulièrement bénéfique pour les patients atteints de maladies respiratoires chroniques, d'asthme, de bronchiolites chez les enfants, ou encore lors de la rééducation post-chirurgicale.",
    },
    {
      id: 4,
      title: "Réadaptation Cardiorespiratoire",
      description:
        "Prise en charge pour retrouver la fonction cardiorespiratoire après des maladies ou chirurgies du cœur et des poumons.",
      image: "/api/placeholder/300/200",
      price: "Plus",
      popUp:
        "La réadaptation cardiorespiratoire s'adresse aux patients ayant souffert de maladies cardiaques ou respiratoires graves. Elle comprend un programme de rééducation physique personnalisé qui vise à améliorer l'endurance cardiovasculaire, renforcer la fonction cardiaque et respiratoire, tout en minimisant les risques futurs d'aggravation de ces maladies.",
    },
    {
      id: 5,
      title: "Activité Physique Adaptée",
      description:
        "Programme personnalisé avec des exercices sur-mesure pour traiter ou prévenir des maladies chroniques comme le diabète, l'ostéoporose ou l'arthrose. ",
      image: "/api/placeholder/300/200",

      price: "Plus",
      popUp:
        "Ce traitement consiste à prescrire un programme d'exercice physique spécifiquement conçu pour répondre aux besoins et capacités de chaque patient, en fonction de son état de santé, son âge et ses objectifs. Elle est souvent utilisée pour traiter ou prévenir des maladies chroniques comme le diabète, l'hypertension, les maladies cardiaques, etc., et peut aussi être un complément dans les parcours de rééducation.",
    },
    {
      id: 6,
      title: "Drainage Lymphatique",
      description:
        "Technique manuelle ou mécanique, pour réduire les œdèmes et améliorer la circulation veineuse.",
      image: "/api/placeholder/300/200",
      souTitle: "Manuelle et Mécanique",
      price: "Plus",
      popUp:
        "Le drainage lymphatique est une technique de massage douce qui stimule la circulation de la lymphe pour favoriser l'élimination des toxines et réduire l'œdème. La version manuelle implique des gestes lents et rythmiques, tandis que le drainage lymphatique mécanique utilise des dispositifs spécifiques (comme des appareils de compression) pour accomplir ce même objectif.",
    },
    {
      id: 7,
      title: "Dry Needling",
      description:
        "Utilisation d'aiguilles pour soulager les tensions musculaires et réduire les douleurs chroniques.",
      image: "/api/placeholder/300/200",
      price: "Plus",
      popUp:
        "Le Dry Needling, ou 'aiguilletage sec', consiste à insérer de fines aiguilles dans des points spécifiques de tension musculaire appelés 'trigger points' (points de déclenchement) afin de libérer la tension, réduire la douleur et améliorer la fonction musculaire. Il est utilisé pour traiter des douleurs musculaires chroniques, des contractures ou des troubles musculosquelettiques.",
    },
    {
      id: 8,
      title: "Bandage et Strapping",
      description:
        "Stabilisation des articulations ou muscles pour prévenir les blessures et faciliter la récupération.",
      image: "/api/placeholder/300/200",
      price: "Plus",
      popUp:
        "Le bandage et le strapping sont des techniques de soutien utilisées pour stabiliser une articulation ou un muscle après une blessure. Ils permettent de limiter les mouvements, réduire l'inflammation, et soutenir la guérison. Le strapping est souvent utilisé en prévention ou pour soulager des douleurs aiguës pendant l'activité physique.",
    },
    {
      id: 9,
      title: "Rééducation Périnéale et Préparation à l'accouchement",
      description:
        "Prise en charge pré et post-partum pour renforcer le périnée et prévenir ou traiter les troubles urinaires.",
      image: "/api/placeholder/300/200",
      price: "Plus",
      popUp:
        "La rééducation périnéale consiste en un ensemble de techniques qui visent à renforcer les muscles du périnée, un groupe musculaire important pour le contrôle de la vessie, de l'intestin et pour la fonction sexuelle. Cette rééducation est souvent recommandée après un accouchement, dans le cadre du traitement de l'incontinence urinaire, ou encore après une chirurgie pelvienne.",
    },
    {
      id: 10,
      title: "Cupping Thérapie",
      description:
        "Pose de ventouses pour améliorer la circulation, réduire les douleurs et favoriser la récupération.",
      image: "/api/placeholder/300/200",
      price: "Plus",
      popUp:
        "La thérapie par ventouses (Cupping) est une méthode de traitement qui consiste à appliquer des ventouses sur la peau pour créer une succion. Cela améliore la circulation sanguine, soulage les douleurs musculaires et réduit les tensions. Elle est utilisée pour traiter diverses pathologies, comme les douleurs chroniques, les tensions musculaires, ou encore pour stimuler la guérison des tissus.",
    },
  ];

  const cardsPerView = 8; // 4 cards per row, 2 rows = 8 cards per view
  const maxIndex = Math.max(0, Math.ceil(cards.length / cardsPerView) - 1);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const getCurrentCards = () => {
    const startIndex = currentIndex * cardsPerView;
    return cards.slice(startIndex, startIndex + cardsPerView);
  };

  const getCardImage = card => {
    // Placeholder images based on card type
    const images = {
      1: "/images/nostraitment/1.jpg",
      2: "/images/nostraitment/2.jpg",
      3: "/images/nostraitment/3.jpg",
      4: "/images/nostraitment/4.jpg",
      5: "/images/nostraitment/5.jpg",
      6: "/images/nostraitment/6.jpg",
      7: "/images/nostraitment/7.jpg",
      8: "/images/nostraitment/8.jpg",
      9: "/images/nostraitment/9.png",
      10: "/images/nostraitment/10.jpg",
    };
    return images[card.id] || images[1];
  };

  const handleCardClick = card => {
    // Only open popup on mobile (screen width < 768px)
    if (window.innerWidth < 768) {
      setSelectedCard(card);
    }
  };

  return (
    <div className="relative z-20 mt-8 md:mt-14 min-h-screen">
      <div className="mx-auto max-w-[95%] md:max-w-[90%]">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full xl1440:p-3 p-1 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronLeft className=" xl1440:w-6 xl1440:h-6 w-5 h-5 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full xl1440:p-3 p-1 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronRight className="xl1440:w-6 xl1440:h-6 w-5 h-5 text-gray-700" />
          </button>

          {/* Cards Container */}
          <div className="mx-4 sm:mx-8 md:mx-12 px-2 sm:px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-14">
              {getCurrentCards().map((card, index) => (
                <div
                  key={card.id}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(card)}
                  className="md:cursor-default cursor-pointer"
                >
                  <div
                    className={`relative rounded-3xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-full ${
                      hoveredCard === card.id
                        ? "bg-main text-white"
                        : "bg-white text-main"
                    }`}
                  >
                    {/* Card Content */}
                    <div className="relative h-60 sm:h-80 md:h-[495px] w-full">
                      {/* Text Content (only on hover) */}
                      {hoveredCard === card.id && (
                        <div className="absolute inset-0 pt-8 sm:pt-16 md:pt-24 px-3 sm:px-4 md:px-6 py-6 sm:py-10 md:py-14 flex flex-col justify-between items-center z-10">
                          <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
                              {card.title}
                            </h3>
                            <p className="text-xs sm:text-base opacity-90 leading-relaxed">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Background Image */}
                      <div
                        className={`absolute inset-0 ${
                          hoveredCard === card.id ? "opacity-20" : "opacity-100"
                        } transition-opacity duration-300`}
                      >
                        <img
                          src={getCardImage(card)}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Bottom Label */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-t from-main/20 to-transparent z-20 pointer-events-none" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 z-20">
                        <div className="flex justify-between items-center">
                          <span
                            className={`text-xs sm:text-sm font-medium ${
                              hoveredCard === card.id
                                ? "text-white"
                                : "text-white"
                            }`}
                          >
                            {card.title}
                          </span>
                          <button
                            onClick={e => {
                              e.stopPropagation();
                              setSelectedCard(card);
                            }}
                            className={`text-xs sm:text-sm font-medium ${
                              hoveredCard === card.id
                                ? "text-white underline"
                                : "text-white underline"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {card.price}
                              <FaArrowRight className="underline" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal */}
          {selectedCard && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedCard(null)}
            >
              <div
                className="bg-white rounded-2xl p-6 md:p-8 max-w-sm md:max-w-xl w-full relative transform transition-all duration-300"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>
                <h2 className="text-base/5 md:text-xl font-bold mb-4 w-1/2 xl1440:w-full">
                  {selectedCard.title}
                </h2>

                <h6 className="text-base/5 md:text-xl mb-4 xl1440:w-full">
                  {selectedCard.souTitle}
                </h6>
                <p className="mb-4 text-sm md:text-base ">
                  {selectedCard.popUp}
                </p>
                {/* <div className="mt-4">
                  <span className="text-gray-700 sm:text-sm text-xs">
                    {selectedCard.type}
                  </span>
                </div> */}
              </div>
            </div>
          )}

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? "bg-slate-700"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysiotherapySection;
