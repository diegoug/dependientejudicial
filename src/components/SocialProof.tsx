import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
  // Placeholder logos with opacity for future activation
  const logoPlaceholders = [
    "Firma Legal ABC",
    "Despacho Martínez", 
    "Legal Corp",
    "Jurídico Plus",
    "Abogados Unidos",
    "LegalTech SA"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Team Image */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            El futuro de la práctica legal está aquí
          </h2>
          <img 
            src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1000&h=600&fit=crop"
            alt="Professional legal team working together"
            className="w-full max-w-5xl mx-auto h-96 object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Placeholder for testimonials */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <Quote className="h-12 w-12 text-blue-900 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Próximamente: experiencias de nuestros beta testers
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Durante 2025 compartiremos aquí experiencias reales de los profesionales del derecho que
              vayan recibiendo acceso anticipado de forma gradual.
            </p>
            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <p className="text-blue-800 font-semibold">
                🎯 ¿Quieres ser uno de los primeros en compartir tu experiencia?
              </p>
              <a href="#" className="inline-block mt-4 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all font-semibold">
                Solicitar acceso anticipado
              </a>
            </div>
          </div>
        </div>

        {/*
          Placeholder Client Logos (hidden as requested)
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-8">
              Próximamente: logos de despachos participantes
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {logoPlaceholders.map((logo, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md opacity-40">
                  <div className="text-gray-400 font-medium text-sm text-center">
                    {logo}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Los logos se activarán cuando las firmas acepten aparecer públicamente
            </p>
          </div>
        */}

        {/* Trust Badges */}
        <div className="mt-16 flex justify-center items-center space-x-8 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span>SSL Certificado</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <span>RGPD Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <span>Datos Cifrados AES-256</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;