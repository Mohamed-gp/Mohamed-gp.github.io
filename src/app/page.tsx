import { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";
import Header from "@/components/header/Header";
import ClientScrollToTop from "@/components/scroll-to-top/ClientScrollToTop";

function LoadingFallback() {
  return (
    <div
      className="min-h-[200px] w-full flex items-center justify-center"
      aria-hidden="true"
    />
  );
}

// Split above-the-fold and below-the-fold content
const About = dynamic(() => import("@/components/about/About"), {
  loading: () => <LoadingFallback />,
});

const Experience = dynamic(() => import("@/components/experience/Experience"), {
  loading: () => <LoadingFallback />,
});

const Skills = dynamic(() => import("@/components/skills/Skills"), {
  loading: () => <LoadingFallback />,
});

const Testimonials = dynamic(
  () => import("@/components/testimonials/Testimonials"),
  {
    loading: () => <LoadingFallback />,
  }
);

const Projects = dynamic(() => import("@/components/projects/Projects"), {
  loading: () => <LoadingFallback />,
});

const Contact = dynamic(() => import("@/components/contact/Contact"), {
  loading: () => <LoadingFallback />,
});

const Footer = dynamic(() => import("@/components/foooter/Footer"), {
  loading: () => <LoadingFallback />,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
      <Footer />
      <ClientScrollToTop />
    </main>
  );
}
