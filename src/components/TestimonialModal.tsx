import React from 'react';
import { X, Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonial: Testimonial | null;
}

const TestimonialModal: React.FC<TestimonialModalProps> = ({ isOpen, onClose, testimonial }) => {
  if (!isOpen || !testimonial) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative bg-gray-900 border border-gray-800 rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
        
        {/* Header do Modal */}
        <div className="sticky top-0 bg-gray-900/90 backdrop-blur-sm p-6 border-b border-gray-800 flex justify-between items-center z-10">
          <h2 className="text-xl font-bold text-white">Depoimento Completo</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-[#0EA5E9] transition-colors p-2 rounded-full">
            <X size={24} />
          </button>
        </div>

        {/* Conteúdo do Modal */}
        <div className="p-6 md:p-8">
          
          {/* Informações do Cliente */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0EA5E9] to-blue-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">
                {testimonial.avatar}
              </span>
            </div>
            <div className="flex flex-col">
              <h4 className="text-white font-semibold text-lg leading-tight">{testimonial.name}</h4>
              <p className="text-gray-400 text-sm leading-tight">{testimonial.role}</p>
            </div>
          </div>

          {/* Avaliação */}
          <div className="flex space-x-1 mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={18} className="fill-yellow-500 text-yellow-500" />
            ))}
          </div>

          {/* Conteúdo do Depoimento */}
          <div className="relative p-4 bg-gray-800/50 rounded-lg">
            <Quote size={32} className="text-gray-700 absolute top-2 left-2 opacity-50" />
            <p className="text-gray-300 leading-relaxed whitespace-pre-wrap pt-4">
              {testimonial.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialModal;