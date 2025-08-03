"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Loader2 } from "lucide-react"; // Importamos Loader2 para el spinner
import Link from "next/link";
import { getFiles } from "@/lib/getFiles";

export default function Legal() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedDocuments, setLoadedDocuments] = useState<
    { nombre: string; url: string }[]
  >([]);

  useEffect(() => {
    setIsLoading(true);
    getFiles()
      .then((files) => {
        setLoadedDocuments(files);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Documentos Legales
      </motion.h1>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-grow items-center justify-center"
          >
            <Loader2 className="h-12 w-12 animate-spin text-yellow-500" />
            <p className="ml-4 text-lg text-gray-700">Cargando documentos...</p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
          >
            {loadedDocuments.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-xl font-semibold mb-4">{doc.nombre}</h2>
                <Link
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  <Download className="mr-2 h-5 w-5" /> Descargar
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
