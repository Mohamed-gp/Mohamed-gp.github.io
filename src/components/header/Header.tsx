"use client";

import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { ThemeContext } from "@/context/ThemeContext";

export default function Header() {
  const themeContext = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-gray-100 dark:bg-gray-900"
          : "bg-white dark:bg-gray-800"
      } shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              Mohamed
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink close={() => setIsOpen(false)} href="#about">
                About
              </NavLink>
              <NavLink close={() => setIsOpen(false)} href="#projects">
                Projects
              </NavLink>
              <NavLink close={() => setIsOpen(false)} href="#contact">
                Contact
              </NavLink>
              <button
                onClick={() =>
                  themeContext?.setTheme(
                    themeContext?.theme === "night" ? "light" : "night"
                  )
                }
                className="text-gray-700 cursor-pointer dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {themeContext?.theme === "night" ? (
                  <Sun className="w-5 h-5 cursor-pointer" />
                ) : (
                  <Moon className="w-5 h-5 cursor-pointer" />
                )}
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#about" mobile close={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink href="#projects" mobile close={() => setIsOpen(false)}>
              Projects
            </NavLink>
            <NavLink href="#contact" mobile close={() => setIsOpen(false)}>
              Contact
            </NavLink>
            <button
              onClick={() =>
                themeContext?.setTheme(
                  themeContext?.theme === "night" ? "light" : "night"
                )
              }
              className="w-full text-left text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              {themeContext?.theme === "night" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
  mobile = false,
  close,
}: {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  close?: () => void;
}) {
  const baseClasses =
    "text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300";
  const mobileClasses = mobile ? "block" : "";

  return (
    <Link
      href={href}
      onClick={() => {
        if (close) close();
      }}
      className={`${baseClasses} ${mobileClasses}`}
    >
      {children}
    </Link>
  );
}
