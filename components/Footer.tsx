import React, { useState } from 'react';
import { MapPin, Phone, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const address = "123 Hanover St, Boston, MA 02113";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="visit" className="bg-[#FFF59D] text-espresso pt-32 pb-40 rounded-t-[3rem] -mt-10 relative z-30 overflow-hidden">
      
      {/* GIANT WATERMARK */}
      <div className="absolute bottom-0 left-0 right-0 w-full flex justify-center pointer-events-none select-none opacity-[0.08] leading-none overflow-hidden">
          <span className="font-serif font-black text-[19vw] text-espresso whitespace-nowrap transform translate-y-[20%]">
              DOLCE & FARINA
          </span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Col (Span 4) */}
          <div className="md:col-span-4 flex flex-col items-start">
             <div className="mb-6">
                <span className="font-serif font-black text-4xl block mb-2">Dolce & Farina.</span>
                <span className="font-sans font-bold text-espresso/60 uppercase tracking-widest text-sm">Est. 2024 Boston</span>
             </div>
             <p className="font-sans text-lg text-espresso/80 leading-relaxed max-w-xs mb-8">
               Bringing the authentic chaos and sugar of a Roman morning to the streets of Boston. No compromise on crunch.
             </p>
             <div className="flex gap-4">
               <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-espresso bg-white hover:bg-espresso hover:text-white transition-all shadow-[2px_2px_0px_0px_#2D2424]">
                 <Instagram size={20} />
               </a>
               <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-espresso bg-white hover:bg-espresso hover:text-white transition-all shadow-[2px_2px_0px_0px_#2D2424]">
                 <Facebook size={20} />
               </a>
             </div>
          </div>

          {/* Quick Links (Span 3) */}
          <div className="md:col-span-3 md:col-start-6">
             <h3 className="font-sans font-black uppercase tracking-widest text-sm mb-8 border-b-2 border-espresso/10 pb-4 inline-block">Menu & More</h3>
             <ul className="space-y-4 font-serif font-bold text-2xl">
               <li><a href="#menu" className="hover:text-deep-orange transition-colors flex items-center gap-2 group">Pastry Menu <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} /></a></li>
               <li><a href="#coffee" className="hover:text-deep-orange transition-colors flex items-center gap-2 group">Coffee Bar <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} /></a></li>
               <li><a href="#about" className="hover:text-deep-orange transition-colors flex items-center gap-2 group">Our Story <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} /></a></li>
               <li><a href="#visit" className="hover:text-deep-orange transition-colors flex items-center gap-2 group">Catering <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} /></a></li>
             </ul>
          </div>

          {/* Details (Span 4) */}
          <div className="md:col-span-4 md:col-start-9">
            <h3 className="font-sans font-black uppercase tracking-widest text-sm mb-8 border-b-2 border-espresso/10 pb-4 inline-block">Find Us</h3>
            
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-espresso/50 mb-6 relative z-20">
               <div className="flex items-start gap-4 mb-4">
                  <MapPin className="shrink-0 mt-1" />
                  <div>
                    <p className="font-sans font-bold text-lg leading-tight">123 Hanover St<br/>Boston, MA 02113</p>
                    <button onClick={handleCopy} className="text-xs font-bold uppercase tracking-wider text-espresso/60 mt-2 hover:text-deep-orange flex items-center gap-1">
                      {copied ? 'Copied!' : 'Copy Address'}
                    </button>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <Phone className="shrink-0" />
                  <p className="font-sans font-bold text-lg">(555) 123-4567</p>
               </div>
            </div>

            <div className="font-sans text-sm font-bold text-espresso/60 relative z-20">
              <div className="flex justify-between py-2 border-b border-espresso/10"><span>Mon - Thu</span> <span>7am - 7pm</span></div>
              <div className="flex justify-between py-2 border-b border-espresso/10"><span>Fri - Sat</span> <span>7am - 9pm</span></div>
              <div className="flex justify-between py-2 border-b border-espresso/10"><span>Sun</span> <span>8am - 6pm</span></div>
            </div>

          </div>

        </div>

        <div className="mt-20 pt-8 border-t-2 border-espresso/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans font-bold uppercase tracking-widest text-espresso/40 relative z-20">
           <p>&copy; {new Date().getFullYear()} Dolce & Farina</p>
           <p>Made with Amore & Espresso</p>
        </div>
      </div>
    </footer>
  );
};