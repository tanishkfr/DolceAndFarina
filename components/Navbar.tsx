import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300 ${scrolled ? '-translate-y-1' : 'translate-y-0'}`}>
      
      {/* Wrapper for Pill and Dropdown */}
      <div 
        ref={menuRef}
        className="relative w-[95%] max-w-3xl pointer-events-auto"
      >
          
          {/* The Pill Navbar */}
          <div className={`bg-cream/90 backdrop-blur-md border-2 border-espresso rounded-full px-8 py-3 shadow-[2px_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 w-full ${scrolled ? 'scale-[0.99] shadow-md' : 'scale-100'}`}>
            
            <div className="flex items-center justify-between relative h-10">
              
              {/* Left: Cart / Bag */}
              <div className="flex-1 flex justify-start">
                  <button 
                    onClick={onCartClick}
                    className="group flex items-center gap-2 text-espresso hover:text-deep-orange transition-colors"
                  >
                    <div className="relative">
                      <ShoppingBag size={20} strokeWidth={2.5} />
                      <span className={`absolute -top-1 -right-1 bg-deep-orange text-espresso text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-espresso leading-none pt-[1px] transition-all duration-300 ${cartCount > 0 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                        {cartCount}
                      </span>
                    </div>
                    <span className="hidden md:inline font-sans font-bold uppercase tracking-wider text-sm">Bag</span>
                  </button>
              </div>

              {/* Center: Logo */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <button 
                  onClick={() => onNavigate('home')}
                  className="font-serif font-black text-2xl text-espresso tracking-tight whitespace-nowrap hover:text-deep-orange transition-colors"
                >
                  Dolce & Farina
                </button>
              </div>

              {/* Right: Menu Trigger */}
              <div className="flex-1 flex justify-end">
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="group flex items-center gap-3 text-espresso hover:text-deep-orange transition-colors"
                >
                  <span className="hidden md:inline font-sans font-bold uppercase tracking-wider text-sm">
                      {isOpen ? 'Close' : 'Menu'}
                  </span>
                  <div className={`rounded-full transition-all ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                      {isOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
                  </div>
                </button>
              </div>

            </div>
          </div>

          {/* Floating Dropdown Card */}
          <div 
            className={`absolute top-full right-0 mt-3 w-56 bg-cream border-2 border-espresso rounded-2xl shadow-[4px_4px_0px_0px_#2D2424] p-4 transform transition-all duration-200 origin-top-right z-40 ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
          >
              <ul className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        onNavigate(link.href.substring(1));
                      }}
                      className="block font-serif font-bold text-xl text-espresso hover:text-deep-orange hover:translate-x-2 transition-all py-2 border-b border-espresso/5 last:border-0"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
          </div>

      </div>
    </nav>
  );
};