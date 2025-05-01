import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Testimonials from "@/components/testimonials/Testimonials";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/foooter/Footer";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/scroll-to-top/ScrollToTop";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Testimonials />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
