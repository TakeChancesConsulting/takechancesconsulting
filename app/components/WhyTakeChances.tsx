"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Rocket } from "lucide-react";

export default function WhyTakeChances() {
  return (
    <section id="why-take-chances" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50/50 to-transparent -skew-x-12 origin-top-right" />
      
      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left side - Section title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="inline-block text-teal-600 font-inter text-sm tracking-widest uppercase mb-4">
              The Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Why Take
              <br />
              <span className="relative">
                Chances
                <span className="text-teal-600">?</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
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
              className="mb-10"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-playfair text-gray-800 leading-relaxed">
                People and organisational challenges are{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">rarely solved</span>
                  <span className="absolute bottom-1 left-0 right-0 h-3 bg-teal-200/50 -rotate-1" />
                </span>{" "}
                by standard solutions alone.
              </p>
            </motion.div>

            {/* Supporting text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 font-inter leading-relaxed max-w-2xl">
                At Take Chances, I work from the belief that sustainable organisations 
                are built when leaders are willing to{" "}
                <span className="text-teal-700 font-medium">pause</span>,{" "}
                <span className="text-teal-700 font-medium">reflect</span> and{" "}
                <span className="text-teal-700 font-medium">think differently</span>.
              </p>

              {/* Quote-style callout */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative pl-6 py-4 border-l-4 border-teal-400 bg-gradient-to-r from-teal-50/80 to-transparent rounded-r-lg"
              >
                <p className="text-lg md:text-xl text-gray-700 font-inter italic">
                  &ldquo;Taking chances doesn&apos;t mean taking unnecessary risks. It means being 
                  <span className="not-italic font-semibold text-teal-700"> curious</span>, 
                  <span className="not-italic font-semibold text-teal-700"> challenging assumptions</span>, and making 
                  <span className="not-italic font-semibold text-teal-700"> intentional choices</span> about how 
                  people, culture and organisations evolve.&rdquo;
                </p>
              </motion.div>

              <p className="text-lg text-gray-600 font-inter leading-relaxed max-w-2xl">
                My role is to bring perspective, experience and thoughtful challenge — 
                helping leaders take informed chances that support{" "}
                <span className="inline-flex items-center gap-2">
                  <span className="font-semibold text-gray-800">growth</span>
                  <span className="text-teal-400">•</span>
                  <span className="font-semibold text-gray-800">resilience</span>
                  <span className="text-teal-400">•</span>
                  <span className="font-semibold text-gray-800">long-term success</span>
                </span>
              </p>
            </motion.div>

            {/* Visual element with icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                <div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-white flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-teal-600" strokeWidth={1.5} />
                </div>
                <div className="w-12 h-12 rounded-full bg-teal-200 border-2 border-white flex items-center justify-center">
                  <Target className="w-5 h-5 text-teal-700" strokeWidth={1.5} />
                </div>
                <div className="w-12 h-12 rounded-full bg-teal-300 border-2 border-white flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-teal-800" strokeWidth={1.5} />
                </div>
              </div>
              <p className="text-sm text-gray-500 font-inter">
                From insight to action — let&apos;s make it happen.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
