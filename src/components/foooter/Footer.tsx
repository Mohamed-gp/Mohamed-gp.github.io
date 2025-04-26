"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 sm:py-12 bg-muted/30">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="md:col-span-2">
            <Link
              href="#home"
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 inline-block"
            >
              Mohamed Outerbah
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md text-sm sm:text-base">
              Building exceptional digital experiences with cutting-edge
              technologies. Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                target="_blank"
                href="mailto:mohamedterba6@gmail.com"
                className="hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Quick Links
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-sm">
              <li>
                <Link
                  href="#home"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Services
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-sm">
              <li>
                <p className="text-muted-foreground hover:text-foreground transition-colors">
                  Full Stack Development
                </p>
              </li>
              <li>
                <p className="text-muted-foreground hover:text-foreground transition-colors">
                  Debugging & Troubleshooting
                </p>
              </li>
              <li>
                <p className="text-muted-foreground hover:text-foreground transition-colors">
                  API Development & Integration
                </p>
              </li>
              <li>
                <p className="text-muted-foreground hover:text-foreground transition-colors">
                  UI/UX Implementation
                </p>
              </li>
              <li>
                <p className="text-muted-foreground hover:text-foreground transition-colors">
                  Technical Consulting
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 sm:mt-12 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Mohamed Outerbah. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
