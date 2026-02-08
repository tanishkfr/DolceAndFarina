import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="visit" className="scroll-mt-32 bg-[#FFF9C4] text-espresso pt-24 pb-12 px-6 md:px-12 rounded-t-[3rem] -mt-10 relative z-30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Col 1: Location & Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif font-black text-3xl mb-2">Visit Us</h3>
            
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full border-2 border-espresso shadow-sm shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-sans font-bold text-lg">Dolce & Farina</p>
                <p className="font-sans text-espresso/80">123 Hanover St,<br/> Boston, MA 02113</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
               <div className="bg-white p-3 rounded-full border-2 border-espresso shadow-sm shrink-0">
                <Phone size={20} />
              </div>
              <p className="font-sans text-lg text-espresso/80">(555) 123-4567</p>
            </div>

            <div className="flex items-center gap-4">
               <div className="bg-white p-3 rounded-full border-2 border-espresso shadow-sm shrink-0">
                <Mail size={20} />
              </div>
              <p className="font-sans text-lg text-espresso/80">ciao@dolcefarina.com</p>
            </div>
          </div>

          {/* Col 2: Opening Hours */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif font-black text-3xl mb-2">Open Daily</h3>
            <ul className="space-y-4 font-sans text-lg text-espresso/80">
              <li className="flex justify-between border-b border-espresso/10 pb-2">
                <span className="font-bold">Mon - Thu</span>
                <span>7:00 am - 7:00 pm</span>
              </li>
              <li className="flex justify-between border-b border-espresso/10 pb-2">
                <span className="font-bold">Fri - Sat</span>
                <span>7:00 am - 9:00 pm</span>
              </li>
              <li className="flex justify-between border-b border-espresso/10 pb-2">
                <span className="font-bold">Sunday</span>
                <span>8:00 am - 6:00 pm</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Vibes */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h3 className="font-serif font-black text-3xl mb-2">The Vibe</h3>
            <p className="font-sans text-xl font-medium text-espresso mb-4">
              "Made with Amore daily."
            </p>
            
            <div className="flex gap-4 justify-center md:justify-start">
               <a href="#" className="flex items-center gap-2 bg-espresso text-cream px-6 py-3 rounded-full font-sans font-bold hover:bg-deep-orange hover:text-espresso transition-all shadow-md group">
                 <Instagram size={20} />
                 <span>Insta</span>
               </a>
               <a href="#" className="flex items-center gap-2 bg-white text-espresso border-2 border-espresso px-6 py-3 rounded-full font-sans font-bold hover:bg-deep-orange transition-all shadow-md">
                 <Facebook size={20} />
                 <span>Face</span>
               </a>
            </div>
            
            <p className="font-sans text-sm text-espresso/60 mt-auto pt-8">
              &copy; {new Date().getFullYear()} Dolce & Farina.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};