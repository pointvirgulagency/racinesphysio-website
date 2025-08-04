import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";

// The data for your testimonials. You can easily add or remove items here.
const testimonials = [
  {
    rating: 5.0,
    title: "Service Impeccable",
    text: "“Personnel extrêmement compétent et sympathique. Prise en charge et suivi adapté à mes problèmes d’épaules. Véritable soin apporté à expliquer et corriger les habitudes quotidiennes qui conduisent à avoir mal. Matériel et technique de soin de grande qualité. Je conseille, sans aucune réserve”",
    avatar: "/images/avatar.png",
    name: "Khadija TOURABI",
  },
  {
    rating: 5.0,
    title: "Équipe Dévouée",
    text: "“Une équipe très professionnelle et toujours à l’écoute. Merci beaucoup pour le travail que vous faites. Je vous souhaite une bonne continuation”",
    avatar: "/images/avatar.png",
    name: "Mohammed ZAHAR",
  },
  {
    rating: 5.0,
    title: "Kiné Exceptionnelle",
    text: "“Ce cabinet est un trésor caché à Sala Al Jadida. Un havre de paix où chaque séance est un moment de détente et de soulagement. Mme Hajar est une véritable perle, son professionnalisme, sa douceur et son écoute font toute la différence. On ressort toujours de chez elle avec un réel bien-être. Une kiné exceptionnelle que je recommande sans hésiter !”",
    avatar: "/images/avatar.png",
    name: "Wafae IDOUMJOUD",
  },
];

export default function TestimonialSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  return (
    <div className="py-16 sm:py-24">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {testimonials.map((testimonial, index) => (
            <div className="embla__slide" key={index}>
              {/* CHANGED: Replaced h-full with fixed height h-[400px] */}
              <div className="flex xl1440:h-[400px] h-auto flex-col cursor-pointer rounded-xl bg-[#D1EBE3] xl1440:p-8 px-6 py-8 shadow-lg justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-main">
                    {testimonial.rating}
                  </span>
                  <span className="text-yellow-500 text-xl">★</span>
                </div>
                <div>
                  <h3 className="mt-4 xl1440:text-2xl xl font-bold text-[#2F5859]">
                    {testimonial.title}
                  </h3>
                  <p className="mt-2 text-main leading-relaxed font-medium text-sm xl1440:text-lg">
                    {testimonial.text}
                  </p>
                </div>
                <div className="pt-8 pb-4">
                  <div className="flex items-center gap-4">
                    {/* <Image
                      src={testimonial.avatar}
                      alt={`Avatar of ${testimonial.name}`}
                      className="xl1440:h-14 xl1440:w-14 w-10 h-10 rounded-full object-cover"
                      width={56}
                      height={56}
                    /> */}
                    <div>
                      <p className="font-bold text-sm xl1440:text-lg text-[#1E3A3A]">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[#1E3A3A]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 572px;
          min-width: 0;
          padding-left: 1rem;
        }

        @media (max-width: 639px) {
          .embla__slide {
            flex: 0 0 290px;
          }
        }
      `}</style>
    </div>
  );
}
