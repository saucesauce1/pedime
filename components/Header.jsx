import { Text, Image, Heading, VStack, HStack, Stack, Link, Box, Divider, Icon } from "@chakra-ui/react";

const WhatsAppIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.031 0C5.385 0 0 5.388 0 12.035c0 2.127.553 4.204 1.602 6.035L.05 24l6.096-1.597A11.96 11.96 0 0012.03 24c6.645 0 12.031-5.387 12.031-12.035S18.676 0 12.031 0zm0 21.996c-1.802 0-3.567-.484-5.114-1.401l-.367-.217-3.805.997 1.018-3.71-.238-.379a9.96 9.96 0 01-1.528-5.251c0-5.529 4.5-10.029 10.034-10.029 5.534 0 10.034 4.5 10.034 10.029 0 5.53-4.5 10.034-10.034 10.034z"/>
    <path d="M17.498 14.618c-.301-.15-1.786-.882-2.063-.983-.277-.101-.478-.15-.679.15-.201.301-.78 .983-.956 1.184-.176.201-.352.226-.653.076-.301-.15-1.274-.47-2.428-1.5-.898-.801-1.504-1.79-1.68-2.091-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.1-.201.05-.376-.025-.527-.075-.15-.679-1.637-.931-2.24-.246-.588-.496-.508-.679-.517-.176-.008-.377-.008-.578-.008-.201 0-.527.075-.803.376-.276.301-1.054 1.031-1.054 2.515 0 1.484 1.079 2.918 1.23 3.119.15.201 2.127 3.245 5.152 4.549.719.311 1.28.497 1.717.636.722.23 1.38.197 1.897.12.58-.086 1.786-.731 2.037-1.437.251-.706.251-1.311.176-1.437-.076-.126-.277-.201-.578-.352z"/>
  </Icon>
);

const Header = () => {
    return (
        <>
            <Box
                w="100%"
                bg="white"
                borderRadius="3xl"
                p={{ base: 6, md: 10 }}
                boxShadow="0 10px 40px -10px rgba(224, 212, 236, 0.6)"
                mb={12}
                mt="80px"
                border="1px solid"
                borderColor="gray.100"
                position="relative"
            >
                <VStack spacing={{ base: 4, md: 5 }}>
                    <Box mt="-100px">
                        <Image
                            w="150px"
                            h="150px"
                            objectFit="cover"
                            loading="lazy"
                            borderRadius="full"
                            src="/logo.png"
                            alt="Logo Mystical Style"
                            border="4px solid white"
                            boxShadow="md"
                            bg="white"
                        />
                    </Box>

                    {/* Ajuste de tamaño de fuente para móviles (4xl) y escritorio (5xl) */}
                    <Heading
                        as={Link}
                        href="/"
                        color="#121212"
                        fontSize={{ base: "4xl", md: "5xl" }}
                        fontWeight="bold"
                        letterSpacing="tight"
                        textAlign="center"
                        _hover={{ textDecoration: "none", color: "#E8C872" }}
                        translate="no"
                        className="notranslate"
                    >
                        Mystical Style
                    </Heading>

                    <Divider borderColor="#E0D4EC" borderWidth="1px" w="60%" opacity={0.8} />

                    <HStack flexWrap="wrap" justify="center" spacing={{ base: 3, md: 6 }}>
                        {["Guess", "Adidas", "True Religion", "DKNY"].map((brand) => (
                            <Text
                                key={brand}
                                fontSize={{ base: "xs", md: "sm" }}
                                fontWeight="800"
                                color="gray.600"
                                letterSpacing="0.2em"
                                textTransform="uppercase"
                                translate="no"
                                className="notranslate"
                            >
                                {brand}
                            </Text>
                        ))}
                    </HStack>

                    {/* Stack cambia automáticamente a columna en móvil y fila en escritorio */}
                    <Stack 
                        direction={{ base: "column", md: "row" }}
                        spacing={{ base: 1, md: 2 }} 
                        mt={2} 
                        color="gray.500" 
                        fontSize={{ base: "xs", md: "md" }} 
                        fontWeight="500" 
                        letterSpacing="wide"
                        align="center"
                    >
                        <Text>Envíos Nacionales Seguros</Text>
                        <Text aria-hidden="true" display={{ base: "none", md: "block" }}>•</Text>
                        <Text>Sede en CDMX</Text>
                    </Stack>
                    
                    {/* Caja estilizada para permitir que el texto fluya en móviles */}
                    <Box
                        bg="#F3D8E5"
                        color="#121212"
                        px={{ base: 4, md: 8 }}
                        py={{ base: 2, md: 3 }}
                        borderRadius={{ base: "xl", md: "full" }}
                        fontSize={{ base: "xs", md: "md" }}
                        fontWeight="600"
                        mt={{ base: 2, md: 4 }}
                        letterSpacing="wide"
                        textAlign="center"
                        display="inline-block"
                        w={{ base: "100%", md: "auto" }}
                    >
                        ✦ Autenticidad Garantizada — Colección Limitada ✦
                    </Box>
                </VStack>
            </Box>

            <Link href="https://wa.me/16782169101?text=Hola%20%E2%9C%A6%20Estoy%20navegando%20en%20su%20cat%C3%A1logo%20y%20me%20interesa%20conocer%20m%C3%A1s%20detalles%20y%20tallas%20disponibles%20sobre%3A" isExternal _hover={{ textDecoration: "none" }}>
                <Box
                    position="fixed"
                    bottom={{ base: "100px", md: "130px" }}
                    right={{ base: "4", md: "10" }}
                    zIndex="sticky"
                    bg="#25D366"
                    w={{ base: "55px", md: "65px" }}
                    h={{ base: "55px", md: "65px" }}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="0 10px 25px rgba(37, 211, 102, 0.4)"
                    transition="all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                    _hover={{ transform: "scale(1.15)", boxShadow: "0 15px 35px rgba(37, 211, 102, 0.6)" }}
                >
                    <WhatsAppIcon w={8} h={8} color="white" />
                </Box>
            </Link>
        </>
    );
};

export default Header;
