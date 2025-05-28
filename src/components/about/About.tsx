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
            From Curiosity to 500+ Downloads: My Developer Journey
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            What started as late-night coding sessions turned into building
            tools used by developers worldwide. Here's how I went from "Hello
            World" to helping others build their SaaS dreams.
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
            <h3 className="text-2xl font-semibold">
              The Plot Twist That Changed Everything
            </h3>
            <p className="text-muted-foreground">
              It all started with a simple question:{" "}
              <em>"Why does this button not work?"</em>
              Fast forward a few years, and I'm the guy clients trust to build
              their entire digital presence. That broken button curiosity
              evolved into a full-stack obsession where no bug is too stubborn,
              and no user experience is "good enough."
            </p>
            <p className="text-muted-foreground">
              Here's the thing about freelancing on Fiverr with a{" "}
              <strong>4.8-star rating</strong> — every project is a masterclass
              in problem-solving under pressure. One day I'm building an
              e-commerce platform with real-time inventory tracking, the next
              I'm creating a property rental system that handles payments across
              multiple currencies. Each client taught me something new, and
              somehow I became the developer who
              <em>"just makes things work."</em>
            </p>
            <p className="text-muted-foreground">
              But here's what I'm most proud of: co-creating the{" "}
              <strong>SaaS Boiler CLI</strong> that hit{" "}
              <strong>500+ downloads</strong> on npm. Watching developers use
              our tool to launch their own SaaS products? That's the kind of
              impact that keeps me coding until 3 AM (and loving every minute of
              it).
            </p>

            {/* Fun Facts */}
            <div className="space-y-4 pt-4 bg-muted/30 p-6 rounded-lg">
              <h4 className="text-lg font-semibold">
                Fun Developer Facts About Me:
              </h4>
              <div className="grid gap-3">
                <div className="flex items-start gap-2">
                  <span className="text-lg">🚀</span>
                  <span className="text-sm text-muted-foreground">
                    My code has processed thousands of Stripe transactions
                    without a single failed payment
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">⚡</span>
                  <span className="text-sm text-muted-foreground">
                    I can switch between TypeScript, Go, and Python faster than
                    you can say "tech stack"
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">🎯</span>
                  <span className="text-sm text-muted-foreground">
                    Perfect 4.8/5 rating on Fiverr because I treat every project
                    like it's the next unicorn startup
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">🌍</span>
                  <span className="text-sm text-muted-foreground">
                    Built applications for clients from 15+ countries (and
                    learned to code in multiple timezones)
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
            <Card className="bg-background/50 hover:bg-background/80 transition-colors group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Code2 className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">Code Craftsman</h4>
                <p className="text-sm text-muted-foreground">
                  I don't just write code, I craft digital experiences that
                  users actually love
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 hover:bg-background/80 transition-colors group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Users className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">Team Player</h4>
                <p className="text-sm text-muted-foreground">
                  From solo freelancing to team collaboration — I make
                  everyone's job easier
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 hover:bg-background/80 transition-colors group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Lightbulb className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">Solution Architect</h4>
                <p className="text-sm text-muted-foreground">
                  I see problems as puzzles waiting to be solved (and I'm pretty
                  good at puzzles)
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 hover:bg-background/80 transition-colors group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Rocket className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">Tech Enthusiast</h4>
                <p className="text-sm text-muted-foreground">
                  Always learning the latest tech — because staying ahead means
                  better solutions
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
