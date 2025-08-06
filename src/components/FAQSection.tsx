import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cuándo estará disponible Dependiente Judicial?",
      answer: "El lanzamiento de la beta privada está programado para febrero 2025. Los usuarios del acceso anticipado tendrán acceso a la plataforma antes del lanzamiento público para probar todas las funcionalidades."
    },
    {
      question: "¿El acceso anticipado tiene algún costo?",
      answer: "No, registrarse para el acceso anticipado es completamente gratuito. No hay compromisos ni pagos hasta que decidas continuar usando la plataforma después del período de prueba."
    },
    {
      question: "¿Qué incluye el acceso anticipado?",
      answer: "Incluye acceso completo a la plataforma antes del lanzamiento público, capacitación personalizada 1:1, soporte prioritario, y la oportunidad de influir en el desarrollo final del producto con tus comentarios."
    },
    {
      question: "¿Dependiente Judicial reemplaza a los abogados?",
      answer: "No, es una herramienta de apoyo que asiste a los profesionales del derecho. Genera documentos base que deben ser revisados y validados por un abogado titulado. No proporciona asesoría legal ni sustituye el criterio profesional."
    },
    {
      question: "¿Qué tipos de documentos puede generar?",
      answer: "Puede generar demandas civiles, contestaciones, escritos de alegatos, contratos básicos, poderes, oficios, y más. Durante el acceso anticipado, los usuarios podrán solicitar tipos de documentos específicos para sus necesidades."
    },
    {
      question: "¿Cuántas plazas hay realmente?",
      answer: "Estamos abriendo la beta a un número reducido de profesionales para testar la herramienta en entornos reales. Esto nos permite garantizar una experiencia de calidad, soporte personalizado y poder incorporar efectivamente el feedback de cada usuario."
    },
    {
      question: "¿Puedo cancelar mi registro de acceso anticipado?",
      answer: "Absolutamente. Puedes cancelar tu registro en cualquier momento sin penalizaciones. No hay compromisos hasta que decidas continuar usando la plataforma después del período de prueba."
    },
    {
      question: "¿Cómo se protegen mis datos durante la beta?",
      answer: "Implementamos los más altos estándares de seguridad desde la fase beta: cifrado SSL, cumplimiento RGPD, servidores seguros con cifrado AES-256 y políticas estrictas de privacidad. Tus datos nunca se comparten con terceros."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Preguntas sobre el acceso anticipado
          </h2>
          <p className="text-xl text-gray-600">
            Resolvemos las dudas más comunes sobre el acceso anticipado.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors rounded-lg"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            ¿Tienes más preguntas sobre el acceso anticipado?
          </h3>
          <p className="text-gray-600 mb-6">
            Contáctanos directamente y te responderemos todas tus dudas sobre el programa.
          </p>
          <a href="#" className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all transform hover:scale-105 font-semibold">
            Contactar al equipo
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;