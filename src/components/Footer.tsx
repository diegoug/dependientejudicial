import React from 'react';
import { Scale, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Scale className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
                Dependiente Judicial
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Tu asistente legal con inteligencia artificial. Acelera la redacción de documentos legales y mejora tu productividad profesional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Producto</h3>
            <ul className="space-y-4">
              <li><a href="#beneficios" className="text-gray-300 hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#como-funciona" className="text-gray-300 hover:text-white transition-colors">Cómo funciona</a></li>
              <li><a href="#acceso-anticipado" className="text-gray-300 hover:text-white transition-colors">Acceso Anticipado</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Demo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Programa Beta</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Soporte</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Centro de ayuda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tutoriales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentación</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Estado del servicio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contactar soporte</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">hola@dependientejudicial.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">+571 318 517 2954</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">Bogotá, Colombia</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-amber-400"
                />
                <button className="bg-amber-500 text-white px-4 py-2 rounded-r-lg hover:bg-amber-400 transition-colors">
                  Suscribir
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 lg:mb-0">
              © {currentYear} Dependiente Judicial. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de servicio</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Aviso legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;