// components/ProductCard.tsx
import { Box, Image, Text } from '@chakra-ui/react';
import { Product } from '../../context/ProductContext';

type ProductCardProps = {
  product: Product;
};

 const ProductCard = ({ product }: ProductCardProps) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="5">
    <Image src={product.thumbnail} alt={product.title} />
    <Text fontSize="xl" fontWeight="bold">{product.title}</Text>
    <Text>{product.description}</Text>
    <Text>Price: ${product.price}</Text>
    <Text>Rating: {product.rating}</Text>
  </Box>
);
export default ProductCard;