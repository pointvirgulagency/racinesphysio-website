import React from "react";
import Image from "next/image";
import Accompagnement from "../../../public/images/icons/Accompagnement.svg";
import Innovation from "../../../public/images/icons/Innovation.svg";
import Reeducation from "../../../public/images/icons/Reeducation.svg";

function Nosmissions() {
  return (
    <>
      {/* desk */}
      <div className="xl1440:flex items-center justify-center gap-10 py-20 hidden">
        <div className="relative transform transition-transform duration-300 hover:scale-110">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-36 h-36 rounded-full flex items-center justify-center">
            <Image
              src={Reeducation}
              alt="Reeducation icon"
              className="object-contain"
            />
          </div>

          <div
            className="text-center bg-white rounded-[45px] relative overflow-visible w-80 h-80 flex items-center justify-center"
            style={{
              maskImage:
                "radial-gradient(circle at 50% 0%, transparent 88px, black 41px)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 0%, transparent 88px, black 41px)",
            }}
          >
            <div className="flex flex-col items-center justify-center pt-28 py-10 gap-2">
              <h3 className=" text-xl text-main font-bold">Rééducation</h3>
              <p className="w-[60%] text-textP text-base">
                Améliorer la santé physique avec des soins innovants.
              </p>
            </div>
          </div>
        </div>
        {/* */}
        <div className="relative transform transition-transform duration-300 hover:scale-110">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-36 h-36 rounded-full flex items-center justify-center">
            <Image
              src={Innovation}
              alt="Innovation icon"
              className="object-contain"
            />
          </div>

          <div
            className="text-center bg-white rounded-[45px] relative overflow-visible w-80 h-80 flex items-center justify-center"
            style={{
              maskImage:
                "radial-gradient(circle at 50% 0%, transparent 88px, black 41px)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 0%, transparent 88px, black 41px)",
            }}
          >
            <div className="flex flex-col items-center justify-center pt-28 py-10 gap-2">
              <h3 className=" text-xl text-main font-bold">Prévention</h3>
              <p className="w-[60%] text-textP text-base">
                Agir en amont pour éviter l'apparition ou la récidive des
                troubles physiques.
              </p>
            </div>
          </div>
        </div>
        {/* */}
        <div className="relative transform transition-transform duration-300 hover:scale-110">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-36 h-36 rounded-full flex items-center justify-center">
            <Image
              src={Accompagnement}
              alt="Accompagnement icon"
              className="object-contain"
            />
          </div>

          <div
            className="text-center bg-white rounded-[45px] relative overflow-visible w-80 h-80 flex items-center justify-center"
            style={{
              maskImage:
                "radial-gradient(circle at 50% 0%, transparent 88px, black 41px)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 0%, transparent 88px, black 41px)",
            }}
          >
            <div className="flex flex-col items-center justify-center pt-28 py-10 gap-2">
              <h3 className=" text-xl text-main font-bold">Innovation</h3>
              <p className="w-[60%] text-textP text-base">
                Utiliser des techniques modernes basées sur la science.
              </p>
            </div>
          </div>
        </div>
        {/* */}
        <div className="relative transform transition-transform duration-300 hover:scale-110">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-36 h-36 rounded-full flex items-center justify-center">
            <Image
              src={Innovation}
              alt="Innovation icon"
              className="object-contain"
            />
          </div>

          <div
            className="text-center bg-white rounded-[45px] relative overflow-visible w-80 h-80 flex items-center justify-center"
            style={{
              maskImage:
                "radial-gradient(circle at 50% 0%, transparent 88px, black 41px)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 0%, transparent 88px, black 41px)",
            }}
          >
            <div className="flex flex-col items-center justify-center pt-28 py-10 gap-2">
              <h3 className=" text-xl text-main font-bold">Accompagnement</h3>
              <p className="w-[60%] text-textP text-base">
                Offrir un suivi personnalisé tout au long du parcours de soin.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex flex-col gap-20 items-center justify-center xl1440:hidden">
        <div className="flex flex-col gap-20">
          <div className="relative transform transition-transform duration-300 hover:scale-110">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-24 h-24 rounded-full flex items-center justify-center">
              <Image
                src={Reeducation}
                alt="Reeducation icon"
                className="object-contain w-14 h-14"
              />
            </div>

            <div
              className="text-center bg-white rounded-[45px] relative overflow-visible w-60 h-72 flex items-center justify-center"
              style={{
                maskImage:
                  "radial-gradient(circle at 50% 0%, transparent 68px, black 41px)",
                WebkitMaskImage:
                  "radial-gradient(circle at 50% 0%, transparent 68px, black 41px)",
              }}
            >
              <div className="flex flex-col items-center justify-center pt-28 py-10 gap-2">
                <h3 className=" text-xl text-main font-bold">Rééducation</h3>
                <p className="w-[60%] text-textP text-base">
                  Améliorer la santé physique avec des soins innovants.
                </p>
              </div>
            </div>
          </div>
          {/* */}
          <div className="relative transform transition-transform duration-300 hover:scale-110">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-24 h-24 rounded-full flex items-center justify-center">
              <Image
                src={Reeducation}
                alt="Reeducation icon"
                className="object-contain w-14 h-14"
              />
            </div>

            <div
              className="text-center bg-white rounded-[45px] relative overflow-visible w-60 h-72 flex items-center justify-center"
              style={{
                maskImage:
                  "radial-gradient(circle at 50% 0%, transparent 68px, black 41px)",
                WebkitMaskImage:
                  "radial-gradient(circle at 50% 0%, transparent 68px, black 41px)",
              }}
            >
              <div className="flex flex-col items-center justify-center pt-28 py-10 gap-2">
                <h3 className=" text-xl text-main font-bold">Prévention</h3>
                <p className="w-[60%] text-textP text-base">
                  Agir en amont pour éviter l'apparition ou la récidive des
                  troubles physiques.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Second row */}
        <div className="flex flex-col gap-20">
          <div className="relative transform transition-transform duration-300 hover:scale-110">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-24 h-24 rounded-full flex items-center justify-center">
              <Image
                src={Reeducation}
                alt="Reeducation icon"
                className="object-contain w-14 h-14"
              />
            </div>

            <div
              className="text-center bg-white rounded-[45px] relative overflow-visible w-60 h-72 flex items-center justify-center"
              style={{
                maskImage:
                  "radial-gradient(circle at 50% 0%, transparent 68px, black 41px)",
                WebkitMaskImage:
                  "radial-gradient(circle at 50% 0%, transparent 68px, black 41px)",
              }}
            >
              <div className="flex flex-col items-center justify-center pt-28 py-10 gap-2">
                <h3 className=" text-xl text-main font-bold">Innovation</h3>
                <p className="w-[60%] text-textP text-base">
                  Utiliser des techniques modernes basées sur la science.
                </p>
              </div>
            </div>
          </div>
          {/* */}
          <div className="relative transform transition-transform duration-300 hover:scale-110">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-24 h-24 rounded-full flex items-center justify-center">
              <Image
                src={Reeducation}
                alt="Reeducation icon"
                className="object-contain w-14 h-14"
              />
            </div>

            <div
              className="text-center bg-white rounded-[45px] relative overflow-visible w-60 h-72 flex items-center justify-center"
              style={{
                maskImage:
                  "radial-gradient(circle at 50% 0%, transparent 68px, black 41px)",
                WebkitMaskImage:
                  "radial-gradient(circle at 50% 0%, transparent 68px, black 41px)",
              }}
            >
              <div className="flex flex-col items-center justify-center pt-28 py-10 gap-2">
                <h3 className=" text-xl text-main font-bold">Accompagnement</h3>
                <p className="w-[60%] text-textP text-base">
                  Offrir un suivi personnalisé tout au long du parcours de soin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nosmissions;
