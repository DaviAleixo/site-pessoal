import { Quote, Star, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import TestimonialModal from './TestimonialModal';

// Seção de Depoimentos de clientes
export default function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      name: 'Emanuelle',
      role: 'Loures Advocacia',
      content:
        'Davi, passando para te dar um feedback referente ao site... Ficou maravilhoso, só elogios 😍. Ficou lindo, funcional e o sistema do blog está ajudando demais. Só tenho a agradecer pela atenção e trabalho!!!! 💖💖💖',
      rating: 5,
      avatar: 'EM',
      shortContent:
        'Davi, passando para te dar um feedback referente ao site... Ficou maravilhoso, só elogios 😍. Ficou lindo, funcional e o sistema do blog está ajudando demais. Só tenho a agradecer pela atenção e trabalho!!!! 💖💖💖',
    },
    {
      name: 'Igor Morais',
      role: 'Cliente Satisfeito',
      content:
        'Irmão ficou perfeito o site, muito bem detalhado, da pra ver que tu faz com carinho, estética ótima, não trava, ela vai amar viu tu é dedicado demais',
      rating: 5,
      avatar: 'IM',
      shortContent:
        'Irmão ficou perfeito o site, muito bem detalhado, da pra ver que tu faz com carinho, estética ótima, não trava, ela vai amar viu tu é dedicado demais',
    },
    {
      name: 'Rafael Cruz',
      role: 'Fotógrafo',
      content:
        'Quero registrar aqui toda a minha admiração e gratidão pelo trabalho simplesmente extraordinário que você realizou no desenvolvimento do site da minha empresa. Desde o início, você demonstrou um profissionalismo admirável, sempre atento aos detalhes, aberto às minhas ideias e extremamente comprometido em entregar algo que realmente representasse a essência do meu negócio. O resultado ficou muito além do que eu imaginava. O site ficou moderno, leve, intuitivo e visualmente impecável. Cada seção tem identidade, propósito e clareza. A forma como você conseguiu captar exatamente o que eu queria muitas vezes até antes de eu saber explicar mostra não só seu talento técnico, mas também sua sensibilidade e capacidade de transformar conceitos em experiências reais',
      rating: 5,
      avatar: 'RC',
      shortContent:
        'Quero registrar aqui toda a minha admiração e gratidão pelo trabalho simplesmente extraordinário que você realizou no desenvolvimento do site da minha empresa. O resultado ficou muito além do que eu imaginava. O site ficou moderno, leve, intuitivo e visualmente impecável. A forma como você conseguiu captar exatamente o que eu queria mostra sua sensibilidade e capacidade de transformar conceitos em experiências reais.',
    }
  ];

  const openModal = (testimonial: any) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

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
          {testimonials.map((testimonial, index) => {
            const isLongTestimonial = testimonial.content.length > testimonial.shortContent.length;
            
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-[#0EA5E9]/50 transition-all duration-300 hover:scale-105 flex flex-col"
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

                {/* Conteúdo do depoimento - Usando shortContent e line-clamp para garantir o tamanho */}
                <p className="text-gray-300 leading-relaxed mb-4 italic flex-grow line-clamp-6">
                  "{testimonial.shortContent}"
                </p>
                
                {/* Botão Ver Mais (só se for longo) */}
                {isLongTestimonial && (
                  <button
                    onClick={() => openModal(testimonial)}
                    className="mt-auto group/btn inline-flex items-center space-x-1 text-[#0EA5E9] hover:text-white transition-colors pt-2 font-semibold text-sm"
                  >
                    <span>Ver depoimento completo</span>
                    <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                  </button>
                )}
                
                {/* Se não for longo, adiciona um espaçamento para manter o alinhamento do rodapé */}
                {!isLongTestimonial && <div className="pt-2 mt-auto"></div>}


                {/* Informações do cliente */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-800 mt-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0EA5E9] to-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>

                  {/* Nome e cargo */}
                  <div className="flex flex-col">
                    <h4 className="text-white font-semibold leading-tight">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm leading-tight">{testimonial.role}</p>
                  </div>
                </div>

                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9] to-blue-600 opacity-0 hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

      </div>
      
      {/* Modal de Depoimento */}
      <TestimonialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        testimonial={selectedTestimonial}
      />
    </section>
  );
}