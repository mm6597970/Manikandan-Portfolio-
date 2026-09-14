import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen text-gray-900 selection:bg-cyber-purple selection:text-gray-900">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-cyber-purple/10 bg-cyber-black/80 font-mono text-xs text-center text-gray-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-2">
            © {new Date().getFullYear()} Manikandan K. All rights reserved.
          </p>
          <p className="text-[10px] text-cyber-purple/60">
            SECURE_CONNECTION // PORTFOLIO_V1.0.0
          </p>
        </div>
      </footer>
    </div>
  );
}
