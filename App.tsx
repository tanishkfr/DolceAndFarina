import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { PastryMenu } from './components/PastryMenu';
import { CoffeeMenu } from './components/CoffeeMenu';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';
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

type ViewState = 'home' | 'cart';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  
  // GLOBAL CART STATE: Record<ItemId, Quantity>
  const [cartItems, setCartItems] = useState<Record<string, number>>({});

  const addToCart = (id: string) => {
    setCartItems(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => {
      const currentQty = prev[id] || 0;
      if (currentQty <= 1) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: currentQty - 1 };
    });
  };

  const deleteFromCart = (id: string) => {
    setCartItems(prev => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  };

  const totalItems = Object.values(cartItems).reduce((sum: number, qty: number) => sum + qty, 0);

  const handleCartClick = () => {
    setCurrentView('cart');
    window.scrollTo(0, 0);
  };

  const handleNavigation = (id: string) => {
    setCurrentView('home');
    // Wait for React to render the Home view, then scroll
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-cream font-sans text-espresso antialiased selection:bg-warm-yellow selection:text-espresso overflow-x-hidden">
      <CustomCursor />
      
      {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      
      <Navbar 
        cartCount={totalItems} 
        onCartClick={handleCartClick}
        onNavigate={handleNavigation}
      />
      
      <main className="flex flex-col w-full">
        {currentView === 'home' ? (
          <>
            <Hero />
            <PastryMenu 
              cartItems={cartItems} 
              addToCart={addToCart} 
              removeFromCart={removeFromCart} 
            />
            <CoffeeMenu 
              cartItems={cartItems} 
              addToCart={addToCart} 
              removeFromCart={removeFromCart} 
            />
            <About />
          </>
        ) : (
          <Cart 
            cartItems={cartItems} 
            addToCart={addToCart} 
            removeFromCart={removeFromCart}
            deleteFromCart={deleteFromCart}
            onBack={() => handleNavigation('home')} 
          />
        )}
      </main>

      {currentView === 'home' && <Footer />}
    </div>
  );
};

export default App;