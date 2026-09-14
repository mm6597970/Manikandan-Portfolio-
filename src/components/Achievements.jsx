import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Shield, GitBranch, Users, Zap } from 'lucide-react';

export default function Achievements() {
  const achievementsList = [
    {
      title: "ECURE ENTERPRISE KNOWLEDGE AGENT",
      description: "Architected a secure enterprise AI platform using RAG, SQL Agents, and Hybrid Retrieval to intelligently retrieve and generate responses from enterprise documents and structured databases.",
      icon: <CpuIcon className="h-6 w-6 text-cyber-purple" />
    },
    {
      title: "Developed Full-Stack Invoice Management Platform",
      description: "Built vendor onboarding, invoice routing, JWT authentication, and administrative dashboards integrated with a Node.js/Express API and MySQL.",
      icon: <GitBranch className="h-6 w-6 text-cyber-pink" />
    },
    {
      title: "Microsoft Azure Certified",
      description: "Validated fundamental knowledge of cloud concepts, Azure services, workloads, security, privacy, pricing, and support (AZ-900).",
      icon: <Shield className="h-6 w-6 text-cyber-blue" />
    },
    {
      title: "Project Leader for Customer Management System",
      description: "Led project coordination and development of a role-based Customer Management System for managing customer requests and organizational workflows.",
      icon: <Users className="h-6 w-6 text-yellow-400" />
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-cyber-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-heading-glow">
          Key Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsList.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel-glow rounded-xl p-6 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-cyber-purple/10">
                  <div className="p-2 bg-cyber-black/80 rounded-lg border border-cyber-purple/20">
                    {ach.icon}
                  </div>
                  <Trophy className="h-5 w-5 text-cyber-purple opacity-40" />
                </div>
                <h3 className="font-mono text-sm sm:text-base font-bold text-white mb-3 uppercase tracking-wide">
                  {ach.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed text-justify">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Inline small icon helper to avoid duplicate import or syntax error
function CpuIcon(props) {
  return (
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
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M9 1v3" />
      <path d="M15 1v3" />
      <path d="M9 20v3" />
      <path d="M15 20v3" />
      <path d="M20 9h3" />
      <path d="M20 15h3" />
      <path d="M1 9h3" />
      <path d="M1 15h3" />
    </svg>
  );
}
