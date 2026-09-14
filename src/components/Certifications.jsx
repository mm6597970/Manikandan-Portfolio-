import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Certifications() {
  const certificationsList = [
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "Certified",
      credentialId: "AZ-900",
      color: "border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]",
      badgeColor: "text-cyan-400 bg-cyan-950/40"
    },
    {
      title: "NPTEL Introduction to Machine Learning",
      issuer: "NPTEL / IIT",
      date: "Certified",
      credentialId: "NPTEL-ML",
      color: "border-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]",
      badgeColor: "text-purple-400 bg-purple-950/40"
    },
    {
      title: "Oracle Java Fundamentals",
      issuer: "Oracle Corporation",
      date: "Certified",
      credentialId: "Oracle-Java",
      color: "border-red-500/20 hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)]",
      badgeColor: "text-red-400 bg-red-950/40"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-cyber-navy/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-heading-glow">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsList.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel rounded-xl p-6 flex flex-col justify-between transition-all duration-300 ${cert.color} group`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg border border-white/5 flex items-center justify-center shrink-0 ${cert.badgeColor}`}>
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-mono text-sm sm:text-base font-bold text-white uppercase tracking-wide group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 font-mono">
                    Issuer: {cert.issuer}
                  </p>
                </div>
              </div>

              {/*
              <div className="flex items-center justify-between border-t border-cyber-purple/10 pt-4 mt-6">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-gray-500">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>CREDENTIAL ACTIVE</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] sm:text-xs text-cyber-purple hover:text-cyber-pink transition-colors font-mono cursor-pointer">
                  <span>VERIFY</span>
                  <ChevronRight className="h-3 w-3" />
                </div>
              </div>
              */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
