"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import ProfilePicture from "@/../public/profile/profilePicture2mb.png";
import Image from "next/image";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      <div className="flex-1 flex items-center">
        <div className="container px-4 sm:px-6 grid lg:grid-cols-2 gap-8 md:gap-12 items-center pt-20">
          <motion.div
            style={{ willChange: 'transform, opacity' }}

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mohamed Outerbah
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              {text}
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              I build exceptional digital experiences that combine stunning
              design with cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="group">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resume/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4 justify-center lg:justify-start">
              <Link
                href="https://github.com/Mohamed-gp"
                target="_blank"
                className="hover:text-primary transition-colors cursor-pointer"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mohamed-outerbah-b97469257"
                target="_blank"
                className="hover:text-primary transition-colors cursor-pointer"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:mohamedterba6@gmail.com"
                target="_blank"
                className="hover:text-primary transition-colors cursor-pointer"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            style={{ willChange: 'transform, opacity' }}

            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative order-first lg:order-last mx-auto w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] aspect-square"
          >
            <div className="relative z-10 aspect-square">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-pink-600 opacity-20 absolute animate-pulse" />
              <div className="w-[95%] h-[95%] rounded-full bg-gradient-to-br from-purple-600 to-pink-600 opacity-10 absolute top-[2.5%] left-[2.5%] animate-pulse animation-delay-1000" />
              <div className="w-[90%] h-[90%] rounded-full bg-gradient-to-br from-purple-600 to-pink-600 opacity-5 absolute top-[5%] left-[5%] animate-pulse animation-delay-2000" />
              <div className="w-full h-full aspect-square flex justify-center items-center">
                <Image
                  src={ProfilePicture}
                  alt="profile-picture"
                  width={500}
                  height={500}
                  priority
                  quality={80} 
                  className="rounded-full object-cover w-full h-full relative z-10"
                  placeholder="blur" 
                />
              </div>
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-600/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
