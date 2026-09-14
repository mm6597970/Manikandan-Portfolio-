import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, HardDrive, ShieldCheck, Terminal } from 'lucide-react';

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

export default function Projects() {
  const projectsList = [
    {
      title: "Secure Enterprise Knowledge Agent",
      description: "A secure enterprise AI knowledge platform utilizing RAG, SQL Agents, and Hybrid Retrieval to intelligently retrieve and generate responses from enterprise documents and structured databases.",
      features: [
        "RAG & Hybrid Retrieval",
        "Multi-agent Orchestration",
        "AI Guardrails & Prompt Protection",
        "JWT Authentication & RBAC",
        "Metadata Access Control & Logging"
      ],
      techStack: ["React.js", "Node.js", "FastAPI", "Gemini", "LangChain", "LangGraph", "ChromaDB", "MySQL"],
      category: "Artificial Intelligence",
      icon: <Cpu className="h-5 w-5 text-cyber-purple" />,
      github: "https://github.com/mm6597970",
      demo: "#"
    },
    {
      title: "Invoice & Vendor Management System",
      description: "Full-stack dashboard platform for managing vendor accounts, invoices, submissions, approvals, and analytics tracking with full Swagger API docs.",
      features: [
        "JWT Session Authentication",
        "Dashboard Analytics & Metrics",
        "Vendor Profiles & Management",
        "Scalable REST APIs",
        "Interactive Swagger Docs"
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MySQL", "AWS"],
      category: "Full-Stack Development",
      icon: <HardDrive className="h-5 w-5 text-cyber-pink" />,
      github: "https://github.com/mm6597970",
      demo: "#"
    },
    {
      title: "Customer Management System",
      description: "Secure, role-based workflow administration tool to manage client requests, internal ticket routing, and organizational document tracking.",
      features: [
        "Role-Based Access Control (RBAC)",
        "Service Request Management",
        "Centralized Documentation System",
        "Granular Admin Dashboard"
      ],
      techStack: ["React.js", "PHP", "MySQL"],
      category: "System Administration",
      icon: <ShieldCheck className="h-5 w-5 text-cyber-blue" />,
      github: "https://github.com/mm6597970",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-cyber-navy/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-heading-glow">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-panel-glow rounded-xl p-6 flex flex-col justify-between hover:scale-[1.03] transition-all duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4 border-b border-cyber-purple/10 pb-3">
                  <span className="font-mono text-[10px] sm:text-xs text-cyber-purple tracking-widest uppercase">
                    {project.category}
                  </span>
                  <div className="p-1.5 bg-cyber-black rounded-lg border border-cyber-purple/20">
                    {project.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyber-purple transition-colors duration-300 uppercase tracking-wide font-mono">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm mb-5 leading-relaxed text-justify">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-mono text-[10px] sm:text-xs font-semibold text-white mb-2 tracking-wide uppercase">
                    Key Features
                  </h4>
                  <ul className="space-y-1.5">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyber-pink" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack & Links footer */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5 border-t border-cyber-purple/10 pt-4">
                  {project.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2 py-0.5 rounded bg-cyber-purple/10 border border-cyber-purple/10 text-cyber-purple font-mono text-[10px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/*
                <div className="flex items-center justify-between border-t border-cyber-purple/10 pt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>SOURCE_CODE</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center gap-1.5 font-mono text-xs text-gray-400 hover:text-cyber-purple transition-colors"
                  >
                    <span>LIVE_DEMO</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
                */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
