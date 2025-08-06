import React from 'react';
import { Users, Clock, Star, Gift, Zap, Crown } from 'lucide-react';

const PreLaunchSection = () => {
  const benefits = [
    {
      icon: Crown,
      title: "Acceso VIP Anticipado",
      description: "Sé uno de los primeros profesionales en acceder a Dependiente Judicial antes del lanzamiento público.",
      highlight: "Acceso exclusivo"
    },
    {
      icon: Gift,
      title: "Capacitación Personalizada",
      description: "Sesiones de onboarding 1:1 con nuestros expertos para maximizar tu productividad desde el día uno.",
      highlight: "Capacitación incluida"
    },
    {
      icon: Zap,
      title: "Soporte Prioritario",
      description: "Acceso directo a nuestro equipo de desarrollo con respuesta prioritaria a tus consultas.",
      highlight: "Soporte VIP"
    },
    {
      icon: Star,
      title: "Influencia en el Producto",
      description: "Tus comentarios y sugerencias tendrán impacto directo en las funcionalidades finales del producto.",
      highlight: "Co-creador del producto"
    }
  ];

  return (
    <section id="acceso-anticipado" className="py-20 bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with urgency */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            🔥 BETA PRIVADA - PLAZAS LIMITADAS
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Únete al Acceso Anticipado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Sé parte del grupo exclusivo de profesionales que revolucionarán su práctica legal con IA.
          </p>
          
          {/* Direct CTA to early access form */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto mb-12 text-white">
            <h3 className="text-xl font-bold mb-4">🚀 ¿Listo para ser pionero?</h3>
            <p className="text-blue-100 mb-6">
              Únete al grupo exclusivo de profesionales que tendrán acceso anticipado a la herramienta que revolucionará el sector legal.
            </p>
            <a 
              href="#" 
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
            >
              SOLICITAR ACCESO ANTICIPADO
            </a>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {benefit.description}
                  </p>
                  <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-lg p-3 border border-amber-200">
                    <span className="text-amber-800 font-semibold text-sm">
                      ✨ {benefit.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder for testimonials */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Próximamente: experiencias de nuestros beta testers
            </h3>
            <p className="text-gray-600">
              Una vez iniciada la beta, aquí compartiremos las experiencias reales de los profesionales que están probando la herramienta.
            </p>
          </div>
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Reserva tu lugar ahora
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            No pierdas la oportunidad de ser pionero en la transformación digital del sector legal.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-blue-100">Sin costo de registro</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-blue-100">Sin compromiso hasta el lanzamiento</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-blue-100">Cancela en cualquier momento</span>
            </div>
          </div>

          <a 
            href="#" 
            className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 py-6 rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all transform hover:scale-105 font-bold text-xl shadow-2xl"
          >
            🚀 SOLICITAR ACCESO ANTICIPADO
          </a>
          
          <p className="text-blue-200 text-sm mt-6">
            ⏰ Apertura de beta: Febrero 2025
          </p>
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            Preguntas frecuentes sobre el acceso anticipado
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg text-left">
              <h4 className="font-semibold text-gray-900 mb-3">¿Cuándo tendré acceso?</h4>
              <p className="text-gray-600 text-sm">Tendrás acceso antes del lanzamiento público, aproximadamente en febrero 2025.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-left">
              <h4 className="font-semibold text-gray-900 mb-3">¿Hay algún costo?</h4>
              <p className="text-gray-600 text-sm">El registro es completamente gratuito. Solo pagarás cuando decidas continuar después del período de prueba.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-left">
              <h4 className="font-semibold text-gray-900 mb-3">¿Qué incluye la capacitación?</h4>
              <p className="text-gray-600 text-sm">Sesión personalizada 1:1 de 60 minutos para configurar y optimizar la herramienta según tu práctica.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-left">
              <h4 className="font-semibold text-gray-900 mb-3">¿Cuántas plazas hay realmente?</h4>
              <p className="text-gray-600 text-sm">Estamos abriendo la beta a un número reducido de profesionales para testar la herramienta en entornos reales.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreLaunchSection;