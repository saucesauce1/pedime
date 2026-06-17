import { useCallback, useState } from "react";
import { parseCurrency } from "../utils/parseCurrency";
import { 
    Box, 
    Text, 
    Image, 
    Button, 
    Badge, 
    Collapse, 
    VStack, 
    Flex,
    Modal,          
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useToast // <-- Importamos el sistema de notificaciones
} from "@chakra-ui/react";

const ProductCard = ({ product, setCart }) => {
    const [show, setShow] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure(); 
    const toast = useToast(); // <-- Inicializamos el Toast

    const addToCart = product => {
        setCart(cart => cart.concat(product));
        
        // <-- Configuración de la alerta visual elegante
        toast({
            title: "Añadido a la bolsa ✦",
            description: `${product.title} se ha guardado en tu pedido.`,
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
            variant: "subtle", // Un diseño suave y moderno
            colorScheme: "green"
        });
    };

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
        <>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                borderRadius="2xl"
                p={{ base: 3, md: 4 }}
                bg="white" 
                color="#121212"
                boxShadow="0 4px 14px 0 rgba(224, 212, 236, 0.3)"
                border="1px solid transparent"
                transition="all 0.3s ease"
                fontFamily="'Montserrat', sans-serif"
                _hover={{ 
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 24px 0 rgba(224, 212, 236, 0.6)", 
                    borderColor: "#E0D4EC" 
                }}
                h="100%"
            >
                <VStack align="start" spacing={3} h="100%" w="100%">
                    <Box 
                        w="100%" 
                        position="relative" 
                        overflow="hidden" 
                        borderRadius="xl" 
                        role="group"
                        cursor="zoom-in" 
                        onClick={onOpen} 
                    >
                        <Image
                            w="100%"
                            h={{ base: "200px", md: "380px" }}
                            objectFit="contain"
                            p={2}
                            alt={product.title}
                            loading="lazy"
                            src={images[currentImageIndex] || product.image}
                            transition="transform 0.3s ease"
                            _hover={{ transform: "scale(1.05)" }} 
                        />

                        {hasMultipleImages && (
                            <>
                                <Box position="absolute" top="50%" left="2" transform="translateY(-50%)" bg="whiteAlpha.800" borderRadius="full" w="30px" h="30px" display="flex" alignItems="center" justifyContent="center" cursor="pointer" opacity={{ base: 1, md: 0 }} _groupHover={{ opacity: 1 }} transition="opacity 0.2s ease" onClick={prevImage} boxShadow="sm" _hover={{ bg: "white" }}>
                                    <Text fontSize="xl" fontWeight="bold" mt="-2px">‹</Text>
                                </Box>
                                <Box position="absolute" top="50%" right="2" transform="translateY(-50%)" bg="whiteAlpha.800" borderRadius="full" w="30px" h="30px" display="flex" alignItems="center" justifyContent="center" cursor="pointer" opacity={{ base: 1, md: 0 }} _groupHover={{ opacity: 1 }} transition="opacity 0.2s ease" onClick={nextImage} boxShadow="sm" _hover={{ bg: "white" }}>
                                    <Text fontSize="xl" fontWeight="bold" mt="-2px">›</Text>
                                </Box>
                                <Flex position="absolute" bottom="3" w="100%" justify="center" gap={1.5}>
                                    {images.map((_, idx) => (
                                        <Box key={idx} w={currentImageIndex === idx ? "6px" : "4px"} h={currentImageIndex === idx ? "6px" : "4px"} bg={currentImageIndex === idx ? "white" : "whiteAlpha.600"} borderRadius="full" transition="all 0.2s ease" boxShadow="0 1px 2px rgba(0,0,0,0.3)" />
                                    ))}
                                </Flex>
                            </>
                        )}
                    </Box>

                    <VStack align="start" spacing={1} w="100%">
                        <Flex justify="space-between" w="100%" align="center" mt={1} wrap="wrap" gap={1}>
                            <Badge bg="#F4F3EF" color="gray.600" px={2} py={0.5} borderRadius="full" fontSize={{ base: "10px", md: "2xs" }} letterSpacing="wider">
                                {product.category}
                            </Badge>
                            <Text fontWeight="600" fontSize={{ base: "xs", md: "sm" }} color="#121212">
                                {parseCurrency(product.price)}
                            </Text>
                        </Flex>
                        
                        <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="700" color="#121212" lineHeight="tight" fontFamily="'Playfair Display', serif" noOfLines={2}>
                            {product.title}
                        </Text>

                        {product.description?.length > 100 ? (
                            <Box w="100%" display={{ base: "none", md: "block" }}>
                                <Collapse startingHeight={38} in={show}>
                                    <Text fontSize="xs" color="gray.500" lineHeight="tall">{product.description}</Text>
                                </Collapse>
                                <Button variant="link" color="#E8C872" size="xs" onClick={handleToggle} mt={1} fontWeight="600">
                                    Ver {show ? "menos" : "más"}
                                </Button>
                            </Box>
                        ) : (
                            <Text fontSize={{ base: "10px", md: "xs" }} color="gray.500" lineHeight="tall" display={{ base: "none", md: "block" }}>{product.description}</Text>
                        )}
                    </VStack>
                </VStack>

                <Button
                    mt={4} 
                    w="100%" 
                    borderRadius="full" 
                    size={{ base: "sm", md: "md" }} 
                    fontSize={{ base: "10px", md: "sm" }} 
                    fontWeight="600"
                    bg="#E0D4EC"
                    color="#121212"
                    transition="all 0.3s ease"
                    whiteSpace="normal" 
                    height="auto"
                    py={2}
                    _hover={{ backgroundColor: "#F3D8E5", transform: "scale(1.02)" }}
                    onClick={() => addToCart(product)}
                >
                    Añadir a la bolsa ✦
                </Button>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(8px)" />
                <ModalContent 
                    bg="white" 
                    borderRadius="2xl" 
                    overflow="hidden" 
                    w={{ base: "90%", md: "85%", lg: "900px" }} 
                    maxW="95%"
                    boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                >
                    <ModalCloseButton 
                        color={{ base: "gray.500", md: "gray.800" }} 
                        size="md" 
                        top={3} 
                        right={3} 
                        bg="whiteAlpha.800" 
                        borderRadius="full" 
                        _hover={{ bg: "gray.200", color: "#121212" }} 
                        zIndex={2}
                    />
                    <ModalBody p={0} fontFamily="'Montserrat', sans-serif">
                        <Flex direction={{ base: "column", md: "row" }}>
                            <Box 
                                w={{ base: "100%", md: "50%" }} 
                                bg="#F4F3EF" 
                                display="flex" 
                                justifyContent="center" 
                                alignItems="center"
                                p={{ base: 6, md: 10 }}
                            >
                                <Image
                                    src={images[currentImageIndex] || product.image}
                                    alt={product.title}
                                    objectFit="contain"
                                    maxH={{ base: "40vh", md: "50vh" }}
                                />
                            </Box>
                            
                            <VStack 
                                w={{ base: "100%", md: "50%" }} 
                                align="start" 
                                justify="center"
                                p={{ base: 5, md: 8, lg: 10 }} 
                                spacing={4} 
                                bg="white"
                            >
                                <Badge bg="#E0D4EC" color="#121212" px={3} py={1} borderRadius="full" fontSize="xs" letterSpacing="wider">
                                    {product.category}
                                </Badge>
                                <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight="800" color="#121212" fontFamily="'Playfair Display', serif" lineHeight="tight">
                                    {product.title}
                                </Text>
                                <Text fontWeight="600" fontSize={{ base: "lg", md: "2xl" }} color="gray.600">
                                    {parseCurrency(product.price)}
                                </Text>
                                
                                <Text fontSize="sm" color="gray.500" mt={2} noOfLines={4}>
                                    {product.description}
                                </Text>

                                <Button
                                    mt={4} 
                                    w="100%" 
                                    borderRadius="full" 
                                    size="lg" 
                                    fontSize="sm" 
                                    fontWeight="600"
                                    bg="#121212"
                                    color="white"
                                    transition="all 0.3s ease"
                                    _hover={{ backgroundColor: "#333333", transform: "scale(1.02)" }}
                                    onClick={() => {
                                        addToCart(product);
                                        onClose(); // Cierra el modal después de añadir al carrito
                                    }}
                                >
                                    Añadir a la bolsa ✦
                                </Button>
                            </VStack>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ProductCard;
