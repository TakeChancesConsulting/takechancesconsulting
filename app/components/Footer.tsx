"use client";

import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-8 pb-6">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Divider */}
        <div className="h-px bg-gray-800 mb-8" />

        {/* Simple footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left - Brand + Copyright + Social */}
          <div className="flex items-center gap-4">
            <span className="font-playfair font-bold text-white">Take Chances</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-500 text-sm font-inter">
              © {new Date().getFullYear()}
            </span>
            <span className="text-gray-700">•</span>
            <div className="flex items-center gap-3">
              <a 
                href="mailto:hello@takechances.co"
                className="text-gray-500 hover:text-teal-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-teal-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right - Credit */}
          <p className="text-gray-500 text-xs font-inter">
            a{" "}
            <a 
              href="https://cromostudios.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-400 transition-colors"
            >
              cromo studios
            </a>
            {" "}website
          </p>
        </div>
      </div>
    </footer>
  );
}
