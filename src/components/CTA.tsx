import { MessageCircle, ArrowRight } from 'lucide-react';

// Seção de Chamada Final para Ação (CTA)
export default function CTA() {
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

  return (
    <section id="contato" className="bg-gradient-to-b from-gray-900 to-black py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container principal do CTA */}
        <div className="relative max-w-5xl mx-auto">
          {/* Card principal com gradiente */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 border-[#0EA5E9]/30 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Efeitos de fundo decorativos */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

            {/* Conteúdo do CTA */}
            <div className="relative z-10 text-center space-y-8">
              {/* Ícone decorativo */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0EA5E9] to-blue-600 rounded-2xl shadow-lg shadow-[#0EA5E9]/50 animate-pulse">
                <MessageCircle size={40} className="text-white" />
              </div>

              {/* Título principal */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Vamos criar algo{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-blue-400">
                  incrível
                </span>{' '}
                para o seu negócio?
              </h2>

              {/* Subtítulo */}
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Transforme sua ideia em realidade com um site profissional que atrai clientes
                e aumenta suas vendas.
              </p>

              {/* Botão principal do WhatsApp */}
              <div className="pt-6">
                <button
                  onClick={handleWhatsAppClick}
                  className="group inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50"
                >
                  <MessageCircle size={28} />
                  <span>Falar no WhatsApp</span>
                  <ArrowRight
                    size={24}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              {/* Informações adicionais */}
              <div className="pt-8 space-y-4">
                <p className="text-gray-400">
                  Respondo em até 24 horas
                </p>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Disponível agora</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                    <span>Atendimento personalizado</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Orçamento sem compromisso</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Borda brilhante animada */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0EA5E9] via-blue-600 to-[#0EA5E9] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
          </div>

          {/* Cards de contato alternativos */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 text-center hover:border-[#0EA5E9]/50 transition-all duration-300">
              <MessageCircle size={32} className="text-[#0EA5E9] mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-400 text-sm">Resposta rápida</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 text-center hover:border-[#0EA5E9]/50 transition-all duration-300">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-white font-semibold mb-2">Localização</h3>
              <p className="text-gray-400 text-sm">Conselheiro Lafaiete - MG</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
