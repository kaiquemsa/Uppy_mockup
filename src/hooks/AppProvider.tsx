import React, { useState, ReactNode } from 'react';
import ProductContext, { Product, ProductContextType } from './ProductContext';

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]); 

  const value: ProductContextType = { products, setProducts };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export default AppProvider;
