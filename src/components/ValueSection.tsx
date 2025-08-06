import React from 'react';
import { Zap, Users, TrendingUp, Shield, Clock, Target } from 'lucide-react';

const ValueSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Aumenta tu productividad",
      description: "Genera documentos legales en minutos en lugar de horas con IA entrenada en jurisprudencia nacional.",
      benefit: "Documentos en minutos",
      color: "amber"
    },
    {
      icon: Target,
      title: "Mejora la calidad",
      description: "Documentos consistentes y precisos basados en mejores prácticas legales y plantillas profesionales.",
      benefit: "Calidad consistente",
      color: "green"
    },
    {
      icon: Clock,
      title: "Más tiempo estratégico",
      description: "Dedica más tiempo a estrategia legal y atención personalizada a clientes en lugar de redacción repetitiva.",
      benefit: "Enfoque estratégico",
      color: "blue"
    },
    {
      icon: Users,
      title: "Mejores relaciones con clientes",
      description: "Respuestas más rápidas y servicio más eficiente mejoran la satisfacción y retención de clientes.",
      benefit: "Clientes más satisfechos",
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "Incrementa capacidad",
      description: "Atiende más casos con la misma calidad y recursos humanos disponibles en tu despacho.",
      benefit: "Mayor capacidad",
      color: "emerald"
    },
    {
      icon: Shield,
      title: "Reduce riesgos",
      description: "Minimiza errores manuales y mantiene consistencia en documentación legal profesional.",
      benefit: "Menos errores manuales",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      amber: "bg-amber-100 text-amber-600",
      green: "bg-green-100 text-green-600",
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      emerald: "bg-emerald-100 text-emerald-600",
      red: "bg-red-100 text-red-600"
    };
    return colors[color as keyof typeof colors] || "bg-gray-100 text-gray-600";
  };

  return (
    <section id="beneficios" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Transforma tu práctica legal con IA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Obtén beneficios tangibles que impactan directamente en tu productividad y resultados.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className={`flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${getColorClasses(benefit.color)}`}>
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {benefit.description}
              </p>
              <div className="bg-white rounded-lg p-3 border-l-4 border-blue-500">
                <span className="text-blue-700 font-bold text-sm">
                  {benefit.benefit}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Únete al futuro de la práctica legal
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Sé parte del grupo exclusivo de profesionales que tendrán acceso anticipado a la herramienta que revolucionará el sector legal.
            </p>
            <div className="space-y-3 mb-8 max-w-md mx-auto">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-blue-100">Acceso antes del lanzamiento público</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-blue-100">Capacitación personalizada incluida</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-blue-100">Soporte prioritario</span>
              </div>
            </div>
            <a href="#" className="inline-block bg-amber-500 text-white px-8 py-4 rounded-lg hover:bg-amber-400 transition-all transform hover:scale-105 font-semibold shadow-lg">
              Solicitar acceso anticipado
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Cálculo estimado según pruebas internas; actualizaremos con datos reales al cierre de la beta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;