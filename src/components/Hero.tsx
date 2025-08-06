import React from 'react';
import { Brain, ArrowRight, Shield, Zap, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <Brain className="h-8 w-8 text-amber-500" />
              <span className="text-amber-600 font-medium">Tu asistente legal con IA</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Dependiente Judicial
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
              Redacta documentos <span className="text-amber-600 font-semibold">10× más rápido</span>, sin errores repetitivos.
              <br />
              <span className="text-blue-900 font-bold">Lanzamiento progresivo · plazas limitadas a los primeros interesados</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all transform hover:scale-105 font-semibold text-lg flex items-center justify-center space-x-2 shadow-xl">
                <span>Solicitar acceso anticipado</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-900 hover:text-white transition-all font-semibold text-lg">
                Ver Demo
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span>RGPD compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-amber-500" />
                <span>Datos cifrados AES-256</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>SSL Certificado</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop"
                alt="Professional lawyer working with AI technology"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              
              {/* Floating UI element overlay - Mock-up animado */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700 ml-2">Generando Demanda Civil...</span>
                </div>
                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Análisis jurisprudencial completo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span>Redactando párrafo de hechos...</span>
                  </div>
                </div>
                <div className="mt-3 bg-blue-100 rounded p-2 text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-blue-900">Progreso</span>
                    <span className="text-blue-700">87%</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full w-4/5 transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg animate-pulse">
              ¡BETA!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;