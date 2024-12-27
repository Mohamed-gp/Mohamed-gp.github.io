"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, FileDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Hero() {
  return (
    <section style={{minHeight : "calc(100vh - 64px)"}} className="relative py-20 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hello, I'm <span className="text-primary">Mohamed Outerbah</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A passionate developer crafting innovative solutions across
              various technologies.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex space-x-4"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-white rounded-full hover:bg-blue-600 transition duration-300 cursor-pointer"
              >
                View Projects
              </a>
              <a
                href="/CV.pdf"
                download
                className="px-6 py-3 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 cursor-pointer flex items-center"
              >
                <FileDown className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </motion.div>
            <div className="mt-8 flex space-x-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                <FaGithub className="w-8 h-8" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
              <a
                href="mailto:mohamedterba6@gmail.com"
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:w-1/2 mt-12 lg:mt-0"
          >
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="/profileImage.jpg"
                alt="mohamed outerbah"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-2xl"
              />
              <motion.svg
                className="absolute -top-4 -right-4 w-72 h-72 text-primary opacity-50"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              >
                <path
                  fill="currentColor"
                  d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.1C32.4,85.6,16.2,87.1,0.7,85.9C-14.8,84.7,-29.6,80.9,-43.9,74.4C-58.3,67.9,-72.1,58.7,-79.8,45.9C-87.5,33,-89,16.5,-87.6,0.8C-86.2,-14.9,-81.8,-29.8,-74.2,-43.2C-66.5,-56.5,-55.5,-68.3,-42.1,-76.2C-28.7,-84.1,-14.4,-88.1,0.9,-89.6C16.1,-91.1,32.2,-90,44.7,-76.4Z"
                  transform="translate(100 100)"
                />
              </motion.svg>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          className="w-full h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="#0080ff"
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5,
              ease: "easeInOut",
            }}
          />
          <motion.path
            fill="#0080ff"
            fillOpacity="0.2"
            d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,202.7C672,213,768,203,864,186.7C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            initial={{ y: 50 }}
            animate={{ y: -50 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 7,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </section>
  );
}
