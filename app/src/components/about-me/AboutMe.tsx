import HeadingTitle from "../repeated/HeadingTitle";
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="container dark:text-white flex items-center justify-center "
      id="about"
    >
      <div className="flex flex-col gap-2 w-[720px] text-center items-center">
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
      </div>
    </motion.div>
  );
};
export default AboutMe;
