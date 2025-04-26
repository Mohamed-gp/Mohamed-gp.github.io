"use client";

import { motion, PanInfo, useAnimation } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ExternalLink,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const controls = useAnimation();
  const constraintsRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "hamididz",
      company: "artisbay",
      role: "",
      avatar: "/clients/hamididz.webp",
      rating: 4.7,
      text: "We assigned him the task of enhancing font responsiveness, which he executed flawlessly. Beyond that, he proactively suggested valuable improvements that further optimized the design. His communication was clear and professional, and his skills were truly outstanding. Highly recommended!",
      fiverr_link:
        "https://www.fiverr.com/mohamedouterbah?source=gig_cards&referrer_gig_slug=be-your-nextjs-developer&ref_ctx_id=1df0d7ee3e474d0ebb7d3d9a4e954981&imp_id=9f7d27c2-91c1-4397-a085-2bfb79de53fa",
    },
  ];

  // Simplified animation control - fixes the disappearing issue
  useEffect(() => {
    controls.start({
      x: `calc(-${activeIndex * 100}% / ${testimonials.length})`,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    });
  }, [activeIndex, controls, testimonials.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);
    const threshold = 50; // Reduced threshold for more responsive dragging

    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    } else {
      // Reset position if not dragged far enough
      controls.start({
        x: `calc(-${activeIndex * 100}% / ${testimonials.length})`,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
      });
    }
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

        {/* Fixed slider container */}
        <div className="relative max-w-4xl mx-auto" ref={constraintsRef}>
          <div className="overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              animate={controls}
              initial={{ x: 0 }}
              className="flex"
              style={{
                cursor: isDragging ? "grabbing" : "grab",
                width: `${testimonials.length * 100}%`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="px-4"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-background to-muted/50">
                    <CardContent className="p-4 sm:p-8 h-full">
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
            </motion.div>
          </div>

          {/* Navigation dots */}
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
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-6 sm:mt-8 gap-3 sm:gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
