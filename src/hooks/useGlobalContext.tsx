"use client";

import { useContext } from 'react';
import { ProductContext } from '@/context/ProductContext';

const useGlobalContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a ProductProvider');
  }
  return context;
};

export default useGlobalContext;
