"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, Github, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Projects() {
  const projects = [
    {
      id: "house-rental",
      title: "House Rental Platform",
      description:
        "A full-stack application for property owners to list their properties and for users to book rentals with real-time availability and secure payment processing.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "MongoDB", "Express", "Stripe", "AWS S3"],
      demoLink: "#",
      githubLink: "#",
      category: "fullstack",
      features: [
        "User authentication and profiles",
        "Property listing with image uploads",
        "Advanced search and filtering",
        "Booking system with calendar integration",
        "Payment processing with Stripe",
        "Review and rating system",
      ],
      details: {
        problem:
          "Property owners needed a streamlined way to list and manage their rental properties, while renters needed an easy way to find and book accommodations.",
        solution:
          "I developed a comprehensive platform that connects property owners with potential renters, featuring a robust booking system and secure payment processing.",
        technologies:
          "React, Node.js, Express, MongoDB, Stripe API, AWS S3, Socket.io",
        challenges:
          "Implementing real-time availability updates and handling complex booking logic with overlapping dates was challenging. I solved this by creating an efficient calendar system with conflict detection.",
        results:
          "The platform has streamlined the rental process for both property owners and renters, reducing booking time by 40% and increasing property visibility.",
        demoAccounts: [
          {
            role: "Renter",
            email: "demo.renter@example.com",
            password: "demoRenter123",
          },
          {
            role: "Property Owner",
            email: "demo.owner@example.com",
            password: "demoOwner123",
          },
          {
            role: "Admin",
            email: "demo.admin@example.com",
            password: "demoAdmin123",
          },
        ],
        screenshots: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
    },
    {
      id: "ecommerce",
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution with product management, shopping cart, checkout process, and order tracking for both customers and administrators.",
      image: "/placeholder.svg?height=600&width=800",
      tags: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Stripe",
        "Redux",
      ],
      demoLink: "#",
      githubLink: "#",
      category: "fullstack",
      features: [
        "Product catalog with categories",
        "Shopping cart and wishlist",
        "User accounts and order history",
        "Admin dashboard for inventory management",
        "Payment processing with multiple options",
        "Order tracking and notifications",
      ],
      details: {
        problem:
          "Small businesses needed an affordable yet powerful e-commerce solution that could scale with their growth and provide comprehensive inventory management.",
        solution:
          "I built a full-featured e-commerce platform with an intuitive admin dashboard, robust product management, and seamless checkout experience.",
        technologies:
          "Next.js, TypeScript, PostgreSQL, Prisma, Stripe, Redux, TailwindCSS",
        challenges:
          "Handling complex inventory management across multiple product variants while ensuring data consistency was challenging. I implemented a robust database schema with transaction support to maintain data integrity.",
        results:
          "The platform has helped businesses increase online sales by an average of 35% while reducing management time through automation.",
        demoAccounts: [
          {
            role: "Customer",
            email: "demo.customer@example.com",
            password: "demoCustomer123",
          },
          {
            role: "Store Manager",
            email: "demo.manager@example.com",
            password: "demoManager123",
          },
          {
            role: "Admin",
            email: "demo.admin@example.com",
            password: "demoAdmin123",
          },
        ],
        screenshots: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
    },
    {
      id: "social-media",
      title: "Social Media Application",
      description:
        "A feature-rich social media platform with real-time messaging, post sharing, and user interactions similar to popular social networks.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "AWS"],
      demoLink: "#",
      githubLink: "#",
      category: "fullstack",
      features: [
        "User profiles and connections",
        "Post creation with media uploads",
        "Real-time chat and notifications",
        "News feed with personalized content",
        "Like, comment, and share functionality",
        "Content moderation tools",
      ],
      details: {
        problem:
          "Communities needed a dedicated social platform that focused on privacy and meaningful interactions rather than data harvesting and advertising.",
        solution:
          "I created a social media application that prioritizes user privacy while providing all the features expected from modern social platforms.",
        technologies:
          "React, Node.js, Express, MongoDB, Socket.io, Redis, AWS S3",
        challenges:
          "Implementing real-time features at scale was complex. I used Socket.io with Redis adapters to handle distributed real-time communications efficiently.",
        results:
          "The platform has fostered stronger community engagement with 70% of users being active daily, compared to 30% on previous platforms.",
        demoAccounts: [
          {
            role: "Regular User",
            email: "demo.user@example.com",
            password: "demoUser123",
          },
          {
            role: "Content Creator",
            email: "demo.creator@example.com",
            password: "demoCreator123",
          },
          {
            role: "Moderator",
            email: "demo.moderator@example.com",
            password: "demoModerator123",
          },
        ],
        screenshots: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
    },
    {
      id: "food-delivery",
      title: "Food Delivery System",
      description:
        "A comprehensive food delivery platform with web and mobile interfaces for customers, restaurants, and delivery personnel with real-time order tracking.",
      image: "/placeholder.svg?height=600&width=800",
      tags: [
        "React",
        "React Native",
        "Node.js",
        "GraphQL",
        "MongoDB",
        "Firebase",
      ],
      demoLink: "#",
      githubLink: "#",
      category: ["fullstack", "mobile"],
      features: [
        "Restaurant browsing and menu viewing",
        "Order placement and customization",
        "Real-time order tracking",
        "Payment processing",
        "Delivery driver assignment",
        "Rating and review system",
      ],
      details: {
        problem:
          "Local restaurants needed an affordable delivery solution that didn't charge excessive commissions while providing excellent customer experience.",
        solution:
          "I developed an end-to-end food delivery system with web and mobile apps for customers, a management portal for restaurants, and a driver app for deliveries.",
        technologies:
          "React, React Native, Node.js, GraphQL, MongoDB, Firebase, Google Maps API",
        challenges:
          "Coordinating real-time updates between customers, restaurants, and drivers was complex. I implemented a pub/sub architecture with Firebase to ensure all parties had current information.",
        results:
          "The system has helped local restaurants increase delivery orders by 45% while reducing commission costs by 20% compared to major delivery platforms.",
        demoAccounts: [
          {
            role: "Customer",
            email: "demo.customer@example.com",
            password: "demoCustomer123",
          },
          {
            role: "Restaurant Owner",
            email: "demo.restaurant@example.com",
            password: "demoRestaurant123",
          },
          {
            role: "Delivery Driver",
            email: "demo.driver@example.com",
            password: "demoDriver123",
          },
          {
            role: "Admin",
            email: "demo.admin@example.com",
            password: "demoAdmin123",
          },
        ],
        screenshots: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-muted/30">
      <div className="container px-4 sm:px-6">
        <motion.div
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

          <TabsContent value="all" className="mt-8">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fullstack" className="mt-8">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {projects
                .filter((project) =>
                  Array.isArray(project.category)
                    ? project.category.includes("fullstack")
                    : project.category === "fullstack"
                )
                .map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-8">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {projects
                .filter((project) =>
                  Array.isArray(project.category)
                    ? project.category.includes("mobile")
                    : project.category === "mobile"
                )
                .map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub repository for
            additional projects.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link
              href="https://github.com/Mohamed-gp?tab=repositories"
              target="_blank"
            >
              <Github className="mr-2 h-4 w-4" />
              View All Projects
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col group">
        <div className="relative overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
              <p className="text-xs sm:text-sm line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        </div>
        <CardContent className="flex-1 p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-2 py-0.5 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-xs sm:text-sm">Key Features:</h4>
            <ul className="text-xs sm:text-sm space-y-1">
              {project.features
                .slice(0, 3)
                .map((feature: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="flex flex-col sm:flex-row w-full gap-4">
            <Button asChild size="sm" className="flex-1">
              <Link href={project.demoLink}>
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link href={project.githubLink}>
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </Link>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="sm:flex-none">
                  <Info className="h-4 w-4" />
                  <span className="sr-only">Project Details</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {project.title}
                  </DialogTitle>
                  <DialogDescription className="text-lg text-foreground/80 mt-2">
                    {project.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Problem</h3>
                    <p className="text-muted-foreground">
                      {project.details.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Solution</h3>
                    <p className="text-muted-foreground">
                      {project.details.solution}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Technologies Used
                    </h3>
                    <p className="text-muted-foreground">
                      {project.details.technologies}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Challenges & Solutions
                    </h3>
                    <p className="text-muted-foreground">
                      {project.details.challenges}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Results</h3>
                    <p className="text-muted-foreground">
                      {project.details.results}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Demo Accounts
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.details.demoAccounts.map(
                        (account: any, i: number) => (
                          <div key={i} className="border rounded-md p-3">
                            <p className="font-medium">{account.role}</p>
                            <p className="text-sm text-muted-foreground">
                              Email: {account.email}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Password: {account.password}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Screenshots</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      {project.details.screenshots.map(
                        (screenshot: string, i: number) => (
                          <div key={i} className="rounded-md overflow-hidden">
                            <Image
                              src={screenshot || "/placeholder.svg"}
                              alt={`${project.title} screenshot ${i + 1}`}
                              width={600}
                              height={400}
                              className="w-full h-auto"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <Button asChild className="w-full sm:w-auto">
                      <Link href={project.demoLink} target="_blank">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        View Live Demo
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full sm:w-auto"
                    >
                      <Link href={project.githubLink} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
