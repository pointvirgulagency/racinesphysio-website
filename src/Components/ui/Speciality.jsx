import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// --- Data for all cards (no changes) ---
const cardsData = [
  {
    title: "Rééducation Fonctionnelle",
    description:
      "Restaurez force, équilibre et mobilité après une blessure, une opération ou une maladie. Nos techniques visent une reprise d’activité normale et sans douleur.",
    imageUrl: "/images/nostraitment/1.jpg",
  },
  {
    title: "Thérapie Manuelle",
    description:
      "Techniques de manipulation pour réduire la douleur, améliorer la mobilité et restaurer la fonction articulaire et musculaire.",
    imageUrl: "/images/nostraitment/2.jpg",
  },
  {
    title: "Kinésithérapie Respiratoire",
    description:
      "Spécialisée pour adultes et enfants, elle améliore la ventilation pulmonaire et aide à désencombrer les voies respiratoires.",
    imageUrl: "/images/nostraitment/3.jpg",
  },
  {
    title: "Réadaptation Cardiorespiratoire",
    description:
      "Prise en charge pour retrouver la fonction cardiorespiratoire après des maladies ou chirurgies du cœur et des poumons.",
    imageUrl: "/images/nostraitment/4.jpg",
  },
  {
    title: "Activité Physique Adaptée",
    description:
      "Programme personnalisé avec des exercices sur-mesure pour traiter ou prévenir des maladies chroniques comme le diabète, l’ostéoporose ou l’arthrose.",
    imageUrl: "/images/nostraitment/5.jpg",
  },
  {
    title: "Drainage Lymphatique",
    description:
      "Technique manuelle ou mécanique, pour réduire les œdèmes et améliorer la circulation veineuse.",
    imageUrl: "/images/nostraitment/6.jpg",
  },
  {
    title: "Dry Needling",
    description:
      "Utilisation d'aiguilles pour soulager les tensions musculaires et réduire les douleurs chroniques.",
    imageUrl: "/images/nostraitment/7.jpg",
  },
  {
    title: "Bandage et Strapping",
    description:
      "Stabilisation des articulations ou muscles pour prévenir les blessures et faciliter la récupération.",
    imageUrl: "/images/nostraitment/8.jpg",
  },
  {
    title: "Rééducation Périnéale",
    description:
      "Prise en charge pré et post-partum pour renforcer le périnée et prévenir ou traiter les troubles urinaires.",
    imageUrl: "/images/nostraitment/9.png",
  },
  {
    title: "Cupping Thérapie",
    description:
      "Pose de ventouses pour améliorer la circulation, réduire les douleurs et favoriser la récupération.",
    imageUrl: "/images/nostraitment/10.jpg",
  },
];

// --- Styles and Constants (no changes) ---
const cardTransitionStyle = {
  transition:
    "flex 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94), background-position 2000ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 300ms ease-in-out",
};
const CARDS_PER_VIEW = 3;
const AUTOPLAY_DELAY = 4000;

export default function AnimatedCarousel() {
  // --- State and Functions (no changes) ---
  const [expandedDiv, setExpandedDiv] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isAutoPlay) {
      const intervalId = setInterval(() => {
        setExpandedDiv(prev => (prev + 1) % CARDS_PER_VIEW);
      }, AUTOPLAY_DELAY);
      return () => clearInterval(intervalId);
    }
  }, [isAutoPlay]);

  const handleDivClick = index => {
    setIsAutoPlay(false);
    setExpandedDiv(index);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setExpandedDiv(0);
    setCurrentIndex(prev =>
      Math.min(prev + 1, cardsData.length - CARDS_PER_VIEW)
    );
  };

  const handlePrev = () => {
    setIsAutoPlay(false);
    setExpandedDiv(0);
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const visibleCards = cardsData.slice(
    currentIndex,
    currentIndex + CARDS_PER_VIEW
  );

  // --- UPDATED JSX with Responsive Buttons ---
  return (
    <div className="xl1440:p-8 min-h-screen mt-10 flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-full max-w-screen-xl px-4">
        {/* Main Content: Side Buttons (Desktop) + Card Grid */}
        <div className="flex items-center justify-center w-full gap-2 xl1440:gap-4">
          {/* Previous Button (for Desktop) */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="hidden md:block p-2 rounded-full bg-white/30 hover:bg-white/50 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity self-center"
          >
            <ChevronLeftIcon className="h-6 w-6 xl1440:h-8 xl1440:w-8 text-white" />
          </button>

          {/* Cards Container (this is always visible) */}
          <div className="flex xl1440:gap-4 gap-1 w-full">
            {visibleCards.map((card, index) => (
              <div
                key={card.title}
                className={`xl1440:h-[46rem] h-[26rem] xl1440:rounded-3xl rounded-xl cursor-pointer shadow-lg hover:shadow-xl overflow-hidden transform bg-white relative ${
                  expandedDiv === index
                    ? "flex-[2]"
                    : "flex-[1] hover:scale-x-105"
                }`}
                style={{
                  ...cardTransitionStyle,
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${card.imageUrl}')`,
                  backgroundSize: "cover",
                  backgroundPosition:
                    expandedDiv === index ? "left center" : "center center",
                  backgroundRepeat: "no-repeat",
                }}
                onClick={() => handleDivClick(index)}
              >
                <div className="p-6 h-full flex flex-col justify-center items-center">
                  <h3
                    className={`xl1440:text-lg text-sm/5 px-2 font-semibold text-white drop-shadow-lg transition-opacity duration-300 text-center ${
                      expandedDiv === index ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <div
                    className={`absolute p-6 text-center transition-all ease-in-out ${
                      expandedDiv === index
                        ? "opacity-100 translate-y-0 duration-700 delay-[600ms]"
                        : "opacity-0 translate-y-8 duration-200"
                    }`}
                  >
                    <h3 className="xl1440:text-2xl font-semibold text-white drop-shadow-lg hidden xl1440:block">
                      {card.title}
                    </h3>
                    <p className="text-white drop-shadow-md xl1440:mt-2 xl1440:px-14 xl1440:text-xl text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button (for Desktop) */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= cardsData.length - CARDS_PER_VIEW}
            className="hidden md:block p-2 rounded-full bg-white/30 hover:bg-white/50 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity self-center"
          >
            <ChevronRightIcon className="h-6 w-6 xl1440:h-8 xl1440:w-8 text-white" />
          </button>
        </div>

        {/* Navigation Buttons (for Mobile) */}
        <div className="flex md:hidden justify-center gap-8 mt-6">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 rounded-full bg-white/30 hover:bg-white/50 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
          >
            <ChevronLeftIcon className="h-8 w-8 text-white" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= cardsData.length - CARDS_PER_VIEW}
            className="p-2 rounded-full bg-white/30 hover:bg-white/50 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
          >
            <ChevronRightIcon className="h-8 w-8 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
