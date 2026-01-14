import { MapPin, Code2 } from 'lucide-react';

// Seção Sobre Mim com informações profissionais e tecnologias
export default function About() {
  const technologies = [
    { name: 'React', color: 'from-cyan-500 to-blue-500' },
    { name: 'Angular', color: 'from-red-500 to-red-600' },
    { name: 'Java', color: 'from-orange-500 to-red-600' },
    { name: 'SQL', color: 'from-blue-600 to-indigo-600' }
  ];

  return (
    <section id="sobre" className="bg-gradient-to-b from-black to-gray-900 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Foto do perfil */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-4 border-[#0EA5E9]/30 shadow-2xl shadow-[#0EA5E9]/20">
                <img
                  src="/davi-profile.jpg"
                  alt="Davi Aleixo - Desenvolvedor Web"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Elemento decorativo */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0EA5E9]/10 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Conteúdo textual */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 rounded-full px-4 py-2 mb-6">
                <span className="text-[#0EA5E9] text-sm font-medium">Sobre Mim</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Desenvolvedor focado em{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-blue-400">
                  resultados reais
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                Meu nome é <span className="text-white font-semibold">Davi Aleixo</span>, sou desenvolvedor
                especializado em criar sites modernos, bonitos e funcionais para pequenos negócios,
                profissionais autônomos e empresas que precisam de presença digital.
              </p>

              <p>
                Trabalho com dedicação oferecendo soluções simples, práticas e eficientes que
                realmente fazem a diferença para meus clientes. Cada projeto é desenvolvido
                pensando em conversão, usabilidade e design profissional.
              </p>

              <div className="flex items-start space-x-3 pt-2">
                <MapPin size={24} className="text-[#0EA5E9] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">Conselheiro Lafaiete – MG</p>
                  <p className="text-gray-400 text-base">
                    Atendendo clientes de qualquer lugar do Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* Tecnologias em destaque */}
            <div className="pt-6">
              <h3 className="text-white font-semibold text-xl mb-4">
                Principais Tecnologias
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-6 hover:border-[#0EA5E9]/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center mb-3`}>
                        <Code2 size={24} className="text-white" />
                      </div>
                      <h4 className="text-white font-bold text-lg">{tech.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experiência prática */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-white font-semibold text-lg mb-3">
                Experiência Prática
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                  <span>Sites profissionais completos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                  <span>Landing pages que aumentam conversão</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                  <span>Catálogos digitais com foto e preço</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                  <span>Cardápios digitais com QR Code</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                  <span>Páginas personalizadas para negócios locais</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
