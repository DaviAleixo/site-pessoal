import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  color: string;
  link: string;
  category: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative bg-gray-900 border border-gray-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
        
        {/* Header do Modal */}
        <div className="sticky top-0 bg-gray-900/90 backdrop-blur-sm p-6 border-b border-gray-800 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-[#0EA5E9] transition-colors p-2 rounded-full">
            <X size={24} />
          </button>
        </div>

        {/* Conteúdo do Modal - Detalhes do Projeto */}
        <div className="p-6 md:p-8 space-y-6">
          
          {/* Categoria e Descrição */}
          <div className="space-y-4">
            <span className="text-[#0EA5E9] text-sm font-medium uppercase tracking-wider">
              {project.category}
            </span>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Ícone e Link */}
          <div className="flex items-center space-x-4">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                <ExternalLink size={32} className="text-white" />
            </div>
            
            <div className="flex-grow">
              <h4 className="text-white font-semibold mb-1">Link do Projeto</h4>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center space-x-2 text-[#0EA5E9] hover:text-white transition-colors font-semibold text-sm underline underline-offset-4"
              >
                <span>Acessar {project.title}</span>
                <ExternalLink
                  size={16}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Tags (Mantidas na estrutura de dados, mas exibidas de forma diferente) */}
          <div className="pt-4 border-t border-gray-800">
            <h4 className="text-white font-semibold mb-3">Tecnologias Utilizadas</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;