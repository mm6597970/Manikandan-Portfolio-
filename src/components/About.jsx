import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Layers } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Cpu className="h-6 w-6 text-cyber-purple" />,
      title: "Agentic AI & LLMs",
      description: "Building autonomous systems using LangChain, LangGraph, and Gemini APIs with advanced self-correction."
    },
    {
      icon: <Terminal className="h-6 w-6 text-cyber-pink" />,
      title: "Backend Architectures",
      description: "Developing robust APIs using Node.js, Express.js, and implementing scalable backend REST flows."
    },
    {
      icon: <Layers className="h-6 w-6 text-cyber-blue" />,
      title: "RAG & Search",
      description: "Implementing Retrieval-Augmented Generation workflows integrated with vector databases for contextual query retrieval."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Glow heading animated every 3s */}
        <h2 className="section-heading-glow">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Biography text */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-gray-300 font-sans text-base sm:text-lg leading-relaxed text-justify"
          >
            <div className="p-6 rounded-xl glass-panel border border-cyber-purple/20">
              <p className="mb-4">
                I am an <strong className="text-cyber-purple font-semibold">AI Engineer and Backend Developer</strong> passionate about building intelligent applications powered by Large Language Models (LLMs), Agentic AI, and modern backend technologies. My expertise includes developing AI-powered document processing systems, RAG applications, workflow automation, and scalable REST APIs.
              </p>
              <p className="mb-4">
                I have hands-on experience with <strong className="text-cyber-pink font-semibold">LangChain, LangGraph, Gemini API, OCR technologies, Node.js, Express.js, MySQL, AWS Lambda, and API Gateway</strong>. I enjoy solving real-world business problems by combining AI capabilities with robust backend architectures.
              </p>
              <p>
                Currently, I focus on <strong className="text-cyber-blue font-semibold">Agentic AI, Retrieval-Augmented Generation (RAG), AI Automation, Cloud Deployment, and Backend Engineering</strong> while continuously improving my skills in AI Engineering and Distributed Systems.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Quick Focus Area Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {cards.map((card, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-xl glass-panel flex flex-col items-start text-left hover:scale-[1.03] transition-all duration-300"
              >
                <div className="p-3 bg-cyber-black/80 rounded-lg border border-cyber-purple/20 mb-4">
                  {card.icon}
                </div>
                <h3 className="font-mono text-sm sm:text-base font-bold text-white mb-2 uppercase tracking-wide">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
