import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';

const menuItems = [
  {
    id: '1',
    name: "The Holy Cannoli",
    description: "Crispy shell, sweet ricotta, pistachios.",
    price: "$5.00",
    badge: "Best Seller"
  },
  {
    id: '2',
    name: "Bomboloni",
    description: "Fluffy doughnut rolled in sugar.",
    price: "$4.50",
  },
  {
    id: '3',
    name: "Sfogliatella",
    description: "The lobster tail. Crunchy layers.",
    price: "$4.00",
  },
  {
    id: '4',
    name: "Tiramisu Cup",
    description: "Espresso, mascarpone, cocoa dust.",
    price: "$6.50",
  }
];

export const PastryMenu: React.FC = () => {
  const [cart, setCart] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newCart = new Set(cart);
    if (newCart.has(id)) {
      newCart.delete(id);
    } else {
      newCart.add(id);
    }
    setCart(newCart);
  };

  return (
    <section id="menu" className="scroll-mt-32 bg-cream pb-32 pt-12 relative -mt-10 z-20">
      
      {/* X Crossover Marquee Container - Positioned to bridge sections */}
      <div className="relative h-[180px] w-full overflow-hidden mb-12 flex items-center justify-center -mt-24 z-30 pointer-events-none">
        
        {/* Strip 1: Yellow, Rotated 3deg */}
        <div className="absolute w-[120%] bg-warm-yellow border-y-4 border-espresso py-3 transform rotate-2 shadow-lg z-10">
          <div className="whitespace-nowrap flex animate-marquee">
             {[...Array(12)].map((_, i) => (
                <span key={i} className="font-serif font-black text-2xl md:text-3xl text-espresso mx-8 uppercase tracking-wider">
                  • Fresh Cannoli • Hot Espresso •
                </span>
              ))}
          </div>
        </div>

        {/* Strip 2: Orange, Rotated -3deg */}
        <div className="absolute w-[120%] bg-deep-orange border-y-4 border-espresso py-3 transform -rotate-2 shadow-lg z-20">
          <div className="whitespace-nowrap flex animate-marquee" style={{ animationDirection: 'reverse' }}>
             {[...Array(12)].map((_, i) => (
                <span key={i} className="font-serif font-black text-2xl md:text-3xl text-espresso mx-8 uppercase tracking-wider">
                  • Dolce Vita • Good Vibes Only •
                </span>
              ))}
          </div>
        </div>

      </div>

      <div className="container mx-auto px-6 md:px-12">
        
        {/* The Grid: 2 Columns (Image Left, Text Right) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* LEFT COLUMN: IMAGE PANEL */}
          <div className="flex-1 h-[600px] lg:h-auto min-h-[500px] rounded-[2.5rem] border-4 border-espresso shadow-[8px_8px_0px_0px_rgba(45,36,36,1)] overflow-hidden relative group">
             <img 
               src="https://loremflickr.com/800/1200/italian,pastry,dessert/all?lock=99"
               alt="Assorted Italian Pastries"
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-espresso/10 group-hover:bg-transparent transition-colors duration-500"></div>
             
             {/* Sticker */}
             <div className="absolute top-8 left-8 bg-vibrant-pistachio text-espresso font-sans font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full border-2 border-espresso transform -rotate-3 shadow-md z-10">
               Daily Fresh
             </div>
          </div>

          {/* RIGHT COLUMN: TEXT/LIST PANEL */}
          <div className="flex-1 bg-soft-pink rounded-[2.5rem] border-4 border-espresso shadow-[8px_8px_0px_0px_rgba(45,36,36,1)] p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden">
             
             {/* Decorative blob */}
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white rounded-full blur-3xl opacity-60"></div>

             <span className="font-sans font-black text-sm uppercase tracking-widest text-espresso/60 mb-4 bg-white/50 px-3 py-1 rounded-full w-fit backdrop-blur-sm border border-espresso/10">
               Fresh From The Oven
             </span>
             
             <h2 className="font-serif font-black text-5xl md:text-7xl mb-10 text-espresso leading-none relative z-10">
               Sweet <br/> Treats.
             </h2>

             <ul className="space-y-4 relative z-10 w-full">
               {menuItems.map((item) => {
                 const isAdded = cart.has(item.id);
                 return (
                   <li key={item.id} className="flex justify-between items-center bg-white/60 p-4 rounded-xl border border-espresso/10 hover:border-espresso hover:bg-white transition-all group relative">
                      <div className="flex flex-col pr-4 relative">
                        {item.badge && (
                          <span className="absolute -top-6 -left-2 bg-deep-orange text-espresso text-[10px] font-black uppercase tracking-widest py-1 px-3 rounded-md border-2 border-espresso transform -rotate-6 shadow-sm z-20">
                            {item.badge}
                          </span>
                        )}
                        <span className="font-serif font-bold text-xl md:text-2xl text-espresso group-hover:text-deep-orange transition-colors">
                          {item.name}
                        </span>
                        <span className="font-sans text-sm font-medium text-espresso/70 mt-1 leading-snug">
                          {item.description}
                        </span>
                      </div>
                      
                      <button 
                        onClick={() => toggleItem(item.id)}
                        className={`flex items-center gap-2 pl-3 pr-1 py-1 rounded-full border-2 border-espresso transition-all shadow-[2px_2px_0px_0px_rgba(45,36,36,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] cursor-pointer bg-white group-hover:scale-105`}
                      >
                        <span className="font-sans font-bold text-lg text-espresso">{item.price}</span>
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full border border-espresso transition-colors ${isAdded ? 'bg-vibrant-pistachio text-espresso' : 'bg-espresso text-cream'}`}>
                           {isAdded ? <Check size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                        </div>
                      </button>
                   </li>
                 );
               })}
             </ul>

             <div className="mt-10 relative z-10 text-center lg:text-left">
                <button className="inline-block bg-espresso text-cream px-8 py-3 rounded-full font-sans font-bold border-2 border-transparent hover:bg-transparent hover:text-espresso hover:border-espresso transition-all transform hover:-translate-y-1 shadow-md">
                   View Full Menu
                </button>
             </div>

          </div>

        </div>
      </div>

    </section>
  );
};