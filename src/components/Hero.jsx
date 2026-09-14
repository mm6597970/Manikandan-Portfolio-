import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';

const Github = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const words = [
    "Building AI Agents",
    "Developing RAG Systems",
    "LLM-Powered Applications",
    "Backend API Developer",
    "Agentic AI Engineer"
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const fullText = words[wordIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        if (currentText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };
    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-transparent">
      {/* Wavy Light Blue Background Shape on Left */}
      <div className="absolute top-0 left-0 w-full md:w-3/5 h-full z-0 overflow-hidden">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-0 left-0 w-[150%] h-full fill-cyber-navy">
          <path d="M0,0 L0,100 L50,100 C70,80 30,50 60,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-left px-4 py-8 flex flex-col items-start justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-cyber-purple/30 text-cyber-purple text-sm font-semibold mb-6 bg-white/50 backdrop-blur-sm"
          >
            Welcome to My Portfolio
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight"
          >
            Manikandan K
          </motion.h1>

          <div className="h-10 sm:h-12 flex items-center mb-6">
            <span className="font-mono text-xl sm:text-2xl font-bold text-cyber-purple">
              {currentText}
            </span>
            <span className="w-[3px] h-6 sm:h-8 bg-cyber-purple ml-1 animate-pulse" />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg sm:text-xl mb-10 max-w-lg leading-relaxed"
          >
            Building AI Agents, RAG Systems, LLM-Powered Applications, and Scalable Backend Services.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 w-full mb-10"
          >
            <button 
              onClick={() => handleScrollTo('projects')}
              className="px-8 py-3.5 rounded-lg font-mono text-sm tracking-wider font-semibold bg-cyber-purple text-white hover:bg-cyber-pink transition-all duration-300 shadow-lg shadow-cyber-purple/30"
            >
              View Projects
            </button>
            <button 
              onClick={() => handleScrollTo('contact')}
              className="px-8 py-3.5 rounded-lg font-mono text-sm tracking-wider font-semibold border border-cyber-purple text-cyber-purple hover:bg-cyber-purple/10 transition-all duration-300"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6"
          >
            <a href="https://www.linkedin.com/in/manikandan-k-07a3ab270/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-cyber-navy flex items-center justify-center text-cyber-purple hover:bg-cyber-purple hover:text-white transition-all duration-300">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/mm6597970" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-cyber-navy flex items-center justify-center text-cyber-purple hover:bg-cyber-purple hover:text-white transition-all duration-300">
              <Github className="h-5 w-5" />
            </a>
            <a href="mailto:manikandan250720@gmail.com" className="w-10 h-10 rounded-full bg-cyber-navy flex items-center justify-center text-cyber-purple hover:bg-cyber-purple hover:text-white transition-all duration-300">
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
        
        {/* Right Content - Abstract Tech Illustration instead of photo */}
        <div className="w-full md:w-1/2 hidden md:flex justify-center items-center">
            {/* Adding some subtle geometric/glass shapes to represent AI/Tech since we don't have the Finanza image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-80 h-80 bg-gradient-to-br from-cyber-navy to-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white"
            >
              <div className="w-64 h-64 rounded-full border-4 border-cyber-purple/20 border-dashed animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-48 h-48 rounded-full border-4 border-cyber-pink/30 border-dotted animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-cyber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
