"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
        {/* Add the MobileCards component here */}
        <MobileCards />
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className=" xl1440:max-w-5xl xl1440:mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({ rotate, scale, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
        willChange: "transform",
        transformStyle: "preserve-3d",
        overflow: "visible",
      }}
      className="relative xl1440:max-w-[58rem] mt-[70rem] xl1440:mt-60 xl1440:mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#d5d5d5] p-2 md:p-6 bg-[#2F5859] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl md:rounded-2xl">
        {children}
        <div className="h-full w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26458.106049596907!2d-6.757799132497517!3d34.011452924102926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda740331c555555%3A0x73be5d84a2f9cecf!2sCabinet%20racines%20de%20physio-kin%C3%A9sith%C3%A9rapie!5e0!3m2!1sen!2sma!4v1751021104134!5m2!1sen!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          />
        </div>
      </div>
      {/* Cards Desk */}
      <div className="hidden xl1440:block">
        {/* Left Decorations - Fixed positioning with forced styling */}
        <div
          className="absolute top-1/2 w-24 h-10 border-t-4 border-white border-dashed"
          style={{
            position: "absolute",
            top: "50%",
            left: "-100px",
            transform: "translateY(-50%)",
            zIndex: 1000,
          }}
        ></div>
        <div
          className="absolute w-14 h-14 rounded-full bg-white"
          style={{
            position: "absolute",
            top: "300px",
            left: "-140px",
            transform: "translateY(-50%)",
            zIndex: 1000,
          }}
        >
          <div className="flex justify-center items-center h-full">
            <Image
              src="/images/icons/tramway.svg"
              alt="Tramway Icon"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div
          className="absolute w-48 h-10 border-t-4 border-white border-dashed"
          style={{
            position: "absolute",
            top: "420px",
            left: "-190px",
            transform: "translateY(-50%) rotate(-90deg)",
            zIndex: 1000,
          }}
        ></div>
        <div
          className="absolute w-44 h-56 bg-white rounded-3xl"
          style={{
            position: "absolute",
            top: "520px",
            left: "-210px",
            transform: "translateY(-50%)",
            zIndex: 1000,
          }}
        >
          <div className="flex flex-col items-center justify-center h-full p-4 text-center gap-2">
            <h6 className="font-bold text-main text-lg">En tramway</h6>
            <p className="text-sm text-textP">
              Prenez le Tram T1 jusqu'au terminus Hôpital Moulay Abdellah, puis
              marchez 15 min ou prenez un grand taxi (5 min) jusqu'au cabinet.
            </p>
          </div>
        </div>

        {/* Right Decorations - Fixed positioning with forced styling */}
        <div
          className="absolute top-1/2 w-24 h-10 border-t-4 border-white border-dashed"
          style={{
            position: "absolute",
            top: "50%",
            right: "-100px",
            transform: "translateY(-50%)",
            zIndex: 1000,
          }}
        ></div>
        <div
          className="absolute w-14 h-14 rounded-full bg-white"
          style={{
            position: "absolute",
            top: "300px",
            right: "-140px",
            transform: "translateY(-50%)",
            zIndex: 1000,
          }}
        >
          <div className="flex justify-center items-center h-full">
            <Image
              src="/images/icons/taxi.svg"
              alt="Taxi Icon"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div
          className="absolute w-48 h-10 border-t-4 border-white border-dashed"
          style={{
            position: "absolute",
            top: "420px",
            right: "-230px",
            transform: "translateY(-50%) rotate(-90deg)",
            zIndex: 1000,
          }}
        ></div>
        <div
          className="absolute w-44 h-56 bg-white rounded-3xl"
          style={{
            position: "absolute",
            top: "520px",
            right: "-210px",
            transform: "translateY(-50%)",
            zIndex: 1000,
          }}
        >
          <div className="flex flex-col items-center justify-center h-full p-4 text-center gap-2">
            <h6 className="font-bold text-main text-lg">En Taxi</h6>
            <p className="text-sm text-textP">
              Grands taxis disponibles depuis le terminus du tramway ou les
              quartiers voisins. Petits taxis accessibles dans toute la ville de
              Salé.
            </p>
          </div>
        </div>

        {/* Bottom Right Decorations - Fixed positioning with forced styling */}
        <div
          className="absolute w-48 h-10 border-t-4 border-white border-dashed"
          style={{
            position: "absolute",
            bottom: "-280px",
            right: "190px",
            transform: "translateY(-50%)",
            zIndex: 1000,
          }}
        ></div>
        <div
          className="absolute w-14 h-14 rounded-full bg-white"
          style={{
            position: "absolute",
            bottom: "-280px",
            right: "385px",
            transform: "translateY(-50%)",
            zIndex: 1000,
          }}
        >
          <div className="flex justify-center items-center h-full">
            <Image
              src="/images/icons/car.svg"
              alt="Car Icon"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div
          className="absolute w-48 h-10 border-t-4 border-white border-dashed"
          style={{
            position: "absolute",
            bottom: "-140px",
            right: "300px",
            transform: "translateY(-50%) rotate(-90deg)",
            zIndex: 1000,
          }}
        ></div>
        <div
          className="absolute w-44 h-56 bg-white rounded-3xl"
          style={{
            position: "absolute",
            bottom: "-500px",
            right: "50px",
            transform: "translateY(-50%)",
            zIndex: 1000,
          }}
        >
          <div className="flex flex-col items-center justify-center h-full p-4 text-center gap-2">
            <h6 className="font-bold text-main text-lg">En voiture</h6>
            <p className="text-sm text-textP">
              Stationnement gratuit dans le quartier résidentiel.
            </p>
          </div>
        </div>

        {/* Bottom Left Decorations - Fixed positioning with forced styling */}
        <div
          className="absolute w-48 h-10 border-t-4 border-white border-dashed"
          style={{
            position: "absolute",
            bottom: "-230px",
            left: "150px",
            transform: "translateY(-50%)",
            zIndex: 1000,
          }}
        ></div>
        <div
          className="absolute w-14 h-14 rounded-full bg-white"
          style={{
            position: "absolute",
            bottom: "-230px",
            left: "345px",
            transform: "translateY(-50%)",
            zIndex: 1000,
          }}
        >
          <div className="flex justify-center items-center h-full">
            <Image
              src="/images/icons/bus.svg"
              alt="bus Icon"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div
          className="absolute w-36 h-10 border-t-4 border-white border-dashed"
          style={{
            position: "absolute",
            bottom: "-112px",
            left: "320px",
            transform: "translateY(-50%) rotate(-90deg)",
            zIndex: 1000,
          }}
        ></div>
        <div
          className="absolute w-44 h-56 bg-white rounded-3xl"
          style={{
            position: "absolute",
            bottom: "-460px",
            left: "0px",
            transform: "translateY(-50%)",
            zIndex: 1000,
          }}
        >
          <div className="flex flex-col items-center justify-center h-full p-4 text-center gap-2">
            <h6 className="font-bold text-main text-lg">En bus</h6>
            <p className="text-sm text-textP">
              Les lignes L204, L201 L9 et L10 desservent l'arrêt “ Résidence
              Maamoura” Sala Al Jadida. Le cabinet est à quelques mètres.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Separate Mobile Cards Component
