import React from "react";
import { FiArrowRight } from "react-icons/fi";
export default function Banner() {
  return (
    <div className="lg:rounded-bl-19xl rounded-none bg-cover bg-center bg-[url('https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a60615af62665c8c5dded2_hero-area-image.jpg')]">
      <div className="container mx-auto">
        <div className="  lg:w-2/3 md:w-10/12 pl-10 lg:py-60 md:py-40 py-28">
          <p className="lg:text-6xl sm:text-4xl mb-4 text-4xl font-bold text-gray-900 font-serif leading-tight">
            Let's Create Your Dream Interior
          </p>
          <p className="text-gray-700 text-xl  mb-8">
            The world needs innovators and problem solvers who turn challenges
            into greater opportunities.
          </p>
          <button
            className="text-white
         hover:bg-white hover:text-gray-900 border-2 border-gray-900  bg-gray-900 px-8 py-5 font-bold rounded-2lg"
          >
            <div className="flex items-center">
              Get Started
              <FiArrowRight className="ml-3 text-theme-gold" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
