"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.backgroundPositionY = `${
          scrollPosition * 0.5
        }px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={parallaxRef}
      className="min-h-screen bg-cover bg-no-repeat bg-top flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: "url('/images/background.webp')",
        backgroundAttachment: "",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center mb-4"
      >
        Corporación Cultural Juventud Arte y Folclore - ONG
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl text-center mb-8"
      >
        Preservamos la tradición, celebramos la cultura, inspiramos el futuro.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link
          href="/nosotros"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Descubrenos
        </Link>
      </motion.div>
    </div>
  );
}
