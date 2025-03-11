"use client"

import { motion } from "framer-motion"
import { Music, Theater, Calendar, FileText } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Calendar className="w-12 h-12 mb-4" />,
      title: "Organización de eventos culturales",
      description:
        "Planificamos y ejecutamos eventos culturales de alta calidad, desde festivales de música hasta exposiciones de arte.",
    },
    {
      icon: <Music className="w-12 h-12 mb-4" />,
      title: "Formación en danza, música y teatro",
      description:
        "Ofrecemos cursos y talleres para todas las edades, impartidos por profesionales experimentados en diversas disciplinas artísticas.",
    },
    {
      icon: <Theater className="w-12 h-12 mb-4" />,
      title: "Gestión logística para festivales",
      description:
        "Nos encargamos de todos los aspectos logísticos para asegurar el éxito de festivales y eventos culturales a gran escala.",
    },
    {
      icon: <FileText className="w-12 h-12 mb-4" />,
      title: "Asesorías para proyectos culturales",
      description:
        "Brindamos asesoría especializada para el desarrollo y ejecución de proyectos culturales, desde la conceptualización hasta la implementación.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Nuestros Servicios
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-yellow-500 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

