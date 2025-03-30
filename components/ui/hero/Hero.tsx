import * as React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Imagen de fondo a ancho completo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay para mejorar legibilidad del texto */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-800 opacity-90"></div> */}
      </div>

      {/* Contenido del hero */}
      <div className="container relative z-10 mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 bg-[rgba(59,167,107,0.8)]  p-8 rounded-xl shadow-lg border-2 border-black">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Build Something Amazing Today
            </h1>
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-lg">
              Launch your product with confidence using our powerful platform.
              Simple, flexible, and designed for modern teams.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition duration-300 text-lg shadow-lg">
                Get Started
              </button>
              <button className="bg-transparent text-white border border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition duration-300 text-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* <div className="md:w-1/2 relative">
            <div className="bg-white p-2 rounded-lg shadow-2xl">
              <div className="bg-gray-200 rounded overflow-hidden">
                <img
                  src="/api/placeholder/600/400"
                  alt="Dashboard Preview"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400 rounded-full opacity-50 blur-xl"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
