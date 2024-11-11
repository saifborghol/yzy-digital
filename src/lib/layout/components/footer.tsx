import { Flex, Link, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        {new Date().getFullYear()} -{' '}
        <Link href="saifborghol.vercel.app" target="_blank" rel="noopener noreferrer">
          saifborghol.vercel.app
        </Link>
      </Text>
    </Flex>
  );
};
