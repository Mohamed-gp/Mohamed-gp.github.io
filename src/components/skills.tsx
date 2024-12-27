"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projectsImagesSkills } from "../lib/data";

const skills = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "CSS/Sass", icon: "/icons/sass.svg" },
  { name: "GraphQL", icon: "/icons/graphql.svg" },
];

export function Skills() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4 my-6">
          {projectsImagesSkills.map((skill, ind) => (
            <div
              key={ind + skill?.filename}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <div className=" bg-[#444546] p-4 rounded-full shadow-xl hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-200 dark:hover:shadow-blue-800 transition-all flex justify-center items-center">
                <Image
                  loading="lazy"
                  className="w-10 h-10 sm:w-12 sm:h-12"
                  src={`/${skill?.filename}`}
                  alt="skill"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <p className="font-bold dark:text-white text-[#444546]">
                {skill?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
