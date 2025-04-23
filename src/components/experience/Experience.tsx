"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  GraduationCap,
  Award,
  Trophy,
  Medal,
  Star,
} from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Experience() {
  const workExperience = [
    {
      title: "Freelance Developer",
      company: "Fiverr",
      period: "2022 - Present",
      description:
        "Developing custom web applications and websites for clients worldwide. Maintaining a high satisfaction rate with clients through effective communication and quality deliverables.",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Client Communication",
      ],
    },
    {
      title: "Web Development Intern",
      company: "Tech Company",
      period: "December 2024 - February 2025",
      description:
        "Assisted in the development of client websites and web applications. Gained hands-on experience with modern web development technologies and methodologies.",
      skills: ["HTML/CSS", "JavaScript", "React", "Team Collaboration"],
    },
  ];

  const education = [
    {
      degree: "Engineering Degree in Computer Science",
      institution:
        "Higher School of Computer Science and Digital Technologies (ESTIN)",
      period: "2022 - Present",
      description:
        "Coursework includes Data Structures, Algorithms, Database Systems, and Web Development.",
    },
  ];

  const certifications = [
    {
      title: "ByteCraft Ideathon Winner - First Place",
      organization: "ByteCraft",
      date: "2023",
      description:
        "Achieved first place in the ByteCraft Ideathon competition by developing an innovative concept that stood out among all participants.",
      image: "/ideathonCertificate.jpg", // Updated with actual image
      icon: <Star className="h-5 w-5 text-yellow-500" />,
    },
    {
      title: "ByteCraft Competitive Programming",
      organization: "ByteCraft",
      date: "2023",
      description:
        "Participated in competitive programming challenges, enhancing algorithmic problem-solving skills.",
      image: "/competetive.jpg", // Updated with actual image
      icon: <Medal className="h-5 w-5 text-purple-500" />,
    },
    {
      title: "Salam Hack Online",
      organization: "Salam Hack",
      date: "2023",
      description:
        "Participated in the Salam Hack Online competition, developing solutions to real-world problems.",
      image: "/placeholder.svg?height=100&width=100", // Kept placeholder
      icon: <Award className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Innobyte Hackathon",
      organization: "ByteCraft",
      date: "December 2023",
      description:
        "Participated in the hackathon, developing innovative solutions among 18 teams at Syphax Hotel.",
      image: "/placeholder.svg?height=100&width=100", // Kept placeholder
      icon: <Trophy className="h-5 w-5 text-blue-500" />,
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20">
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
            My Journey
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground">
            My professional journey has equipped me with practical experience
            and valuable skills in software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1 lg:col-span-2"
          >
            <div className="flex items-center mb-6 sm:mb-8">
              <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-primary" />
              <h3 className="text-xl sm:text-2xl font-semibold">
                Work Experience
              </h3>
            </div>

            <div className="relative border-l-2 border-muted pl-4 sm:pl-6 ml-2 sm:ml-3 space-y-8 sm:space-y-10">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[1.25rem] sm:-left-[2.45rem] top-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/20 border-4 border-background" />
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg sm:text-xl font-semibold">
                        {job.title}
                      </h4>
                      <Badge
                        variant="outline"
                        className="font-normal text-xs sm:text-sm"
                      >
                        {job.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium text-sm sm:text-base">
                      {job.company}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                      {job.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="px-2 py-0.5 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6 sm:mb-8">
              <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-primary" />
              <h3 className="text-xl sm:text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card/50">
                  <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-base sm:text-lg font-semibold">
                          {edu.degree}
                        </h4>
                        <Badge
                          variant="outline"
                          className="font-normal text-xs sm:text-sm"
                        >
                          {edu.period}
                        </Badge>
                      </div>
                      <p className="text-primary font-medium text-sm">
                        {edu.institution}
                      </p>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 sm:mt-10">
              <div className="flex items-center mb-6">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-primary" />
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Certifications & Achievements
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {certifications.map((cert, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <Card className="bg-card/50 cursor-pointer hover:bg-card/80 transition-colors">
                        <CardContent className="p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <div className="relative">
                              <Image
                                src={"/achievement" + cert.image || "/placeholder.svg"}
                                alt={cert.title}
                                width={50}
                                height={50}
                                className="rounded-full"
                              />
                              <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-1">
                                {cert.icon}
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm sm:text-base">
                              {cert.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                              {cert.organization}, {cert.date}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[80vw] max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-xl">
                          {cert.icon} {cert.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-col items-center mt-4">
                        <Image
                          src={"/achievement" + cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          width={400}
                          height={300}
                          className="rounded-md mb-4 max-w-full h-auto"
                        />
                        <div className="text-center">
                          <p className="text-base sm:text-lg font-medium">
                            {cert.organization}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            Issued: {cert.date}
                          </p>
                          {cert.description && (
                            <p className="mt-2 text-muted-foreground text-sm">
                              {cert.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
