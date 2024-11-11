import React from 'react';
import { Link } from 'react-scroll';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronDown, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import NetworkBackground from './NetworkBackground';
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <NetworkBackground />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 transform-origin-0 z-50"
        style={{ scaleX }} />
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Dawit Yilma Habtemariam</span>
          </motion.div>
          <ul className="flex space-x-4">
            {['About', 'Projects', 'Contact'].map((item) => (
              <motion.li key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={item.toLowerCase()} smooth={true} duration={500} className="cursor-pointer">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="relative z-10">
        <section id="hero" className="h-screen flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400"
            >
              Back-End Engineer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl mb-8"
            >
              Crafting robust and scalable server-side solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="about" smooth={true} duration={500} className="cursor-pointer">
                <ChevronDown size={40} className="animate-bounce text-blue-400" />
              </Link>
            </motion.div>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="mb-4">
                  I'm a passionate back-end engineer with expertise in designing and implementing 
                  server-side logic, databases, and APIs. With a strong foundation in various 
                  programming languages and frameworks, I strive to create efficient and scalable 
                  solutions for complex problems.
                </p>
                <p>
                  My experience spans across cloud technologies, microservices architecture, and 
                  database management. I'm always eager to learn and adapt to new technologies 
                  to stay at the forefront of back-end development.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {['Node.js', 'Python', 'Java', 'SQL', 'NoSQL', 'RESTful APIs', 'GraphQL', 'Docker', 'Kubernetes', 'AWS'].map((skill) => (
                    <li key={skill} className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-full px-3 py-1 text-sm border border-blue-400 text-blue-400">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'E-commerce API', desc: 'Scalable RESTful API for an e-commerce platform' },
                { title: 'Chat Application', desc: 'Real-time chat server using WebSockets' },
                { title: 'Data Pipeline', desc: 'ETL pipeline for processing large datasets' },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg border border-blue-400 hover:border-green-400 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                  <p className="mb-4">{project.desc}</p>
                  <div className="flex justify-between items-center">
                    <a href="https://www.github.com" className="text-green-400 hover:underline flex items-center">
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                    <Github size={20} className="text-blue-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Get In Touch</h2>
            <p className="mb-8">
              I'm always open to new opportunities and collaborations. 
              Feel free to reach out if you'd like to connect!
            </p>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center hover:bg-blue-600 transition-colors"
              >
                <Mail size={20} className="mr-2" /> Email Me
              </motion.a>
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-700 text-white px-6 py-3 rounded-full flex items-center hover:bg-gray-600 transition-colors"
              >
                <Github size={20} className="mr-2" /> GitHub
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-700 text-white px-6 py-3 rounded-full flex items-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} className="mr-2" /> LinkedIn
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg py-6 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} YourName. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
