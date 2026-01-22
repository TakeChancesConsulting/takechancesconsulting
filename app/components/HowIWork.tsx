"use client";

import { motion } from "framer-motion";
import { Handshake, Brain, Sparkles, ArrowRight, Heart, Zap } from "lucide-react";

const approaches = [
  {
    icon: Handshake,
    title: "Partnership",
    description: "Working alongside you, not above you",
  },
  {
    icon: Brain,
    title: "Pragmatic",
    description: "Grounded in business reality",
  },
  {
    icon: Heart,
    title: "Human",
    description: "People-first, always",
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-teal-600 font-inter text-sm tracking-widest uppercase mb-3 sm:mb-4"
          >
            My Approach
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
          >
            How I{" "}
            <span className="relative inline-block">
              Work
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-1 sm:-bottom-2 left-0 h-2 sm:h-3 bg-teal-200/60 -z-10"
              />
            </span>
          </motion.h2>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-12 sm:mb-20">
          {/* Left - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 text-white overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                  <pattern id="circles" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#circles)" />
                </svg>
              </div>

              <div className="relative z-10">
                <p className="text-xl sm:text-2xl md:text-3xl font-playfair leading-relaxed mb-5 sm:mb-8">
                  &ldquo;I work with business leaders, founders, HR leaders and their teams, as an independent consultant.&rdquo;
                </p>

                {/* Approach pills */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {approaches.map((approach, index) => (
                    <motion.div
                      key={approach.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full"
                    >
                      <approach.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
                      <span className="font-inter text-xs sm:text-sm font-medium">{approach.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-10 -right-10 w-28 sm:w-40 h-28 sm:h-40 bg-white/10 rounded-full" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-4 sm:-bottom-6 right-2 sm:right-4 lg:right-8 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 border border-gray-100"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-teal-600" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-inter font-semibold text-gray-900 text-sm sm:text-base">Fresh Perspectives</p>
                  <p className="text-xs sm:text-sm text-gray-500">+ Deep Expertise</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 sm:space-y-8 mt-8 sm:mt-0"
          >
            <p className="text-base sm:text-xl text-gray-600 font-inter leading-relaxed">
              I offer a{" "}
              <span className="font-semibold text-gray-900">hands-on</span>,{" "}
              <span className="font-semibold text-gray-900">pragmatic</span> and{" "}
              <span className="font-semibold text-gray-900">human</span> approach — 
              combining deep people expertise with fresh perspectives.
            </p>

            {/* Support & Challenge */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-teal-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-teal-100"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-teal-100 flex items-center justify-center mb-3 sm:mb-4">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Support</h4>
                <p className="text-xs sm:text-sm text-gray-600 font-inter">
                  Creating space for reflection and encouraging different thinking
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gray-200 flex items-center justify-center mb-3 sm:mb-4">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Challenge</h4>
                <p className="text-xs sm:text-sm text-gray-600 font-inter">
                  Helping leaders move from insight to action
                </p>
              </motion.div>
            </div>

            <p className="text-sm sm:text-lg text-gray-600 font-inter leading-relaxed">
              My work is grounded in{" "}
              <span className="text-teal-600 font-medium">evidence-based people and organisation development</span>, 
              but always shaped by the reality of running a business.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-teal-600 font-inter font-semibold group text-sm sm:text-base"
            >
              Let&apos;s talk about your challenges
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
