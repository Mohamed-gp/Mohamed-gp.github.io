"use client";

import { motion, PanInfo } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Star,
  Globe,
  Smartphone,
  Code2,
  Users,
  Info,
  Play,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";
import { useState, useRef } from "react";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const tabsRef = useRef<HTMLDivElement>(null);

  // Filter projects by type
  const webProjects = projects.filter((p) => p.projectType.includes("Web"));
  const mobileProjects = projects.filter((p) =>
    p.projectType.includes("Mobile")
  );

  const getProjectsForTab = (tab: string) => {
    switch (tab) {
      case "web":
        return webProjects;
      case "mobile":
        return mobileProjects;
      default:
        return projects;
    }
  };

  const tabs = ["all", "web", "mobile"];
  const currentTabIndex = tabs.indexOf(activeTab);

  const handleSwipe = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 100; // Increased threshold for better control
    const velocity = Math.abs(info.velocity.x);

    if (Math.abs(info.offset.x) > threshold || velocity > 500) {
      if (info.offset.x > 0 && currentTabIndex > 0) {
        // Swipe right - go to previous tab
        setActiveTab(tabs[currentTabIndex - 1]);
      } else if (info.offset.x < 0 && currentTabIndex < tabs.length - 1) {
        // Swipe left - go to next tab
        setActiveTab(tabs[currentTabIndex + 1]);
      }
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20"
    >
      <div className="container px-4 sm:px-6">
        <motion.div
          style={{ willChange: "transform, opacity" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm border-primary/20 bg-primary/5"
          >
            <Code2 className="mr-2 h-4 w-4" />
            My Work
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore my portfolio showcasing full-stack web applications and
            mobile apps that demonstrate technical expertise and real-world
            impact.
          </p>
        </motion.div>

        {/* Enhanced Tabs with Mobile Swipe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            {/* Mobile Swipe Indicator */}
            <div className="block md:hidden text-center mb-4">
              <p className="text-xs text-muted-foreground">
                👈 Swipe left or right to switch categories 👉
              </p>
            </div>

            {/* Tab List - Fixed for proper clicking */}
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 h-12 p-1 bg-muted/50 backdrop-blur-sm">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 text-sm font-medium pointer-events-auto"
                  onClick={() => setActiveTab("all")}
                >
                  <Users className="mr-2 h-4 w-4" />
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="web"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 text-sm font-medium pointer-events-auto"
                  onClick={() => setActiveTab("web")}
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Web
                </TabsTrigger>
                <TabsTrigger
                  value="mobile"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 text-sm font-medium pointer-events-auto"
                  onClick={() => setActiveTab("mobile")}
                >
                  <Smartphone className="mr-2 h-4 w-4" />
                  Mobile
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab Content with Swipe Support */}
            {["all", "web", "mobile"].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-0">
                <motion.div
                  ref={tab === activeTab ? tabsRef : null}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                  onDragEnd={handleSwipe}
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 cursor-grab active:cursor-grabbing md:cursor-default"
                  style={{ touchAction: "pan-y" }} // Allow vertical scrolling but control horizontal
                >
                  {getProjectsForTab(tab).map((project, index) => (
                    <motion.div
                      key={project.title}
                      variants={cardVariants}
                      whileHover={{ y: -8 }}
                      className="h-full"
                    >
                      <ProjectCard project={project} index={index} />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          style={{ willChange: "transform, opacity" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center space-y-6 mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/10"
        >
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">Want to see more?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out my GitHub repositories for additional projects and
              contributions.
              <span className="mt-2 text-sm italic flex items-center justify-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                If you find any repositories helpful, a star would be greatly
                appreciated!
              </span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" size="lg" className="group">
              <Link
                href="https://github.com/Mohamed-gp?tab=repositories"
                target="_blank"
                className="flex items-center"
              >
                <Github className="mr-2 h-5 w-5" />
                View All Repositories
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link
                href="https://github.com/Mohamed-gp"
                target="_blank"
                className="flex items-center"
              >
                <Star className="mr-2 h-5 w-5 text-yellow-500 transition-transform group-hover:scale-110" />
                <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent group-hover:from-yellow-500 group-hover:to-amber-500">
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
  const isWebProject = project.projectType.includes("Web");
  const isMobileProject = project.projectType.includes("Mobile");

  return (
    <Card className="overflow-hidden h-full flex flex-col group border border-primary/10 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-primary/20">
      {/* Enhanced Project Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover w-full h-full object-center transition-transform duration-500 group-hover:scale-110 ${
              project.title === "Ultimate eCommerce Platform"
                ? "object-top"
                : ""
            }`}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index < 3}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Code2 className="h-16 w-16 text-muted-foreground/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Enhanced Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <Badge className="bg-green-500/90 text-white border-none shadow-lg backdrop-blur-sm">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
            Live
          </Badge>
          {isWebProject && (
            <Badge
              variant="secondary"
              className="bg-blue-500/90 text-white border-none shadow-lg backdrop-blur-sm"
            >
              <Globe className="mr-1 h-3 w-3" />
              Web
            </Badge>
          )}
          {isMobileProject && (
            <Badge
              variant="secondary"
              className="bg-purple-500/90 text-white border-none shadow-lg backdrop-blur-sm"
            >
              <Smartphone className="mr-1 h-3 w-3" />
              Mobile
            </Badge>
          )}
        </div>

        {/* Project Type Overlay */}
        <div className="absolute bottom-4 left-4">
          <Badge
            variant="outline"
            className="bg-white/90 dark:bg-gray-900/90 text-foreground border-white/20 backdrop-blur-sm"
          >
            {project.projectType}
          </Badge>
        </div>
      </div>

      <CardContent className="flex-1 p-6 space-y-4">
        <div className="space-y-3">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Enhanced Tech Stack */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
            <Code2 className="h-4 w-4" />
            Tech Stack:
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techUsed.slice(0, 6).map((tech: any, i: number) => (
              <Badge
                key={i}
                variant="secondary"
                className="text-xs px-2 py-1 hover:bg-primary/10 transition-colors duration-200"
              >
                {tech.name}
              </Badge>
            ))}
            {project.techUsed.length > 6 && (
              <Badge
                variant="outline"
                className="text-xs px-2 py-1 border-dashed"
              >
                +{project.techUsed.length - 6} more
              </Badge>
            )}
          </div>
        </div>

        {/* Enhanced Key Features */}
        {project.features && (
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-muted-foreground">
              Key Features:
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              {project.features
                .slice(0, 3)
                .map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="line-clamp-1">{feature}</span>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </CardContent>

      {/* Enhanced Footer with Info Button */}
      <CardFooter className="p-6 pt-0 flex gap-2">
        {project.liveLink ? (
          <>
            <Button asChild className="flex-1 group">
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Live Demo
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1 group">
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                Code
              </Link>
            </Button>
          </>
        ) : (
          <Button asChild className="flex-1 group">
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              View Code
            </Link>
          </Button>
        )}

        {/* Info Modal */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="group">
              <Info className="h-4 w-4 transition-transform group-hover:scale-110" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                {project.title}
                <Badge variant="outline" className="text-sm">
                  {project.projectType}
                </Badge>
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              {/* Project Image */}
              {project.image && (
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Code2 className="h-5 w-5" />
                  Project Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* User Demo Link - Only show if live link exists */}
              {project.liveLink && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Play className="h-5 w-5 text-green-500" />
                    Live Demo
                  </h3>
                  <div className="flex items-center gap-4 flex-wrap">
                    <Button asChild variant="outline" className="group">
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Try Live Demo
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </Button>
                    {project.thereIsAdmin && (
                      <Badge
                        variant="secondary"
                        className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                      >
                        Admin Panel Available
                      </Badge>
                    )}
                  </div>

                  {/* Demo Credentials */}
                  {project.demoCredentials && (
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          User Demo
                        </h4>
                        <div className="space-y-1 text-sm">
                          <p className="text-blue-600 dark:text-blue-400">
                            <span className="font-medium">Email:</span>{" "}
                            {project.demoCredentials.user.email}
                          </p>
                          <p className="text-blue-600 dark:text-blue-400">
                            <span className="font-medium">Password:</span>{" "}
                            {project.demoCredentials.user.password}
                          </p>
                        </div>
                      </div>

                      {project.demoCredentials.admin && (
                        <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                            <Star className="h-4 w-4" />
                            Admin Demo
                          </h4>
                          <div className="space-y-1 text-sm">
                            <p className="text-purple-600 dark:text-purple-400">
                              <span className="font-medium">Email:</span>{" "}
                              {project.demoCredentials.admin.email}
                            </p>
                            <p className="text-purple-600 dark:text-purple-400">
                              <span className="font-medium">Password:</span>{" "}
                              {project.demoCredentials.admin.password}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Complete Features List */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  All Features
                </h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {project.features.map((feature: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete Tech Stack */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Code2 className="h-5 w-5" />
                  Complete Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techUsed.map((tech: any, i: number) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-sm px-3 py-1.5 hover:bg-primary/10 transition-colors duration-200"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t">
                {project.liveLink ? (
                  <>
                    <Button asChild className="flex-1">
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Live Site
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Source Code
                      </Link>
                    </Button>
                  </>
                ) : (
                  <Button asChild className="flex-1">
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
