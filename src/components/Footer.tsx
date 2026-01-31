import { Github, Linkedin, Mail, BarChart3 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white-smoke py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BarChart3 className="h-6 w-6 text-gold" />
            <span className="font-semibold">Hariharan M V</span>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/HariharanMan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray hover:text-gold transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hariharanmv/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray hover:text-gold transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hariharanmani253@gmail.com"
              className="text-gray hover:text-gold transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray/20 text-center text-gray">
          <p>&copy; 2025 Hariharan M V. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;