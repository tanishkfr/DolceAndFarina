import React from 'react';

export const CoffeeMenu: React.FC = () => {
  const drinks = [
    { name: "Espresso", price: "$2.50" },
    { name: "Cappuccino", price: "$4.00" },
    { name: "Freddo Espresso", price: "$3.50" },
    { name: "Latte Macchiato", price: "$4.50" },
  ];

  return (
    <section id="coffee" className="py-24 px-6 md:px-12 bg-cream">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Text Side (Left Panel) */}
          <div className="flex-1 bg-warm-yellow rounded-[2.5rem] border-4 border-espresso shadow-[8px_8px_0px_0px_rgba(45,36,36,1)] p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
            
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>

            <span className="font-sans font-black text-sm uppercase tracking-widest text-espresso/60 mb-4 bg-white/50 px-3 py-1 rounded-full w-fit backdrop-blur-sm border border-espresso/10">
              Caffe Bar
            </span>
            <h2 className="font-serif font-black text-5xl md:text-7xl mb-10 text-espresso leading-none relative z-10">
              Liquid <br/> Energy.
            </h2>

            <ul className="space-y-4 relative z-10">
              {drinks.map((drink, idx) => (
                <li key={idx} className="flex justify-between items-center bg-white/60 p-4 rounded-xl border border-espresso/10 hover:border-espresso hover:bg-white transition-all cursor-pointer group">
                  <span className="font-serif font-bold text-xl md:text-2xl text-espresso group-hover:text-deep-orange transition-colors">{drink.name}</span>
                  <span className="font-sans font-bold text-lg text-espresso bg-white px-3 py-1 rounded-lg border-2 border-espresso shadow-[2px_2px_0px_0px_rgba(45,36,36,1)]">{drink.price}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 relative z-10">
               <span className="inline-block bg-white px-6 py-3 rounded-full font-sans font-bold text-espresso border-2 border-espresso transform -rotate-1 hover:rotate-0 transition-transform shadow-md">
                 ☕️ 100% Arabica Roasted in Napoli
               </span>
            </div>
          </div>

          {/* Image Side (Right Panel) */}
          <div className="flex-1 h-[500px] lg:h-auto rounded-[2.5rem] border-4 border-espresso shadow-[8px_8px_0px_0px_rgba(45,36,36,1)] overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop" 
              alt="Latte Art" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-espresso/10 group-hover:bg-transparent transition-colors duration-500"></div>
             
             {/* Sticker on image */}
             <div className="absolute bottom-8 right-8 bg-deep-orange text-espresso font-sans font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full border-2 border-espresso transform rotate-3">
               Barista Choice
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};