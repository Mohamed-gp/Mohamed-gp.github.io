"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, Quote, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "hamididz",
      company: "artisbay",
      role: "",
      avatar: "/clients/hamididz.webp",
      rating: 4.7,
      text: "We assigned him the task of enhancing font responsiveness, which he executed flawlessly. Beyond that, he proactively suggested valuable improvements that further optimized the design. His communication was clear and professional, and his skills were truly outstanding. Highly recommended!",
      fiverr_link: "https://fiverr.com/mohamedouterbah",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateTech",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "I hired this developer to build our company's web application from scratch. They were professional, responsive, and delivered high-quality work. Their technical expertise and ability to translate our vision into reality was impressive.",
      fiverr_link: "https://fiverr.com/testimonial/2",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthBrand",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Our social media dashboard project was complex, but this developer handled it with ease. They provided valuable insights that improved our original concept and delivered a solution that has significantly improved our workflow.",
      fiverr_link: "https://fiverr.com/testimonial/3",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Restaurant Owner",
      company: "Taste Fusion",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4,
      text: "The food delivery app developed for our restaurant chain has revolutionized our business. The developer was attentive to our specific needs and created a seamless experience for both our staff and customers.",
      fiverr_link: "https://fiverr.com/testimonial/4",
    },
    {
      id: 5,
      name: "Jessica Taylor",
      role: "Real Estate Agent",
      company: "Prime Properties",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The property listing platform developed for our agency has significantly improved our online presence. The search functionality and user experience are exceptional, leading to increased engagement and conversions.",
      fiverr_link: "https://fiverr.com/testimonial/5",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-muted/30">
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
            Client Feedback
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            What My Clients Say
          </h2>
          <p className="text-muted-foreground">
            I've had the privilege of working with amazing clients who have
            shared their experiences working with me. Here's what they have to
            say.
          </p>
          <div className="flex items-center justify-center mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="ml-2 font-medium text-sm sm:text-base">
              4.8 on Fiverr
            </span>
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                >
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/50">
                    <CardContent className="p-4 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0 mb-6">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12 sm:h-16 sm:w-16 border-2 border-primary/20">
                            <AvatarImage
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                            />
                            <AvatarFallback>
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-lg">
                              {testimonial.name}
                            </h4>
                            {testimonial.role && testimonial.company && (
                              <p className="text-muted-foreground">
                                {testimonial.role}, {testimonial.company}
                              </p>
                            )}
                            <div className="flex mt-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < testimonial.rating
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-muted"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <Button
                          asChild
                          variant="ghost"
                          size="icon"
                          className="rounded-full self-end sm:self-auto"
                        >
                          <Link href={testimonial.fiverr_link} target="_blank">
                            <ExternalLink className="h-5 w-5" />
                            <span className="sr-only">Verify on Fiverr</span>
                          </Link>
                        </Button>
                      </div>
                      <div className="relative">
                        <Quote className="h-8 w-8 text-primary/20 absolute -top-4 -left-2" />
                        <p className="text-muted-foreground relative z-10 pl-6">
                          {testimonial.text}
                        </p>
                      </div>
                      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                        <Badge variant="outline" className="px-3 py-1">
                          Verified Client
                        </Badge>
                        <Button
                          asChild
                          variant="link"
                          size="sm"
                          className="text-primary"
                        >
                          <Link href={testimonial.fiverr_link} target="_blank">
                            Verify on Fiverr
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 sm:mt-8 gap-1 sm:gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  activeIndex === index
                    ? "bg-primary"
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-6 sm:mt-8 gap-3 sm:gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
