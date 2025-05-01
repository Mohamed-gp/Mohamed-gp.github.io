"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowUpRight,
  Github,
  Construction,
  Clock,
  Sparkles,
  Code,
  Rocket,
  PenTool,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  // Placeholder project categories to maintain tabs functionality
  const categories = ["all", "fullstack", "mobile"];

  // Array of placeholder "Coming Soon" projects with more engaging details
  const placeholderProjects = [
    {
      id: "house-rental",
      title: "House Rental Platform",
      description:
        "A full-stack application connecting property owners with potential renters.",
      category: ["fullstack"],
      color: "from-blue-500/20 to-purple-500/20",
      icon: <Construction className="h-8 w-8 text-blue-500" />,
      pattern: "radial",
    },
    {
      id: "ecommerce",
      title: "E-Commerce Platform",
      description:
        "An end-to-end solution for online stores with inventory management.",
      category: ["fullstack"],
      color: "from-emerald-500/20 to-cyan-500/20",
      icon: <Rocket className="h-8 w-8 text-emerald-500" />,
      pattern: "dots",
    },
    {
      id: "social-media",
      title: "Social Media Application",
      description:
        "A feature-rich platform for community building and engagement.",
      category: ["fullstack"],
      color: "from-rose-500/20 to-orange-500/20",
      icon: <Sparkles className="h-8 w-8 text-rose-500" />,
      pattern: "plus",
    },
    {
      id: "food-delivery",
      title: "Food Delivery System",
      description:
        "Mobile and web platform connecting restaurants with hungry customers.",
      category: ["fullstack", "mobile"],
      color: "from-amber-500/20 to-red-500/20",
      icon: <PenTool className="h-8 w-8 text-amber-500" />,
      pattern: "zigzag",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-muted/30">
      <div className="container px-4 sm:px-6">
        <motion.div
          style={{ willChange: 'transform, opacity' }}

          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm border-primary/20"
          >
            My Work
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            Exciting projects currently in development. Check back soon to see
            my portfolio of full-stack applications that demonstrate my
            technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList className="overflow-x-auto max-w-full">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {placeholderProjects
                  .filter((project) =>
                    category === "all"
                      ? true
                      : project.category.includes(category)
                  )
                  .map((project, index) => (
                    <ComingSoonCard
                      key={project.id}
                      project={project}
                      index={index}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          style={{ willChange: 'transform, opacity' }}

          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            Want to see my current work? Check out my GitHub repository for my
            projects in development.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link
              href="https://github.com/Mohamed-gp?tab=repositories"
              target="_blank"
            >
              <Github className="mr-2 h-4 w-4" />
              View GitHub Repositories
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ComingSoonCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
    style={{ willChange: 'transform, opacity' }}

      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col group border border-primary/10 bg-gradient-to-br dark:bg-gradient-to-br dark:from-gray-900/50 dark:to-gray-950/50 from-white to-gray-100/80 shadow-md hover:shadow-lg transition-all duration-300">
        <div
          className={`relative overflow-hidden bg-gradient-to-br ${project.color} h-48 sm:h-56 md:h-64 flex items-center justify-center`}
        >
          {/* Background pattern based on project type */}
          <div className="absolute inset-0 opacity-20">
            {project.pattern === "dots" && (
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, currentColor 1px, transparent 1px)",
                  backgroundSize: "12px 12px",
                }}
              ></div>
            )}
            {project.pattern === "radial" && (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_60%)]"></div>
            )}
            {project.pattern === "plus" && (
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
            )}
            {project.pattern === "zigzag" && (
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, currentColor 25%, transparent 25%), linear-gradient(225deg, currentColor 25%, transparent 25%)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
            )}
          </div>

          {/* Blurred placeholder image */}
          {/* <Image
            // src="/placeholder.svg?height=400&width=600"
            alt="Project placeholder"
            width={600}
            height={400}
            className="w-full h-full object-cover opacity-20 blur-sm"
          /> */}

          {/* Coming soon badge with glow */}
          <div className="absolute flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg transform scale-110"></div>
              <Badge
                variant="outline"
                className="relative bg-background/90 backdrop-blur-sm text-sm py-3 px-6 border-primary/40 font-medium"
              >
                Coming Soon
              </Badge>
            </div>
          </div>

          {/* Project icon with ring */}
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
            {project.icon}
          </div>
        </div>

        <CardContent className="flex-1 p-6 space-y-5 dark:bg-gray-800/50">
          <div className="space-y-2">
            <h3 className="text-xl font-bold dark:text-white">
              {project.title}
            </h3>
            <p className="text-muted-foreground dark:text-gray-300 text-sm">
              {project.description}
            </p>
          </div>

          {/* Stylized tech tag placeholders - improved for dark mode */}
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-7 rounded-full flex items-center space-x-1 px-3 animate-pulse border border-transparent dark:border-gray-700/40"
                style={{
                  background: `linear-gradient(to right, ${getRandomGradient(
                    i
                  )})`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: "2s",
                }}
              >
                <div className="w-2 h-2 rounded-full bg-background/90 dark:bg-gray-200"></div>
                <div className="h-2.5 w-12 rounded-full bg-background/90 dark:bg-gray-200/90"></div>
              </div>
            ))}
          </div>

          {/* Feature list placeholders - improved for dark mode */}
          <div className="space-y-3.5 pt-3">
            <div className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-primary/30 dark:bg-primary/50 flex-shrink-0 mt-0.5 mr-3 animate-pulse"></div>
              <div className="w-full h-3 bg-muted-foreground/20 dark:bg-gray-500/40 rounded-full"></div>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-primary/30 dark:bg-primary/50 flex-shrink-0 mt-0.5 mr-3 animate-pulse"></div>
              <div className="w-3/4 h-3 bg-muted-foreground/20 dark:bg-gray-500/40 rounded-full"></div>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-primary/30 dark:bg-primary/50 flex-shrink-0 mt-0.5 mr-3 animate-pulse"></div>
              <div className="w-5/6 h-3 bg-muted-foreground/20 dark:bg-gray-500/40 rounded-full"></div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <Button
            disabled
            className="w-full bg-gradient-to-r from-primary/80 to-primary hover:from-primary hover:to-primary/90 transition-all duration-300 shadow-sm"
            variant="default"
          >
            <Clock className="mr-2 h-4 w-4" />
            <span>Project Launching Soon</span>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

