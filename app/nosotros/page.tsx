"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Nosotros
      </motion.h1>

      <div className="grid grid-cols-1  gap-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="mb-4">
            La Corporación Cultural Juventud Arte y Folclor - ONG nació en 2004
            con el objetivo de preservar y promover las tradiciones culturales
            de nuestra región. Desde entonces, hemos crecido para convertirnos
            en un referente en la organización de eventos culturales y la
            formación artística.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center relative h-60 bg-cover bg-[0_-220px]"
          style={{
            backgroundImage: "url('/images/folclor.webp')",
            backgroundAttachment: "",
          }}
        ></motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-semibold mb-4">
          Misión, Visión y Valores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Misión</h3>
            <p>
              Preservar, promover y difundir el patrimonio cultural y artístico
              de nuestra región, fomentando la participación activa de la
              juventud en las expresiones folclóricas y artísticas.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Visión</h3>
            <p>
              Ser reconocidos como la principal organización cultural de la
              región, liderando la innovación en la preservación y promoción de
              las tradiciones artísticas y folclóricas.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Valores</h3>
            <ul className="list-disc list-inside">
              <li>Respeto por la diversidad cultural</li>
              <li>Compromiso con la excelencia artística</li>
              <li>Innovación en la preservación de tradiciones</li>
              <li>Inclusión y participación comunitaria</li>
              <li>Sostenibilidad en nuestras prácticas</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function TimelineItem({ year, event }: { year: string; event: string }) {
  return (
    <div className="flex items-center">
      <div className="w-16 text-right mr-4 font-bold">{year}</div>
      <div className="w-4 h-4 bg-yellow-500 rounded-full mr-4"></div>
      <div>{event}</div>
    </div>
  );
}
