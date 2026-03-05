"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Interactive grid component
function InteractiveGrid() {
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);
  
  // Fewer cells on mobile for better performance
  const cols = typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20;
  const rows = typeof window !== 'undefined' && window.innerWidth < 768 ? 8 : 12;
  const cells = Array.from({ length: cols * rows }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden z-[1]">
      <div 
        className="grid h-full w-full"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {cells.map((i) => {
          const isHovered = hoveredCell === i;
          const isNearby = hoveredCell !== null && (
            Math.abs((hoveredCell % cols) - (i % cols)) <= 1 &&
            Math.abs(Math.floor(hoveredCell / cols) - Math.floor(i / cols)) <= 1
          );
          
          return (
            <div
              key={i}
              className="relative border-[0.5px] border-teal-200/20 transition-all duration-300 cursor-crosshair"
              style={{
                backgroundColor: isHovered 
                  ? 'rgba(20, 184, 166, 0.15)' 
                  : isNearby 
                    ? 'rgba(20, 184, 166, 0.05)' 
                    : 'transparent',
                boxShadow: isHovered 
                  ? 'inset 0 0 20px rgba(20, 184, 166, 0.2)' 
                  : 'none',
              }}
              onMouseEnter={() => setHoveredCell(i)}
              onMouseLeave={() => setHoveredCell(null)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-teal-50/30">
      {/* Interactive grid background */}
      <InteractiveGrid />
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 pb-12 sm:pb-16 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-start text-left">
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-4 sm:mb-6 text-gray-900"
            >
              Leadership. Culture.
              <br />
              Organisations that Work.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-gray-700 font-inter max-w-xl mb-4 leading-relaxed"
            >
              Helping leaders align strategy, culture, and people systems during growth and change.
            </motion.p>

            {/* Supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-gray-600 font-inter max-w-xl mb-3 leading-relaxed"
            >
              Organisations today are navigating growth, restructuring, integration, digital change, and evolving workforce expectations. I advise leaders and people teams on how leadership capability, organisational structures, and people systems need to evolve so organisations can deliver sustainable performance.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm sm:text-base md:text-lg text-gray-600 font-inter max-w-xl mb-3 leading-relaxed"
            >
              While I sometimes provide guidance on HR policies and frameworks, my primary focus is helping leaders align culture, structure, and strategy to drive organisational impact.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-gray-600 font-inter max-w-xl mb-8 sm:mb-10 leading-relaxed"
            >
              I typically work with a small number of organisations at a time, partnering closely with leadership teams as a trusted advisor through periods of growth, change, or organisational evolution.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 hover:bg-teal-700 rounded-full font-inter font-semibold text-white overflow-hidden shadow-lg shadow-teal-600/25 transition-all pointer-events-auto text-center text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book a Consultation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </motion.a>
              <motion.a
                href="#what-i-do"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full font-inter font-semibold text-gray-700 border-2 border-gray-300 hover:border-teal-500 hover:text-teal-600 transition-all bg-white/80 backdrop-blur-sm pointer-events-auto text-center text-sm sm:text-base"
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 -ml-5 transition-all group-hover:opacity-100 group-hover:ml-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-xl aspect-square">

              {/* Image container */}
              <figure className="relative z-10 w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 shadow-xl sm:shadow-2xl pointer-events-auto">
                <Image
                  src="/hero.jpg"
                  alt="Take Chances Consulting - Expert HR and people strategy consultant helping organisations transform their vision into reality"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 448px, 576px"
                />
              </figure>
            </div>
          </motion.div>
        </div>

        {/* Stats - Minimal inline design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 sm:mt-14 lg:mt-16 pointer-events-auto"
        >
          <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="text-center"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-600 font-playfair">25+</span>
              <span className="block text-xs sm:text-sm text-gray-500 font-inter mt-1">Years Experience</span>
            </motion.div>
            
            <div className="w-px h-12 sm:h-14 bg-gray-300" />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              className="text-center"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-600 font-playfair">200+</span>
              <span className="block text-xs sm:text-sm text-gray-500 font-inter mt-1">Projects Delivered</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
