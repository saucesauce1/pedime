import { useCallback, useState } from "react";
import { parseCurrency } from "../utils/parseCurrency";
import { Box, Text, Image, Button, Badge, Collapse, VStack, Flex } from "@chakra-ui/react";

const ProductCard = ({ product, setCart }) => {
    const [show, setShow] = useState(false);
    const addToCart = product => setCart(cart => cart.concat(product));

    const handleToggle = useCallback(() => {
        setShow(!show);
    }, [show]);

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            borderRadius="2xl" // Bordes curvos premium
            p={5}
            bg="white" 
            color="#121212"
            boxShadow="0 4px 14px 0 rgba(224, 212, 236, 0.3)" // Sombra lila muy sutil
            border="1px solid transparent"
            transition="all 0.3s ease"
            _hover={{ 
                transform: "translateY(-5px)", // La tarjeta "flota" al pasar el mouse
                boxShadow: "0 12px 24px 0 rgba(224, 212, 236, 0.6)", 
                borderColor: "#E0D4EC" 
            }}
        >
            <VStack align="start" spacing={4} h="100%">
                {/* Contenedor de la imagen con efecto zoom */}
                <Box w="100%" overflow="hidden" borderRadius="xl">
                    <Image
                        w="100%"
                        h="250px" // Alto fijo para que todas las tarjetas midan lo mismo
                        objectFit="cover" // Evita que las imágenes se deformen
                        alt={product.title}
                        loading="lazy"
                        src={product.image}
                        transition="transform 0.3s ease"
                        _hover={{ transform: "scale(1.05)" }} 
                    />
                </Box>

                <VStack align="start" spacing={2} w="100%">
                    {/* Fila superior: Categoría y Precio */}
                    <Flex justify="space-between" w="100%" align="center">
                        <Badge 
                            bg="#F4F3EF" 
                            color="gray.600" 
                            px={3} 
                            py={1} 
                            borderRadius="full" 
                            fontSize="xs"
                            letterSpacing="wider"
                        >
                            {product.category}
                        </Badge>
                        <Text fontWeight="bold" fontSize="lg" color="#121212">
                            {parseCurrency(product.price)}
                        </Text>
                    </Flex>
                    
                    {/* Título de la prenda */}
                    <Text fontSize="xl" fontWeight="800" color="#121212" lineHeight="tight">
                        {product.title}
                    </Text>

                    {/* Descripción con tipografía limpia */}
                    {product.description.length > 100 ? (
                        <Box w="100%">
                            <Collapse startingHeight={40} in={show}>
                                <Text fontSize="sm" color="gray.500" lineHeight="tall">{product.description}</Text>
                            </Collapse>
                            <Button
                                variant="link"
                                color="#E8C872" // Dorado sutil
                                size="sm"
                                onClick={handleToggle}
                                mt={2}
                                fontWeight="600"
                            >
                                Ver {show ? "menos" : "más"}
                            </Button>
                        </Box>
                    ) : (
                        <Text fontSize="sm" color="gray.500" lineHeight="tall">{product.description}</Text>
                    )}
                </VStack>
            </VStack>

            {/* Botón premium de acción */}
            <Button
                mt={6}
                w="100%" // Botón de lado a lado
                borderRadius="full" // Estilo píldora
                size="lg"
                fontSize="md"
                fontWeight="bold"
                bg="#E0D4EC"
                color="#121212"
                transition="all 0.3s ease"
                _hover={{ backgroundColor: "#F3D8E5", transform: "scale(1.02)" }}
                onClick={() => addToCart(product)}
            >
                Añadir a la bolsa ✦
            </Button>
        </Box>
    );
};

export default ProductCard;