// Helper function to generate random gradients for the tech tags
function getRandomGradient(index: number) {
  const gradients = [
    "rgba(79, 70, 229, 0.3) 0%, rgba(45, 212, 191, 0.3) 100%",
    "rgba(249, 115, 22, 0.3) 0%, rgba(234, 88, 12, 0.3) 100%",
    "rgba(16, 185, 129, 0.3) 0%, rgba(5, 150, 105, 0.3) 100%",
    "rgba(239, 68, 68, 0.3) 0%, rgba(220, 38, 38, 0.3) 100%",
    "rgba(59, 130, 246, 0.3) 0%, rgba(37, 99, 235, 0.3) 100%",
    "rgba(168, 85, 247, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%",
  ];
  return gradients[index % gradients.length];
}
// "use client";

// import { motion } from "framer-motion";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ArrowUpRight, Github, Info } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// export default function Projects() {
//   const projects = [
//     {
//       id: "house-rental",
//       title: "House Rental Platform",
//       description:
//         "A full-stack application for property owners to list their properties and for users to book rentals with real-time availability and secure payment processing.",
//       image: "/placeholder.svg?height=600&width=800",
//       tags: ["React", "Node.js", "MongoDB", "Express", "Stripe", "AWS S3"],
//       demoLink: "#",
//       githubLink: "#",
//       category: "fullstack",
//       features: [
//         "User authentication and profiles",
//         "Property listing with image uploads",
//         "Advanced search and filtering",
//         "Booking system with calendar integration",
//         "Payment processing with Stripe",
//         "Review and rating system",
//       ],
//       details: {
//         problem:
//           "Property owners needed a streamlined way to list and manage their rental properties, while renters needed an easy way to find and book accommodations.",
//         solution:
//           "I developed a comprehensive platform that connects property owners with potential renters, featuring a robust booking system and secure payment processing.",
//         technologies:
//           "React, Node.js, Express, MongoDB, Stripe API, AWS S3, Socket.io",
//         challenges:
//           "Implementing real-time availability updates and handling complex booking logic with overlapping dates was challenging. I solved this by creating an efficient calendar system with conflict detection.",
//         results:
//           "The platform has streamlined the rental process for both property owners and renters, reducing booking time by 40% and increasing property visibility.",
//         demoAccounts: [
//           {
//             role: "Renter",
//             email: "demo.renter@example.com",
//             password: "demoRenter123",
//           },
//           {
//             role: "Property Owner",
//             email: "demo.owner@example.com",
//             password: "demoOwner123",
//           },
//           {
//             role: "Admin",
//             email: "demo.admin@example.com",
//             password: "demoAdmin123",
//           },
//         ],
//         screenshots: [
//           "/placeholder.svg?height=400&width=600",
//           "/placeholder.svg?height=400&width=600",
//           "/placeholder.svg?height=400&width=600",
//         ],
//       },
//     },
//     {
//       id: "ecommerce",
//       title: "E-Commerce Platform",
//       description:
//         "A comprehensive e-commerce solution with product management, shopping cart, checkout process, and order tracking for both customers and administrators.",
//       image: "/placeholder.svg?height=600&width=800",
//       tags: [
//         "Next.js",
//         "TypeScript",
//         "PostgreSQL",
//         "Prisma",
//         "Stripe",
//         "Redux",
//       ],
//       demoLink: "#",
//       githubLink: "#",
//       category: "fullstack",
//       features: [
//         "Product catalog with categories",
//         "Shopping cart and wishlist",
//         "User accounts and order history",
//         "Admin dashboard for inventory management",
//         "Payment processing with multiple options",
//         "Order tracking and notifications",
//       ],
//       details: {
//         problem:
//           "Small businesses needed an affordable yet powerful e-commerce solution that could scale with their growth and provide comprehensive inventory management.",
//         solution:
//           "I built a full-featured e-commerce platform with an intuitive admin dashboard, robust product management, and seamless checkout experience.",
//         technologies:
//           "Next.js, TypeScript, PostgreSQL, Prisma, Stripe, Redux, TailwindCSS",
//         challenges:
//           "Handling complex inventory management across multiple product variants while ensuring data consistency was challenging. I implemented a robust database schema with transaction support to maintain data integrity.",
//         results:
//           "The platform has helped businesses increase online sales by an average of 35% while reducing management time through automation.",
//         demoAccounts: [
//           {
//             role: "Customer",
//             email: "demo.customer@example.com",
//             password: "demoCustomer123",
//           },
//           {
//             role: "Store Manager",
//             email: "demo.manager@example.com",
//             password: "demoManager123",
//           },
//           {
//             role: "Admin",
//             email: "demo.admin@example.com",
//             password: "demoAdmin123",
//           },
//         ],
//         screenshots: [
//           "/placeholder.svg?height=400&width=600",
//           "/placeholder.svg?height=400&width=600",
//           "/placeholder.svg?height=400&width=600",
//         ],
//       },
//     },
//     {
//       id: "social-media",
//       title: "Social Media Application",
//       description:
//         "A feature-rich social media platform with real-time messaging, post sharing, and user interactions similar to popular social networks.",
//       image: "/placeholder.svg?height=600&width=800",
//       tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "AWS"],
//       demoLink: "#",
//       githubLink: "#",
//       category: "fullstack",
//       features: [
//         "User profiles and connections",
//         "Post creation with media uploads",
//         "Real-time chat and notifications",
//         "News feed with personalized content",
//         "Like, comment, and share functionality",
//         "Content moderation tools",
//       ],
//       details: {
//         problem:
//           "Communities needed a dedicated social platform that focused on privacy and meaningful interactions rather than data harvesting and advertising.",
//         solution:
//           "I created a social media application that prioritizes user privacy while providing all the features expected from modern social platforms.",
//         technologies:
//           "React, Node.js, Express, MongoDB, Socket.io, Redis, AWS S3",
//         challenges:
//           "Implementing real-time features at scale was complex. I used Socket.io with Redis adapters to handle distributed real-time communications efficiently.",
//         results:
//           "The platform has fostered stronger community engagement with 70% of users being active daily, compared to 30% on previous platforms.",
//         demoAccounts: [
//           {
//             role: "Regular User",
//             email: "demo.user@example.com",
//             password: "demoUser123",
//           },
//           {
//             role: "Content Creator",
//             email: "demo.creator@example.com",
//             password: "demoCreator123",
//           },
//           {
//             role: "Moderator",
//             email: "demo.moderator@example.com",
//             password: "demoModerator123",
//           },
//         ],
//         screenshots: [
//           "/placeholder.svg?height=400&width=600",
//           "/placeholder.svg?height=400&width=600",
//           "/placeholder.svg?height=400&width=600",
//         ],
//       },
//     },
//     {
//       id: "food-delivery",
//       title: "Food Delivery System",
//       description:
//         "A comprehensive food delivery platform with web and mobile interfaces for customers, restaurants, and delivery personnel with real-time order tracking.",
//       image: "/placeholder.svg?height=600&width=800",
//       tags: [
//         "React",
//         "React Native",
//         "Node.js",
//         "GraphQL",
//         "MongoDB",
//         "Firebase",
//       ],
//       demoLink: "#",
//       githubLink: "#",
//       category: ["fullstack", "mobile"],
//       features: [
//         "Restaurant browsing and menu viewing",
//         "Order placement and customization",
//         "Real-time order tracking",
//         "Payment processing",
//         "Delivery driver assignment",
//         "Rating and review system",
//       ],
//       details: {
//         problem:
//           "Local restaurants needed an affordable delivery solution that didn't charge excessive commissions while providing excellent customer experience.",
//         solution:
//           "I developed an end-to-end food delivery system with web and mobile apps for customers, a management portal for restaurants, and a driver app for deliveries.",
//         technologies:
//           "React, React Native, Node.js, GraphQL, MongoDB, Firebase, Google Maps API",
//         challenges:
//           "Coordinating real-time updates between customers, restaurants, and drivers was complex. I implemented a pub/sub architecture with Firebase to ensure all parties had current information.",
//         results:
//           "The system has helped local restaurants increase delivery orders by 45% while reducing commission costs by 20% compared to major delivery platforms.",
//         demoAccounts: [
//           {
//             role: "Customer",
//             email: "demo.customer@example.com",
//             password: "demoCustomer123",
//           },
//           {
//             role: "Restaurant Owner",
//             email: "demo.restaurant@example.com",
//             password: "demoRestaurant123",
//           },
//           {
//             role: "Delivery Driver",
//             email: "demo.driver@example.com",
//             password: "demoDriver123",
//           },
//           {
//             role: "Admin",
//             email: "demo.admin@example.com",
//             password: "demoAdmin123",
//           },
//         ],
//         screenshots: [
//           "/placeholder.svg?height=400&width=600",
//           "/placeholder.svg?height=400&width=600",
//           "/placeholder.svg?height=400&width=600",
//         ],
//       },
//     },
//   ];

