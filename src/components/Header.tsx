import { Menu, X } from 'lucide-react';
import { useState } from 'react';

// Componente Header com navegação responsiva e foto do perfil
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo e foto do perfil */}
          <div className="flex items-center space-x-3">
            <img
              src="/davi-profile.jpg"
              alt="Davi Aleixo"
              className="w-10 h-10 rounded-full object-cover border-2 border-[#0EA5E9]"
            />
            <span className="text-white font-bold text-xl tracking-tight">
              Davi Aleixo
            </span>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-300"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-300"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-300"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-300"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-300"
            >
              Contato
            </button>
          </nav>

          {/* Botão menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left text-gray-300 hover:text-[#0EA5E9] transition-colors duration-300 py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left text-gray-300 hover:text-[#0EA5E9] transition-colors duration-300 py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="block w-full text-left text-gray-300 hover:text-[#0EA5E9] transition-colors duration-300 py-2"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left text-gray-300 hover:text-[#0EA5E9] transition-colors duration-300 py-2"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left text-gray-300 hover:text-[#0EA5E9] transition-colors duration-300 py-2"
            >
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
