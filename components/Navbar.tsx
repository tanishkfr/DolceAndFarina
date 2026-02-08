import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Coffee', href: '#coffee' },
    { name: 'About', href: '#about' },
    { name: 'Visit', href: '#visit' },
  ];

  // Handle scroll effect for pill compression
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating Island Container */}
      <nav className={`fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300 ${scrolled ? '-translate-y-1' : 'translate-y-0'}`}>
        
        {/* The Pill */}
        <div className={`pointer-events-auto bg-cream/80 backdrop-blur-xl border-2 border-espresso rounded-full px-6 py-3 shadow-[4px_4px_10px_rgba(0,0,0,0.1)] relative w-[90%] md:w-[95%] max-w-7xl transition-all duration-300 ${scrolled ? 'scale-95 shadow-md' : 'scale-100'}`}>
          
          <div className="flex items-center justify-between relative h-10 md:h-12">
            
            {/* Left: Cart / Bag Placeholder */}
            <div className="flex-1 flex justify-start">
               <button className="group flex items-center gap-2 text-espresso hover:text-deep-orange transition-colors">
                  <div className="relative">
                    <ShoppingBag size={24} />
                    <span className="absolute -top-1 -right-1 bg-deep-orange text-espresso text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-espresso">0</span>
                  </div>
                  <span className="hidden md:inline font-sans font-bold uppercase tracking-wider text-sm">Bag</span>
               </button>
            </div>

            {/* Center: Logo (Absolute) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <a href="#" className="font-serif font-black text-2xl md:text-3xl text-espresso tracking-tight whitespace-nowrap hover:text-deep-orange transition-colors">
                Dolce & Farina
              </a>
            </div>

            {/* Right: Menu Trigger */}
            <div className="flex-1 flex justify-end">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center gap-2 text-espresso hover:text-deep-orange transition-colors"
              >
                <span className="hidden md:inline font-sans font-bold uppercase tracking-wider text-sm">
                    {isOpen ? 'Close' : 'Menu'}
                </span>
                <div className={`p-1 rounded-full border-2 border-transparent group-hover:border-espresso transition-all ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-cream flex flex-col justify-center items-center transition-transform duration-700 cubic-bezier(0.76, 0, 0.24, 1) ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          
          <div className="flex flex-col space-y-4 md:space-y-8 text-center relative z-10">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`font-serif font-black text-5xl md:text-7xl text-espresso hover:text-deep-orange transition-all duration-300 transform hover:scale-105 hover:skew-x-[-2deg] ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <div 
                className={`mt-12 transition-all duration-500 delay-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <a 
                href="#menu" 
                onClick={() => setIsOpen(false)} 
                className="inline-block bg-deep-orange text-espresso px-10 py-5 rounded-full text-xl md:text-2xl font-bold font-sans uppercase tracking-wider shadow-[6px_6px_0px_0px_rgba(45,36,36,1)] border-2 border-espresso hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Order Pickup
              </a>
            </div>
          </div>
          
          {/* Background decoration for menu */}
          <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2D2424 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
          <div className="absolute bottom-12 text-espresso/40 font-sans font-bold uppercase tracking-widest text-xs">
              Boston, MA • Est. 2024
          </div>
      </div>
    </>
  );
};