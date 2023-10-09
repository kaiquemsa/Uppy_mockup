import React from 'react';

export type Product = {
  productName: string;
  image: string;
  price: string;
};

export type ProductContextType = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const ProductContext = React.createContext<ProductContextType | undefined>(undefined);

export default ProductContext;
