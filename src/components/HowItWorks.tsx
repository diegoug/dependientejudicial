import React from 'react';
import { Upload, Brain, Download, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "1. Ingresa datos del caso",
      description: "Proporciona información básica sobre tu caso legal a través de nuestro formulario intuitivo.",
      details: ["Datos de las partes", "Tipo de procedimiento", "Hechos relevantes", "Peticiones específicas"]
    },
    {
      icon: Brain,
      title: "2. IA redacta documento base",
      description: "Nuestra inteligencia artificial procesa la información y genera un documento profesional.",
      details: ["Análisis de jurisprudencia", "Aplicación de normativa", "Estructura profesional", "Lenguaje jurídico apropiado"]
    },
    {
      icon: Download,
      title: "3. Descarga y personaliza",
      description: "Recibe tu documento listo para revisar, personalizar y presentar ante las autoridades.",
      details: ["Formato Word editable", "Referencias legales", "Estructura completa", "Listo para firmar"]
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Cómo funciona Dependiente Judicial
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso simple de 3 pasos para generar documentos legales profesionales en minutos.
          </p>
        </div>

        {/* Professional Lawyer Working Image */}
        <div className="mb-16 text-center">
          <img 
            src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
            alt="Professional lawyer working with technology"
            className="w-full max-w-4xl mx-auto h-80 object-cover rounded-2xl shadow-xl"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-center">
                  {step.description}
                </p>
                
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-blue-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              ¿Listo para ser pionero?
            </h3>
            <p className="text-gray-600 mb-4">
              Únete al grupo exclusivo de early adopters y obtén ventaja competitiva.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-6 border border-green-200">
              <p className="text-green-800 font-semibold text-sm">🎯 Acceso anticipado + Capacitación gratuita + Soporte prioritario</p>
            </div>
            <a href="#" className="inline-block bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-4 rounded-lg hover:from-blue-800 hover:to-blue-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg">
              Solicitar acceso anticipado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;