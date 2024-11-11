'use client';
import { Box, Grid, Text } from '@chakra-ui/react';
import useGlobalContext from '@/hooks/useGlobalContext';
import ProductCard from './productCard';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';

export default function ProductsPage() {
  const context = useGlobalContext();
  const [rating, setRating] = useState('0');

  if (context) {
    const { loading, products, error, filterByRating } = context;

    if (error) return <Text color="red.500">{error}</Text>;

    const handleRatingChange = (value: string) => {
      setRating(value);
      filterByRating(Number(value));
    };

    return (
      <Box p="5">
        <Text fontSize="2xl" mb="4">
          Filter by Rating
        </Text>
        <Grid
          templateColumns={{
            sm: 'repeat(3, 1fr)',
            base: 'repeat(1, 1fr)',
            md: 'repeat(6, 1fr)',
          }}
          gap="2"
          mb="5"
        >
          {['0', '1', '2', '3', '4', '5'].map((rate) => (
            <Button
              key={rate}
              colorScheme={rating === rate ? 'blue' : 'gray'}
              variant={rating === rate ? 'solid' : 'outline'}
              onClick={() => handleRatingChange(rate)}
              width="100%"
            >
              {rate} Stars
            </Button>
          ))}
        </Grid>
        <Text mt="2">Minimum Rating: {rating}</Text>
        <Text mt="2">Product Found: {products?.length}</Text>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          gap="5"
          mt="5"
        >
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ProductCard key={index} isLoading={true} />
              ))
            : products?.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isLoading={false}
                />
              ))}
        </Grid>
      </Box>
    );
  } else {
    return <Text>Error: Context not available</Text>;
  }
}
