import React from 'react';
import { ArrowDownRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 bg-warm-yellow overflow-hidden min-h-[95vh] flex flex-col justify-center">
      
      {/* Background Pattern (Subtle Polka Dot) */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#2D2424 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* TEXT CONTENT - LEFT */}
          <div className="flex-1 text-center lg:text-left relative z-20">
            
            {/* Floating Badge - Moved behind text (z-0) and adjusted position */}
            <div className="absolute -top-16 -left-8 md:-top-24 md:-left-16 animate-[spin_10s_linear_infinite] z-0 opacity-90">
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-deep-orange text-espresso flex items-center justify-center rounded-full border-4 border-espresso shadow-[4px_4px_0px_0px_#2D2424]">
                 <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-[spin_4s_linear_infinite_reverse]">
                   <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                   <text className="text-[11px] font-black uppercase tracking-widest fill-espresso">
                     <textPath xlinkHref="#curve">
                       • Fresh Daily • Open Now • Hot Coffee •
                     </textPath>
                   </text>
                 </svg>
                 <span className="font-black text-4xl font-serif">Ciao!</span>
              </div>
            </div>

            {/* Headline - Added relative z-10 to sit ABOVE badge */}
            <h1 className="relative z-10 font-serif font-black text-[5rem] sm:text-[7rem] md:text-[9rem] leading-[0.85] text-espresso tracking-tight mb-8 drop-shadow-sm">
              CIAO <br/>
              {/* BELLA - Solid White + Hard Shadow for Pop Art Look */}
              <span className="text-white drop-shadow-[4px_4px_0_#2D2424] md:drop-shadow-[6px_6px_0_#2D2424]">
                BELLA.
              </span>
            </h1>
            
            <p className="font-sans text-xl md:text-3xl text-espresso font-bold mb-10 max-w-xl mx-auto lg:mx-0 leading-tight bg-white/50 backdrop-blur-sm p-4 rounded-2xl border-2 border-espresso inline-block transform -rotate-1 shadow-[4px_4px_0px_0px_#2D2424] relative z-10">
              Authentic Italian sugar chaos. <br/>
              Use two hands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start relative z-10">
              <a href="#menu" className="group bg-espresso text-white text-xl font-sans font-black px-12 py-5 rounded-full border-2 border-espresso hover:bg-deep-orange hover:text-espresso transition-colors duration-200 flex items-center justify-center gap-3">
                Grab a Cannoli <ArrowDownRight className="group-hover:rotate-45 transition-transform" />
              </a>
              <a href="#visit" className="bg-cream text-espresso text-xl font-sans font-black px-12 py-5 rounded-full border-2 border-espresso hover:bg-white transition-colors duration-200">
                Find Us
              </a>
            </div>
          </div>

          {/* VISUAL COLLAGE - RIGHT */}
          <div className="flex-1 w-full relative h-[500px] md:h-[700px] flex items-center justify-center">
            
            {/* Main Image (Polaroid Style) */}
            <div className="relative z-10 w-[85%] md:w-[75%] transform rotate-3 transition-transform hover:rotate-0 duration-500">
               <div className="bg-white p-4 pb-16 rounded-sm shadow-[12px_12px_0px_0px_#2D2424] border-4 border-espresso">
                 <img 
                   src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop" 
                   alt="Pastry Counter" 
                   className="w-full h-[350px] md:h-[450px] object-cover border-2 border-espresso filter contrast-110"
                 />
                 <div className="absolute bottom-4 left-4 font-handwriting text-espresso font-black text-2xl transform -rotate-2">
                   Est. 2024
                 </div>
               </div>
            </div>

            {/* Sticker 1: Coffee (Top Right) */}
            <div className="absolute top-0 right-0 md:-right-4 z-20 w-40 md:w-56 transform -rotate-12 hover:rotate-12 transition-transform duration-300">
              <div className="bg-white p-2 rounded-full shadow-[8px_8px_0px_0px_#2D2424] border-4 border-espresso">
                <img 
                  src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=400&auto=format&fit=crop" 
                  alt="Coffee" 
                  className="w-full h-full rounded-full object-cover aspect-square border-2 border-espresso"
                />
              </div>
            </div>

            {/* Sticker 2: Cannoli (Bottom Left) */}
            <div className="absolute bottom-10 left-0 md:-left-8 z-20 w-48 md:w-64 transform rotate-12 hover:-rotate-12 transition-transform duration-300">
               <div className="bg-white p-3 rounded-2xl shadow-[8px_8px_0px_0px_#2D2424] border-4 border-espresso">
                <img 
                  src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=600&auto=format&fit=crop" 
                  alt="Cannoli Detail" 
                  className="w-full h-full object-cover aspect-[4/3] border-2 border-espresso"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};