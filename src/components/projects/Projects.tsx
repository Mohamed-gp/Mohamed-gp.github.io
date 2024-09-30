import { useSectionInView } from "@/app/hooks/hooks";
import HeadingTitle from "../repeated/HeadingTitle";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";

const Projects = () => {
  const { ref } = useSectionInView("Projects");
  return (
    <div ref={ref} id="projects">
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
                title="SwiftBuy - Ultimate eCommerce Platform"
                description="A full-stack eCommerce platform featuring a comprehensive shopping experience with wishlist, advanced filtering, and secure payment integration using Stripe."
                imageProjectTitle="swiftbuy.png"
                techUsed={[
                  { filename: "typescript.svg", name: "typescript" },
                  { filename: "react.svg", name: "react" },
                  { filename: "tailwindcss.svg", name: "tailwind css" },
                  { filename: "reduxtoolkit.svg", name: "redux toolkit" },
                  { filename: "nodejs.svg", name: "node js" },
                  { filename: "firebase.svg", name: "firebase" },
                  { filename: "stripe.svg", name: "stripe" },
                  { filename: "jwt.svg", name: "jwt" },
                  { filename: "expressjs.svg", name: "express js" },
                  { filename: "mongodb.svg", name: "mongodb" },
                ]}
                features={[
                  "Wishlist functionality",
                  "Payment integration with Stripe",
                  // "Advanced filtering options",
                  "Filtering options",
                  "User authentication and authorization",
                  "Responsive design",
                  "Admin dashboard for managing products and orders",
                  "Real-time inventory management",
                  "Order tracking and history",
                ]}
                githubLink="https://github.com/Mohamed-gp/ecommerce_mern"
                productionLink="https://swiftbuy.production-server.tech/"
                heroImage="/project1.png"
                thereIsAdmin={true}
              />
              <ProjectItem
                title="Krelli - Comprehensive Renting Platform"
                description="A full-stack renting platform offering a seamless experience for property rentals with advanced search, booking management, and secure payment processing."
                imageProjectTitle="krelli.png"
                techUsed={[
                  { filename: "postgressql.svg", name: "postgressql" },
                  { filename: "prisma.svg", name: "prisma" },
                  { filename: "javascript.svg", name: "javascript" },
                  { filename: "firebase.svg", name: "firebase" },
                  { filename: "react.svg", name: "react" },
                  { filename: "tailwindcss.svg", name: "tailwind css" },
                  { filename: "firebase.svg", name: "firebase" },
                  { filename: "stripe.svg", name: "stripe" },

                  { filename: "reduxtoolkit.svg", name: "redux toolkit" },
                  { filename: "nodejs.svg", name: "node js" },
                  { filename: "jwt.svg", name: "jwt" },
                  { filename: "expressjs.svg", name: "express js" },
                ]}
                features={[
                  "Advanced property search",
                  "Booking management system",
                  "Payment integration with Stripe",
                  "User authentication and authorization",
                  "Responsive design",
                  "Admin dashboard for managing listings and bookings",
                  "Real-time availability updates",
                  "User reviews and ratings",
                ]}
                githubLink="https://github.com/Mohamed-gp/Krelli_x86"
                productionLink="https://krelli.production-server.tech/"
                heroImage="/project2.png"
                thereIsAdmin={true}
              />

              <ProjectItem
                title="SocialSync - Dynamic Social Media Platform"
                description="A full-stack social media platform enabling users to connect, share, and interact with advanced features like real-time messaging, post filtering, and secure authentication."
                imageProjectTitle="socialsync.png"
                techUsed={[
                  { filename: "typescript.svg", name: "typescript" },
                  { filename: "react.svg", name: "react" },
                  { filename: "tailwindcss.svg", name: "tailwind css" },
                  { filename: "reduxtoolkit.svg", name: "redux toolkit" },
                  { filename: "nodejs.svg", name: "node js" },
                  { filename: "firebase.svg", name: "firebase" },
                  { filename: "jwt.svg", name: "jwt" },
                  { filename: "expressjs.svg", name: "express js" },
                  { filename: "mongodb.svg", name: "mongodb" },
                ]}
                features={[
                  "Real-time messaging",
                  "Post filtering and search",
                  "User authentication and authorization",
                  "Responsive design",
                  "Admin dashboard for managing users and content",
                  "User profiles and activity feeds",
                  "Like, comment, and share functionalities",
                  "Notification system",
                ]}
                githubLink="https://github.com/Mohamed-gp/SocialSync"
                productionLink="https://socialsync.production-server.tech/"
                heroImage="/project3.png"
                thereIsAdmin={false}
              />
              <ProjectItem
                title="YumYum - Food Store and Delivery Platform"
                description="A full-stack food store and delivery platform with a mobile app, offering a seamless ordering experience, real-time tracking, and secure payment integration."
                imageProjectTitle="yumyum.png"
                techUsed={[
                  { filename: "expo.svg", name: "expo" },
                  { filename: "typescript.svg", name: "typescript" },
                  { filename: "react.svg", name: "react + react native" },
                  { filename: "tailwindcss.svg", name: "tailwind css" },
                  { filename: "reduxtoolkit.svg", name: "redux toolkit" },
                  { filename: "nodejs.svg", name: "node js" },
                  { filename: "firebase.svg", name: "firebase" },
                  { filename: "stripe.svg", name: "stripe" },

                  { filename: "jwt.svg", name: "jwt" },
                  { filename: "expressjs.svg", name: "express js" },
                  { filename: "mongodb.svg", name: "mongodb" },
                ]}
                features={[
                  "Mobile app for iOS and Android",
                  "Real-time order tracking",
                  "Payment integration with Stripe",
                  "User authentication and authorization",
                  "Responsive design",
                  "Admin dashboard for managing products and orders",
                  "Menu management",
                  // "Customer reviews and ratings",
                ]}
                githubLink="https://github.com/Mohamed-gp/YumYum"
                productionLink="https://yumyum.production-server.tech/"
                heroImage="/project4.png"
                thereIsAdmin={true}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Projects;
