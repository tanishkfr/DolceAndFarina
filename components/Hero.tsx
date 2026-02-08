import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 bg-cream min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <span className="inline-block bg-vibrant-pistachio text-espresso px-6 py-2 rounded-full font-sans font-bold text-sm tracking-widest mb-6 border-2 border-espresso transform -rotate-2">
            EST. 2024 • BOSTON, MA
          </span>
          
          <h1 className="font-serif font-black text-6xl md:text-8xl text-espresso leading-[0.95] mb-8 tracking-tight">
            Ciao, Bella. <br/>
            <span className="text-deep-orange">Eat a Cannoli.</span>
          </h1>
          
          <p className="font-sans text-xl md:text-2xl text-espresso/80 mb-10 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
            Authentic Italian pastries with a side of chaos. Sweet ricotta, crunchy shells, and espresso that kicks like a mule.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#menu" className="bg-espresso text-cream text-lg font-sans font-bold px-10 py-4 rounded-full hover:bg-deep-orange hover:text-espresso transition-all transform hover:scale-105 active:scale-95 shadow-xl">
              Order for Pickup
            </a>
            <a href="#visit" className="bg-white text-espresso text-lg font-sans font-bold px-10 py-4 rounded-full border-2 border-espresso hover:bg-pale-pistachio transition-all transform hover:scale-105 active:scale-95">
              Find Us
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="flex-1 w-full relative z-10">
          <div className="relative rounded-[3rem] overflow-hidden border-4 border-espresso shadow-[12px_12px_0px_0px_rgba(45,36,36,1)] transform rotate-2 hover:rotate-0 transition-all duration-500">
            <img 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop" 
              alt="Italian Pastry Counter" 
              className="w-full h-[500px] object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
          
          {/* Decorative Blob/Shape behind */}
          <div className="absolute -top-12 -right-12 w-full h-full bg-warm-yellow rounded-full blur-3xl -z-10 opacity-60"></div>
        </div>
      </div>

    </section>
  );
};