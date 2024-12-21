import BodyFilter from "@/components/body-filter/BodyFilter";
import AboutMe from "../components/about-me/AboutMe";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
// import SectionDivider from "./components/section-divider/SectionDivider";
import Skills from "../components/skills/Skills";
import Header from "@/components/header/Header";
import Theme from "@/components/theme/Theme";
import Contact from "@/components/contact/Contact";
import ChatBot from "@/components/chatbot/ChatBot";

function Home() {
  return (
    <>
      {/* <SectionDivider /> */}
      <BodyFilter />
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Theme />
      {/* <ChatBot /> */}
    </>
  );
}

export default Home;
