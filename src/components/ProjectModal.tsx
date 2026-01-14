import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  color: string;
  link: string;
  imageMockup: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  title: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, projects, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative bg-gray-900 border border-gray-800 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
        
        {/* Header do Modal */}
        <div className="sticky top-0 bg-gray-900/90 backdrop-blur-sm p-6 border-b border-gray-800 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-[#0EA5E9] transition-colors p-2 rounded-full">
            <X size={24} />
          </button>
        </div>

        {/* Conteúdo do Modal - Grid de Projetos */}
        <div className="p-6 md:p-8">
          <p className="text-gray-400 mb-8">
            Explore alguns exemplos de Landing Pages de alta conversão que desenvolvi.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-[#0EA5E9]/50 transition-all duration-300 flex flex-col"
              >
                {/* Mockup visual simples */}
                <div className={`h-32 rounded-lg mb-6 ${project.imageMockup} flex items-center justify-center`}>
                    <span className="text-gray-500 text-sm">Visual Mockup</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#0EA5E9] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Botão de link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto group/btn inline-flex items-center space-x-2 text-[#0EA5E9] hover:text-white transition-colors pt-2 font-semibold text-sm"
                >
                  <span>Acessar Projeto</span>
                  <ExternalLink
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;