import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Download, Brain, Code, Cpu, Database } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

const Github = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
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
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at end of word
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
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

  // Particle Canvas Background
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#a855f7';
        ctx.fill();
      });

      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.1 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Dynamic background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Floating AI entities */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <motion.div 
          className="absolute top-[20%] left-[10%] text-cyber-purple/20 flex items-center gap-2"
          animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Brain className="h-8 w-8" />
          <span className="font-mono text-xs">RAG System</span>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-[25%] left-[15%] text-cyber-blue/20 flex items-center gap-2"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code className="h-6 w-6" />
          <span className="font-mono text-xs">LangChain</span>
        </motion.div>

        <motion.div 
          className="absolute top-[30%] right-[12%] text-cyber-pink/20 flex items-center gap-2"
          animate={{ y: [0, -25, 0], x: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cpu className="h-7 w-7" />
          <span className="font-mono text-xs">Agentic AI</span>
        </motion.div>

        <motion.div 
          className="absolute bottom-[30%] right-[18%] text-cyber-purple/20 flex items-center gap-2"
          animate={{ y: [0, 15, 0], x: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Database className="h-5 w-5" />
          <span className="font-mono text-xs">VectorDB</span>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Large container replicating the reference image structure */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-panel-glow rounded-2xl p-6 sm:p-12 relative overflow-hidden"
        >
          {/* Subtle dots decoration on corners (matching the reference image layout) */}
          <div className="absolute top-4 left-4 grid grid-cols-5 gap-1 opacity-20 hidden sm:grid">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-cyber-purple" />
            ))}
          </div>
          <div className="absolute bottom-4 right-4 grid grid-cols-5 gap-1 opacity-20 hidden sm:grid">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-cyber-pink" />
            ))}
          </div>

          <div className="flex flex-col items-center text-center px-4 py-8">
            {/* Left Content (Name, Typing Text, Tagline, Buttons) */}
            <div className="flex flex-col items-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-3"
              >
                Manikandan K
              </motion.h1>

              {/* Typing Animation Subheading */}
              <div className="h-10 sm:h-12 flex items-center mb-6">
                <span className="font-mono text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-blue bg-clip-text text-transparent">
                  {currentText}
                </span>
                <span className="w-[3px] h-6 sm:h-8 bg-cyber-purple ml-1 animate-pulse shadow-[0_0_8px_#a855f7]" />
              </div>

              {/* Tagline */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-base sm:text-lg mb-8 max-w-2xl leading-relaxed"
              >
                Building AI Agents, RAG Systems, LLM-Powered Applications, and Scalable Backend Services.
              </motion.p>

              {/* Hero Call to Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4 w-full sm:w-auto mb-8"
              >
                <button 
                  onClick={() => handleScrollTo('projects')}
                  className="px-8 py-3 rounded-lg font-mono text-sm tracking-wider font-semibold bg-gradient-to-r from-cyber-purple to-cyber-pink text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
                >
                  View Projects
                </button>
                <button 
                  onClick={() => handleScrollTo('contact')}
                  className="px-8 py-3 rounded-lg font-mono text-sm tracking-wider font-semibold border border-cyber-purple/40 text-white hover:bg-cyber-purple/10 hover:border-cyber-purple transition-all duration-300"
                >
                  Contact Me
                </button>
                <a 
                  href="/resume/resume.pdf" 
                  download="Manikandan_K_Resume.pdf"
                  className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-mono text-sm tracking-wider font-semibold border border-cyber-pink/40 text-white hover:bg-cyber-pink/10 hover:border-cyber-pink transition-all duration-300"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6"
              >
                <a 
                  href="https://www.linkedin.com/in/manikandan-k-07a3ab270/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-400 hover:text-cyber-purple hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://github.com/mm6597970" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-400 hover:text-cyber-pink hover:scale-110 transition-all duration-300"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:manikandan250720@gmail.com" 
                  className="text-gray-400 hover:text-cyber-blue hover:scale-110 transition-all duration-300"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
