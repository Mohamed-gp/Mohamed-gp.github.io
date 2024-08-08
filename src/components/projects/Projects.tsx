import { useSectionInView } from "@/app/hooks/hooks";
import HeadingTitle from "../repeated/HeadingTitle";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";

const Projects = () => {
  const { ref } = useSectionInView("Projects");
  return (
    <div ref={ref} id="Projects">
      <div>
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="container dark:text-white flex items-center justify-center mb-32"
        >
          <div className="flex flex-col gap-2 w-[790px] text-center items-center">
            <HeadingTitle>Projects</HeadingTitle>
            <div className="flex flex-col my-5 gap-y-12">
              <ProjectItem
                title="SwiftBuy"
                description="full Stack ecommerce website"
                imageProjectTitle="corpcomment.png"
                skills={[
                  { filename: "typescript.svg", name: "typescript" },
                  { filename: "react.svg", name: "react" },
                  { filename: "tailwindcss.svg", name: "tailwind css" },
                  { filename: "reduxtoolkit.svg", name: "redux toolkit" },
                  { filename: "nodejs.svg", name: "node js" },
                  { filename: "jwt.svg", name: "jwt" },
                  { filename: "expressjs.svg", name: "express js" },
                  { filename: "mongodb.svg", name: "mongodb" },
                ]}
                githubLink="https://github.com/Mohamed-gp/ecommerce_mern"
                productionLink="https://swiftbuy1.netlify.app/"
              />
              <ProjectItem
                title="Krelli"
                description="full Stack renting website"
                imageProjectTitle="corpcomment.png"
                skills={[
                  { filename: "postgressql.svg", name: "postgressql" },
                  { filename: "prisma.svg", name: "prisma" },
                  { filename: "typescript.svg", name: "typescript" },
                  { filename: "react.svg", name: "react" },
                  { filename: "tailwindcss.svg", name: "tailwind css" },
                  { filename: "reduxtoolkit.svg", name: "redux toolkit" },
                  { filename: "nodejs.svg", name: "node js" },
                  { filename: "jwt.svg", name: "jwt" },
                  { filename: "expressjs.svg", name: "express js" },
                ]}
                githubLink="hhttps://github.com/Mohamed-gp/Krelli_x86"
                productionLink="https://swiftbuy1.netlify.app/"
              />

              <ProjectItem
                title="SocialSync"
                description="full Stack social media website"
                imageProjectTitle="corpcomment.png"
                skills={[
                  { filename: "typescript.svg", name: "typescript" },
                  { filename: "nextjs.svg", name: "next js" },
                  { filename: "react.svg", name: "react" },
                  { filename: "tailwindcss.svg", name: "tailwind css" },
                  { filename: "reduxtoolkit.svg", name: "redux toolkit" },
                  { filename: "nextauth.webp", name: "next auth" },
                  { filename: "auth0.svg", name: "auth0" },
                  { filename: "nodejs.svg", name: "node js" },
                  { filename: "jwt.svg", name: "jwt" },
                  { filename: "expressjs.svg", name: "express js" },
                  { filename: "mongodb.svg", name: "mongodb" },
                ]}
                githubLink="https://github.com/Mohamed-gp/SocialSync"
                productionLink="https://swiftbuy1.netlify.app/"
              />
              <ProjectItem
                title="YumYum"
                description="full Stack food store website + mobile App"
                imageProjectTitle="corpcomment.png"
                skills={[
                  { filename: "typescript.svg", name: "typescript" },
                  { filename: "nextjs.svg", name: "next js" },
                  { filename: "react.svg", name: "react" },
                  { filename: "tailwindcss.svg", name: "tailwind css" },
                  { filename: "reduxtoolkit.svg", name: "redux toolkit" },
                  { filename: "nextauth.webp", name: "next auth" },
                  { filename: "auth0.svg", name: "auth0" },
                  { filename: "nodejs.svg", name: "node js" },
                  { filename: "jwt.svg", name: "jwt" },
                  { filename: "expressjs.svg", name: "express js" },
                  { filename: "mongodb.svg", name: "mongodb" },
                ]}
                githubLink="https://github.com/Mohamed-gp/YumYum"
                productionLink="https://swiftbuy1.netlify.app/"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Projects;
