"use client"
import { motion } from "framer-motion";
const SectionDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "tween", delay: 0.6 }}
      className="relative items-center justify-center hidden w-full h-16 sm:flex bottom-24"
    >
      <span className="w-[6px] h-16 bg-gray-300 rounded-full opacity-70"></span>
    </motion.div>
  );
};

export default SectionDivider;
