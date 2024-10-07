"use client";

import { FaLinkedin } from "react-icons/fa6";
import HeadingTitle from "../repeated/HeadingTitle";
import EmailButton from "../buttons/EmailButton";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/hooks/hooks";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "tween" }}
      className="dark:text-white
     container flex flex-col gap-2 max-w-[700px] text-center text-lg leading-relaxed items-center justify-center mb-32"
    >
      <HeadingTitle>Get In Touch</HeadingTitle>
      <p className="">
        I am currently looking for new opportunities, including freelance jobs.
        If you have any projects or work that you think might be a good fit,
        don't hesitate to reach out to me. I will try to get back to you as soon
        as possible.
      </p>
      <div className="flex gap-2 my-2 sm:flex-row flex-col">
        <a
          id="contact"
          target="_blank"
          href="https://www.linkedin.com/in/mohamed-outerbah-b97469257/"
          className="flex cursor-pointer items-center  justify-center w-full gap-2 px-4 py-2 font-semibold text-white duration-300 bg-[#0080ff] border-2 border-white rounded-full group hover:scale-105 sm:w-auto sm:justify-normal"
        >
          <p>Message Here</p>
          <FaLinkedin className="duration-500 group-hover:translate-x-[2px]" />
        </a>
        <EmailButton />
      </div>
    </motion.div>
  );
};
export default Contact;
