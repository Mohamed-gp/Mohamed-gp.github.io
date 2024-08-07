interface ProjectSkillProps {
  titleSkill: string;
  fileName: string;
}
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectSkill = ({ titleSkill, fileName }: ProjectSkillProps) => {
  return (
    <button
      name={"projectSkill"}
      className="relative flex items-center justify-center bg-[#444546] rounded-full w-8 h-8 group/skill"
    >
      {/* to do dark mode hover opacity   group-hover/skill:opacity-100*/}
      <Image
        loading="lazy"
        className="w-5 h-5 duration-500 opacity-100 "
        src={`/${fileName}`}
        alt=""
        width={5}
        height={5}
      />
      <p
        className={`hidden absolute sm:text-[12px] text-[8px] font-bold text-white bg-[#444546] px-[6px]  rounded-xl py-1 -top-[36px] group-hover/skill:block duration-1000    ${
          titleSkill.length < 7 ? "w-20" : "w-[340%]"
        }`}
      >
        {titleSkill}
      </p>
      <motion.p
        initial={{ opacity: 1, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ borderTopColor: "#444546" }}
        className="absolute hidden border-[6px]   border-solid  border-transparent -top-[12px] group-hover/skill:block duration-1000"
      ></motion.p>
    </button>
  );
};
export default ProjectSkill;
