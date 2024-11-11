'use client';
import { Box, Image, Text, Skeleton } from '@chakra-ui/react';
import { Product } from '../../context/ProductContext';
import { useState } from 'react';

type ProductCardProps = {
  product?: Product;
  isLoading: boolean;
};

const ProductCard = ({ product, isLoading = false }: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="5">
      {isLoading ? (
        <>
          <Skeleton height="300px" mb="4" />
          <Skeleton height="20px" mb="4" />
          <Skeleton height="20px" mb="4" width="80%" />
          <Skeleton height="20px" mb="4" width="40%" />
        </>
      ) : (
        <>
          <Skeleton loading={!imageLoaded} height="300px" mb="4">
            <Image
              src={product?.thumbnail}
              alt={product?.title}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
            />
          </Skeleton>

          <Text fontSize="xl" fontWeight="bold">
            {product?.title}
          </Text>
          <Text>{product?.description}</Text>
          <Text>Price: ${product?.price}</Text>
          <Text>Rating: {product?.rating}</Text>
        </>
      )}
    </Box>
  );
};
export default ProductCard;
