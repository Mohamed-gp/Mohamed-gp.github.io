"use client";

import React from "react";
import { motion } from "framer-motion";
import { navBarTitles } from "../../lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/activeSectionContext";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 dark:text-white dark:bg-[#050A30] left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full  dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {navBarTitles.map((title, index) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative "
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={title + index}
            >
              <Link
                className={`flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300
                   ${
                     activeSection == title
                       ? "text-gray-950 dark:text-gray-200 "
                       : ""
                   }

                  
                `}
                href={`#${title.toLowerCase()}`}
                onClick={() => {
                  setActiveSection(title);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {title}

                {title === activeSection && (
                  <motion.span
                    className="bg-[#cfcfcf] rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// "use-client";
// import { useState } from "react";
// import { navBarTitles } from "../../lib/data";
// import { motion } from "framer-motion";

// const Header = () => {
//   const [activeLink, setActiveLink] = useState("Home");
//   return (
//     <header className="relative ">
//       <motion.div
//         initial={{ y: -300, x: "-50%", opacity: 0 }}
//         animate={{ y: 0, x: "-50%", opacity: 1 }} // x because framer create a div with translate 0 and it's not centered
//         transition={{ duration: 0.3, type: "tween" }}
//         className="w-fit container z-10 dark:text-white dark:bg-[#050A30] fixed left-1/2 -translate-x-1/2 py-4 my-4 min-w-[280px]  rounded-full bg-white/90 shadow-lg shadow-black/[0.4] "
//       >
//         <ul className="flex flex-wrap items-center justify-center gap-x-1">
//           {navBarTitles.map((title, index) => {
//             return (
//               <motion.a
//                 initial={{ y: -300, opacity: 0 }}
//                 transition={{
//                   duration: 0.3,
//                   type: "tween",
//                   delay: index * 0.3,
//                 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 href={`#${title.toLowerCase()}`}
//                 key={title + index}
//               >
//                 <motion.li
//                   layoutId="activeSection"
//                   transition={{
//                     type: "spring",
//                     stiffness: 380,
//                     damping: 30,
//                     duration: 2,
//                   }}
//                   className={`li-header-text rounded-full hover:bg-[#ebebeb] text-gray-500 px-3 py-1 font-semibold duration-300 sm:text-base text-[8px]  ${
//                     activeLink == title
//                       ? "opacity-100 bg-[#ebebeb] "
//                       : "opacity-70"
//                   } hover:opacity-100 `}
//                   onClick={() => setActiveLink(title)}
//                 >
//                   {title}
//                 </motion.li>
//               </motion.a>
//             );
//           })}
//         </ul>
//       </motion.div>
//     </header>
//   );
// };
// export default Header;
