"use client"

import { motion } from "framer-motion"
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from "moment"
import "moment/locale/es"

moment.locale("es")

const localizer = momentLocalizer(moment)

export default function Events() {
  const events = [
    {
      title: "Festival de Danza Folclórica",
      start: new Date(2023, 5, 15),
      end: new Date(2023, 5, 17),
    },
    {
      title: "Taller de Música Tradicional",
      start: new Date(2023, 6, 1),
      end: new Date(2023, 6, 3),
    },
    {
      title: "Exposición de Arte Local",
      start: new Date(2023, 7, 10),
      end: new Date(2023, 7, 20),
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
        Eventos
      </motion.h1>

      <div className="mb-16">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-3xl font-semibold text-center mb-8"
      >
        Eventos Destacados
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={`/images/event-${index + 1}.jpg`} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">
                {moment(event.start).format("LL")} - {moment(event.end).format("LL")}
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                Más información
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

