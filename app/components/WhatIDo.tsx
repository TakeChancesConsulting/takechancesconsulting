"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Building2, Sprout, Palette, ChevronDown, ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "HR/People Foundations & Transformation",
    description:
      "Strong organisations are built on solid people foundations. I support leaders to design and strengthen core HR practices that are fit for purpose and aligned to their values — from setting up people frameworks and processes to practical, day-to-day HR support.",
    extra:
      "I also partner with established HR/People functions to develop their team(s) and redesign existing practices to transform the role of HR.",
    Icon: Building2,
    color: "from-teal-400 to-teal-600",
    bgColor: "bg-teal-50",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    keywords: ["Frameworks", "Processes", "Day-to-day support", "Team development"],
  },
  {
    number: "02",
    title: "Leadership & Organisation Development",
    description:
      "Leadership and organisation development sit at the heart of my work. Drawing on 25 years of experience and an MSc in People & Organisation Development, I help organisations develop leaders, teams and systems that can adapt and scale.",
    extra:
      "This includes leadership development, organisational design, capability building and supporting leaders to lead through complexity and change.",
    Icon: Sprout,
    color: "from-emerald-400 to-teal-500",
    bgColor: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    keywords: ["Leadership", "Org design", "Capability building", "Change"],
  },
  {
    number: "03",
    title: "Culture & Organisational Change",
    description:
      "Culture is shaped by what leaders pay attention to and how organisations behave day to day. I work with leadership teams to surface what's really happening in their culture and support meaningful change.",
    extra:
      "Whether through growth, transformation or transition — I help make culture visible and actionable.",
    Icon: Palette,
    color: "from-cyan-400 to-teal-500",
    bgColor: "bg-cyan-50",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    keywords: ["Culture mapping", "Transformation", "Transitions", "Growth"],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = service.Icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative h-full"
    >
      {/* Card */}
      <div
        className={`relative overflow-hidden rounded-3xl ${service.bgColor} border border-gray-100 p-8 lg:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-teal-100/50 cursor-pointer h-full flex flex-col`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Number watermark */}
        <span className="absolute -top-4 -right-4 text-[120px] font-playfair font-bold text-gray-900/[0.03] select-none">
          {service.number}
        </span>

        {/* Icon */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
          className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6`}
        >
          <IconComponent className={`w-8 h-8 ${service.iconColor}`} strokeWidth={1.5} />
        </motion.div>



        {/* Title */}
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 font-inter leading-relaxed mb-4 flex-grow">
          {service.description}
        </p>

        {/* Expandable content */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-gray-600 font-inter leading-relaxed mb-6 pt-2 border-t border-gray-200">
            {service.extra}
          </p>
        </motion.div>

        {/* Keywords */}
        <div className="flex flex-wrap gap-2 mt-4">
          {service.keywords.map((keyword) => (
            <span
              key={keyword}
              className="px-3 py-1 rounded-full bg-white/80 text-gray-600 text-sm font-inter border border-gray-200/50"
            >
              {keyword}
            </span>
          ))}
        </div>

        {/* Expand indicator */}
        <div className="flex items-center gap-2 mt-6 text-teal-600 font-inter text-sm">
          <span>{isExpanded ? "Show less" : "Read more"}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Decorative corner */}
        <div
          className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${service.color} opacity-10 rounded-tl-full`}
        />
      </div>
    </motion.div>
  );
}

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern
            id="dots"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-teal-600 font-inter text-sm tracking-widest uppercase mb-4"
          >
            Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            What I{" "}
            <span className="relative inline-block">
              Do
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-3 bg-teal-200/60 -z-10"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 font-inter"
          >
            Three interconnected areas where I help organisations and their
            leaders thrive. <span className="text-teal-600">Click each card</span> to
            learn more.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 font-inter mb-4">
            Not sure which area fits your needs?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-teal-600 font-inter font-semibold hover:text-teal-700 transition-colors group"
          >
            Let&apos;s have a conversation
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
