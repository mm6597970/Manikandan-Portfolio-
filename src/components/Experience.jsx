import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Terminal } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "Qulus Solutions LLC",
      role: "Software Developer Intern",
      period: "Jan 2026 - Feb 2026",
      description: "Worked on backend development for an Invoice & Vendor Management System using Node.js, Express.js, MySQL, AWS Lambda, and API Gateway. Built REST APIs, optimized database operations, performed API testing using Swagger and Postman, and contributed to scalable serverless cloud architecture.",
      technologies: [
        "Node.js",
        "Express.js",
        "MySQL",
        "AWS Lambda",
        "API Gateway",
        "Swagger",
        "Postman"
      ]
    },
    {
      company: "Mindview Engineering Services Pvt. Ltd.",
      role: ".NET Developer",
      period: "Jun 2023 - Jul 2024",
      description: "Developed Windows Forms applications using VB.NET and database technologies such as SQL Server and MS Access. Implemented billing systems, CRUD operations, reporting modules, database integration, and application maintenance.",
      technologies: [
        "VB.NET",
        "SQL Server",
        "MS Access",
        "Windows Forms"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-cyber-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-heading-glow">
          Work Experience
        </h2>

        {/* Timeline Line */}
        <div className="relative pl-8 border-l-2 border-cyber-purple/30 space-y-12 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative timeline-item"
            >
              {/* Timeline Card */}
              <div className="glass-panel rounded-xl p-6 sm:p-8 hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-mono uppercase tracking-wide">
                      {exp.role}
                    </h3>
                    <p className="text-sm sm:text-base text-cyber-purple font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400 font-mono self-start sm:self-center">
                    <Calendar className="h-4 w-4 text-cyber-pink" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed text-justify">
                  {exp.description}
                </p>

                {/* Technologies used */}
                <div className="border-t border-cyber-purple/10 pt-4">
                  <div className="flex items-center gap-2 mb-3 text-white font-mono text-xs font-semibold">
                    <Terminal className="h-3.5 w-3.5 text-cyber-blue" />
                    <span>STACK INTEGRATIONS</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple font-mono text-[10px] sm:text-xs tracking-wider hover:border-cyber-pink hover:text-cyber-pink transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
