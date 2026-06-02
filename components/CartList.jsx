import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Box,
    Text,
    VStack,
    HStack,
    Flex,
    Image,
    Badge,
    Heading,
    useDisclosure,
    CloseButton,
    Icon
} from "@chakra-ui/react";
import { parseCurrency } from "../utils/parseCurrency"; 

// Ícono de WhatsApp para el botón final
const WhatsAppIcon = (props) => (
    <Icon viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.031 0C5.385 0 0 5.388 0 12.035c0 2.127.553 4.204 1.602 6.035L.05 24l6.096-1.597A11.96 11.96 0 0012.03 24c6.645 0 12.031-5.387 12.031-12.035S18.676 0 12.031 0zm0 21.996c-1.802 0-3.567-.484-5.114-1.401l-.367-.217-3.805.997 1.018-3.71-.238-.379a9.96 9.96 0 01-1.528-5.251c0-5.529 4.5-10.029 10.034-10.029 5.534 0 10.034 4.5 10.034 10.029 0 5.53-4.5 10.034-10.034 10.034z"/>
      <path d="M17.498 14.618c-.301-.15-1.786-.882-2.063-.983-.277-.101-.478-.15-.679.15-.201.301-.78 .983-.956 1.184-.176.201-.352.226-.653.076-.301-.15-1.274-.47-2.428-1.5-.898-.801-1.504-1.79-1.68-2.091-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.1-.201.05-.376-.025-.527-.075-.15-.679-1.637-.931-2.24-.246-.588-.496-.508-.679-.517-.176-.008-.377-.008-.578-.008-.201 0-.527.075-.803.376-.276.301-1.054 1.031-1.054 2.515 0 1.484 1.079 2.918 1.23 3.119.15.201 2.127 3.245 5.152 4.549.719.311 1.28.497 1.717.636.722.23 1.38.197 1.897.12.58-.086 1.786-.731 2.037-1.437.251-.706.251-1.311.176-1.437-.076-.126-.277-.201-.578-.352z"/>
    </Icon>
);

const CartList = ({ cart, setCart }) => { 
    const { isOpen, onOpen, onClose } = useDisclosure();

    const total = cart.reduce((acc, item) => acc + item.price, 0);

    const handleRemoveItem = (indexToRemove) => {
        setCart(prevCart => prevCart.filter((_, index) => index !== indexToRemove));
    };

    // Lógica para enviar el carrito a WhatsApp
    const handleWhatsAppCheckout = () => {
        const phoneNumber = "16782169101";
        
        let message = "Hola *Mystical Style* ✦\nQuiero confirmar el siguiente pedido:\n\n";
        
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.title} - ${parseCurrency(item.price)}\n`;
        });
        
        message += `\n*Total a pagar: ${parseCurrency(total)}*`;
        
        // Codificamos el texto para que la URL lo lea correctamente (respeta espacios y saltos de línea)
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, "_blank");
    };

    if (cart.length === 0) return null;

    return (
        <>
            <Box position="fixed" bottom={{ base: "6", md: "10" }} right={{ base: "4", md: "10" }} zIndex="sticky">
                <Button
                    onClick={onOpen}
                    size="lg"
                    borderRadius="full"
                    bg="#121212"
                    color="white"
                    boxShadow="0 10px 30px rgba(224, 212, 236, 0.8)"
                    px={8}
                    py={8}
                    _hover={{ transform: "translateY(-5px)", bg: "#2a2a2a", boxShadow: "0 15px 35px rgba(224, 212, 236, 1)" }}
                    transition="all 0.3s ease"
                >
                    <HStack spacing={3}>
                        <Text fontWeight="800" fontSize="lg">Bolsa ({cart.length})</Text>
                        <Text color="#E8C872" fontSize="xl">✦</Text>
                        <Text fontWeight="bold">{parseCurrency(total)}</Text>
                    </HStack>
                </Button>
            </Box>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
                <DrawerOverlay backdropFilter="blur(6px)" bg="rgba(18, 18, 18, 0.4)" />
                
                <DrawerContent borderTopLeftRadius="3xl" borderBottomLeftRadius="3xl" bg="#F4F3EF" p={2}>
                    <DrawerCloseButton mt={6} mr={6} borderRadius="full" bg="white" boxShadow="sm" _hover={{ bg: "#F3D8E5" }} />
                    
                    <DrawerHeader mt={4} borderBottomWidth="1px" borderColor="gray.200" pb={6}>
                        <Heading fontSize="3xl" color="#121212" letterSpacing="tight">
                            Tu Bolsa ✦
                        </Heading>
                    </DrawerHeader>

                    <DrawerBody mt={4}>
                        <VStack spacing={4}>
                            {cart.map((item, index) => (
                                <Flex 
                                    key={index} 
                                    w="100%" 
                                    bg="white" 
                                    p={3} 
                                    borderRadius="2xl" 
                                    boxShadow="sm" 
                                    align="center" 
                                    gap={4}
                                >
                                    <Box overflow="hidden" borderRadius="xl">
                                        <Image src={item.image} w="70px" h="70px" objectFit="cover" alt={item.title} />
                                    </Box>
                                    <Box flex="1">
                                        <Text fontWeight="bold" fontSize="md" color="#121212" noOfLines={1}>
                                            {item.title}
                                        </Text>
                                        <Badge bg="#E0D4EC" color="#121212" borderRadius="full" fontSize="2xs" mt={1} px={2}>
                                            {item.category}
                                        </Badge>
                                    </Box>
                                    <Text fontWeight="900" color="#121212">
                                        {parseCurrency(item.price)}
                                    </Text>
                                    <CloseButton 
                                        size="sm" 
                                        color="gray.400" 
                                        _hover={{ color: "red.500", bg: "red.50", transform: "scale(1.1)" }}
                                        transition="all 0.2s"
                                        onClick={() => handleRemoveItem(index)}
                                    />
                                </Flex>
                            ))}
                        </VStack>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth="1px" borderColor="gray.200" flexDirection="column" gap={6} pb={8} pt={6}>
                        <Flex w="100%" justify="space-between" align="center">
                            <Text fontSize="lg" fontWeight="bold" color="gray.500">Total a pagar:</Text>
                            <Text fontSize="3xl" fontWeight="900" color="#121212">{parseCurrency(total)}</Text>
                        </Flex>
                        
                        <HStack w="100%" spacing={4}>
                            <Button 
                                variant="outline" 
                                borderRadius="full" 
                                size="lg" 
                                flex="1" 
                                onClick={onClose} 
                                borderColor="#E0D4EC" 
                                color="gray.600"
                                _hover={{ bg: "#F3D8E5", borderColor: "#F3D8E5" }}
                            >
                                Seguir viendo
                            </Button>
                            
                            {/* Botón de Confirmación con la lógica de WhatsApp inyectada */}
                            <Button 
                                borderRadius="full" 
                                size="lg" 
                                flex="1" 
                                bg="#121212" 
                                color="white" 
                                leftIcon={<WhatsAppIcon w={5} h={5} />}
                                onClick={handleWhatsAppCheckout}
                                _hover={{ 
                                    bg: "#25D366", 
                                    transform: "scale(1.02)",
                                    boxShadow: "0 10px 20px rgba(37, 211, 102, 0.3)" 
                                }} 
                                transition="all 0.3s"
                            >
                                Confirmar
                            </Button>
                        </HStack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default CartList;