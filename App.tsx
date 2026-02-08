import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { PastryMenu } from './components/PastryMenu';
import { CoffeeMenu } from './components/CoffeeMenu';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { SplashScreen } from './components/SplashScreen';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target or parent is clickable
      const isClickable = target.closest('a, button, [role="button"], input, select, textarea');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  return (
    <>
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
      <div 
        className={`fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 ease-out hidden md:block ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`
        }}
      >
        <div 
            className={`w-8 h-8 rounded-full border-2 border-espresso bg-deep-orange/80 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] -translate-x-1/2 -translate-y-1/2 ${isHovering ? 'scale-150' : 'scale-100'}`}
        />
      </div>
    </>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  
  // GLOBAL CART STATE: Record<ItemId, Quantity>
  const [cartItems, setCartItems] = useState<Record<string, number>>({});

  const addToCart = (id: string) => {
    setCartItems(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const totalItems = Object.values(cartItems).reduce((sum: number, qty: number) => sum + qty, 0);

  return (
    <div className="min-h-screen bg-cream font-sans text-espresso antialiased selection:bg-warm-yellow selection:text-espresso overflow-x-hidden">
      <CustomCursor />
      
      {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      
      <Navbar cartCount={totalItems} />
      
      <main className="flex flex-col w-full">
        <Hero />
        <PastryMenu cartItems={cartItems} addToCart={addToCart} />
        <CoffeeMenu cartItems={cartItems} addToCart={addToCart} />
        <About />
      </main>

      <Footer />
    </div>
  );
};

export default App;