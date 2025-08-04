import { motion } from "framer-motion";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import InstaPreview from "@/Components/InstaPreviewTwo";
import Image from "next/image";
import Footer from "@/Components/Footer";

function BeforeFooter() {
  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeInOut" },
    viewport: { once: true }, // Animation will only play once
  };
  return (
    <>
      <section className="xl1440:mt-80 mt-96 ">
        <div className="absolute hidden xl1440:block">
          <div className="w-full h-screen relative z-10">
            <Image
              src="/images/beforefooter.svg"
              alt="Hero Background"
              width={1900}
              height={800}
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
        {/* Mobile BG */}
        <div className="absolute r440:hidden">
          <div className="w-full h-screen relative z-10">
            <Image
              src="/images/mobilefooterbg.svg"
              alt="Hero Background"
              width={1900}
              height={800}
              className="object-contain object-center"
              priority
            />
          </div>
        </div>

        <motion.div
          {...sectionAnimation}
          className="relative z-20 xl1440:px-36 xl1440:mt-44 flex flex-col"
        >
          <div className="relative flex flex-col xl1440:w-1/2 gap-8 justify-center items-center xl1440:m-auto text-center xl1440:mt-72 z-30 mt-24">
            <h2 className="text-main font-semibold xl1440:text-5xl text-2xl xl1440:leading-[3.5rem]">
              Prêt à commencer votre <br /> parcours de guérison?
            </h2>
            <p className=" text-main opacity-50 xl1440:text-lg text-base  font-medium mb-2">
              Vous êtes à un clic de votre nouvelle vie sans douleurs.
              Rendez-vous dès aujourd'hui pour votre séance Bilan avec nos
              Kinésithérapeutes.
            </p>
            <div className="flex xl1440:gap-6 gap-2 mt-4">
              <Link href="tel:+212641380017">
                <button className="flex gap-3 justify-center items-center xl1440:px-12 xl1440:py-3 px-4 py-2 rounded-full text-sm hover:bg-main hover:text-white bg-transparent border border-main text-main transition-colors shadow-lg font-semibold shadow-shadowColor/10">
                  <FaPhoneAlt className="xl1440:text-xl text-lg" />
                  Réserver ma séance
                </button>
              </Link>
              <Link href="/contact">
                <button className="hover:bg-[#3D7778] text-white xl1440:px-12 xl1440:py-3 px-4 py-2 text-sm rounded-full xl1440:text-base bg-main transition-colors font-medium shadow-lg shadow-shadowColor/10">
                  Prendre RDV
                </button>
              </Link>
            </div>
          </div>
          <InstaPreview />
        </motion.div>
        <Footer />
      </section>
    </>
  );
}

export default BeforeFooter;
