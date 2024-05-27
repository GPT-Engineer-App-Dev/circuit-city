import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <RouterLink to="/">ElectroShop</RouterLink>
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2} mx={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/products" p={2} mx={2}>
            Products
          </Link>
          <Link as={RouterLink} to="/about" p={2} mx={2}>
            About Us
          </Link>
          <Link as={RouterLink} to="/contact" p={2} mx={2}>
            Contact Us
          </Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>
          Welcome to ElectroShop
        </Heading>
        <Text fontSize="xl" mb={6}>
          Your one-stop shop for the latest electronics
        </Text>
        <Image src="/images/hero-banner.jpg" alt="Promotional Banner" mx="auto" />
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={10}>
        <Heading as="h3" size="xl" textAlign="center" mb={8}>
          Featured Products
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/product1.jpg" alt="Product 1" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>
                Product 1
              </Heading>
              <Text>$299.99</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/product2.jpg" alt="Product 2" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>
                Product 2
              </Heading>
              <Text>$399.99</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/product3.jpg" alt="Product 3" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>
                Product 3
              </Heading>
              <Text>$499.99</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10} textAlign="center">
        <VStack spacing={4}>
          <Text>Follow Us</Text>
          <Flex>
            <Link href="https://facebook.com" isExternal mx={2}>
              <FaFacebook size="24px" />
            </Link>
            <Link href="https://twitter.com" isExternal mx={2}>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://instagram.com" isExternal mx={2}>
              <FaInstagram size="24px" />
            </Link>
          </Flex>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;