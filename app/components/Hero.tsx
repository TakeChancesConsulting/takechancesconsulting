"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Interactive grid component
function InteractiveGrid() {
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);
  
  const cols = 20;
  const rows = 12;
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
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-32 pb-16 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-start text-left">
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 text-gray-900"
            >
              Transform Your
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-teal-600">
                  Vision Into Reality
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600 origin-left rounded-full"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 font-inter max-w-xl mb-10 leading-relaxed"
            >
              Expert consulting services designed to help you navigate challenges,
              seize opportunities, and achieve{" "}
              <span className="text-teal-600 font-medium">extraordinary results</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-teal-600 hover:bg-teal-700 rounded-full font-inter font-semibold text-white overflow-hidden shadow-lg shadow-teal-600/25 transition-all pointer-events-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Consultation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
                href="#services"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 rounded-full font-inter font-semibold text-gray-700 border-2 border-gray-300 hover:border-teal-500 hover:text-teal-600 transition-all bg-white/80 backdrop-blur-sm pointer-events-auto"
              >
                <span className="flex items-center gap-2">
                  Explore Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-0 -ml-5 transition-all group-hover:opacity-100 group-hover:ml-0"
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
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg lg:max-w-xl aspect-square">

              {/* Image container */}
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden bg-gray-100 shadow-2xl pointer-events-auto">
                <Image
                  src="/hero-image.jpg"
                  alt="Professional consulting"
                  fill
                  className="object-cover"
                  priority
                />

              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats - Full width below */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-6 md:p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-gray-200 shadow-sm pointer-events-auto">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "200+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50+", label: "Happy Clients" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="text-center group cursor-default"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-600 font-playfair transition-transform group-hover:scale-105">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-500 font-inter mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
