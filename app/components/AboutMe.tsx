"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, TrendingUp, Users, GraduationCap, Heart, Laptop, ArrowUpRight } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about-me" className="relative py-24 lg:py-32 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block text-teal-600 font-inter text-sm tracking-widest uppercase mb-4">
            Nice to meet you
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            About Me
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6 auto-rows-[minmax(120px,auto)]">
          
          {/* Main Photo - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-12 md:col-span-5 row-span-3 relative rounded-3xl overflow-hidden group"
          >
            <Image
              src="/about-me.jpg"
              alt="About me"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-playfair text-2xl">Rethink HR & People Strategies. Take Chances.</p>
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
            className="col-span-6 md:col-span-3 row-span-1 bg-teal-600 rounded-3xl p-6 flex flex-col justify-between text-white relative overflow-hidden"
          >
            <Sparkles className="w-6 h-6 opacity-80" />
            <div>
              <p className="text-4xl lg:text-5xl font-bold font-playfair">25+</p>
              <p className="text-teal-100 text-sm">Years in HR Leadership</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full" />
          </motion.div>

          {/* Tech Industry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="col-span-6 md:col-span-4 row-span-1 bg-white rounded-3xl p-6 border border-gray-200 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0">
              <Laptop className="w-7 h-7 text-gray-700" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-lg">Tech Industry</p>
              <p className="text-sm text-gray-500">Where I built my career</p>
            </div>
          </motion.div>

          {/* Main Bio Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="col-span-12 md:col-span-7 row-span-1 bg-white rounded-3xl p-8 border border-gray-200"
          >
            <p className="text-xl lg:text-2xl text-gray-700 font-inter leading-relaxed mb-6">
              My career has spanned{" "}
              <span className="text-teal-600 font-medium">HR business partnering</span>,{" "}
              <span className="text-teal-600 font-medium">people and organisation development</span>,{" "}
              <span className="text-teal-600 font-medium">talent management</span>,{" "}
              <span className="text-teal-600 font-medium">HR transformation</span>,{" "}
              <span className="text-teal-600 font-medium">organisational culture change</span> and{" "}
              <span className="text-teal-600 font-medium">leadership development</span>.
            </p>
            <div className="flex flex-wrap gap-2">
              {["HR Partnering", "Org Development", "Talent Management", "Transformation", "Leadership"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600 font-inter">
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
            className="col-span-12 md:col-span-5 row-span-1 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-3xl p-6 border border-teal-100 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-7 h-7 text-teal-600" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-semibold text-gray-900">MSc People & Organisation Development</p>
              <p className="text-sm text-gray-600">Informing my systems-based, human-centred approach</p>
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
            className="col-span-6 md:col-span-4 row-span-1 bg-teal-600 hover:bg-teal-700 rounded-3xl p-6 text-white flex items-center justify-between cursor-pointer transition-colors group"
          >
            <div>
              <p className="font-semibold text-lg">Let&apos;s Connect</p>
              <p className="text-teal-100 text-sm">Start a conversation</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </motion.a>

          {/* Beyond Consulting - Social Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="col-span-12 md:col-span-8 row-span-1 bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-teal-400" fill="currentColor" />
                <span className="text-teal-400 font-inter text-sm font-medium">Beyond Consulting</span>
              </div>
              
              <p className="text-xl lg:text-2xl leading-relaxed mb-6">
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
