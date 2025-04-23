"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { projectsImagesSkills } from "@/lib/data";

export default function Skills() {


  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm border-primary/20"
          >
            My Skills
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground">
            I've developed a diverse skill set across the full stack, allowing
            me to build complete, scalable applications from concept to
            deployment.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: -300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-2 max-w-[920px] mx-auto text-center items-center"
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 my-6">
            {projectsImagesSkills.map((skill, ind) => (
              <div
                key={ind + skill?.filename}
                className="flex flex-col gap-2 items-center justify-center"
              >
                <div className="bg-[#444546] dark:bg-[#444546] p-3 sm:p-4 rounded-full shadow-xl hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-200 dark:hover:shadow-blue-800 transition-all flex justify-center items-center">
                  <Image
                    loading="lazy"
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    src={`/${skill?.filename}`}
                    alt={skill.name}
                    width={100}
                    height={100}
                    quality={100}
                  />
                </div>
                <p className="font-bold dark:text-white text-[#444546] text-xs sm:text-sm">
                  {skill?.name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