//   return (
//     <section id="projects" className="py-16 sm:py-20 bg-muted/30">
//       <div className="container px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
//         >
//           <Badge
//             variant="outline"
//             className="mb-4 px-3 py-1 text-sm border-primary/20"
//           >
//             My Work
//           </Badge>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-muted-foreground">
//             Explore my portfolio of full-stack applications that demonstrate my
//             technical skills and problem-solving abilities.
//           </p>
//         </motion.div>

//         <Tabs defaultValue="all" className="mb-12">
//           <div className="flex justify-center">
//             <TabsList className="overflow-x-auto max-w-full">
//               <TabsTrigger value="all">All Projects</TabsTrigger>
//               <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
//               <TabsTrigger value="mobile">Mobile</TabsTrigger>
//             </TabsList>
//           </div>

//           <TabsContent value="all" className="mt-8">
//             <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
//               {projects.map((project, index) => (
//                 <ProjectCard key={project.id} project={project} index={index} />
//               ))}
//             </div>
//           </TabsContent>

//           <TabsContent value="fullstack" className="mt-8">
//             <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
//               {projects
//                 .filter((project) =>
//                   Array.isArray(project.category)
//                     ? project.category.includes("fullstack")
//                     : project.category === "fullstack"
//                 )
//                 .map((project, index) => (
//                   <ProjectCard
//                     key={project.id}
//                     project={project}
//                     index={index}
//                   />
//                 ))}
//             </div>
//           </TabsContent>

