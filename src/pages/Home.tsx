import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ArrowUp, TrendingUp, Code2Icon } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen"
    >
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white-smoke mb-4">
                Hariharan <span className="text-gold">Full Stack Developer</span>
              </h1>
              <div className="flex items-center justify-center space-x-4 text-gray">
                <TrendingUp className="h-6 w-6" />
                <span className="text-xl md:text-2xl">FSD</span>
                <Code2Icon className="h-6 w-6" />
              </div>
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Blending full-stack development with generative AI to build intelligent, scalable web applications.
              Passionate about creating seamless user experiences using modern frameworks, LLMs, and cloud technologies to deliver real-world impact.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="\Hariharan (cv).pdf"
                download
                className="inline-flex items-center px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>

              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-navy transition-all duration-300 hover:scale-105"
              >
                See My Work
                <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Internship Timeline */}
      <section id="internship" className="relative py-20 bg-charcoal/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gold text-center mb-12"
          >
            Internship Experience
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-8"
          >
            {/* Present - Syncner */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-gold">Syncner</h3>
              <p className="text-gray">July 2025 – Present</p>
              <p className="text-white-smoke">Team Lead & Full Stack Developer</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              <ArrowUp className="text-gold w-8 h-8" />
            </motion.div>

            {/* GreyAIPlatforms */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-gold">GreyAIPlatforms</h3>
              <p className="text-gray">Feb 2025 – July 2025</p>
              <p className="text-white-smoke">Software Developer & Agentic AI Developer</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              <ArrowUp className="text-gold w-8 h-8" />
            </motion.div>

            {/* Past - SNS Innovation Hub */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-gold">SNS Innovation Hub</h3>
              <p className="text-gray">Oct 2024 – Jan 2025</p>
              <p className="text-white-smoke">Junior Software Intern</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
