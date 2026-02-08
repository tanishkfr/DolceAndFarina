import React from 'react';
import { ArrowDownRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 bg-warm-yellow overflow-hidden min-h-[95vh] flex flex-col justify-center">
      
      {/* Background Pattern (Subtle Polka Dot) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2D2424 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: TEXT CONTENT */}
          <div className="text-center lg:text-left relative z-20 flex flex-col items-center lg:items-start">
            
            {/* Main Headline Group */}
            <div className="relative mb-8">
                {/* Stamp: "Eat a Cannoli" */}
                <div className="absolute -top-12 -right-4 md:-top-16 md:-right-12 z-20 transform rotate-12 animate-[pulse_3s_ease-in-out_infinite]">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full border-4 border-espresso shadow-[4px_4px_0px_0px_#2D2424] flex items-center justify-center p-1">
                        <div className="w-full h-full rounded-full border-2 border-dashed border-espresso flex items-center justify-center">
                            <span className="font-sans font-black uppercase text-xs md:text-sm text-espresso leading-none text-center transform -rotate-6">
                                Eat A<br/><span className="text-lg md:text-xl text-deep-orange">Cannoli</span>
                            </span>
                        </div>
                    </div>
                </div>

                <h1 className="font-serif font-black italic text-[7rem] sm:text-[9rem] md:text-[11rem] leading-[0.75] tracking-tighter text-espresso relative z-10">
                  CIAO
                </h1>
                <h1 className="relative z-10 font-serif font-black italic text-[7rem] sm:text-[9rem] md:text-[11rem] leading-[0.75] tracking-tighter text-white drop-shadow-[6px_6px_0_rgba(255,183,77,1)] md:drop-shadow-[10px_10px_0_rgba(255,183,77,1)] -mt-2 md:-mt-6">
                  BELLA.
                </h1>
            </div>

            {/* Subtitle */}
            <p className="font-sans text-xl md:text-2xl text-espresso font-bold mb-10 max-w-lg mx-auto lg:mx-0 leading-tight">
              Authentic Italian sugar chaos. <br/>
              <span className="decoration-deep-orange underline decoration-4 underline-offset-2">Use two hands.</span>
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start relative z-10 w-full sm:w-auto">
              <a href="#menu" className="group bg-espresso text-white text-xl font-sans font-black px-12 py-5 rounded-full border-2 border-espresso hover:bg-deep-orange hover:text-espresso transition-all duration-200 flex items-center justify-center gap-3 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[4px_4px_0px_0px_#2D2424] hover:-translate-y-1">
                Order Now <ArrowDownRight className="group-hover:rotate-45 transition-transform" />
              </a>
              <a href="#visit" className="bg-cream text-espresso text-xl font-sans font-black px-12 py-5 rounded-full border-2 border-espresso hover:bg-white transition-all duration-200 shadow-[4px_4px_0px_0px_#2D2424] hover:-translate-y-1">
                Find Us
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: THE VISUAL FEAST (MASONRY COLLAGE) */}
          <div className="relative h-[600px] md:h-[700px] w-full hidden md:block">
            
            {/* DECORATIVE: Lemon */}
            <div className="absolute top-20 right-20 text-6xl transform rotate-45 z-0 pointer-events-none opacity-90 drop-shadow-md">
              🍋
            </div>

            {/* DECORATIVE: Mamma Mia Bubble */}
            <div className="absolute bottom-40 -left-10 bg-white px-4 py-2 rounded-xl rounded-tr-none border-2 border-espresso transform -rotate-12 shadow-[2px_2px_0px_0px_#2D2424] z-40 pointer-events-none">
              <span className="font-serif italic font-bold text-lg text-espresso">Mamma Mia!</span>
            </div>

            {/* Image 1 (Main/Tall) - Back Right */}
            <div className="absolute top-0 right-0 w-[60%] h-[75%] z-10 transform rotate-2 hover:scale-105 hover:rotate-0 transition-all duration-500 ease-out">
               <div className="w-full h-full bg-white p-3 rounded-[2rem] border-4 border-espresso shadow-[12px_12px_0px_0px_#2D2424] overflow-hidden">
                 <img 
                   src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=800&auto=format&fit=crop" 
                   alt="Bakery Counter" 
                   className="w-full h-full object-cover rounded-[1.5rem] border-2 border-espresso filter contrast-110"
                 />
               </div>
            </div>

            {/* Image 2 (Detail/Top) - Front Left Top */}
            <div className="absolute top-10 left-4 w-[45%] h-[40%] z-20 transform -rotate-3 hover:scale-105 hover:rotate-0 transition-all duration-500 ease-out">
               <div className="w-full h-full bg-white p-3 rounded-[2rem] border-4 border-espresso shadow-[8px_8px_0px_0px_#2D2424] overflow-hidden">
                 <img 
                   src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop" 
                   alt="Cannoli Close up" 
                   className="w-full h-full object-cover rounded-[1.5rem] border-2 border-espresso"
                 />
               </div>
               {/* Sticker */}
               <div className="absolute -top-4 -right-4 bg-vibrant-pistachio text-espresso font-sans font-black text-xs uppercase tracking-widest px-3 py-1 rounded-full border-2 border-espresso transform rotate-12 shadow-[2px_2px_0px_0px_#2D2424]">
                 Yum!
               </div>
            </div>

            {/* Image 3 (Action/Bottom) - Front Left Bottom */}
            <div className="absolute bottom-20 left-12 w-[45%] h-[40%] z-30 transform rotate-1 hover:scale-105 hover:rotate-0 transition-all duration-500 ease-out">
               <div className="w-full h-full bg-white p-3 rounded-[2rem] border-4 border-espresso shadow-[10px_10px_0px_0px_#2D2424] overflow-hidden">
                 <img 
                   src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop" 
                   alt="Coffee and Pastry" 
                   className="w-full h-full object-cover rounded-[1.5rem] border-2 border-espresso"
                 />
               </div>
            </div>

          </div>

          {/* Mobile Only Image (Simpler) */}
          <div className="block md:hidden w-full relative h-[400px] mt-8">
             {/* DECORATIVE: Lemon Mobile */}
             <div className="absolute -top-4 right-4 text-4xl transform rotate-12 z-20">
              🍋
             </div>
             <div className="absolute inset-0 transform rotate-2">
                <div className="w-full h-full bg-white p-3 rounded-[2rem] border-4 border-espresso shadow-[8px_8px_0px_0px_#2D2424]">
                  <img 
                    src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=800&auto=format&fit=crop" 
                    alt="Bakery Counter" 
                    className="w-full h-full object-cover rounded-[1.5rem] border-2 border-espresso"
                  />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};