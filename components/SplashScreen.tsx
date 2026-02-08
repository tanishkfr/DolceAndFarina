import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [exiting, setExiting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger content entry animation
    setTimeout(() => setShowContent(true), 100);

    // Trigger exit slide-up animation
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 2500);

    // Complete the process after exit animation finishes
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3200); // 2500ms + 700ms transition

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-cream flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        exiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div 
        className={`flex flex-col items-center transition-all duration-700 transform ${
          showContent ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
        }`}
      >
         {/* Bouncing Logo Graphic */}
         <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 bg-deep-orange text-espresso rounded-full border-4 border-espresso flex items-center justify-center shadow-[6px_6px_0px_0px_#2D2424] animate-bounce">
            <span className="text-4xl md:text-6xl">🥐</span>
         </div>
         
         <h1 className="font-serif font-black text-4xl md:text-6xl text-espresso tracking-tight text-center mb-2">
           Dolce & Farina
         </h1>
         
         <p className="font-sans font-bold text-espresso/60 tracking-[0.2em] uppercase text-xs md:text-sm animate-pulse">
           Authentic Italian Pastry
         </p>
      </div>
    </div>
  );
};