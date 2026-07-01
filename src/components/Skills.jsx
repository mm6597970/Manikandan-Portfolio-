import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Server, Terminal, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const skillsData = [
    {
      category: "AI & Generative AI",
      icon: <Brain className="h-6 w-6 text-cyber-purple" />,
      skills: [
        "Agentic AI",
        "LangChain",
        "LangGraph",
        "Prompt Engineering",
        "RAG",
        "Vector Database",
        "Gemini API",
        "OCR"
      ]
    },
    {
      category: "Backend Development",
      icon: <Server className="h-6 w-6 text-cyber-pink" />,
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "Swagger"
      ]
    },
    {
      category: "Programming",
      icon: <Terminal className="h-6 w-6 text-cyber-blue" />,
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "SQL"
      ]
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6 text-yellow-400" />,
      skills: [
        "MySQL",
        "SQL Server",
        "MS Access"
      ]
    },
    {
      category: "Tools",
      icon: <Wrench className="h-6 w-6 text-emerald-400" />,
      skills: [
        "Google Colab",
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "MySQL Workbench"
      ]
    },
    {
      category: "Core Concepts",
      icon: <Terminal className="h-6 w-6 text-cyber-blue" />,
      skills: [
        "OOP",
        "Data Structures & Algorithms (DSA)",
        "Database Design",
        "API Integration"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-cyber-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-heading-glow">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-panel rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 flex flex-col h-full"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-cyber-purple/10">
                <div className="p-2 bg-cyber-black/80 rounded-lg border border-cyber-purple/20">
                  {category.icon}
                </div>
                <h3 className="font-mono text-base sm:text-lg font-bold text-white uppercase tracking-wide">
                  {category.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="px-3 py-1.5 rounded-md bg-cyber-darker border border-cyber-purple/10 hover:border-cyber-purple/50 text-gray-300 hover:text-white font-mono text-xs cursor-default transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
