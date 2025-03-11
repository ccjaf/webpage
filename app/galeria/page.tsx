"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/danza.png", alt: "Danza folclórica" },
  { src: "/images/musica.png", alt: "Música tradicional" },
  { src: "/images/entrega.jpg", alt: "Entrega de anchetas" },
  { src: "/images/evento navideno.jpg", alt: "Festival navideño" },
  { src: "/images/chiva navidad.jpg", alt: "Chiva de navidad" },
  { src: "/images/reinado1.png", alt: "Reinado 1" },
  { src: "/images/reinado2.png", alt: "Reinado 2" },
  { src: "/images/reinado3.png", alt: "Reinado 3" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Galería
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className=" overflow-hidden rounded-lg shadow-lg cursor-pointer h-[200px] relative"
            onClick={() => setSelectedImage(image.src)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="w-full h-auto object-cover transition-transform duration-300 transform hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Imagen ampliada"
              width={800}
              height={600}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
