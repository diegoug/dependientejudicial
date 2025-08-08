import React, { useState } from 'react';
import { Scale, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-blue-900" />
            <span className="text-xl font-bold text-blue-900" style={{ fontFamily: 'Georgia, serif' }}>
              Dependiente Judicial
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {/* <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors">Demo</a> */}
            <a href="#acceso-anticipado" className="text-gray-700 hover:text-blue-900 transition-colors">Acceso Anticipado</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://forms.gle/e2SF7fw1ZpWgF9F68"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-2 rounded-lg hover:from-blue-800 hover:to-blue-700 transition-all transform hover:scale-105 font-medium"
            >
              Solicitar Acceso
            </a>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {/* <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors">Demo</a> */}
              <a href="#acceso-anticipado" className="text-gray-700 hover:text-blue-900 transition-colors">Acceso Anticipado</a>
              <a
                href="https://forms.gle/e2SF7fw1ZpWgF9F68"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-2 rounded-lg hover:from-blue-800 hover:to-blue-700 transition-all font-medium w-full text-center"
              >
                Solicitar Acceso
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;