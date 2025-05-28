"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          style={{ willChange: "transform, opacity" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 mx-auto"
        >
          <div className="flex justify-center">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-sm border-primary/20"
            >
              About Me
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Passionate about creating impactful digital experiences
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            I'm a full-stack developer with a passion for building innovative,
            user-centric applications. With expertise in both frontend and
            backend technologies, I create seamless digital experiences that
            solve real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            style={{ willChange: "transform, opacity" }}
            custom={0}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground">
              My journey in software development began with a curiosity about
              how digital products work. This curiosity evolved into a passion
              for creating elegant solutions to complex problems.
            </p>
            <p className="text-muted-foreground">
              Through hands-on freelance projects, I've had the opportunity to
              work with diverse teams and collaborate with clients worldwide.
              Each project has taught me valuable lessons about teamwork,
              communication, and delivering solutions that truly meet user
              needs. This experience has been instrumental in developing my
              professional capabilities and understanding of real-world business
              requirements.
            </p>
            <p className="text-muted-foreground">
              I'm constantly learning and adapting to new technologies, ensuring
              that my skills remain relevant in the ever-evolving tech
              landscape. My goal is to create applications that not only
              function flawlessly but also provide exceptional user experiences.
            </p>

            {/* Key Strengths */}
            <div className="space-y-4 pt-4">
              <h4 className="text-lg font-semibold">What I Bring to Teams:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Strong problem-solving mindset
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Collaborative team player
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Clear communication skills
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Commitment to code quality
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ willChange: "transform, opacity" }}
            custom={1}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <Card className="bg-background/50 hover:bg-background/80 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Code2 className="h-10 w-10 text-primary mb-4" />
                <h4 className="font-semibold mb-2">Clean Code</h4>
                <p className="text-sm text-muted-foreground">
                  I write maintainable, scalable, and efficient code
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 hover:bg-background/80 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h4 className="font-semibold mb-2">Collaborative</h4>
                <p className="text-sm text-muted-foreground">
                  I thrive in team environments and value open communication
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 hover:bg-background/80 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Lightbulb className="h-10 w-10 text-primary mb-4" />
                <h4 className="font-semibold mb-2">Problem Solver</h4>
                <p className="text-sm text-muted-foreground">
                  I approach challenges with creative and effective solutions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 hover:bg-background/80 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Rocket className="h-10 w-10 text-primary mb-4" />
                <h4 className="font-semibold mb-2">Fast Learner</h4>
                <p className="text-sm text-muted-foreground">
                  I quickly adapt to new technologies and methodologies
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
