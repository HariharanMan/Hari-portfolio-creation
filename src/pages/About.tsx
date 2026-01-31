import { motion } from 'framer-motion';
import { Code, TrendingUp, Award, BookOpen, Users } from 'lucide-react';
import SkillChart from '../components/SkillChart';


const About = () => {
  const skills = [
    { name: 'Python', level: 70 },
    { name: 'JavaScript', level: 60 },
    { name: 'Nodejs', level: 80 },
    { name: 'Reactjs', level: 60 },
    { name: 'MongoDB', level: 70 },
    { name: 'Git', level: 60 },
  ];

  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Generative AI, LLM Apps, AI Agents, Cursor AI',
      description: 'Udemy Course Completion',
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Published Research',
      description: 'International Journal for Science and Advance Research in Technology (IJSART)',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Team Leadership',
      description: 'Led a team of 80 for Product Development trainee in the Syncner',
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
            About <span className="text-gold">Me</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            I love crafting smart, user-focused solutions by blending full stack skills with the power of generative AI.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-charcoal rounded-2xl p-8">
              <img
                src="src\pages\My ChatGPT image.png"
                alt="Hariharan M V"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h2 className="text-2xl font-bold text-white-smoke text-center mb-4">
                Full Stack Developer & GenAI Enthusiast
              </h2>
              <p className="text-gray text-center">
                Fresher Looking For The Software Engineer Role.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white-smoke mb-4">My Journey</h3>
              <p className="text-gray leading-relaxed mb-4">
              ✨ My journey began with a passion for building things—from simple websites to intelligent systems. During college, I explored full stack development and later discovered the creative power of generative AI. I Pursing my degree in Artificial Intelligence & Data Science, sharpened my skills in modern web frameworks, and dived deep into large language models and prompt engineering.
              </p>
              <p className="text-gray leading-relaxed">
              🛠️ I’ve built dynamic web apps, integrated AI models into real-time systems, and developed tools that automate workflows and enhance user interaction. I’m now focused on combining scalable backend systems with GenAI to craft innovative, user-centric solutions that solve real-world problems.
                
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gold/20 p-3 rounded-lg">
                <Code className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white-smoke">Technical Excellence</h4>
                <p className="text-gray">Proficient in Full Stack Development (React, Node.js, Express, MongoDB) and Artificial Intelligence (Generative AI, LLM Integration, Prompt Engineering) 
                  with a focus on building intelligent, scalable, and user-centric applications.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gold/20 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white-smoke">Business Impact</h4>
                <p className="text-gray">At GreyAIPlatforms, engaged with business clients through LinkedIn outreach and cold emails, 
                  fostering partnerships and expanding market reach. Prepared comprehensive onboarding documentation to streamline client integration and enhance operational efficiency.

.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white-smoke text-center mb-12">Technical Skills</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold text-gold mb-6">Skill Proficiency</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white-smoke">{skill.name}</span>
                      <span className="text-gold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray/20 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-gold to-gold/70 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <SkillChart />
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white-smoke text-center mb-12">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-charcoal rounded-xl p-6 text-center hover:bg-charcoal/80 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/20 rounded-lg mb-4 text-gold">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold text-white-smoke mb-2">{achievement.title}</h4>
                <p className="text-gray">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;