import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  const eduData = {
    institution: "St. Joseph's College of Engineering",
    degree: "B.Tech Computer Science (Artificial Intelligence & Machine Learning)",
    location: "Chennai, India",
    duration: "2023 - 2027",
    expectedGrad: "Expected Graduation: May 2027",
    highlights: [
      "Specialization in Artificial Intelligence, Machine Learning and Deep Learning architectures",
      "Hands-on project work in RAG systems, Document Processing, and Prompt Engineering",
      "Consistent academic record with a focus on DSA, DBMS, and Distributed Systems"
    ]
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-heading-glow">
          Education
        </h2>

        <div className="relative pl-8 border-l-2 border-cyber-purple/30 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative timeline-item"
          >
            {/* Timeline Card */}
            <div className="glass-panel-glow rounded-xl p-6 sm:p-8 hover:scale-[1.02] transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyber-purple/10 border border-cyber-purple/30 rounded-lg text-cyber-purple">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-mono uppercase tracking-wide">
                      {eduData.institution}
                    </h3>
                    <p className="text-sm sm:text-base text-cyber-purple font-semibold">
                      {eduData.degree}
                    </p>
                  </div>
                </div>
              </div>

              {/* Info details */}
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 font-mono">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-cyber-pink" />
                  <span>{eduData.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-cyber-blue" />
                  <span>{eduData.expectedGrad}</span>
                </div>
              </div>

              {/* Highlighting academic focus */}
              <div className="border-t border-cyber-purple/10 pt-4 mt-4">
                <div className="flex items-center gap-2 mb-3 text-gray-900 font-mono text-sm font-semibold">
                  <Award className="h-4 w-4 text-cyber-pink" />
                  <span>CORE HIGHLIGHTS</span>
                </div>
                <ul className="space-y-2">
                  {eduData.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-cyber-purple mt-1.5 select-none text-[8px]">■</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
