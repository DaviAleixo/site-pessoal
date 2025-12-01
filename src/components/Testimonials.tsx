import { Quote, Star } from 'lucide-react';

// Seção de Depoimentos de clientes
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Fernanda Silva',
      role: 'Proprietária - Restaurante Tempero Caseiro',
      content:
        'O Davi criou um cardápio digital incrível para meu restaurante. Agora meus clientes acessam tudo pelo celular com QR Code. As vendas aumentaram e o atendimento ficou muito mais prático!',
      rating: 5,
      avatar: 'MF'
    },
    {
      name: 'Carlos Eduardo Santos',
      role: 'Advogado - Santos Advocacia',
      content:
        'Precisava de um site profissional e o resultado superou minhas expectativas. Design moderno, rápido e totalmente responsivo. Recebi vários elogios de clientes e colegas da área.',
      rating: 5,
      avatar: 'CE'
    },
    {
      name: 'Ana Paula Oliveira',
      role: 'Empreendedora - Loja Virtual de Moda',
      content:
        'Meu catálogo digital ficou perfeito! Os clientes conseguem ver todos os produtos com fotos lindas e comprar direto pelo WhatsApp. O Davi foi super atencioso e entregou tudo no prazo.',
      rating: 5,
      avatar: 'AP'
    }
  ];

  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#0EA5E9] text-sm font-medium">Depoimentos</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            O que meus clientes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-blue-400">
              dizem sobre mim
            </span>
          </h2>

          <p className="text-xl text-gray-400">
            Satisfação e resultados reais para cada projeto entregue
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-[#0EA5E9]/50 transition-all duration-300 hover:scale-105"
            >
              {/* Ícone de aspas */}
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Quote size={24} className="text-white" />
                </div>
              </div>

              {/* Avaliação com estrelas */}
              <div className="flex space-x-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Conteúdo do depoimento */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Informações do cliente */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-800">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0EA5E9] to-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>

                {/* Nome e cargo */}
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9] to-blue-600 opacity-0 hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
