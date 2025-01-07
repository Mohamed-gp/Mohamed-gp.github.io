"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa6";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    image: string;
    description: string;
    // images: string[];
    // demoUsers: string[];
    techUsed: { filename: string; name: string }[];
    thereIsAdmin: boolean;
    features: string[];
    githubLink: string;
    liveLink: string;
  };
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div
                className="flex my-6 justify-center items-center mx-auto overflow-clip max-w-[1000px] max-h-[500px] 
                      "
              >
                <Image
                  src={project.image}
                  alt="test"
                  width={1000}
                  className=""
                  height={800}
                />
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Demo Users
                </h3>
                {project.thereIsAdmin && (
                  <>
                    <p className=" font-bold text-center text-gray-900 dark:text-white">
                      admin{" "}
                    </p>
                    <p className="text-left  text-gray-900 dark:text-white">
                      <span className="font-bold text-gray-900 dark:text-white">
                        email :
                      </span>{" "}
                      admin@admin.com
                    </p>
                    <p className="text-left  text-gray-900 dark:text-white">
                      <span className="font-bold text-gray-900 dark:text-white">
                        password :
                      </span>{" "}
                      admin@admin.com
                    </p>
                  </>
                )}{" "}
                <p className=" font-bold text-center  text-gray-900 dark:text-white">
                  user
                </p>
                <p className="text-left  text-gray-900 dark:text-white">
                  <span className="font-bold text-gray-900 dark:text-white">
                    email :
                  </span>{" "}
                  user@demo.com
                </p>
                <p className="text-left  text-gray-900 dark:text-white">
                  <span className="font-bold text-gray-900 dark:text-white">
                    password :
                  </span>{" "}
                  user@demo.com
                </p>
              </div>
              <div>
                <p className="font-bold mt-4 text-gray-900 dark:text-white">
                  Features
                </p>
                <ul className="list-disc">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-left  text-gray-900 dark:text-white"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techUsed.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1"
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

                <div className="flex items-center my-6 dark:text-black w-[100%] gap-1">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="flex cursor-pointer items-center justify-center gap-1 px-3  bg-black/80 text-white rounded-full w-[50%] py-2"
                  >
                    <FaGithub />
                    <p className="text-[11px] font-semibold">Code</p>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="flex cursor-pointer items-center justify-center gap-1 px-3 py-2 bg-[#0080ff] text-white rounded-full w-[50%]"
                  >
                    <FaLink />
                    <p className="text-[11px] font-semibold">Live</p>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
