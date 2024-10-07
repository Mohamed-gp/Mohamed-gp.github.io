"use client"

import HeadingTitle from "../repeated/HeadingTitle";
import { projectsImagesSkills } from "../../lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/hooks/hooks";

const Skills = () => {
  const { ref } = useSectionInView("Skills");
  return (
    <motion.div
      ref={ref}
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      id="skills"
      className="container dark:text-white flex items-center justify-center "
    >
      <div className="flex flex-col gap-2 w-[920px] text-center items-center">
        <HeadingTitle>Skills</HeadingTitle>
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
    </motion.div>
  );
};
export default Skills;
