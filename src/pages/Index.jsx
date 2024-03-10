import React from "react";
import { Box, Flex, Heading, Text, Image, Button, VStack, StackDivider, useColorModeValue } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";

const Index = () => {
  const product = {
    title: "Amazing Product",
    description: "This is a brief description of an amazing product that you can purchase.",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0fGVufDB8fHx8MTcxMDExNDY4OHww&ixlib=rb-4.0.3&q=80&w=1080", // This will be replaced with an actual image URL
    price: "$49.99",
  };

  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" bg={bgColor} p={5}>
      <VStack spacing={4} align="stretch" divider={<StackDivider borderColor="gray.200" />} w="100%" maxW="lg" p={5} boxShadow="lg" bg="white" borderRadius="lg">
        <Box p={5}>
          <Heading size="lg">{product.title}</Heading>
          <Text mt={2}>{product.description}</Text>
        </Box>
        <Box>
          <Image borderRadius="lg" src={product.imageUrl} alt={product.title} />
        </Box>
        <Flex justify="space-between" align="center" p={5}>
          <Heading size="md">{product.price}</Heading>
          <Button leftIcon={<FaCartPlus />} colorScheme="teal" size="lg">
            Add to Cart
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Index;
