import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRight, CgClose } from "react-icons/cg";

const RacinesHeroSection = () => {
  // ADDED: State to control the mobile menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  // ADDED: Variants for the mobile menu overlay for a smooth slide-down effect
  const mobileMenuVariants = {
    hidden: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <>
      <motion.nav
        className="flex justify-between items-center xl1440:px-36 xl1440:py-9 bg-inherit z-50 relative px-2 py-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center space-x-2">
            <div className="xl1440:w-44 xl1440:h-12 r375:w-24 r375:h-8">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={200}
                  height={200}
                />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Desktop Nav Links */}
        <motion.div
          className="hidden md:flex space-x-8"
          variants={itemVariants}
        >
          <Link
            href="/nos-traitements"
            className="text-main hover:text-teal-900 font-medium transition-colors text-lg"
          >
            Nos Traitements
          </Link>
          <Link
            href="/parcours-patients"
            className="text-main hover:text-teal-900 font-medium transition-colors text-lg"
          >
            Parcours Patients
          </Link>
          <Link
            href="/le-cabinet"
            className="text-main hover:text-teal-900 font-medium transition-colors text-lg"
          >
            Le Cabinet
          </Link>
          <Link
            href="/blog"
            className="text-main hover:text-teal-900 font-medium transition-colors text-lg"
          >
            Blog
          </Link>
        </motion.div>

        {/* Desktop CTA Button */}
        <motion.div className="block" variants={itemVariants}>
          <Link href="/contact">
            <button className="bg-main text-white xl1440:px-10 xl1440:py-3 xl1440:text-base rounded-full hover:bg-teal-900 transition-colors font-medium px-6 text-xs py-2">
              Prendre RDV
            </button>
          </Link>
        </motion.div>

        {/* ADDED: Hamburger Menu Button for Mobile/Tablet */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open navigation menu"
          >
            {isMenuOpen ? (
              <CgClose size={30} className="text-main" />
            ) : (
              <CgMenuRight size={30} className="text-main" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* ADDED: Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center space-y-8"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Link
              href="/nos-traitements"
              className="text-main hover:text-teal-900 font-medium text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Nos Traitements
            </Link>
            <Link
              href="/parcours-patients"
              className="text-main hover:text-teal-900 font-medium text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Parcours Patients
            </Link>
            <Link
              href="/le-cabinet"
              className="text-main hover:text-teal-900 font-medium text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Le Cabinet
            </Link>
            <Link
              href="/blog"
              className="text-main hover:text-teal-900 font-medium text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RacinesHeroSection;
