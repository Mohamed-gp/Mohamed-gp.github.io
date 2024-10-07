// "use client";

// import { motion } from "framer-motion";

const Footer = () => {
  return (
    // <motion.footer
    //   initial={{ opacity: 0, scale: 0 }}
    //   animate={{ opacity: 1, scale: 1 }}
    //   transition={{ duration: 0.6, type: "tween" }}
    //   className="text-white font-bold bg-[#252525]"
    // >
    //   <div className="container py-4 text-center ">
    //     Made with ❤️ by Mohamed Outerbah &copy; {new Date().getFullYear()}
    //   </div>
    // </motion.footer>
    <footer className="text-white font-bold bg-[#252525]">
      <div className="container py-4 text-center ">
        Made with ❤️ by Mohamed Outerbah &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};
export default Footer;
