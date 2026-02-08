import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Coffee', href: '#coffee' },
    { name: 'About', href: '#about' },
    { name: 'Visit', href: '#visit' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b-2 border-espresso py-4 transition-all duration-300">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="font-serif font-black text-2xl md:text-3xl text-espresso tracking-tight hover:text-deep-orange transition-colors">
          Dolce & Farina
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-2 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-sans font-bold text-base text-espresso px-5 py-2 rounded-full hover:bg-espresso hover:text-white transition-all"
            >
              {link.name}
            </a>
          ))}
          <a href="#menu" className="ml-4 bg-deep-orange text-espresso px-6 py-3 rounded-full font-sans font-bold hover:bg-espresso hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-md border-2 border-espresso">
            Order Pickup
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-espresso bg-pale-pistachio p-2 rounded-full border-2 border-espresso hover:bg-deep-orange transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-cream border-b-4 border-espresso shadow-xl flex flex-col p-6 md:hidden animate-fade-in z-40">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="py-4 text-3xl font-serif font-bold text-espresso border-b border-espresso/10 last:border-0 hover:text-deep-orange transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-8">
            <a href="#menu" onClick={() => setIsOpen(false)} className="block w-full bg-deep-orange text-espresso py-4 rounded-full text-xl font-bold font-sans uppercase tracking-wider shadow-lg border-2 border-espresso text-center">
              Order Pickup
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};