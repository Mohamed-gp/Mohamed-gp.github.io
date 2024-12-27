"use client";

import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { MouseShadow } from "../components/effects";
import { MouseClickEffect } from "../components/mouse-click-effect";
import { GoToTop } from "../components/go-to-top";
import { ChatIcon } from "../components/chat-icon";
import { AIChatModal } from "../components/ai-chat-modal";

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* <MouseShadow /> */}
      {/* <MouseClickEffect /> */}
      <GoToTop />
      <ChatIcon />
      <AIChatModal />
    </>
  );
}
