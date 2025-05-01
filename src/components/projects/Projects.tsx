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
  Star,
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
          style={{ willChange: "transform, opacity" }}
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
          style={{ willChange: "transform, opacity" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <p className="text-muted-foreground">
            Want to see my current work? Check out my GitHub repositories for
            projects in development.
            <span className="block mt-2 text-sm italic">
              If you find any repositories helpful, a star would be greatly
              appreciated! ✨
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://github.com/Mohamed-gp?tab=repositories"
                target="_blank"
              >
                <Github className="mr-2 h-4 w-4" />
                View GitHub Repositories
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="group">
              <Link
                href="https://github.com/Mohamed-gp"
                target="_blank"
                className="flex items-center"
              >
                <Star className="mr-2 h-4 w-4 text-yellow-500 transition-transform group-hover:scale-110" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-500 group-hover:from-yellow-400 group-hover:to-amber-400">
                  Star My Work
                </span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ComingSoonCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      style={{ willChange: "transform, opacity" }}
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
