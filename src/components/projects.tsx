  'use client'

  import { useState } from 'react'
  import Image from 'next/image'
  import { motion } from 'framer-motion'
  import { Github, ExternalLink, Info } from 'lucide-react'
  import { ProjectModal } from './project-modal'

  const techIcons = {
    TypeScript: '/icons/typescript.svg',
    React: '/icons/react.svg',
    'Tailwind CSS': '/icons/tailwindcss.svg',
    'Redux Toolkit': '/icons/redux.svg',
    'Node.js': '/icons/nodejs.svg',
    Firebase: '/icons/firebase.svg',
    Stripe: '/icons/stripe.svg',
    JWT: '/icons/jwt.svg',
    'Express.js': '/icons/express.svg',
    MongoDB: '/icons/mongodb.svg',
    PostgreSQL: '/icons/postgresql.svg',
    Prisma: '/icons/prisma.svg',
    JavaScript: '/icons/javascript.svg',
    Expo: '/icons/expo.svg',
    'React Native': '/icons/react.svg',
  }

  const projects = [
    {
      title: "SwiftBuy - Ultimate eCommerce Platform",
      description: "A full-stack eCommerce platform featuring a comprehensive shopping experience with wishlist, advanced filtering, and secure payment integration using Stripe.",
      image: "/project1.png",
      liveLink: "https://swiftbuy.production-server.tech/",
      githubLink: "https://github.com/Mohamed-gp/ecommerce_mern",
      techUsed: ["TypeScript", "React", "Tailwind CSS", "Redux Toolkit", "Node.js", "Firebase", "Stripe", "JWT", "Express.js", "MongoDB"],
      features: [
        "Wishlist functionality",
        "Payment integration with Stripe",
        "Filtering options",
        "User authentication and authorization",
        "Responsive design",
        "Admin dashboard for managing products and orders",
        "Real-time inventory management",
        "Order tracking and history",
      ]
    },
    {
      title: "Krelli - Comprehensive Renting Platform",
      description: "A full-stack renting platform offering a seamless experience for property rentals with advanced search, booking management, and secure payment processing.",
      image: "/project2.png",
      liveLink: "https://krelli.production-server.tech/",
      githubLink: "https://github.com/Mohamed-gp/Krelli_x86",
      techUsed: ["PostgreSQL", "Prisma", "JavaScript", "Firebase", "React", "Tailwind CSS", "Stripe", "Redux Toolkit", "Node.js", "JWT", "Express.js"],
      features: [
        "Advanced property search",
        "Booking management system",
        "Payment integration with Stripe",
        "User authentication and authorization",
        "Responsive design",
        "Admin dashboard for managing listings and bookings",
        "Real-time availability updates",
        "User reviews and ratings",
      ]
    },
    {
      title: "SocialSync - Dynamic Social Media Platform",
      description: "A full-stack social media platform enabling users to connect, share, and interact with advanced features like real-time messaging, post filtering, and secure authentication.",
      image: "/project3.png",
      liveLink: "https://socialsync.production-server.tech/",
      githubLink: "https://github.com/Mohamed-gp/SocialSync",
      techUsed: ["TypeScript", "React", "Tailwind CSS", "Redux Toolkit", "Node.js", "Firebase", "JWT", "Express.js", "MongoDB"],
      features: [
        "Real-time messaging",
        "Post filtering and search",
        "User authentication and authorization",
        "Responsive design",
        "Admin dashboard for managing users and content",
        "User profiles and activity feeds",
        "Like, comment, and share functionalities",
        "Notification system",
      ]
    },
    {
      title: "YumYum - Food Store and Delivery Platform",
      description: "A full-stack food store and delivery platform with a mobile app, offering a seamless ordering experience, real-time tracking, and secure payment integration.",
      image: "/project4.png",
      liveLink: "https://yumyum.production-server.tech/",
      githubLink: "https://github.com/Mohamed-gp/YumYum",
      techUsed: ["Expo", "TypeScript", "React Native", "Tailwind CSS", "Redux Toolkit", "Node.js", "Firebase", "Stripe", "JWT", "Express.js", "MongoDB"],
      features: [
        "Mobile app for iOS and Android",
        "Real-time order tracking",
        "Payment integration with Stripe",
        "User authentication and authorization",
        "Responsive design",
        "Admin dashboard for managing products and orders",
        "Menu management",
      ]
    }
  ]

  export function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    return (
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-32"
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Projects</h2>
            <div className="flex flex-col gap-y-32">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 relative h-[300px] md:h-auto">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.techUsed.map((tech, index) => (
                            <div key={index} className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1">
                              <Image src={techIcons[tech]} alt={tech} width={16} height={16} className="mr-2" />
                              <span className="text-sm text-gray-800 dark:text-gray-200">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5 mr-2" />
                          GitHub
                        </motion.a>
                        <motion.button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Info className="w-6 h-6" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        {selectedProject && (
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={selectedProject}
          />
        )}
      </section>
    )
  }

