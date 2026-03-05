"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const trackRecord = [
  "Leading organisational redesign, post-merger integrations, and restructures within large and mid-sized organisations",
  "Supporting leadership and culture development alongside organisational change and growth",
  "Managing global and regional HR operations and leading HR operating model evolution",
  "Leading organisation development, DEI, and philanthropy functions",
];

export default function WhyTakeChances() {
  return (
    <section id="why-take-chances" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50/50 to-transparent -skew-x-12 origin-top-right" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left side - Section title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="inline-block text-teal-600 font-inter text-sm tracking-widest uppercase mb-3 sm:mb-4">
              The Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Why Take
              <br />
              <span className="relative">
                Chances
                <span className="text-teal-600">?</span>
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    d="M2 8C50 2 150 2 198 8"
                    stroke="#14b8a6"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </motion.div>

          {/* Right side - Content */}
          <div className="lg:col-span-8 lg:pl-8">
            {/* Main statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-playfair text-gray-800 leading-relaxed">
                I work with organisations of all sizes — from fast-growing businesses to global enterprises — helping leaders align strategy, structure, culture, and people systems to deliver sustainable performance.
              </p>
            </motion.div>

            {/* Philosophy paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 sm:space-y-6"
            >
              <p className="text-base sm:text-lg text-gray-600 font-inter leading-relaxed">
                The name Take Chances reflects my style and philosophy. Meaningful organisational change often requires trying something different and having the honest conversations that enable progress. My role is to help leaders navigate these moments with clarity, structure, and practical solutions.
              </p>

              {/* Why organisations choose */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative pl-4 sm:pl-6 py-3 sm:py-4 border-l-4 border-teal-400 bg-gradient-to-r from-teal-50/80 to-transparent rounded-r-lg"
              >
                <p className="text-base sm:text-lg text-gray-700 font-inter">
                  Organisations choose Take Chances Consulting because I combine{" "}
                  <span className="font-semibold text-teal-700">strategic insight</span>,{" "}
                  <span className="font-semibold text-teal-700">operational experience</span>, and{" "}
                  <span className="font-semibold text-teal-700">pragmatic delivery</span>.
                </p>
              </motion.div>
            </motion.div>

            {/* Track record */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 sm:mt-10"
            >
              <p className="text-base sm:text-lg font-semibold text-gray-800 font-inter mb-4">
                My experience includes:
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {trackRecord.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-600 font-inter leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Closing statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-8 sm:mt-10 text-base sm:text-lg text-gray-600 font-inter leading-relaxed"
            >
              Every engagement begins with structured diagnosis and collaborative design, ensuring solutions are proportionate, practical, and sustainable.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