export const MobileCards = () => {
  return (
    <div className="xl1440:hidden flex gap-3 flex-col items-center justify-center px-3 py-8 max-w-full">
      {/* Row 1 */}
      <div className="flex flex-col gap-3 justify-center items-center w-full">
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center w-full max-w-xs">
          <div className="w-12 h-12 bg-white rounded-full -mb-1 flex justify-center items-center">
            <Image
              src="/images/icons/tramway.svg"
              alt="Tramway Icon"
              width={24}
              height={24}
            />
          </div>
          <div className="bg-white w-full rounded-3xl flex flex-col items-center gap-1 px-3 py-3">
            <h6 className="text-base font-semibold text-main">En Tramway</h6>
            <p className="text-xs text-main opacity-90 text-center leading-relaxed">
              Prenez le Tram T1 jusqu'au terminus Hôpital Moulay Abdellah, puis
              marchez 15 min ou prenez un grand taxi (5 min) jusqu'au cabinet.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center w-full max-w-xs">
          <div className="w-12 h-12 bg-white rounded-full -mb-1 flex justify-center items-center">
            <Image
              src="/images/icons/taxi.svg"
              alt="Taxi Icon"
              width={24}
              height={24}
            />
          </div>
          <div className="bg-white w-full rounded-3xl flex flex-col items-center gap-1 px-3 py-3">
            <h6 className="text-base font-semibold text-main">En Taxi</h6>
            <p className="text-xs text-main opacity-90 text-center leading-relaxed">
              Grands taxis disponibles depuis le terminus du tramway ou les
              quartiers voisins. Petits taxis accessibles dans toute la ville de
              Salé.
            </p>
          </div>
        </div>
      </div>
      {/* row 2 */}
      <div className="flex flex-col gap-3 justify-center items-center w-full">
        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center w-full max-w-xs">
          <div className="w-12 h-12 bg-white rounded-full -mb-1 flex justify-center items-center">
            <Image
              src="/images/icons/car.svg"
              alt="Car Icon"
              width={24}
              height={24}
            />
          </div>
          <div className="bg-white w-full rounded-3xl flex flex-col items-center gap-1 px-3 py-3">
            <h6 className="text-base font-semibold text-main">En voiture</h6>
            <p className="text-xs text-main opacity-90 text-center leading-relaxed">
              Stationnement gratuit dans le quartier résidentiel.
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="flex flex-col items-center justify-center w-full max-w-xs">
          <div className="w-12 h-12 bg-white rounded-full -mb-1 flex justify-center items-center">
            <Image
              src="/images/icons/bus.svg"
              alt="Bus Icon"
              width={24}
              height={24}
            />
          </div>
          <div className="bg-white w-full rounded-3xl flex flex-col items-center gap-1 px-3 py-3">
            <h6 className="text-base font-semibold text-main">En bus</h6>
            <p className="text-xs text-main opacity-90 text-center leading-relaxed">
              Les lignes L204, L201 L9 et L10 desservent l'arrêt “ Résidence
              Maamoura” Sala Al Jadida. Le cabinet est à quelques mètres.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerScroll;
