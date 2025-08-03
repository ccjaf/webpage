import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="w-full  mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              Corporación Cultural Juventud Arte y Folclore - ONG
            </h3>
            <p className="text-sm">
              Preservando la tradición, celebrando la cultura, inspirando el
              futuro.
            </p>
          </div>
          <div className="w-full  mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/nosotros"
                  className="hover:text-yellow-500 transition-colors duration-300"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="hover:text-yellow-500 transition-colors duration-300"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/eventos"
                  className="hover:text-yellow-500 transition-colors duration-300"
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="hover:text-yellow-500 transition-colors duration-300"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-2xl hover:text-yellow-500 transition-colors duration-300"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-2xl hover:text-yellow-500 transition-colors duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-2xl hover:text-yellow-500 transition-colors duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-2xl hover:text-yellow-500 transition-colors duration-300"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Corporación Cultural Juventud Arte
            y Folclore. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
