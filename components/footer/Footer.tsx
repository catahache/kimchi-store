import React, { FC } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="border-t border-gray-200 py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Descripción de la compañía */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
            <p className="text-lg font-medium text-gray-900 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
              deserunt officia culpa aut, distinctio nisi veniam ratione quos
              amet magni, minus maiores nemo nihil voluptatibus exercitationem,
              temporibus impedit perspiciatis quae!
            </p>
          </div>

          {/* Divisor vertical visible solo en pantallas medianas y grandes */}
          <div className="hidden md:block border-l border-gray-200 h-auto"></div>

          {/* Columnas de navegación */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row md:pl-8">
            {/* Columna: Shop */}
            <div className="w-full md:w-3/4 mb-8 md:mb-0 md:mr-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Shop</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Not vegan Kimchi
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Vegan Kimchi
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna: About */}
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">About</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
