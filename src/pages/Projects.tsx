import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react';
import pdfExtractorImg from './pdf-extrator.png';
import n8nInfluencerImg from './N8N.png';
import signalMinerImg from './Signal Miner.png';
import inventoryAnalysisImg from './Inventory.png';
import flaskAppImg from './Todo List.png';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Personal Branding Copilot',
      subtitle: 'AI-powered Personal Branding Assistant',
      description: 'An AI-driven platform that helps users build and refine their personal brand by generating bios, LinkedIn content, project descriptions, and career-focused insights using Gemini AI and a modern full-stack architecture.',
      image: pdfExtractorImg,
      tech: ['React', 'Node.js','FastAPI', 'MongoDB', 'Gemini API'],
      ExternalLink: 'https://personal-branding-co-pilot-frontend-1.onrender.com',
    },
    {
      id: 2,
      title: 'Employee Attendance Management System',
      subtitle: 'Smart Attendance Tracking & Management',
      description: 'A web-based system to track employee attendance, manage check-in/check-out times, monitor work hours, and generate attendance reports with role-based access for admins and employees.',
      image: n8nInfluencerImg,
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      ExternalLink: 'https://employee-frontend-kohl-psi.vercel.app/',
    },
    {
      id: 3,
      title: 'Personalized AI Book Recommendation',
      subtitle: 'Book recommendations based on user inputs such as genre, age, and language',
      description: 'A Streamlit app that generates tailored book recommendations based on user-selected language, age group, and genre using the Gemini 1.5 Flash model.',
      image: flaskAppImg,
      tech: ['Python', 'Streamlit', 'Gemini 1.5 Flash'],
      github: 'https://github.com/HariharanMan/Personalized-AI-Book-Recommendation',
    },
    {
      id: 4,
      title: 'AI Content Creation Hub',
      subtitle: 'A suite of generative AI tools for creative content generation',
      description: 'A Streamlit-based platform powered by Gemini Flash 1.5 that offers multiple AI tools like story generators, debate creators, LinkedIn post assistants, and more to streamline and spark creativity in content development.',
      image: signalMinerImg,
      tech: ['Python', 'Streamlit', 'Gemini 1.5 Flash'],
      github: 'https://github.com/HariharanMan/AI-Content-Creation-Hub',
    },
    {
      id: 5,
      title: 'Stock Prediction using AI',
      subtitle: 'AI-powered stock forecasting and sentiment analysis platform',
      description: 'A platform that predicts stock prices using historical data and AI models, analyzes news sentiment, and offers real-time insights with a Gemini-powered chatbot for financial guidance.',
      image: inventoryAnalysisImg,
      tech: ['Python', 'Machine Learning', 'NLP', 'Gemini API', 'Streamlit'],
      github: 'https://github.com/HariharanMan/Stockprediction-using-AI',
    },
    
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white-smoke mb-6">
            My <span className="text-gold">Projects</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mx-auto">
          Projects that blend full stack development and GenAI to create smart, scalable solutions for real-world challenges.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-charcoal rounded-xl overflow-hidden shadow-xl group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white-smoke mb-1">{project.title}</h3>
                  <p className="text-gold text-sm">{project.subtitle}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gold/20 text-gold text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  {project.ExternalLink && (
                    <a
                      href={project.ExternalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center bg-gold/10 text-gold py-2 px-4 rounded-lg hover:bg-gold/20 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center bg-gold/10 text-gold py-2 px-4 rounded-lg hover:bg-gold/20 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Github
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;