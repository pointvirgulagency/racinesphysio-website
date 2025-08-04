import React from "react";
import Image from "next/image";
import Link from "next/link";

const SportsReeducationCards = () => {
  const cards = [
    {
      id: 1,
      title: "La rééducation sportive",
      description:
        "Conseils et techniques avancées pour soulager les inconforts liés à la grossesse",
      image: "/images/blogone.png",
      height: "h-64", // 2 rows
    },
    {
      id: 2,
      title: "La rééducation sportive",
      description: "Pour soulager les inconforts liés à la grossesse",
      image: "/images/blogone.png",
      height: "h-32", // 1 row
    },
    {
      id: 3,
      title: "La rééducation sportive",
      description:
        "Conseils et techniques avancées pour soulager les inconforts liés à la grossesse",
      image: "/api/placeholder/300/250",
      height: "h-96", // 3 rows
    },
    {
      id: 4,
      title: "La rééducation sportive",
      description:
        "Conseils et techniques avancées pour soulager les inconforts liés à la grossesse",
      image: "/api/placeholder/300/120",
      height: "h-32", // 1 row
    },
    {
      id: 5,
      title: "La rééducation sportive",
      description:
        "Conseils et techniques avancées pour soulager les inconforts liés à la grossesse",
      image: "/api/placeholder/300/200",
      height: "h-64", // 2 rows
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen xl1440:mt-40 mt-14">
      <div className="grid xl1440:grid-cols-3 gap-4 h-fit">
        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          {/* Card 1 - 2 rows */}
          <Link href={"/blog/blogone"}>
            <div
              className="relative bg-white rounded-3xl overflow-hidden shadow-lg h-80 group cursor-pointer 
                transform transition-transform duration-300 ease-in-out 
                hover:scale-105"
            >
              <Image
                src="/images/blog/1.png"
                alt="Sports rehabilitation"
                className="w-full h-full object-cover"
                width={300}
                height={150}
              />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-main        /20 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                <h3 className="text-lg font-semibold mb-2">
                  La rééducation sportive
                </h3>
                <p className="text-sm opacity-90">
                  Conseils et techniques avancées pour soulager les inconforts
                  liés à la grossesse
                </p>
              </div>
            </div>
          </Link>

          {/* Card 2 - 1 row */}
          <Link href={"/blog/blogone"}>
            <div
              className="relative bg-white rounded-3xl overflow-hidden shadow-lg h-48 group cursor-pointer transform transition-transform duration-300 ease-in-out 
                hover:scale-105"
            >
              <Image
                src="/images/blog/2.png"
                alt="Sports rehabilitation"
                className="w-full h-full object-cover"
                width={300}
                height={150}
              />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-main        /20 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                <h3 className="text-base font-semibold mb-1">
                  La rééducation sportive
                </h3>
                <p className="text-xs opacity-90">
                  Pour soulager les inconforts liés à la grossesse
                </p>
              </div>
            </div>
          </Link>
        </div>
        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          {/* Card 3 - 3 rows */}
          <Link href={"/blog/blogone"}>
            <div
              className="relative bg-white rounded-3xl overflow-hidden shadow-lg h-[33rem] group cursor-pointer transform transition-transform duration-300 ease-in-out 
                hover:scale-105"
            >
              <Image
                src="/images/blog/3.png"
                alt="Sports rehabilitation"
                className="w-full h-full object-cover"
                width={300}
                height={150}
              />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-main        /20 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                <h3 className="text-lg font-semibold mb-2">
                  La rééducation sportive
                </h3>
                <p className="text-sm opacity-90">
                  Conseils et techniques avancées pour soulager les inconforts
                  liés à la grossesse
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4">
          {/* Card 4 - 1 row */}
          <Link href={"/blog/blogone"}>
            <div
              className="relative bg-white rounded-3xl overflow-hidden shadow-lg h-48 group cursor-pointer transform transition-transform duration-300 ease-in-out 
                hover:scale-105"
            >
              <Image
                src="/images/blog/4.png"
                alt="Sports rehabilitation"
                className="w-full h-full object-cover"
                width={300}
                height={150}
              />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-main        /20 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                <h3 className="text-base font-semibold mb-1">
                  La rééducation sportive
                </h3>
                <p className="text-xs opacity-90">
                  Conseils et techniques avancées pour soulager les inconforts
                  liés à la grossesse
                </p>
              </div>
            </div>
          </Link>
          {/* Card 5 - 2 rows */}
          <Link href={"/blog/blogone"}>
            <div
              className="relative bg-white rounded-3xl overflow-hidden shadow-lg h-80 group cursor-pointer 
                transform transition-transform duration-300 ease-in-out 
                hover:scale-105"
            >
              <Image
                src="/images/blog/5.png"
                alt="Sports rehabilitation"
                className="w-full h-full object-cover"
                width={300}
                height={200}
              />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-main/20 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                <h3 className="text-lg font-semibold mb-2">
                  La rééducation sportive
                </h3>
                <p className="text-sm opacity-90">
                  Conseils et techniques avancées pour soulager les inconforts
                  liés à la grossesse
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SportsReeducationCards;
