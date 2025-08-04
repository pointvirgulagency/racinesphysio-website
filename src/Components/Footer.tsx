import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

import Image from "next/image";
const Footer = () => {
  return (
    <footer className=" text-white relative z-20 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/whiteLogo.png"
              alt="Cabinet Racines"
              width={150}
              height={50}
            />
            <p className="text-white text-sm">
              Le Cabinet Racines vous accompagne avec expertise en
              physiokinésithérapie pour une prise en charge personnalisée et
              efficace
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 xl1440:ml-28">
              Liens rapides
            </h3>
            <ul className="space-y-2 xl1440:ml-28">
              <li>
                <Link
                  href="/nos-traitements"
                  className="text-white hover:text-primary-400 transition-colors text-sm"
                >
                  Nos traitements
                </Link>
              </li>
              <li>
                <Link
                  href="/parcours-patients"
                  className="text-white hover:text-primary-400 transition-colors text-sm"
                >
                  Parcours patients
                </Link>
              </li>
              <li>
                <Link
                  href="/le-cabinet"
                  className="text-white hover:text-primary-400  transition-colors text-sm"
                >
                  Le cabinet
                </Link>
              </li>

              {/* Add more links */}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 xl1440:ml-20">Plus</h3>
            <ul className="space-y-2 xl1440:ml-20">
              <li>
                <Link
                  href="/blog"
                  className="text-white hover:text-primary-400 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/le-cabinet"
                  className="text-white hover:text-primary-400 transition-colors text-sm"
                >
                  FAQ&lsquo;s
                </Link>
              </li>
              {/* Add more legal links */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 ">Nous contacter</h3>
            <ul className="space-y-1 text-white text-sm flex flex-col">
              <Link href="https://maps.app.goo.gl/CjJzRhR3uetD8nhFA">
                <li>20C, Résidence Maamora Rue Oued Sebbou</li>
              </Link>
              <Link href="https://maps.app.goo.gl/CjJzRhR3uetD8nhFA">
                <li>Immeuble 7 Sala Al Jadida 11100</li>
              </Link>
              <Link href="mailto:info@cabinetracines.com">
                <li>Email: info@cabinetracines.com</li>
              </Link>
              <Link href="tel:+212641380017">
                <li>Téléphone: +212 641-380-017</li>
              </Link>
            </ul>
          </div>
          {/* Social media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 ">les réseaux sociaux</h3>
            <ul className="space-y-1 text-white text-sm flex items-center gap-4">
              <Link
                href="https://www.facebook.com/cabinetracines20"
                target="_blank"
              >
                <CiFacebook className="w-7 h-7" />
              </Link>
              <Link
                href="https://www.instagram.com/cabinet.racines/"
                target="_blank"
              >
                <CiInstagram className="w-7 h-7" />
              </Link>
              <Link
                href="https://ma.linkedin.com/in/racines-physio-608bb52a4"
                target="_blank"
              >
                <CiLinkedin className="w-7 h-7" />
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=212641380017"
                target="_blank"
              >
                <FaWhatsapp className="w-7 h-7" />
              </Link>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 py-6 text-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()}
            <Link
              href="https://pointvirgul.com/"
              target="_blank"
              className="underline"
            >
              {" "}
              Point Virgul.{" "}
            </Link>
            All rights reserved.
          </p>
        </div>
      </div>
      {/* Foo */}
    </footer>
  );
};

export default Footer;
