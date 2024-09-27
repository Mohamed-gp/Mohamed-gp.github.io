// import { FaGithub, FaLink } from "react-icons/fa6";
import ProjectSkill from "./ProjectSkill";
import { projectsImagesSkills } from "../../lib/data";
import Image from "next/image";
import { FaGithub, FaInfo, FaLink } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";
import { RefObject, useRef, useState } from "react";
import ProjectModel from "./ProjectModel";
import { useSectionInView } from "@/app/hooks/hooks";

interface ProjectItemProps {
  title: string;
  description: string;
  githubLink: string;
  productionLink: string;
  imageProjectTitle: string;
  skills: { filename: string; name: string }[];
  heroImage: string;
  thereIsAdmin: boolean;
}
const ProjectItem = ({
  title,
  description,
  githubLink,
  productionLink,
  imageProjectTitle,
  skills,
  heroImage,
  thereIsAdmin,
}: ProjectItemProps) => {
  const projectItemDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["0 1", "1.33 1"],
    target: projectItemDiv,
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const [isProjectModelOpen, setIsProjectModelOpen] = useState(false);
  const { ref } = useSectionInView("Projects");

  return (
    <div ref={ref}>
      <motion.div
        ref={projectItemDiv}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        transition={{ delay: 0.6 }}
        className=" relative sm:min-w-[500px] md:min-w-[700px] dark:bg-[#050A30] flex px-6  py-12 overflow-hidden duration-75 bg-gray-100 border group hover:bg-gray-200 dark:hover:bg-[#0a0f37c7] rounded-3xl border-black/20 even:justify-end groupSkill"
      >
        <div className="flex flex-col w-full  text-left px-5">
          {/* <div className="flex flex-col w-full sm:w-[60%]  text-left px-5"> */}
          <div className="flex justify-between items-center ">
            <p className="text-2xl font-semibold">{title}</p>
            <button
              onClick={() => setIsProjectModelOpen(true)}
              name={"projectSkill"}
              className="relative flex items-center justify-center dark:bg-white dark:text-[#050A30] bg-[#050A30] rounded-full w-8 h-8 group/skill"
            >
              {/* to do dark mode hover opacity   group-hover/skill:opacity-100*/}

              <span className="dark:bg-white dark:text-[#050A30] bg-[#050A30] p-1 text-sm  rounded-full text-white flex justify-center items-center text-wrap">
                <FaInfo className=" " />
              </span>
              <p className="hidden  text-white dark:text- absolute sm:text-[12px] text-[8px] font-bold dark:bg-white dark:text-[#050A30] bg-[#050A30] px-[6px]  rounded-xl py-1 -top-[36px] group-hover/skill:block duration-1000 w-[340%]">
                Read More
              </p>
              <motion.p
                initial={{ opacity: 1, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute hidden border-[6px] dark:text-white  border-solid dark:border-t-white border-t-[#050A30] border-transparent -top-[12px] group-hover/skill:block duration-1000"
              ></motion.p>
            </button>
          </div>
          <p className="mt-2 mb-6 leading-relaxed dark:text-white text-gray-700">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center dark:text-black w-[100%] gap-1">
              <a
                href={githubLink}
                target="_blank"
                className="flex items-center justify-center gap-1 px-3  bg-white rounded-full w-[50%] py-2"
              >
                <FaGithub />
                <p className="text-[11px] font-semibold">Code</p>
              </a>
              <a
                href={productionLink}
                target="_blank"
                className="flex items-center justify-center gap-1 px-3 py-2 bg-white rounded-full w-[50%]"
              >
                <FaLink />
                <p className="text-[11px] font-semibold">Live</p>
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-start w-full gap-1 mt-3">
              {skills.map((skill, ind) => (
                <ProjectSkill
                  key={skill.name + ind + skill.filename}
                  titleSkill={skill.name}
                  fileName={skill.filename}
                />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="hidden sm:block absolute  group-even:left-[-150px] rounded-3xl overflow-hidden w-[400px] h-[800px] group-odd:right-[-150px]  duration-300 project-image-absolute">
          <Image
            loading="lazy"
            // src={`/${imageProjectTitle}`}
            src={`/project1.png`}
            width={400}
            height={400}
            alt=""
            className=" rounded-3xl"
          />
        </div> */}
      </motion.div>
      {isProjectModelOpen && (
        <ProjectModel
          setIsProjectModelOpen={setIsProjectModelOpen}
          githubLink={githubLink}
          productionLink={productionLink}
          heroImage={heroImage}
          title={title}
          description={description}
          thereIsAdmin={thereIsAdmin}
        />
      )}
    </div>
  );
};
export default ProjectItem;
