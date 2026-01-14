import { Instagram, MessageCircle, Mail, Heart } from 'lucide-react';

// Componente Footer com informações de contato e links
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/davialeixo_nogueira',
      color: 'hover:text-pink-500'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/5531982607426',
      color: 'hover:text-green-500'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Grid principal do footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Coluna 1 - Sobre */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl mb-4">Davi Aleixo</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Desenvolvedor profissional criando sites modernos e funcionais para
              impulsionar negócios em todo o Brasil.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Disponível para novos projetos</span>
            </div>
          </div>

          {/* Coluna 2 - Links rápidos */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-[#0EA5E9] transition-colors text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-400 hover:text-[#0EA5E9] transition-colors text-sm"
                >
                  Sobre Mim
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-400 hover:text-[#0EA5E9] transition-colors text-sm"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-400 hover:text-[#0EA5E9] transition-colors text-sm"
                >
                  Portfólio
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Serviços */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Sites Profissionais</li>
              <li>Landing Pages</li>
              <li>Cardápio Digital</li>
              <li>Catálogo Virtual</li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">
                <span className="text-white font-medium">WhatsApp:</span>
                <br />
                (31) 98260-7426
              </p>
              <p className="text-gray-400">
                <span className="text-white font-medium">Localização:</span>
                <br />
                Conselheiro Lafaiete - MG
              </p>
            </div>
          </div>
        </div>

        {/* Redes sociais */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Links sociais */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Siga nas redes:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                    aria-label={social.name}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>

            {/* CTA secundário */}
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-to-r from-[#0EA5E9] to-blue-600 hover:from-[#0EA5E9]/90 hover:to-blue-600/90 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-[#0EA5E9]/20"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
            <p className="flex items-center space-x-1">
              <span>© {currentYear} Davi Aleixo. Desenvolvido com</span>
              <Heart size={16} className="text-[#0EA5E9] fill-[#0EA5E9]" />
              <span>e dedicação</span>
            </p>

            <div className="flex space-x-6">
              <button className="hover:text-[#0EA5E9] transition-colors">
                Política de Privacidade
              </button>
              <button className="hover:text-[#0EA5E9] transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Linha decorativa de gradiente */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent"></div>
    </footer>
  );
}