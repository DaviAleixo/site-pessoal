import { ArrowRight, Code2 } from 'lucide-react';

// Seção Hero principal com título, subtítulo e CTAs
export default function Hero() {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen bg-black pt-20 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo principal */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 rounded-full px-4 py-2">
              <Code2 size={18} className="text-[#0EA5E9]" />
              <span className="text-[#0EA5E9] text-sm font-medium">
                Desenvolvedor Web Profissional
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Eu crio soluções digitais que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-blue-400">
                vendem por você
              </span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              Desenvolvo soluções digitais personalizadas para você, como landing pages, cardápios, catálogos de vendas e mini sistemas, resolvendo a dor específica do seu negócio.
            </p>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="group bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#0EA5E9]/30 hover:shadow-[#0EA5E9]/50 hover:scale-105"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('servicos')}
                className="border-2 border-gray-700 hover:border-[#0EA5E9] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Ver Serviços
              </button>
            </div>

          </div>

          {/* Mockup de site */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                {/* Barra do navegador mockup */}
                <div className="bg-gray-900 border-b border-gray-700 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded px-3 py-1 text-xs text-gray-400">
                    www.seunegocio.com.br
                  </div>
                </div>

                {/* Conteúdo mockup */}
                <div className="p-8 space-y-4">
                  <div className="h-8 bg-gradient-to-r from-[#0EA5E9] to-blue-600 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-700 rounded w-4/6"></div>

                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="bg-gray-800 rounded-lg p-4 space-y-2">
                      <div className="w-8 h-8 bg-[#0EA5E9] rounded"></div>
                      <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-700 rounded w-full"></div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 space-y-2">
                      <div className="w-8 h-8 bg-blue-600 rounded"></div>
                      <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-700 rounded w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elemento decorativo de fundo */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0EA5E9]/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}