"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoPlayer() {
  const [isCinemaMode, setCinemaMode] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      console.log("Video element loaded:", videoRef.current);
    }
  }, []);

  const handlePlay = () => {
    console.log("Playing Video...");
    setCinemaMode(true);
  };

  const handlePause = () => {
    console.log("Pausing Video...");
    setCinemaMode(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        if (videoRef.current) {
          videoRef.current.pause();
        }
        setCinemaMode(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackdropClick = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // pause video when clicking outside
    }
    setCinemaMode(false);
  };

  return (
    <motion.div
      id="video"
      className="relative xl1440:min-h-screen mt-10 mb-28 flex items-center justify-center transition-colors duration-500"
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {isCinemaMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-black z-10"
            onClick={handleBackdropClick}
          />
        )}
      </AnimatePresence>
      <div
        className={`${
          isCinemaMode
            ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 max-w-6xl w-full p-4"
            : "relative z-20 max-w-6xl w-full p-4"
        }`}
        onClick={e => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          className="w-full rounded-lg shadow-lg cursor-pointer"
          controls
          onPlay={handlePlay}
          onPause={handlePause}
          controlsList="nodownload"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.div>
  );
}
