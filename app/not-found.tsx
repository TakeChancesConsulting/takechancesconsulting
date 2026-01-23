"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-teal-50/30 flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-8xl sm:text-9xl font-bold font-playfair text-gray-200">
            4
          </span>
          <span className="text-8xl sm:text-9xl font-bold font-playfair text-teal-500">
            0
          </span>
          <span className="text-8xl sm:text-9xl font-bold font-playfair text-gray-200">
            4
          </span>
        </motion.div>

        {/* Message */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
        >
          Page not found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 font-inter mb-8 max-w-md mx-auto"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </motion.p>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-inter font-semibold rounded-full transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
