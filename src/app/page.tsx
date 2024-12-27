import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import AboutMe from "../components/about-me/AboutMe";
import Skills from "@/components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "@/components/footer/Footer";
// import { MouseShadow } from "../components/effects";
// import { MouseClickEffect } from "../components/mouse-click-effect";
import GoToTop from "../components/goToTop/go-to-top";
import ChatIcon from "../components/chatbot/chat-icon";
import AIChatModal from "../components/chatbot/ai-chat-modal";
import ConsoleLog from "@/components/consoleLog/ConsoleLog";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <GoToTop />
      <ChatIcon />
      <AIChatModal />
      <ConsoleLog />
      {/* <MouseClickEffect /> */}
      {/* <MouseShadow /> */}
    </>
  );
}
