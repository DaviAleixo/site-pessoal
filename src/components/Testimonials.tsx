import { useState } from 'react';
import TestimonialModal from './TestimonialModal';
import TestimonialCarousel from './TestimonialCarousel';

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
      name: 'Thaís',
      role: 'Seven Beer',
      content:
        'O cardápio ficou ótimo, super organizado e prático. Ajudou muito no nosso dia a dia. E o painel ADM também ficou excelente, bem intuitivo e funcional. Seu trabalho fez muita diferença!',
      rating: 5,
      avatar: 'TS',
      shortContent:
        'O cardápio ficou ótimo, super organizado e prático. Ajudou muito no nosso dia a dia. E o painel ADM também ficou excelente, bem intuitivo e funcional. Seu trabalho fez muita diferença!',
    },
    {
      name: 'Rafael Cruz',
      role: 'Fotógrafo',
      content:
        'Quero registrar aqui toda a minha admiração e gratidão pelo trabalho simplesmente extraordinário que você realizou no desenvolvimento do site da minha empresa. Desde o início, você demonstrou um profissionalismo admirável, sempre atento aos detalhes, aberto às minhas ideias e extremamente comprometido em entregar algo que realmente representasse a essência do meu negócio. O resultado ficou muito além do que eu imaginava. O site ficou moderno, leve, intuitivo e visualmente impecável. Cada seção tem identidade, propósito e clareza. A forma como você conseguiu captar exatamente o que eu queria muitas vezes até antes de eu saber explicar mostra não só seu talento técnico, mas também sua sensibilidade e capacidade de transformar conceitos em experiências reais',
      rating: 5,
      avatar: 'RC',
      shortContent:
        'Quero registrar aqui toda a minha admiração e gratidão pelo trabalho extraordinário que você realizou. O site ficou moderno, leve, intuitivo e visualmente impecável.',
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

        {/* Carrossel de depoimentos */}
        <TestimonialCarousel
          testimonials={testimonials}
          openModal={openModal}
        />

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