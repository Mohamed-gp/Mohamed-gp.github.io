import { navBarTitles } from "../../lib/data";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="relative ">
      <motion.div
        initial={{ y: -300, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }} // x because framer create a div with translate 0 and it's not centered
        transition={{ duration: 0.3, type: "tween" }}
        className="w-fit container z-10 dark:text-white dark:bg-[#050A30] fixed left-1/2 -translate-x-1/2 py-4 my-4 min-w-[280px]  rounded-full bg-white/90 shadow-lg shadow-black/[0.4] "
      >
        <ul className="flex flex-wrap items-center justify-center gap-x-1">
          {navBarTitles.map((title, index) => {
            return (
              <motion.a
                initial={{ y: -300, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  type: "tween",
                  delay: index * 0.3,
                }}
                animate={{ y: 0, opacity: 1 }}
                href={`#${title.toLowerCase()}`}
                key={title + index}
              >
                <li
                  className={`li-header-text rounded-full hover:bg-[#ebebeb] text-gray-500 px-3 py-1 font-semibold duration-300 sm:text-base text-[8px]  ${
                    index == 0 ? "opacity-100 bg-[#ebebeb] " : "opacity-70"
                  } hover:opacity-100 `}
                >
                  {title}
                </li>
              </motion.a>
            );
          })}
        </ul>
      </motion.div>
    </header>
  );
};
export default Header;
