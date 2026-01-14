import { ExternalLink, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

// --- Dados Mockados para Modais ---

const landingPageProjects = [
  {
    id: 1,
    title: 'Loures Advocacia - Landing Page',
    description: 'Landing page de alta conversão focada em captação de clientes para serviços jurídicos.',
    tags: ['Angular', 'Tailwind CSS', 'Formulários', 'Marketing'],
    color: 'from-purple-500 to-pink-500',
    link: 'https://louresadv.com.br/',
    imageMockup: 'bg-purple-900/50'
  },
  {
    id: 2,
    title: 'Maila Nails - Landing Page',
    description: 'Página de agendamento e serviços para manicure, focada em design moderno e facilidade de contato.',
    tags: ['React', 'Design Clean', 'Agendamento', 'WhatsApp'],
    color: 'from-red-500 to-orange-500',
    link: 'https://mailanails.netlify.app/',
    imageMockup: 'bg-red-900/50'
  },
  {
    id: 3,
    title: 'Cleiber Advocacia - Landing Page',
    description: 'Landing page profissional para escritório de advocacia, com foco em autoridade e serviços especializados.',
    tags: ['Next.js', 'TypeScript', 'SEO', 'Design Clean'],
    color: 'from-cyan-500 to-blue-500',
    link: 'https://cleiberadvocacia.com.br/',
    imageMockup: 'bg-cyan-900/50'
  }
];

const catalogProjects = [
  {
    id: 10,
    title: 'Catálogo Pollyana BC',
    description: 'Catálogo de vendas personalizado para loja de roupas, com integração direta via WhatsApp.',
    tags: ['React', 'Supabase', 'Painel Admin', 'Controle de Estoque'],
    color: 'from-green-500 to-teal-500',
    link: 'https://pollyanabc.netlify.app/',
    imageMockup: 'bg-green-900/50'
  }
];

const menuProjects = [
  {
    id: 20,
    title: 'Seven Cardápio Digital',
    description: 'Cardápio digital moderno com QR Code para um restaurante, permitindo fácil atualização e visualização.',
    tags: ['React', 'Supabase', 'QR Code', 'Painel Admin'],
    color: 'from-orange-500 to-red-500',
    link: 'https://seven-cardapio.netlify.app/',
    imageMockup: 'bg-orange-900/50'
  }
];

const portfolioProjects = [
  {
    id: 30,
    title: 'Portfólio Rafael Cruz',
    description: 'Portfólio pessoal desenvolvido para um desenvolvedor front-end, destacando projetos e habilidades.',
    tags: ['React', 'TypeScript', 'Vite', 'Animações'],
    color: 'from-[#0EA5E9] to-blue-400',
    link: 'https://rafaelcruz.netlify.app/',
    imageMockup: 'bg-blue-900/50'
  }
];

// Seção de Portfólio com projetos fictícios realistas
export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: '',
    projects: [] as typeof landingPageProjects,
  });

  const openModal = (title: string, projects: typeof landingPageProjects) => {
    setModalData({ title, projects });
    setIsModalOpen(true);
  };

  const whatsappNumber = '5531982607426';
  const whatsappMessage = encodeURIComponent(
    'Olá Davi! Vi seu site e gostaria de conversar sobre um projeto.'
  );

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      '_blank'
    );
  };

  const projects = [
    {
      category: 'Sistemas Web',
      title: 'Catálogo de Vendas',
      description: 'Criação de sistemas de catálogo de vendas personalizados para gestão de produtos e pedidos, otimizando processos e vendas.',
      tags: ['React', 'Supabase', 'Painel Admin', 'Controle de Estoque'],
      color: 'from-green-500 to-teal-500',
      link: 'https://pollyanabc.netlify.app/',
      action: () => openModal('Projetos de Catálogo de Vendas', catalogProjects)
    },
    {
      category: 'Gastronomia',
      title: 'Cardápio Digital',
      description: 'Implementação de um cardápio digital com QR Code para restaurantes e cafeterias, permitindo fácil atualização e visualização dos produtos.',
      tags: ['React', 'Supabase', 'QR Code', 'Painel Admin'],
      color: 'from-orange-500 to-red-500',
      link: 'https://seven-cardapio.netlify.app/',
      action: () => openModal('Projetos de Cardápio Digital', menuProjects)
    },
    {
      category: 'Serviços',
      title: 'Landing Page',
      description: 'Desenvolvimento de uma landing page de alta conversão para o lançamento de um produto ou serviço, com foco em captação de inscrições.',
      tags: ['Angular', 'Tailwind CSS', 'Formulários', 'Marketing'],
      color: 'from-purple-500 to-pink-500',
      link: 'https://louresadv.com.br/',
      action: () => openModal('Projetos de Landing Pages', landingPageProjects)
    },
    {
      category: 'Tecnologia',
      title: 'Site para Portfólio Profissional',
      description: 'Desenvolvimento de um portfólio pessoal para um desenvolvedor, destacando projetos, habilidades e informações de contato.',
      tags: ['React', 'TypeScript', 'Vite', 'Animações'],
      color: 'from-[#0EA5E9] to-blue-400',
      link: 'https://rafaelcruz.netlify.app/',
      action: () => openModal('Projetos de Portfólio Pessoal', portfolioProjects)
    }
  ];

  return (
    <section id="portfolio" className="bg-gradient-to-b from-gray-900 to-black py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#0EA5E9] text-sm font-medium">Portfólio</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Projetos que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-blue-400">
              transformam negócios
            </span>
          </h2>

          <p className="text-xl text-gray-400">
            Conheça alguns dos sites e catálogos desenvolvidos com qualidade e atenção aos detalhes
          </p>
        </div>

        {/* Grid de projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-[#0EA5E9]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0EA5E9]/10 flex flex-col"
            >
              {/* Mockup visual do projeto */}
              <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                {/* Barra do navegador mockup */}
                <div className="absolute top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm px-4 py-2 flex items-center space-x-2 z-10">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded px-2 py-0.5 text-xs text-gray-500">
                    projeto{index + 1}.com.br
                  </div>
                </div>

                {/* Conteúdo visual mockup */}
                <div className="absolute inset-0 pt-10 p-6">
                  <div className={`h-6 bg-gradient-to-r ${project.color} rounded w-3/4 mb-4`}></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-700 rounded w-full"></div>
                    <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-700 rounded w-4/6"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="bg-gray-800 rounded-lg p-3 space-y-2">
                      <div className={`w-6 h-6 bg-gradient-to-r ${project.color} rounded`}></div>
                      <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3 space-y-2">
                      <div class={`w-6 h-6 bg-gradient-to-r ${project.color} rounded`}></div>
                      <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>

                {/* Overlay com efeito */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </div>

              {/* Informações do projeto */}
              <div className="p-6 space-y-4 flex flex-col flex-grow">
                <div>
                  <span className="text-[#0EA5E9] text-sm font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-[#0EA5E9] transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
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

                {/* Botão de ação */}
                <div className="mt-auto">
                  {/* Agora todos usam a ação para abrir o modal */}
                  <button
                    onClick={project.action}
                    className="group/btn inline-flex items-center space-x-2 text-[#0EA5E9] hover:text-white transition-colors pt-2"
                  >
                    <span className="font-semibold text-sm">Ver detalhes</span>
                    <ExternalLink
                      size={16}
                      className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA para ver mais projetos */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Quer conhecer mais projetos ou discutir o seu?
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-[#0EA5E9] to-blue-600 hover:from-[#0EA5E9]/90 hover:to-blue-600/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-[#0EA5E9]/30"
          >
            <span>Vamos conversar sobre seu projeto</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Modal de Projetos */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projects={modalData.projects}
        title={modalData.title}
      />
    </section>
  );
}