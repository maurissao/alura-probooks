import React, { ReactNode, createContext, useContext, useState } from 'react';

interface CartContextType {
    cartCount: number;
    incrementCart: () => void;
  }
  
const CartCountContext = createContext<CartContextType | undefined>(undefined);

export const useCartCount = (): CartContextType => {
    const context = useContext(CartCountContext);
    if (!context) {
        throw new Error('sem context');
    }
    return context;
};
  
interface CartProviderProps {
    children: ReactNode;
}

export const CartCountProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartCount, setCartCount] = useState<number>(0);

    const incrementCart = () => {
        setCartCount((prevCount) => prevCount + 1);
    };

    return (
        <CartCountContext.Provider value={{ cartCount, incrementCart }}>
          {children}
        </CartCountContext.Provider>
      );  
};
