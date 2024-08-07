import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
 import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="container dark:text-white flex items-center justify-center h-screen "
      id="home"
    >
      <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "tween" }} className="flex flex-col gap-2 w-[720px] text-center items-center">
        <div className="w-32 flex justify-center items-center h-32 mx-auto overflow-hidden border-4 border-white rounded-full img">
          <Image
            loading="lazy"
            src="/last-upscaler-blurwindows-picturefliped.jpg"
            alt="avatar"
            width={500}
            height={500}
            className="object-cover -translate-y-3  rounded-full "
          />
        </div>
        <div className="my-5  text-[14px] sm:text-[18px] md:text-[26px] leading-relaxed">
          I'm Mohamed Outerbah a skilled{" "}
          <p className="font-bold">full-stack developer</p> specializing in web
          development with <span className="font-bold">NextJS</span> and the{" "}
          <span className="font-bold">MERN</span> stack, along with expertise in{" "}
          <span className="font-bold">React Native</span> for mobile app
          development.
        </div>
        <div className="flex flex-col items-center w-full gap-2 sm:w-auto sm:flex-row">
          <a
            href="#contact"
            className="flex items-center justify-center w-full gap-2 px-4 py-2 font-semibold text-white duration-300 bg-[#0080ff] border-2 border-white rounded-full group hover:scale-105 sm:w-auto sm:justify-normal"
          >
            <p>Contact Me Here</p>
            <FaArrowRight className="duration-500 group-hover:translate-x-[2px]" />
          </a>
          <a
            href="/CV.pdf"
            download
            className="flex dark:text-black items-center justify-center w-full gap-2 px-4 py-2 font-semibold duration-300 bg-white border rounded-full border-black/40 group hover:scale-105 sm:w-auto sm:justify-normal"
          >
            <p>Download CV</p>
            <MdFileDownload className="duration-500 group-hover:translate-y-[3px]" />
          </a>
          <div className="flex items-center gap-1">
            
            <a
              href="https://github.com/Mohamed-gp"
              target="_blank"
              className="flex dark:text-black items-center justify-center w-10 h-10 duration-500 bg-white rounded-full hover:scale-105"
            >
              <FaGithub className="" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mohamed-outerbah-b97469257/"
              className="flex dark:text-black items-center justify-center w-10 h-10 duration-500 bg-white rounded-full hover:scale-105"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Hero;
