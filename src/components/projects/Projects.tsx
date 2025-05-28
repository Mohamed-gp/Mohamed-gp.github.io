"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, Github, ExternalLink, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";

export default function Projects() {
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
            Explore my portfolio of full-stack applications that demonstrate my
            technical skills, problem-solving abilities, and real-world impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          style={{ willChange: "transform, opacity" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <p className="text-muted-foreground">
            Want to see more of my work? Check out my GitHub repositories for
            additional projects.
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

function ProjectCard({ project, index }: { project: any; index: number }) {
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
      <Card className="overflow-hidden h-full flex flex-col group border border-primary/10 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-md hover:shadow-xl transition-all duration-300">
        {/* Project Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={(e) => {
              // Fallback to gradient background if image fails to load
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Live/Demo Badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-500/90 text-white border-none shadow-lg">
              Live Project
            </Badge>
          </div>
        </div>

        <CardContent className="flex-1 p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-muted-foreground">
              Tech Stack:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techUsed.slice(0, 6).map((tech: any, i: number) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="text-xs px-2 py-1"
                >
                  {tech.name}
                </Badge>
              ))}
              {project.techUsed.length > 6 && (
                <Badge variant="outline" className="text-xs px-2 py-1">
                  +{project.techUsed.length - 6} more
                </Badge>
              )}
            </div>
          </div>

          {/* Key Features */}
          {project.features && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-muted-foreground">
                Key Features:
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {project.features
                  .slice(0, 3)
                  .map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </CardContent>

        <CardFooter className="p-6 pt-0 flex gap-3">
          <Button asChild className="flex-1">
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
