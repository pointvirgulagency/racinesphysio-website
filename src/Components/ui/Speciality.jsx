import { useState, useEffect } from "react";

// Shared styles for the cards to keep the code DRY
const cardTransitionStyle = {
  // CHANGED: Added `transform` to the transition list for a smooth hover effect
  transition:
    "flex 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94), background-position 2000ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 300ms ease-in-out",
};

const CARD_COUNT = 3; // Total number of cards
const AUTOPLAY_DELAY = 3000; // Delay in milliseconds (3 seconds)

export default function AnimatedGrid() {
  const [expandedDiv, setExpandedDiv] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (isAutoPlay) {
      const intervalId = setInterval(() => {
        setExpandedDiv(prevExpandedDiv => (prevExpandedDiv + 1) % CARD_COUNT);
      }, AUTOPLAY_DELAY);

      return () => clearInterval(intervalId);
    }
  }, [isAutoPlay]);

  const handleDivClick = index => {
    setIsAutoPlay(false);
    setExpandedDiv(index);
  };

  return (
    <div className="xl1440:p-8 min-h-screen mt-10">
      <div className="flex xl1440:gap-4 gap-1">
        {/* Card One */}
        <div
          className={`xl1440:h-[46rem] h-[26rem] xl1440:rounded-3xl rounded-xl cursor-pointer shadow-lg hover:shadow-xl overflow-hidden transform bg-white relative ${
            expandedDiv === 0 ? "flex-[2]" : "flex-[1] hover:scale-x-105"
          }`}
          style={{
            ...cardTransitionStyle,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/card1.jpg')`,
            backgroundSize: "800px 736px",
            backgroundPosition:
              expandedDiv === 0 ? "left center" : "center center",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => handleDivClick(0)}
        >
          <div className="p-6 h-full flex flex-col justify-center items-center">
            <h3
              className={` xl1440:text-lg text-sm/5 px-2 font-semibold text-white drop-shadow-lg transition-opacity duration-300 ${
                expandedDiv === 0 ? "opacity-0" : "opacity-100"
              }`}
            >
              Rééducation Fonctionnelle
            </h3>
            <div
              className={`absolute p-6 text-center transition-all ease-in-out ${
                expandedDiv === 0
                  ? "opacity-100 translate-y-0 duration-700 delay-[600ms]"
                  : "opacity-0 translate-y-8 duration-200"
              }`}
            >
              <h3 className="xl1440:text-2xl font-semibold text-white drop-shadow-lg hidden xl1440:block">
                Rééducation Fonctionnelle
              </h3>
              <p className="text-white drop-shadow-md xl1440:mt-2 xl1440:px-14 xl1440:text-xl text-sm">
                Restaurez force, équilibre et mobilité après une blessure, une
                opération ou une maladie. Nos techniques visent une reprise
                d'activité normale et sans douleur.
              </p>
            </div>
          </div>
        </div>

        {/* Card Two */}
        <div
          className={`xl1440:h-[46rem] h-[26rem] xl1440:rounded-3xl rounded-xl cursor-pointer shadow-lg hover:shadow-xl overflow-hidden transform bg-white relative ${
            expandedDiv === 1 ? "flex-[2]" : "flex-[1] hover:scale-x-105"
          }`}
          style={{
            ...cardTransitionStyle,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/card2.jpg')`,
            backgroundSize: "800px 736px",
            backgroundPosition:
              expandedDiv === 1 ? "left center" : "center center",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => handleDivClick(1)}
        >
          <div className="p-6 h-full flex flex-col justify-center items-center">
            <h3
              className={` xl1440:text-lg font-semibold text-white text-sm/5 px-2 drop-shadow-lg transition-opacity duration-300 ${
                expandedDiv === 1 ? "opacity-0" : "opacity-100"
              }`}
            >
              Thérapie Manuelle
            </h3>
            <div
              className={`absolute p-6 text-center transition-all ease-in-out ${
                expandedDiv === 1
                  ? "opacity-100 translate-y-0 duration-700 delay-[600ms]"
                  : "opacity-0 translate-y-8 duration-200"
              }`}
            >
              <h3 className="text-2xl font-semibold text-white drop-shadow-lg hidden xl1440:block">
                Thérapie Manuelle
              </h3>
              <p className="text-white drop-shadow-md xl1440:mt-2 xl1440:px-14 xl1440:text-xl text-sm">
                Techniques de manipulation pour réduire la douleur, améliorer la
                mobilité et restaurer la fonction articulaire et musculaire.
              </p>
            </div>
          </div>
        </div>

        {/* Card Three */}
        <div
          className={`xl1440:h-[46rem] h-[26rem] xl1440:rounded-3xl rounded-xl cursor-pointer shadow-lg hover:shadow-xl overflow-hidden transform bg-white relative ${
            expandedDiv === 2 ? "flex-[2]" : "flex-[1] hover:scale-x-105"
          }`}
          style={{
            ...cardTransitionStyle,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/card3.jpg')`,
            backgroundSize: "800px 736px",
            backgroundPosition:
              expandedDiv === 2 ? "left center" : "center center",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => handleDivClick(2)}
        >
          <div className="p-6 h-full flex flex-col justify-center items-center">
            <h3
              className={` xl1440:text-lg text-sm/5 px-2 font-semibold text-white drop-shadow-lg transition-opacity duration-300 ${
                expandedDiv === 2 ? "opacity-0" : "opacity-100"
              }`}
            >
              Kinésithérapie Respiratoire
            </h3>
            <div
              className={`absolute p-6 text-center transition-all ease-in-out ${
                expandedDiv === 2
                  ? "opacity-100 translate-y-0 duration-700 delay-[600ms]"
                  : "opacity-0 translate-y-8 duration-200"
              }`}
            >
              <h3 className="text-2xl font-semibold text-white drop-shadow-lg hidden xl1440:block">
                Kinésithérapie Respiratoire
              </h3>
              <p className="text-white drop-shadow-md xl1440:mt-2 xl1440:px-14 text-sm xl1440:text-xl">
                Spécialisée pour adultes et enfants, elle améliore la
                ventilation pulmonaire et aide à désencombrer les voies
                respiratoires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
