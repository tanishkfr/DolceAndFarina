import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (id: string) => void;
  cartCount?: number;
  onCartClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-4 md:pt-6 px-4">
      
      {/* The Shop Sign Container */}
      <div 
        className={`pointer-events-auto bg-cream border-2 border-espresso rounded-full shadow-[4px_4px_0px_0px_#2D2424] w-full max-w-6xl mx-auto px-6 md:px-8 py-3 flex justify-between items-center transition-all duration-300 ${scrolled ? 'scale-[0.98] shadow-sm translate-y-[-5px]' : 'scale-100'}`}
      >
        
        {/* Left: Address (Hidden on small mobile) */}
        <div className="hidden md:flex flex-1 justify-start items-center">
           <span className="font-sans font-bold text-xs md:text-sm uppercase tracking-widest text-espresso whitespace-nowrap">
             123 HANOVER ST, BOSTON
           </span>
        </div>

        {/* Center: Main Logo */}
        <div className="flex-1 flex justify-center">
          <button 
            onClick={() => onNavigate('home')}
            className="font-serif font-black text-2xl md:text-3xl tracking-tighter text-espresso hover:text-deep-orange transition-colors uppercase whitespace-nowrap"
          >
            Dolce & Farina
          </button>
        </div>

        {/* Right: Social/Contact */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-4">
          <a href="#visit" className="font-sans font-bold text-xs md:text-sm uppercase tracking-widest text-espresso hover:text-deep-orange transition-colors whitespace-nowrap">
            @DOLCEFARINA
          </a>
        </div>

        {/* Mobile Only: Show Social here too instead of menu if we want to remove menu entirely */}
        <div className="md:hidden flex items-center">
             <a href="#visit" className="font-sans font-bold text-xs uppercase tracking-widest text-espresso hover:text-deep-orange transition-colors">
               @DOLCEFARINA
             </a>
        </div>

      </div>
    </nav>
  );
};