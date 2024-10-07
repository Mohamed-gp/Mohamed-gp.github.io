"use client";
import React from "react";
import { motion } from "framer-motion";
import { navBarTitles } from "../../lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/activeSectionContext";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 dark:text-white dark:bg-[#050A30] left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full  dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {navBarTitles.map((title, index) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative "
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={title + index}
            >
              <Link
                className={`flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300
                   ${
                     activeSection == title
                       ? "text-gray-950 dark:text-gray-200 "
                       : ""
                   }

                  
                `}
                href={`#${title.toLowerCase()}`}
                onClick={() => {
                  setActiveSection(title);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {title}

                {title === activeSection && (
                  <motion.span
                    className="bg-[#cfcfcf] rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
