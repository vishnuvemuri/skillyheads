import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Courses', 'Why Skillyheads?', 'Contact'];

  return (
    <>
      {/* Desktop Navigation - Floating Capsule */}
      <nav className="hidden md:block fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[70%]">
        <div className="bg-transparent backdrop-blur-lg rounded-full shadow-lg px-3 py-2 flex items-center justify-between space-x-8" 
             style={{ 
               boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
               background: 'rgba(255, 255, 255, 0.1)',
               backdropFilter: 'blur(20px)',
               border: '1px solid rgba(255, 255, 255, 0.2)'
             }}>
          
          {/* Logo in circular container */}
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
            <span className="text-slate-800 font-bold text-sm">S</span>
          </div>

          {/* Menu Links */}
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-').replace('?', '')}`}
                className="text-white hover:text-white/80 transition-all duration-200 font-medium text-sm hover:font-semibold"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Login Button */}
<a
  href="https://web.classplusapp.com/login"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-slate-800 px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 flex-shrink-0"
>
  Login
</a>
        </div>
      </nav>

      {/* Mobile Navigation - Full Width */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-lg border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-slate-800">Skillyheads</h1>
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200">
                Explore Courses
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-700 hover:text-blue-900 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-lg rounded-lg mt-2">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-').replace('?', '')}`}
                  className="text-slate-700 hover:text-blue-900 block px-3 py-2 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;