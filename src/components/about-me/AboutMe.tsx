"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            I'm a passionate web developer with expertise in modern technologies
            like React, Next.js, and Node.js. With a keen eye for design and a
            love for clean code, I strive to create web applications that are
            not only functional but also visually appealing and user-friendly.
          </p>
          <div className="flex justify-center space-x-6">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-primary mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">
                Dedicated Problem Solver
              </span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-primary mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">
                Fast Learner
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

{
  /* <div className="flex flex-col gap-2 w-[720px] text-center items-center">
<HeadingTitle>About Me</HeadingTitle>
<p className="my-5 leading-[2] text-[20px]">
  I am <span className="font-bold">Mohamed Outerbah</span> from Algeria,
  deeply immersed in mastering the{" "}
  <span className="font-bold">MERN</span> stack,{" "}
  <span className="font-bold">NextJS</span>, and{" "}
  <span className="font-bold">React Native</span>. I've dedicated myself
  to understanding the intricacies of web and mobile development.
  Proficient in technologies such as React, Next.js, Node.js, and
  MongoDB, I specialize in crafting robust full-stack applications. With
  React Native seamlessly integrated into my skill set, I excel in
  mobile app development, ensuring seamless and responsive applications
  across various platforms. Passionate about expanding my expertise and
  contributing to innovative projects, I am eager to explore new
  opportunities as a software developer.
</p>
</div> */
}
