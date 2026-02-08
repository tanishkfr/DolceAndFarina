import React from 'react';
import { ArrowDown, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-pale-pistachio overflow-hidden flex flex-col items-center justify-center pt-24 pb-20 px-4">
      
      {/* 1. BACKGROUND LAYER (z-0) */}
      
      {/* Checkered Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40" 
           style={{ 
             backgroundImage: `
               linear-gradient(45deg, #ffffff 25%, transparent 25%), 
               linear-gradient(-45deg, #ffffff 25%, transparent 25%), 
               linear-gradient(45deg, transparent 75%, #ffffff 75%), 
               linear-gradient(-45deg, transparent 75%, #ffffff 75%)
             `,
             backgroundSize: '40px 40px',
             backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
           }}>
      </div>

      {/* Giant Diagonal Marquee (Behind everything) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center z-0">
        <div className="w-[150vw] transform -rotate-[15deg] py-4">
           <div className="whitespace-nowrap font-serif font-black text-[8rem] md:text-[12rem] text-espresso opacity-5 animate-marquee">
              FRESH CANNOLI • HOT ESPRESSO • FRESH CANNOLI • HOT ESPRESSO • FRESH CANNOLI • HOT ESPRESSO •
           </div>
        </div>
      </div>

      {/* The "Halo" - Readability Hack */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[700px] md:h-[700px] bg-white/60 blur-[80px] rounded-full pointer-events-none z-0"></div>

      {/* 2. SPRINKLES (Decor) */}
      <div className="absolute top-[15%] left-[20%] w-3 h-8 bg-deep-orange rotate-45 rounded-full z-0 opacity-80 animate-float-slow"></div>
      <div className="absolute top-[25%] right-[15%] w-3 h-8 bg-vibrant-pistachio -rotate-12 rounded-full z-0 opacity-80 animate-float"></div>
      <div className="absolute bottom-[30%] left-[10%] w-3 h-8 bg-deep-orange -rotate-45 rounded-full z-0 opacity-80 animate-float-delayed"></div>
      <div className="absolute bottom-[20%] right-[25%] w-3 h-8 bg-warm-yellow rotate-12 rounded-full z-0 opacity-80 animate-float-slow"></div>
      <div className="absolute top-[10%] left-[50%] w-3 h-8 bg-vibrant-pistachio rotate-90 rounded-full z-0 opacity-80 animate-float"></div>


      {/* 3. ORBIT ELEMENTS (z-10) - Floating around the center */}

      {/* Top Left: Polaroid (Pastry) + Sold Out Tag */}
      <div className="absolute top-24 left-4 md:top-32 md:left-20 w-32 md:w-48 bg-white p-2 pb-8 shadow-xl transform -rotate-12 z-10 animate-float hover:z-30 hover:scale-110 transition-transform duration-300 hidden sm:block group">
         {/* Tape */}
         <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#E0C097] opacity-90 rotate-2 shadow-sm z-20"></div>
         {/* Sold Out Tag */}
         <div className="absolute -right-2 top-8 bg-red-600 text-white font-sans font-bold text-[0.6rem] uppercase px-3 py-1 rotate-12 z-30 shadow-md">
            Sold Out
         </div>
         <div className="w-full aspect-square overflow-hidden bg-gray-100">
            <img src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Cannoli" />
         </div>
      </div>

      {/* Top Right: The Review Scrap */}
      <div className="absolute top-28 right-6 md:top-36 md:right-32 z-10 animate-float-delayed hover:z-30">
        <div className="bg-white p-4 w-40 md:w-48 transform rotate-6 shadow-lg relative" style={{ clipPath: 'polygon(3% 0%, 97% 2%, 100% 98%, 98% 100%, 2% 96%, 0% 4%)' }}>
           {/* Torn tape look */}
           <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-[#E0C097] opacity-80 -rotate-2 z-20 shadow-sm"></div>
           
           <div className="flex gap-1 text-deep-orange mb-2 justify-center mt-2">
             <Star size={14} fill="#FFB74D" strokeWidth={0} />
             <Star size={14} fill="#FFB74D" strokeWidth={0} />
             <Star size={14} fill="#FFB74D" strokeWidth={0} />
             <Star size={14} fill="#FFB74D" strokeWidth={0} />
             <Star size={14} fill="#FFB74D" strokeWidth={0} />
           </div>
           <p className="font-serif italic text-espresso text-center font-bold text-lg leading-tight mb-2">
             "Nonna<br/>Approved!"
           </p>
        </div>
      </div>

      {/* Bottom Left: The Receipt */}
      <div className="absolute bottom-24 left-4 md:bottom-32 md:left-24 z-10 animate-float-slow hidden md:block hover:z-30">
         <div className="w-48 bg-white shadow-md p-4 font-mono text-[10px] md:text-xs text-espresso relative rotate-[-6deg] hover:rotate-0 transition-transform">
            {/* Jagged Top */}
            <div className="absolute -top-1 left-0 w-full h-2 bg-white" style={{ clipPath: 'polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)' }}></div>
            
            <div className="text-center mb-3 mt-1">
               <span className="block font-black text-sm">DOLCE & FARINA</span>
               <span className="block opacity-60">Ticket #0921</span>
            </div>
            <div className="border-b border-dashed border-espresso/30 mb-2"></div>
            <div className="space-y-1 mb-2">
               <div className="flex justify-between"><span>1x CANNOLI</span><span>$5.00</span></div>
               <div className="flex justify-between"><span>1x ESPRESSO</span><span>$3.50</span></div>
               <div className="flex justify-between font-bold"><span>1x 100% LOVE</span><span>$0.00</span></div>
            </div>
            <div className="border-b border-dashed border-espresso/30 mb-2"></div>
            <div className="text-center font-black">TOTAL: YUM!</div>
            
            {/* Jagged Bottom */}
            <div className="absolute -bottom-1 left-0 w-full h-2 bg-pale-pistachio" style={{ clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)' }}></div>
         </div>
      </div>

      {/* Bottom Right: Polaroid (Coffee) */}
      <div className="absolute bottom-20 right-4 md:bottom-28 md:right-20 w-32 md:w-44 bg-white p-2 pb-8 shadow-xl transform rotate-6 z-10 animate-float hover:z-30 hover:scale-110 transition-transform duration-300 hidden sm:block group">
         {/* Tape */}
         <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#E0C097] opacity-90 -rotate-3 shadow-sm z-20"></div>
         <div className="w-full aspect-square overflow-hidden bg-gray-100">
            <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Coffee" />
         </div>
      </div>

      {/* Reaching Hand (Bottom Right) - z-40 */}
      <div className="absolute -bottom-16 -right-16 md:-bottom-10 md:right-0 z-40 w-48 md:w-72 pointer-events-none animate-float-slow">
        <div className="relative w-full h-full">
            <img 
            src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=400&auto=format&fit=crop" 
            alt="Reaching Hand" 
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl transform -rotate-12"
            />
        </div>
      </div>


      {/* 4. MAIN TYPOGRAPHY (z-30) - Stacked & Solid */}
      <div className="relative z-30 flex flex-col items-center mt-10 md:mt-0 leading-[0.85] pointer-events-none select-none">
        
        {/* ROW 1: DOLCE */}
        <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-300 origin-bottom-right">
            <h1 className="font-serif font-black text-[18vw] md:text-[11rem] text-espresso drop-shadow-[6px_6px_0px_rgba(0,0,0,0.15)]"
                style={{ WebkitTextStroke: '3px white' }}>
              DOLCE
            </h1>
        </div>

        {/* ROW 2: & */}
        <div className="relative z-40 my-[-2vw] md:my-[-30px]">
            <span className="font-serif font-black text-[15vw] md:text-[9rem] text-deep-orange drop-shadow-[4px_4px_0px_#2D2424] block transform rotate-3"
                  style={{ WebkitTextStroke: '3px white' }}>
              &
            </span>
        </div>

        {/* ROW 3: FARINA */}
        <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-300 origin-top-left">
            <h1 className="font-serif font-black text-[18vw] md:text-[11rem] text-espresso drop-shadow-[6px_6px_0px_rgba(0,0,0,0.15)]"
                style={{ WebkitTextStroke: '3px white' }}>
              FARINA
            </h1>
        </div>

      </div>

      {/* Subtitle Badge */}
      <div className="mt-8 relative z-30 transform -rotate-1 hover:rotate-0 transition-transform cursor-pointer">
          <div className="bg-espresso text-cream px-6 md:px-10 py-3 md:py-4 rounded-full border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <p className="font-sans font-black text-xs md:text-lg uppercase tracking-widest">
                Boston's Loudest Pastry Shop
              </p>
          </div>
      </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
         <div className="bg-white w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-espresso flex items-center justify-center shadow-[2px_2px_0px_0px_#2D2424]">
             <ArrowDown size={20} className="text-espresso" strokeWidth={3} />
         </div>
      </div>

      {/* Styles for custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-10px) rotate(-10deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-8px) rotate(15deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-5px) rotate(-4deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 1s; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite 2s; }
      `}</style>

    </section>
  );
};