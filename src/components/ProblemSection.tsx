import React from 'react';
import { Clock, AlertCircle, TrendingDown, FileText } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Tiempo excesivo en redacción",
      description: "Los abogados dedican hasta 40% de su tiempo a redactar documentos repetitivos, reduciendo tiempo para estrategia y clientes.*",
      impact: "Menos tiempo estratégico"
    },
    {
      icon: AlertCircle,
      title: "Errores manuales costosos",
      description: "Errores en documentos pueden comprometer casos y generar responsabilidades profesionales.",
      impact: "Riesgo de responsabilidad"
    },
    {
      icon: TrendingDown,
      title: "Baja productividad",
      description: "Procesos manuales limitan la capacidad de atender más casos y generar mayores ingresos.",
      impact: "Menos casos atendidos"
    },
    {
      icon: FileText,
      title: "Falta de consistencia",
      description: "Documentos sin estandarización afectan la calidad y profesionalismo del despacho.",
      impact: "Calidad inconsistente"
    }
  ];

  return (
    <section id="problema" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Los desafíos de la práctica legal tradicional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Los profesionales del derecho enfrentan problemas que afectan su productividad y la calidad de su trabajo diario.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                <problem.icon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {problem.description}
              </p>
              <div className="bg-red-50 rounded-lg p-3">
                <span className="text-red-700 font-medium text-sm">
                  {problem.impact}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              ¿Te identificas con estos problemas?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Sé de los primeros en probar la beta privada de la solución.
            </p>
            <div className="bg-gradient-to-r from-amber-50 to-red-50 rounded-lg p-4 mb-6 border-l-4 border-amber-500">
              <p className="text-amber-800 font-semibold">⏰ Acceso gradual durante 2025</p>
            </div>
            <a
              href="https://forms.gle/e2SF7fw1ZpWgF9F68"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-4 rounded-lg hover:from-blue-800 hover:to-blue-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Solicitar acceso anticipado
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            * Cálculo estimado según pruebas internas; actualizaremos con datos reales al cierre de la beta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;