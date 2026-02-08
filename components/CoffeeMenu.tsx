import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { coffee } from '../data';

interface CoffeeMenuProps {
  cartItems: Record<string, number>;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}

export const CoffeeMenu: React.FC<CoffeeMenuProps> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <section id="coffee" className="scroll-mt-32 py-24 px-6 md:px-12 bg-cream relative z-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Text Side (Left Panel) */}
          <div className="flex-1 bg-warm-yellow rounded-[2rem] border-4 border-espresso shadow-[12px_12px_0px_0px_#2D2424] p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
            
            {/* Decorative element */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-deep-orange rounded-tr-[2rem] border-t-4 border-r-4 border-espresso"></div>

            <span className="relative z-10 font-sans font-black text-sm uppercase tracking-widest text-espresso mb-4 bg-white px-4 py-2 rounded-lg border-2 border-espresso shadow-[4px_4px_0px_0px_#2D2424] w-fit transform rotate-1">
              Caffe Bar
            </span>

            <h2 className="font-serif font-black text-6xl md:text-8xl mb-12 text-espresso leading-[0.85] relative z-10 drop-shadow-sm">
              Liquid <br/> Energy.
            </h2>

            <ul className="space-y-6 relative z-10 w-full">
              {coffee.map((drink) => {
                const qty = cartItems[drink.id] || 0;
                return (
                  <li key={drink.id} className="flex justify-between items-center bg-white p-5 rounded-xl border-3 border-espresso shadow-[4px_4px_0px_0px_#2D2424] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#2D2424] transition-all duration-200 cursor-pointer group relative">
                    <div className="flex flex-col relative">
                       {drink.badge && (
                          <span className="absolute -top-8 -left-4 bg-deep-orange text-espresso text-xs font-black uppercase tracking-widest py-1 px-3 rounded-md border-2 border-espresso transform -rotate-6 shadow-[2px_2px_0px_0px_#2D2424] z-20">
                            {drink.badge}
                          </span>
                        )}
                      <span className="font-serif font-black text-2xl md:text-3xl text-espresso group-hover:text-deep-orange transition-colors">{drink.name}</span>
                    </div>

                    {qty === 0 ? (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(drink.id);
                          }}
                          className="flex items-center gap-2 pl-4 pr-1 py-1 rounded-full border-2 border-espresso bg-espresso text-white hover:bg-deep-orange hover:text-espresso hover:shadow-[4px_4px_0px_0px_#2D2424] hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                        >
                          <span className="font-sans font-black text-xl">{drink.displayPrice}</span>
                          <div className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-espresso bg-white text-espresso">
                             <Plus size={20} strokeWidth={4} />
                          </div>
                        </button>
                      ) : (
                        <div className="flex items-center bg-vibrant-pistachio rounded-full border-2 border-espresso h-11 shadow-[2px_2px_0px_0px_#2D2424] translate-y-[1px]">
                           <button 
                             onClick={(e) => {
                               e.stopPropagation();
                               removeFromCart(drink.id);
                             }}
                             className="w-10 h-full flex items-center justify-center hover:bg-espresso hover:text-white rounded-l-full transition-colors text-espresso"
                           >
                             <Minus size={16} strokeWidth={3} />
                           </button>
                           <div className="w-8 text-center font-sans font-black text-lg text-espresso">{qty}</div>
                           <button 
                             onClick={(e) => {
                               e.stopPropagation();
                               addToCart(drink.id);
                             }}
                             className="w-10 h-full flex items-center justify-center hover:bg-espresso hover:text-white rounded-r-full transition-colors text-espresso"
                           >
                             <Plus size={16} strokeWidth={3} />
                           </button>
                        </div>
                      )}
                  </li>
                );
              })}
            </ul>
            
            <div className="mt-12 relative z-10">
               <span className="inline-block bg-white px-6 py-3 rounded-full font-sans font-black text-espresso border-3 border-espresso transform -rotate-2 hover:rotate-0 transition-transform shadow-[4px_4px_0px_0px_#2D2424]">
                 ☕️ 100% Arabica Roasted in Napoli
               </span>
            </div>
          </div>

          {/* Image Side (Right Panel) */}
          <div className="flex-1 h-[500px] lg:h-auto rounded-[2rem] border-4 border-espresso shadow-[12px_12px_0px_0px_#2D2424] overflow-hidden relative group bg-white">
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop" 
              alt="Latte Art" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-110"
            />
             
             {/* Sticker on image */}
             <div className="absolute bottom-8 right-8 bg-deep-orange text-espresso font-sans font-black text-sm uppercase tracking-widest px-6 py-3 rounded-full border-3 border-espresso transform rotate-3 shadow-[4px_4px_0px_0px_#2D2424] z-10">
               Barista Choice
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};