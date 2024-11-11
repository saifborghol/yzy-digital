'use client';
import React, { createContext, useEffect, useState, ReactNode } from 'react';

import axios from 'axios';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
}

export type ProductContextType = {
  products: Product[];
  loading: boolean;
  error: string | null;
  filterByRating: (minRating: number) => void;
};

export const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      } catch (error) {
        setError('Erreur lors du chargement des produits');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filterByRating = (minRating: number) => {
    setFilteredProducts(
      products.filter((product) => product.rating >= minRating)
    );
  };
  const value = {
    products: filteredProducts,
    loading,
    error,
    filterByRating,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
