"use client";
import Hero from "@/components/ui/Hero";
import Skills from "@/components/ui/Skills";
import Footer from "@/components/ui/Footer";
import Contact from "@/components/ui/Contact";
import Portfolio from "@/components/ui/Portfolio";
import Project from "@/components/ui/Project";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Portfolio Section */}

      <Portfolio />
      {/* Project Section */}
      <Project />
      {/* Skills Section */}
      <Skills />
      {/* Contact Section */}
      <Contact />
      <Footer />
    </div>
  );
}
