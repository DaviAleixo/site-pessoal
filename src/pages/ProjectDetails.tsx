import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Dados mockados para Landing Pages
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
    title: 'Lançamento de Produto X',
    description: 'Página de vendas otimizada para o lançamento de um novo produto digital, com foco em escassez e prova social.',
    tags: ['React', 'SEO', 'Hotjar', 'Copywriting'],
    color: 'from-red-500 to-orange-500',
    link: '#',
    imageMockup: 'bg-red-900/50'
  },
  {
    id: 3,
    title: 'Serviço de Consultoria',
    description: 'Landing page para consultores, com agendamento integrado e foco em autoridade profissional.',
    tags: ['Next.js', 'TypeScript', 'Calendly', 'Design Clean'],
    color: 'from-cyan-500 to-blue-500',
    link: '#',
    imageMockup: 'bg-cyan-900/50'
  }
];

// Mapeamento de categorias para dados
const projectDataMap: { [key: string]: { title: string, projects: typeof landingPageProjects } } = {
  'landing-pages': {
    title: 'Landing Pages de Alta Conversão',
    projects: landingPageProjects,
  },
  // Adicione outras categorias aqui se necessário
};

export default function ProjectDetails() {
  const { category } = useParams<{ category: string }>();
  
  const projectCategory = category ? projectDataMap[category] : null;

  if (!projectCategory) {
    return (
      <div className="min-h-screen bg-black text-white pt-20">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Categoria não encontrada</h1>
          <p className="text-gray-400">Volte para a página inicial para ver os serviços.</p>
          <Link to="/" className="mt-6 inline-flex items-center space-x-2 text-[#0EA5E9] hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span>Voltar para o Início</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20 lg:pt-32 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-gray-400 hover:text-[#0EA5E9] transition-colors mb-10">
            <ArrowLeft size={20} />
            <span>Voltar para o Início</span>
          </Link>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {projectCategory.title}
            </h1>
            <p className="text-xl text-gray-400">
              Explore os projetos desenvolvidos nesta categoria e veja como podemos impulsionar seu negócio.
            </p>
          </div>

          {/* Grid de projetos detalhados */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategory.projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-[#0EA5E9]/50 transition-all duration-300 hover:scale-[1.02] flex flex-col"
              >
                {/* Mockup visual simples */}
                <div className={`h-32 rounded-lg mb-6 ${project.imageMockup} flex items-center justify-center`}>
                    <span className="text-gray-500 text-sm">Visual Mockup</span>
                </div>

                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#0EA5E9] transition-colors">
                  {project.title}
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700"
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
      </main>
      <Footer />
    </div>
  );
}