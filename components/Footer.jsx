import { Box, VStack, HStack, Text, Divider, Link, Icon } from "@chakra-ui/react";

// El ícono de Instagram listo para usarse
const InstagramIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </Icon>
);

const Footer = () => {
    return (
        <Box
            w="100%"
            bg="white"
            borderRadius="3xl"
            p={{ base: 6, md: 10 }}
            boxShadow="0 10px 40px -10px rgba(224, 212, 236, 0.6)"
            mt={12}
            mb={24} /* Margen inferior para que no choque con el botón de WhatsApp flotante */
            border="1px solid"
            borderColor="gray.100"
            textAlign="center"
            fontFamily="'Montserrat', sans-serif" // <-- Fuente base inyectada en todo el bloque
        >
            <VStack spacing={6}>
                {/* Enlaces de políticas */}
                <HStack spacing={{ base: 4, md: 8 }} flexWrap="wrap" justify="center" fontSize="sm" color="gray.600" fontWeight="500">
                    <Link _hover={{ color: "#E8C872" }}>Políticas de Devolución</Link>
                    <Text color="gray.300">•</Text>
                    <Link _hover={{ color: "#E8C872" }}>Aviso de Privacidad</Link>
                    <Text color="gray.300" display={{ base: "none", md: "block" }}>•</Text>
                    <Link _hover={{ color: "#E8C872" }}>Términos y Condiciones</Link>
                </HStack>

                <Divider borderColor="gray.200" w="80%" />

                {/* Sección de Pagos */}
                <VStack spacing={2}>
                    <HStack>
                        <Text 
                            fontSize={{ base: "md", md: "lg" }} 
                            fontWeight="800" 
                            color="#121212" 
                            letterSpacing="wide"
                            fontFamily="'Playfair Display', serif" // <-- Fuente premium para el título
                        >
                            🛡️ PAGO SEGURO AL CONFIRMAR TU PEDIDO
                        </Text>
                    </HStack>
                    <Text fontSize="xs" color="gray.500" fontWeight="500">
                        Manda tu carrito por WhatsApp y elige cómo pagar. Aceptamos todas las formas de pago.
                    </Text>
                </VStack>

                <HStack spacing={3} flexWrap="wrap" justify="center">
                    {["EFECTIVO", "TRANSFERENCIA", "TARJETAS", "MESES SIN INTERESES"].map((method) => (
                        <Box 
                            key={method} 
                            px={4} 
                            py={1.5} 
                            border="1px solid" 
                            borderColor="gray.200" 
                            borderRadius="full" // <-- Bordes más redondeados para seguir el estilo
                            fontSize="xs" 
                            fontWeight="600" 
                            color="gray.600"
                            letterSpacing="wider"
                        >
                            {method}
                        </Box>
                    ))}
                </HStack>

                {/* NUEVA SECCIÓN DE REDES SOCIALES */}
                <VStack spacing={3} mt={6} mb={2}>
                    <Text 
                        fontSize="xs" 
                        fontWeight="800" 
                        color="gray.400" 
                        letterSpacing="0.1em"
                        fontFamily="'Playfair Display', serif" // <-- Toque editorial aquí también
                    >
                        SÍGUENOS EN NUESTRAS REDES
                    </Text>
                    <Link href="https://www.instagram.com/mystical_sty" isExternal _hover={{ textDecoration: "none" }}>
                        <Box
                            bgGradient="linear(to-tr, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"
                            w="45px"
                            h="45px"
                            borderRadius="full"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            transition="all 0.3s ease"
                            _hover={{ transform: "scale(1.1)", boxShadow: "0 8px 20px rgba(220, 39, 67, 0.3)" }}
                        >
                            <InstagramIcon w={5} h={5} color="white" />
                        </Box>
                    </Link>
                </VStack>

                {/* Copyright */}
                <Text fontSize="xs" color="gray.400" mt={4} fontWeight="500">
                    © 2026 Mystical Style. Todos los derechos reservados.
                </Text>
            </VStack>
        </Box>
    );
};

export default Footer;
