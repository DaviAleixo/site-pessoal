import { Globe, Zap, QrCode, ShoppingBag } from 'lucide-react';

// Seção de Serviços com cards detalhados
export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Criação de Sites Profissionais',
      description:
        'Sites completos, responsivos e otimizados para sua empresa ou negócio. Design moderno, carregamento rápido e totalmente personalizável para destacar sua marca.',
      features: ['Design Responsivo', 'SEO Otimizado', 'Performance Premium'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Landing Pages',
      description:
        'Páginas focadas em conversão para capturar leads e aumentar suas vendas. Ideal para campanhas, lançamentos de produtos ou serviços específicos.',
      features: ['Alta Conversão', 'Mini Blog personalizado', 'Design Responsivo'],
      color: 'from-[#0EA5E9] to-blue-600'
    },
    {
      icon: QrCode,
      title: 'Cardápio Digital com QR Code',
      description:
        'Cardápios digitais modernos para restaurantes e lanchonetes. Seus clientes acessam o menu pelo celular usando QR Code, sem contato físico e com fotos atrativas.',
      features: ['QR Code Incluído', 'Fotos dos Pratos', 'Fácil Atualização', 'Painel Administrativo Exclusivo'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: ShoppingBag,
      title: 'Catálogo Digital com WhatsApp',
      description:
        'Catálogos virtuais de produtos com fotos, descrições e preços. Botão direto para WhatsApp em cada produto para facilitar a venda e o atendimento ao cliente.',
      features: ['Botão WhatsApp', 'Galeria de Produtos', 'Gestão Simples'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="servicos" className="bg-black py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#0EA5E9] text-sm font-medium">Serviços</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Soluções digitais para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-blue-400">
              impulsionar seu negócio
            </span>
          </h2>

          <p className="text-xl text-gray-400">
            Serviços personalizados que geram resultados reais para sua empresa
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-[#0EA5E9]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0EA5E9]/10 flex flex-col"
              >
                {/* Ícone do serviço */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={32} className="text-white" />
                  </div>
                </div>

                {/* Título e descrição */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#0EA5E9] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Efeito de brilho no hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Não encontrou o que procura? Vamos conversar sobre seu projeto!
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-[#0EA5E9] to-blue-600 hover:from-[#0EA5E9]/90 hover:to-blue-600/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-[#0EA5E9]/30"
          >
            Solicitar Orçamento Personalizado
          </button>
        </div>
      </div>
    </section>
  );
}