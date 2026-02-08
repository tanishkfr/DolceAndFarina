import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-32 py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            
            <div className="flex-1 w-full order-2 md:order-1">
                 <div className="relative">
                    <div className="absolute inset-0 bg-soft-pink rounded-[3rem] transform rotate-3 border-4 border-espresso"></div>
                    <img 
                        src="https://loremflickr.com/600/400/baker,dough/all?lock=6" 
                        alt="Baker hands" 
                        className="relative z-10 w-full h-[400px] object-cover rounded-[3rem] border-4 border-espresso transform -rotate-2 hover:rotate-0 transition-all duration-500 shadow-xl"
                    />
                 </div>
            </div>

            <div className="flex-1 order-1 md:order-2 text-center md:text-left">
                <span className="inline-block bg-pale-pistachio text-espresso px-4 py-1 rounded-full font-sans font-bold text-sm tracking-widest mb-6 border-2 border-espresso">
                    WHO WE ARE
                </span>
                <h2 className="font-serif font-black text-5xl md:text-6xl mb-8 leading-[1.1] text-espresso">
                    We bring the chaos & sugar of Rome to Boston.
                </h2>
                <p className="font-sans text-xl text-espresso/80 leading-relaxed font-medium mb-8">
                    No fancy foams. No tiny portions. Just loud espresso machines, flour in the air, and pastries so good you'll want to call your Nonna.
                </p>
                <button className="text-espresso font-bold font-sans text-lg underline decoration-4 decoration-deep-orange underline-offset-4 hover:text-deep-orange transition-colors">
                    Read Our Story &rarr;
                </button>
            </div>

        </div>
      </div>
    </section>
  );
};