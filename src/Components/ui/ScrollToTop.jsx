"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show buttons when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Open WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = "212641380017";
    const message = "Bonjour, je souhaite prendre rendez-vous.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <div className="flex flex-col gap-4 animate-fadeIn">
          {/* WhatsApp Button */}
          <button
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp className="w-6 h-6" />
          </button>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-main hover:bg-main/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
