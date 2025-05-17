import { useState, useRef, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Code, Database, BarChart, PieChart } from "lucide-react";

import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sections = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Create data flow animation
    const createDataFlowAnimation = () => {
      const container = document.querySelector('body');
      if (!container) return;
      
      for (let i = 0; i < 20; i++) {
        const dot = document.createElement('div');
        dot.className = 'data-dot';
        
        // Random position
        dot.style.left = `${Math.random() * 100}vw`;
        dot.style.animationDelay = `${Math.random() * 10}s`;
        dot.style.animationDuration = `${10 + Math.random() * 20}s`;
        
        container.appendChild(dot);
      }
    };

    createDataFlowAnimation();

    // Observer for sections
    const options = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sectionElements = document.querySelectorAll('section[id]');
    sections.current = Array.from(sectionElements) as HTMLElement[];
    
    sections.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.current.forEach((section) => {
        observer.unobserve(section);
      });
      
      // Clean up data dots
      document.querySelectorAll('.data-dot').forEach(dot => dot.remove());
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <BackgroundAnimation />
      <Navigation activeSection={activeSection} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>
        
        <section id="about" className="min-h-screen py-20">
          <About />
        </section>
        
        <section id="skills" className="min-h-screen py-20">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen py-20">
          <h2 className="section-heading">Featured Projects</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-light-navy mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="ml">Machine Learning</TabsTrigger>
              <TabsTrigger value="data">Data Analysis</TabsTrigger>
              <TabsTrigger value="viz">Visualization</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <Projects filter="all" />
            </TabsContent>
            <TabsContent value="ml">
              <Projects filter="ml" />
            </TabsContent>
            <TabsContent value="data">
              <Projects filter="data" />
            </TabsContent>
            <TabsContent value="viz">
              <Projects filter="viz" />
            </TabsContent>
          </Tabs>
        </section>

        <section id="experience" className="min-h-screen py-20">
          <Experience />
        </section>

        <section id="contact" className="min-h-screen py-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
