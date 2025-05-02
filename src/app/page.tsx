"use client";

import { Github, ArrowRight } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
