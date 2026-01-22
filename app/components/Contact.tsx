"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 bg-gray-900 overflow-hidden">


      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-teal-400 font-inter text-sm tracking-widest uppercase mb-3 sm:mb-4">
              Get in touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Let&apos;s Start a{" "}
              <span className="text-teal-400">Conversation</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 font-inter leading-relaxed mb-6 sm:mb-8 max-w-md">
              Ready to take the next step? I&apos;d love to hear about your challenges 
              and explore how we might work together.
            </p>

            {/* Email */}
            <a 
              href="mailto:hello@takechancesconsulting.com"
              className="inline-flex items-center gap-2 sm:gap-3 text-white hover:text-teal-400 transition-colors group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-inter text-sm sm:text-base break-all sm:break-normal">hello@takechancesconsulting.com</span>
            </a>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors font-inter text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors font-inter text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me a bit about what you're looking for..."
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors font-inter resize-none text-sm sm:text-base"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 sm:py-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg sm:rounded-xl transition-colors flex items-center justify-center gap-2 font-inter text-sm sm:text-base"
              >
                Send Message
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
