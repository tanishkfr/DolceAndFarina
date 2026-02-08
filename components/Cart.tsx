import React from 'react';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { allItems } from '../data';

interface CartProps {
  cartItems: Record<string, number>;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  deleteFromCart: (id: string) => void;
  onBack: () => void;
}

export const Cart: React.FC<CartProps> = ({ 
  cartItems, 
  addToCart, 
  removeFromCart, 
  deleteFromCart,
  onBack 
}) => {
  const cartEntries = Object.entries(cartItems);
  const hasItems = cartEntries.length > 0;

  // Calculate Subtotal
  const subtotal = cartEntries.reduce((sum, [id, qty]) => {
    const item = allItems.find(i => i.id === id);
    return sum + (item ? Number(item.price) * Number(qty) : 0);
  }, 0);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-cream flex flex-col items-center">
      
      <div className="container max-w-2xl w-full">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={onBack}
            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-espresso hover:bg-espresso hover:text-white transition-colors"
          >
            <ArrowLeft size={24} strokeWidth={2.5} />
          </button>
          <h1 className="font-serif font-black text-4xl md:text-5xl text-espresso">Your Order</h1>
        </div>

        {/* Empty State */}
        {!hasItems && (
           <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-32 h-32 bg-soft-pink rounded-full border-4 border-espresso flex items-center justify-center mb-8 shadow-[8px_8px_0px_0px_#2D2424] transform rotate-3">
                 <ShoppingBag size={48} className="text-espresso" />
              </div>
              <h2 className="font-serif font-black text-3xl md:text-4xl text-espresso mb-4">Your bag is empty!</h2>
              <p className="font-sans text-xl text-espresso/60 mb-8 max-w-sm">
                Fill it with Cannolis, Espresso, and authentic Italian sugar chaos.
              </p>
              <button 
                onClick={onBack}
                className="bg-espresso text-cream px-8 py-4 rounded-full font-sans font-black text-xl border-2 border-espresso hover:bg-deep-orange hover:text-espresso transition-colors shadow-[4px_4px_0px_0px_#2D2424] hover:-translate-y-1"
              >
                Go to Menu
              </button>
           </div>
        )}

        {/* Cart Items List */}
        {hasItems && (
          <div className="bg-white rounded-[2rem] border-4 border-espresso shadow-[12px_12px_0px_0px_#2D2424] overflow-hidden mb-32">
             <div className="p-6 md:p-8 space-y-6">
               {cartEntries.map(([id, qty]) => {
                 const item = allItems.find(i => i.id === id);
                 if (!item) return null;

                 return (
                   <div key={id} className="flex items-center justify-between gap-4 py-4 border-b-2 border-dashed border-espresso/10 last:border-0">
                      
                      {/* Item Info */}
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-soft-peach rounded-xl border-2 border-espresso overflow-hidden shrink-0">
                           {item.image && (
                             <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                           )}
                        </div>
                        <div>
                          <h3 className="font-serif font-black text-lg md:text-2xl text-espresso leading-none mb-1">{item.name}</h3>
                          <p className="font-sans font-bold text-espresso/60">{item.displayPrice}</p>
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center gap-3">
                        
                        {/* Qty Control */}
                        <div className="flex items-center bg-cream rounded-full border-2 border-espresso h-10 md:h-12 shadow-[2px_2px_0px_0px_#2D2424]">
                           <button 
                             onClick={() => removeFromCart(id)}
                             className="w-10 h-full flex items-center justify-center hover:bg-espresso hover:text-white rounded-l-full transition-colors"
                           >
                             <Minus size={16} strokeWidth={3} />
                           </button>
                           <div className="w-8 text-center font-sans font-black text-lg">{qty}</div>
                           <button 
                             onClick={() => addToCart(id)}
                             className="w-10 h-full flex items-center justify-center hover:bg-espresso hover:text-white rounded-r-full transition-colors"
                           >
                             <Plus size={16} strokeWidth={3} />
                           </button>
                        </div>

                        {/* Delete */}
                        <button 
                          onClick={() => deleteFromCart(id)}
                          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-espresso bg-soft-pink text-espresso hover:bg-red-500 hover:text-white hover:border-red-900 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} strokeWidth={2.5} />
                        </button>

                      </div>
                   </div>
                 );
               })}
             </div>
          </div>
        )}

      </div>

      {/* Sticky Footer */}
      {hasItems && (
        <div className="fixed bottom-6 left-6 right-6 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[600px] z-40">
           <div className="bg-espresso text-cream p-4 rounded-[2rem] border-4 border-cream shadow-[0px_10px_40px_rgba(0,0,0,0.3)] flex items-center justify-between pl-8">
              <div className="flex flex-col">
                <span className="font-sans text-xs uppercase tracking-widest opacity-60">Total</span>
                <span className="font-serif font-black text-2xl">${subtotal.toFixed(2)}</span>
              </div>
              <button className="bg-deep-orange text-espresso px-8 py-3 rounded-full font-sans font-black text-lg border-2 border-espresso hover:bg-white transition-colors">
                 Checkout
              </button>
           </div>
        </div>
      )}

    </div>
  );
};