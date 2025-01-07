"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Info } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { ProjectModal } from "./ProjectModal";
import { projects } from "@/lib/data";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-32"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Projects
          </h2>
          <div className="flex flex-col gap-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="md:w-1/2 relative h-[300px] md:h-auto overflow-hidden "
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="hover:scale-105 duration-300 !cursor-pointer"
                    />
                  </a>
                  <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techUsed.map((tech, index) => (
                          <div
                            key={index}
                            className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 hover:-translate-y-1 duration-300"
                          >
                            <Image
                              src={tech.filename}
                              alt={tech.name}
                              width={16}
                              height={16}
                              className="mr-2"
                            />
                            <span className="text-sm text-gray-800 dark:text-gray-200">
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="w-5 h-5 mr-2" />
                        GitHub
                      </motion.a>
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Info className="w-6 h-6 cursor-pointer" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {selectedProject && selectedProject != null && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
}
