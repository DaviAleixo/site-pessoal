import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  shortContent: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  openModal: (testimonial: Testimonial) => void;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials, openModal }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Carrossel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-8">
          {testimonials.map((testimonial, index) => {
            const isLongTestimonial = testimonial.content.length > testimonial.shortContent.length;
            const cardText = testimonial.shortContent + (isLongTestimonial ? '...' : '');

            return (
              <div
                key={index}
                className="flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2 lg:basis-1/3 pl-8"
              >
                <div
                  className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-[#0EA5E9]/50 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Ícone de aspas */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Quote size={24} className="text-white" />
                    </div>
                  </div>

                  {/* Conteúdo do depoimento */}
                  {/* Removendo as aspas duplas do texto aqui */}
                  <p className="text-gray-300 leading-relaxed mb-4 italic flex-grow line-clamp-6 pt-4">
                    {cardText}
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
              </div>
            );
          })}
        </div>
      </div>

      {/* Botões de Navegação */}
      <div className="flex justify-center space-x-4 mt-12">
        <button
          onClick={scrollPrev}
          className="p-3 rounded-full bg-gray-800 text-white hover:bg-[#0EA5E9] transition-colors disabled:opacity-50"
          aria-label="Depoimento anterior"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={scrollNext}
          className="p-3 rounded-full bg-gray-800 text-white hover:bg-[#0EA5E9] transition-colors disabled:opacity-50"
          aria-label="Próximo depoimento"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;