//           <TabsContent value="mobile" className="mt-8">
//             <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
//               {projects
//                 .filter((project) =>
//                   Array.isArray(project.category)
//                     ? project.category.includes("mobile")
//                     : project.category === "mobile"
//                 )
//                 .map((project, index) => (
//                   <ProjectCard
//                     key={project.id}
//                     project={project}
//                     index={index}
//                   />
//                 ))}
//             </div>
//           </TabsContent>
//         </Tabs>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center"
//         >
//           <p className="text-muted-foreground mb-6">
//             Want to see more of my work? Check out my GitHub repository for
//             additional projects.
//           </p>
//           <Button asChild variant="outline" size="lg">
//             <Link
//               href="https://github.com/Mohamed-gp?tab=repositories"
//               target="_blank"
//             >
//               <Github className="mr-2 h-4 w-4" />
//               View All Projects
//             </Link>
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function ProjectCard({ project, index }: { project: any; index: number }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//     >
//       <Card className="overflow-hidden h-full flex flex-col group">
//         <div className="relative overflow-hidden">
//           <Image
//             src={project.image || "/placeholder.svg"}
//             alt={project.title}
//             width={800}
//             height={600}
//             className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
//             <div className="space-y-2">
//               <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
//               <p className="text-xs sm:text-sm line-clamp-2">
//                 {project.description}
//               </p>
//             </div>
//           </div>
//         </div>
//         <CardContent className="flex-1 p-4 sm:p-6">
//           <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
//           <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
//             {project.description}
//           </p>
//           <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
//             {project.tags.map((tag: string) => (
//               <Badge
//                 key={tag}
//                 variant="secondary"
//                 className="px-2 py-0.5 text-xs"
//               >
//                 {tag}
//               </Badge>
//             ))}
//           </div>
//           <div className="space-y-2">
//             <h4 className="font-semibold text-xs sm:text-sm">Key Features:</h4>
//             <ul className="text-xs sm:text-sm space-y-1">
//               {project.features
//                 .slice(0, 3)
//                 .map((feature: string, i: number) => (
//                   <li key={i} className="flex items-start">
//                     <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
//                     <span className="text-muted-foreground">{feature}</span>
//                   </li>
//                 ))}
//             </ul>
//           </div>
//         </CardContent>
//         <CardFooter className="p-6 pt-0">
//           <div className="flex flex-col sm:flex-row w-full gap-4">
//             <Button asChild size="sm" className="flex-1">
//               <Link href={project.demoLink}>
//                 <ArrowUpRight className="mr-2 h-4 w-4" />
//                 Live Demo
//               </Link>
//             </Button>
//             <Button asChild variant="outline" size="sm" className="flex-1">
//               <Link href={project.githubLink}>
//                 <Github className="mr-2 h-4 w-4" />
//                 Source Code
//               </Link>
//             </Button>
//             <Dialog>
//               <DialogTrigger asChild>
//                 <Button variant="outline" size="icon" className="sm:flex-none">
//                   <Info className="h-4 w-4" />
//                   <span className="sr-only">Project Details</span>
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
//                 <DialogHeader>
//                   <DialogTitle className="text-2xl">
//                     {project.title}
//                   </DialogTitle>
//                   <DialogDescription className="text-lg text-foreground/80 mt-2">
//                     {project.description}
//                   </DialogDescription>
//                 </DialogHeader>
//                 <div className="mt-6 space-y-6">
//                   <div>
//                     <h3 className="text-lg font-semibold mb-2">Problem</h3>
//                     <p className="text-muted-foreground">
//                       {project.details.problem}
//                     </p>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-2">Solution</h3>
//                     <p className="text-muted-foreground">
//                       {project.details.solution}
//                     </p>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-2">
//                       Technologies Used
//                     </h3>
//                     <p className="text-muted-foreground">
//                       {project.details.technologies}
//                     </p>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-2">
//                       Challenges & Solutions
//                     </h3>
//                     <p className="text-muted-foreground">
//                       {project.details.challenges}
//                     </p>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-2">Results</h3>
//                     <p className="text-muted-foreground">
//                       {project.details.results}
//                     </p>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-2">
//                       Demo Accounts
//                     </h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {project.details.demoAccounts.map(
//                         (account: any, i: number) => (
//                           <div key={i} className="border rounded-md p-3">
//                             <p className="font-medium">{account.role}</p>
//                             <p className="text-sm text-muted-foreground">
//                               Email: {account.email}
//                             </p>
//                             <p className="text-sm text-muted-foreground">
//                               Password: {account.password}
//                             </p>
//                           </div>
//                         )
//                       )}
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-2">Screenshots</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//                       {project.details.screenshots.map(
//                         (screenshot: string, i: number) => (
//                           <div key={i} className="rounded-md overflow-hidden">
//                             <Image
//                               src={screenshot || "/placeholder.svg"}
//                               alt={`${project.title} screenshot ${i + 1}`}
//                               width={600}
//                               height={400}
//                               className="w-full h-auto"
//                             />
//                           </div>
//                         )
//                       )}
//                     </div>
//                   </div>
//                   <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
//                     <Button asChild className="w-full sm:w-auto">
//                       <Link href={project.demoLink} target="_blank">
//                         <ArrowUpRight className="mr-2 h-4 w-4" />
//                         View Live Demo
//                       </Link>
//                     </Button>
//                     <Button
//                       asChild
//                       variant="outline"
//                       className="w-full sm:w-auto"
//                     >
//                       <Link href={project.githubLink} target="_blank">
//                         <Github className="mr-2 h-4 w-4" />
//                         Source Code
//                       </Link>
//                     </Button>
//                   </div>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </div>
//         </CardFooter>
//       </Card>
//     </motion.div>
//   );
// }
