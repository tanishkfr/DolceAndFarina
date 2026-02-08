import React from 'react';
import { pastries } from '../data';

interface PastryMenuProps {
  cartItems: Record<string, number>;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}

export const PastryMenu: React.FC<PastryMenuProps> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <section id="menu" className="scroll-mt-32 bg-cream pb-32 pt-12 relative -mt-10 z-20">
      
      {/* X Crossover Marquee Container */}
      <div className="relative h-[180px] w-full overflow-hidden mb-12 flex items-center justify-center -mt-24 z-30 pointer-events-none">
        
        {/* Strip 1: Yellow, Rotated 3deg */}
        <div className="absolute w-[120%] bg-warm-yellow border-y-4 border-espresso py-4 transform rotate-2 shadow-[4px_4px_0px_0px_#2D2424] z-10">
          <div className="whitespace-nowrap flex animate-marquee">
             {[...Array(12)].map((_, i) => (
                <span key={i} className="font-serif font-black text-3xl md:text-4xl text-espresso mx-8 uppercase tracking-wider">
                  • Fresh Cannoli • Hot Espresso •
                </span>
              ))}
          </div>
        </div>

        {/* Strip 2: Orange, Rotated -3deg */}
        <div className="absolute w-[120%] bg-deep-orange border-y-4 border-espresso py-4 transform -rotate-2 shadow-[4px_4px_0px_0px_#2D2424] z-20">
          <div className="whitespace-nowrap flex animate-marquee" style={{ animationDirection: 'reverse' }}>
             {[...Array(12)].map((_, i) => (
                <span key={i} className="font-serif font-black text-3xl md:text-4xl text-espresso mx-8 uppercase tracking-wider">
                  • Dolce Vita • Good Vibes Only •
                </span>
              ))}
          </div>
        </div>

      </div>

      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* LEFT COLUMN: IMAGE PANEL */}
          <div className="flex-1 h-[600px] lg:h-auto min-h-[500px] rounded-[2rem] border-4 border-espresso shadow-[12px_12px_0px_0px_#2D2424] overflow-hidden relative group bg-gray-200">
             <img 
               src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=800&auto=format&fit=crop"
               alt="Assorted Italian Pastries"
               className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105 filter contrast-110"
             />
             
             {/* Sticker */}
             <div className="absolute top-8 left-8 bg-vibrant-pistachio text-espresso font-sans font-black text-sm uppercase tracking-widest px-6 py-3 rounded-full border-3 border-espresso transform -rotate-6 shadow-[4px_4px_0px_0px_#2D2424] z-10">
               Daily Fresh
             </div>
          </div>

          {/* RIGHT COLUMN: TEXT/LIST PANEL */}
          <div className="flex-1 bg-soft-pink rounded-[2rem] border-4 border-espresso shadow-[12px_12px_0px_0px_#2D2424] p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
             
             {/* Decorative element */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full border-4 border-espresso opacity-50"></div>

             <span className="relative z-10 font-sans font-black text-sm uppercase tracking-widest text-espresso mb-4 bg-white px-4 py-2 rounded-lg border-2 border-espresso shadow-[4px_4px_0px_0px_#2D2424] w-fit transform -rotate-1">
               Fresh From The Oven
             </span>
             
             <h2 className="font-serif font-black text-6xl md:text-8xl mb-12 text-espresso leading-[0.85] relative z-10 drop-shadow-sm">
               Sweet <br/> Treats.
             </h2>

             <ul className="space-y-6 relative z-10 w-full">
               {pastries.map((item) => {
                 return (
                   <li key={item.id} className="flex justify-between items-center bg-white p-5 rounded-xl border-3 border-espresso shadow-[4px_4px_0px_0px_#2D2424] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#2D2424] transition-all duration-200 cursor-pointer group relative">
                      
                      <div className="flex flex-col pr-4 relative">
                        {item.badge && (
                          <span className="absolute -top-8 -left-4 bg-deep-orange text-espresso text-xs font-black uppercase tracking-widest py-1 px-3 rounded-md border-2 border-espresso transform -rotate-6 shadow-[2px_2px_0px_0px_#2D2424] z-20">
                            {item.badge}
                          </span>
                        )}
                        <span className="font-serif font-black text-2xl md:text-3xl text-espresso group-hover:text-deep-orange transition-colors">
                          {item.name}
                        </span>
                        <span className="font-sans text-base font-bold text-espresso/60 mt-1 leading-snug">
                          {item.description}
                        </span>
                      </div>
                      
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(item.id);
                        }}
                        className="bg-white border-2 border-espresso rounded-full px-4 py-2 font-bold text-espresso hover:bg-deep-orange hover:text-white transition-colors font-sans"
                      >
                        {item.displayPrice}
                      </button>

                   </li>
                 );
               })}
             </ul>

             <div className="mt-12 relative z-10 text-center lg:text-left">
                <button className="inline-block bg-espresso text-cream px-10 py-4 rounded-full font-sans font-black text-xl border-2 border-espresso hover:bg-deep-orange hover:text-espresso transition-colors duration-200">
                   View Full Menu
                </button>
             </div>

          </div>

        </div>
      </div>

    </section>
  );
};