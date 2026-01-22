"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, TrendingUp, Users, GraduationCap, Heart, Laptop, ArrowUpRight } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about-me" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <span className="inline-block text-teal-600 font-inter text-sm tracking-widest uppercase mb-3 sm:mb-4">
            Nice to meet you
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            About Me
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6 auto-rows-[minmax(100px,auto)] sm:auto-rows-[minmax(120px,auto)]">
          
          {/* Main Photo - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 sm:col-span-2 lg:col-span-5 row-span-2 lg:row-span-3 relative rounded-2xl sm:rounded-3xl overflow-hidden group min-h-[280px] sm:min-h-[320px]"
          >
            <Image
              src="/about-me.jpg"
              alt="HR consultant with 25+ years of experience in people strategy, leadership development, and organisational transformation"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <p className="text-white font-playfair text-lg sm:text-xl lg:text-2xl">Rethink HR & People Strategies. Take Chances.</p>
            </div>
            {/* Fallback */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700 -z-10" />
          </motion.div>

          {/* Years Experience - Stat Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="col-span-1 lg:col-span-3 row-span-1 bg-teal-600 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between text-white relative overflow-hidden min-h-[140px]"
          >
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 opacity-80" />
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair">25+</p>
              <p className="text-teal-100 text-xs sm:text-sm">Years in HR Leadership</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-white/10 rounded-full" />
          </motion.div>

          {/* Tech Industry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="col-span-1 lg:col-span-4 row-span-1 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-200 flex items-center gap-3 sm:gap-4"
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0">
              <Laptop className="w-5 h-5 sm:w-7 sm:h-7 text-gray-700" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-base sm:text-lg">Tech Industry</p>
              <p className="text-xs sm:text-sm text-gray-500">Where I built my career</p>
            </div>
          </motion.div>

          {/* Main Bio Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="col-span-1 sm:col-span-2 lg:col-span-7 row-span-1 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-200"
          >
            <p className="text-base sm:text-xl lg:text-2xl text-gray-700 font-inter leading-relaxed mb-4 sm:mb-6">
              My career has spanned{" "}
              <span className="text-teal-600 font-medium">HR business partnering</span>,{" "}
              <span className="text-teal-600 font-medium">people and organisation development</span>,{" "}
              <span className="text-teal-600 font-medium">talent management</span>,{" "}
              <span className="text-teal-600 font-medium">HR transformation</span>,{" "}
              <span className="text-teal-600 font-medium">organisational culture change</span> and{" "}
              <span className="text-teal-600 font-medium">leadership development</span>.
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {["HR Partnering", "Org Development", "Talent Management", "Transformation", "Leadership"].map((tag) => (
                <span key={tag} className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-600 font-inter">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* MSc Credential */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="col-span-1 sm:col-span-2 lg:col-span-5 row-span-1 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-teal-100 flex items-center gap-3 sm:gap-4"
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7 text-teal-600" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm sm:text-base">MSc People & Organisation Development</p>
              <p className="text-xs sm:text-sm text-gray-600">Informing my systems-based, human-centred approach</p>
            </div>
          </motion.div>

        {/* CTA Card */}
        <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-1 lg:col-span-4 row-span-1 bg-teal-600 hover:bg-teal-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white flex items-center justify-between cursor-pointer transition-colors group"
          >
            <div>
              <p className="font-semibold text-base sm:text-lg">Let&apos;s Connect</p>
              <p className="text-teal-100 text-xs sm:text-sm">Start a conversation</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </motion.a>

          {/* Beyond Consulting - Social Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="col-span-1 sm:col-span-2 lg:col-span-8 row-span-1 bg-gray-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-white relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-teal-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" fill="currentColor" />
                <span className="text-teal-400 font-inter text-xs sm:text-sm font-medium">Beyond Consulting</span>
              </div>
              
              <p className="text-base sm:text-xl lg:text-2xl leading-relaxed">
                I invest in <span className="text-teal-400">social enterprises</span> that widen 
                access to meaningful work. I&apos;m passionate about supporting people who&apos;ve 
                been out of the workforce to find new opportunities. Contact me if you are interested in mentoring and outreach organisations that I work with
              </p>
              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
