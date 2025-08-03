"use client";

import type React from "react";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          CCJAF
        </Link>
        <nav className="hidden md:flex space-x-4">
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/nosotros">Nosotros</NavLink>
          <NavLink href="/servicios">Servicios</NavLink>
          <NavLink href="/eventos">Eventos</NavLink>
          <NavLink href="/galeria">Galería</NavLink>
          <NavLink href="/contacto">Contacto</NavLink>
          <NavLink href="/legal">Legal</NavLink>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-700 py-2"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <NavLink href="/" onClick={() => setIsOpen(false)}>
              Inicio
            </NavLink>
            <NavLink href="/nosotros" onClick={() => setIsOpen(false)}>
              Nosotros
            </NavLink>
            <NavLink href="/servicios" onClick={() => setIsOpen(false)}>
              Servicios
            </NavLink>
            <NavLink href="/eventos" onClick={() => setIsOpen(false)}>
              Eventos
            </NavLink>
            <NavLink href="/galeria" onClick={() => setIsOpen(false)}>
              Galería
            </NavLink>
            <NavLink href="/contacto" onClick={() => setIsOpen(false)}>
              Contacto
            </NavLink>
            <NavLink href="/legal" onClick={() => setIsOpen(false)}>
              Legal
            </NavLink>
          </div>
        </motion.nav>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className="hover:text-yellow-500 transition-colors duration-300"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
