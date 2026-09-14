import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Download, Send, CheckCircle } from 'lucide-react';
const email_gen_key = import.meta.env.VITE_EMAIL_GEN_ACCESS_KEY;

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Sending email using Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // TODO: Get your free access key from https://web3forms.com/ and replace this string
          access_key: email_gen_key,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Failed to send message: " + result.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending the message. Please try again later.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-cyber-navy/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-heading-glow">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Side: Professional Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel-glow rounded-xl p-8 flex flex-col justify-between h-full relative overflow-hidden">
              <div>
                <h3 className="font-mono text-lg font-bold text-white mb-6 uppercase tracking-wider">
                  Contact Information
                </h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  Feel free to reach out for project proposals, collaboration, job opportunities, or just to say hello. I'll get back to you as soon as possible!
                </p>

                <div className="space-y-6 font-mono text-sm">
                  {/* Phone */}
                  <a href="tel:+918248172014" className="flex items-center gap-4 group">
                    <div className="p-3 bg-cyber-purple/10 border border-cyber-purple/20 rounded-lg text-cyber-purple group-hover:border-cyber-pink group-hover:text-cyber-pink transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase">Phone</div>
                      <div className="text-white group-hover:text-cyber-purple transition-colors">+91-8248172014</div>
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:manikandan250720@gmail.com" className="flex items-center gap-4 group">
                    <div className="p-3 bg-cyber-pink/10 border border-cyber-pink/20 rounded-lg text-cyber-pink group-hover:border-cyber-blue group-hover:text-cyber-blue transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase">Email</div>
                      <div className="text-white group-hover:text-cyber-pink transition-colors">manikandan250720@gmail.com</div>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/manikandan-k-07a3ab270/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                    <div className="p-3 bg-cyber-blue/10 border border-cyber-blue/20 rounded-lg text-cyber-blue group-hover:border-cyber-purple group-hover:text-cyber-purple transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase">LinkedIn</div>
                      <div className="text-white group-hover:text-cyber-blue transition-colors">linkedin.com/in/manikandan-k</div>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a href="https://github.com/mm6597970" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                    <div className="p-3 bg-cyber-purple/10 border border-cyber-purple/20 rounded-lg text-cyber-purple group-hover:border-cyber-pink group-hover:text-cyber-pink transition-colors">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase">GitHub</div>
                      <div className="text-white group-hover:text-cyber-purple transition-colors">github.com/mm6597970</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Resume download button in professional card */}
              <div className="mt-12">
                <a
                  href="/resume/resume.pdf"
                  download="Manikandan_K_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg font-mono text-sm tracking-wider font-semibold border border-cyber-purple/40 text-white hover:bg-cyber-purple/10 hover:border-cyber-purple transition-all duration-300"
                >
                  <Download className="h-4 w-4 text-cyber-purple" />
                  <span>DOWNLOAD RESUME</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-mono text-lg font-bold text-white mb-6 uppercase tracking-wider">
                  Send A Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Grid for Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label className="block font-mono text-[10px] text-gray-400 uppercase mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-cyber-black/70 border border-cyber-purple/20 focus:border-cyber-purple rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-cyber-purple transition-all duration-300"
                        placeholder="Steve Jobs"
                      />
                    </div>
                    <div className="relative group">
                      <label className="block font-mono text-[10px] text-gray-400 uppercase mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-cyber-black/70 border border-cyber-purple/20 focus:border-cyber-purple rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-cyber-purple transition-all duration-300"
                        placeholder="steve@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block font-mono text-[10px] text-gray-400 uppercase mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-cyber-black/70 border border-cyber-purple/20 focus:border-cyber-purple rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-cyber-purple transition-all duration-300"
                      placeholder="Collaboration inquiry"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-[10px] text-gray-400 uppercase mb-2">Message</label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-cyber-black/70 border border-cyber-purple/20 focus:border-cyber-purple rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-cyber-purple transition-all duration-300 resize-none"
                      placeholder="Hi Manikandan, I'd like to talk about..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg font-mono text-sm tracking-wider font-semibold bg-gradient-to-r from-cyber-purple to-cyber-pink text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
                  >
                    <Send className="h-4 w-4" />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              </div>

              {/* Submission success popup inside form */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 mt-6 p-4 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-xs"
                >
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <span>TRANSMISSION SECURE: Your message has been sent successfully.</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
