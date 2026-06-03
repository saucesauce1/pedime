import { useCallback, useState } from "react";
import { parseCurrency } from "../utils/parseCurrency";
import { Box, Text, Image, Button, Badge, Collapse, VStack, Flex } from "@chakra-ui/react";

const ProductCard = ({ product, setCart }) => {
    const [show, setShow] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const addToCart = product => setCart(cart => cart.concat(product));

    const handleToggle = useCallback(() => {
        setShow(!show);
    }, [show]);

    const images = product.image ? product.image.split(',').map(img => img.trim()) : [];
    const hasMultipleImages = images.length > 1;

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            borderRadius="2xl"
            p={4} // Relleno reducido para que la imagen abarque más espacio
            bg="white" 
            color="#121212"
            boxShadow="0 4px 14px 0 rgba(224, 212, 236, 0.3)"
            border="1px solid transparent"
            transition="all 0.3s ease"
            fontFamily="'Montserrat', sans-serif" // Fuente limpia para toda la tarjeta
            _hover={{ 
                transform: "translateY(-5px)",
                boxShadow: "0 12px 24px 0 rgba(224, 212, 236, 0.6)", 
                borderColor: "#E0D4EC" 
            }}
        >
            <VStack align="start" spacing={3} h="100%">
                {/* Contenedor de la imagen con mayor altura */}
                <Box w="100%" position="relative" overflow="hidden" borderRadius="xl" role="group">
                    <Image
                        w="100%"
                        h={{ base: "320px", md: "380px" }} // Mucho más grande, es la protagonista
                        objectFit="contain" // <-- Ajuste para que la foto se vea completa
                        p={2} // <-- Respiro interno para que no pegue con los bordes
                        alt={product.title}
                        loading="lazy"
                        src={images[currentImageIndex] || product.image}
                        transition="transform 0.3s ease"
                        _hover={{ transform: "scale(1.05)" }} 
                    />

                    {hasMultipleImages && (
                        <>
                            <Box
                                position="absolute" top="50%" left="2" transform="translateY(-50%)"
                                bg="whiteAlpha.800" borderRadius="full" w="30px" h="30px"
                                display="flex" alignItems="center" justifyContent="center"
                                cursor="pointer" opacity={{ base: 1, md: 0 }}
                                _groupHover={{ opacity: 1 }} transition="opacity 0.2s ease"
                                onClick={prevImage} boxShadow="sm" _hover={{ bg: "white" }}
                            >
                                <Text fontSize="xl" fontWeight="bold" mt="-2px">‹</Text>
                            </Box>
                            <Box
                                position="absolute" top="50%" right="2" transform="translateY(-50%)"
                                bg="whiteAlpha.800" borderRadius="full" w="30px" h="30px"
                                display="flex" alignItems="center" justifyContent="center"
                                cursor="pointer" opacity={{ base: 1, md: 0 }}
                                _groupHover={{ opacity: 1 }} transition="opacity 0.2s ease"
                                onClick={nextImage} boxShadow="sm" _hover={{ bg: "white" }}
                            >
                                <Text fontSize="xl" fontWeight="bold" mt="-2px">›</Text>
                            </Box>
                            <Flex position="absolute" bottom="3" w="100%" justify="center" gap={1.5}>
                                {images.map((_, idx) => (
                                    <Box
                                        key={idx}
                                        w={currentImageIndex === idx ? "6px" : "4px"}
                                        h={currentImageIndex === idx ? "6px" : "4px"}
                                        bg={currentImageIndex === idx ? "white" : "whiteAlpha.600"}
                                        borderRadius="full"
                                        transition="all 0.2s ease"
                                        boxShadow="0 1px 2px rgba(0,0,0,0.3)"
                                    />
                                ))}
                            </Flex>
                        </>
                    )}
                </Box>

                <VStack align="start" spacing={1} w="100%">
                    {/* Fila de Categoría y Precio (Más sutiles) */}
                    <Flex justify="space-between" w="100%" align="center" mt={1}>
                        <Badge 
                            bg="#F4F3EF" color="gray.600" px={2} py={0.5} 
                            borderRadius="full" fontSize="2xs" letterSpacing="wider"
                        >
                            {product.category}
                        </Badge>
                        <Text fontWeight="600" fontSize="sm" color="#121212">
                            {parseCurrency(product.price)}
                        </Text>
                    </Flex>
                    
                    {/* Título con fuente Serif elegante */}
                    <Text 
                        fontSize="lg" 
                        fontWeight="700" 
                        color="#121212" 
                        lineHeight="tight"
                        fontFamily="'Playfair Display', serif" // El toque boutique
                    >
                        {product.title}
                    </Text>

                    {/* Descripción proporcionada */}
                    {product.description.length > 100 ? (
                        <Box w="100%">
                            <Collapse startingHeight={38} in={show}>
                                <Text fontSize="xs" color="gray.500" lineHeight="tall">{product.description}</Text>
                            </Collapse>
                            <Button
                                variant="link" color="#E8C872" size="xs"
                                onClick={handleToggle} mt={1} fontWeight="600"
                            >
                                Ver {show ? "menos" : "más"}
                            </Button>
                        </Box>
                    ) : (
                        <Text fontSize="xs" color="gray.500" lineHeight="tall">{product.description}</Text>
                    )}
                </VStack>
            </VStack>

            {/* Botón más proporcionado y menos tosco */}
            <Button
                mt={4} 
                w="100%" 
                borderRadius="full" 
                size="md" // Reducido para no competir con la imagen
                fontSize="sm"
                fontWeight="600"
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
