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
                bg="linear-gradient(160deg, #1A1714 0%, #211C18 55%, #1A1714 100%)"
                mb={12}
                position="relative"
                overflow="hidden"
                fontFamily="'Montserrat', sans-serif"
                py={{ base: 16, md: 24 }}
                px={{ base: 6, md: 10 }}
            >
                {/* Textura sutil: rejilla de puntos finos, sugiere tejido sin necesitar foto */}
                <Box
                    position="absolute"
                    inset="0"
                    opacity={0.5}
                    bgImage="radial-gradient(circle, rgba(201,168,118,0.18) 1px, transparent 1px)"
                    bgSize="28px 28px"
                    pointerEvents="none"
                />

                <VStack spacing={{ base: 6, md: 7 }} position="relative" zIndex={1} maxW="900px" mx="auto">
                    <Box>
                        <Image
                            w={{ base: "84px", md: "100px" }}
                            h={{ base: "84px", md: "100px" }}
                            objectFit="cover"
                            loading="lazy"
                            borderRadius="full"
                            src="/logo.png"
                            alt="Logo Mystical Style"
                            border="1px solid"
                            borderColor="#C9A876"
                            p="3px"
                        />
                    </Box>

                    <Text
                        fontSize={{ base: "2xs", md: "xs" }}
                        fontWeight="600"
                        color="#C9A876"
                        letterSpacing="0.35em"
                        textTransform="uppercase"
                    >
                        Boutique de Colección — CDMX
                    </Text>

                    <Heading
                        as={Link}
                        href="/"
                        color="#F5F0E8"
                        fontSize={{ base: "5xl", md: "8xl" }}
                        fontWeight="700"
                        letterSpacing="-0.01em"
                        lineHeight="0.95"
                        textAlign="center"
                        fontFamily="'Playfair Display', serif"
                        _hover={{ textDecoration: "none", color: "#C9A876" }}
                        translate="no"
                        className="notranslate"
                    >
                        Mystical Style
                    </Heading>

                    {/* Línea de firma: se dibuja al cargar, gesto editorial discreto */}
                    <Box
                        as="span"
                        h="1px"
                        bg="#C9A876"
                        w={{ base: "120px", md: "180px" }}
                        sx={{
                            animation: "drawLine 1.1s ease-out 0.2s forwards",
                            transform: "scaleX(0)",
                            "@keyframes drawLine": {
                                to: { transform: "scaleX(1)" },
                            },
                            "@media (prefers-reduced-motion: reduce)": {
                                animation: "none",
                                transform: "scaleX(1)",
                            },
                        }}
                    />

                    <Text
                        color="#B8AFA3"
                        fontSize={{ base: "sm", md: "md" }}
                        fontWeight="400"
                        letterSpacing="0.02em"
                        textAlign="center"
                        maxW="480px"
                        fontStyle="italic"
                        fontFamily="'Playfair Display', serif"
                    >
                        Piezas originales de marca, seleccionadas pieza por pieza.
                    </Text>

                    <HStack flexWrap="wrap" justify="center" spacing={{ base: 3, md: 6 }} rowGap={3} pt={2}>
                        {["Calvin Klein", "Michael Kors", "Tommy Hilfiger", "Karl Lagerfeld", "Guess", "True Religion"].map((brand, i) => (
                            <HStack key={brand} spacing={{ base: 3, md: 6 }}>
                                <Text
                                    fontSize={{ base: "2xs", md: "xs" }}
                                    fontWeight="600"
                                    color="#D9CFC2"
                                    letterSpacing="0.25em"
                                    textTransform="uppercase"
                                    translate="no"
                                    className="notranslate"
                                >
                                    {brand}
                                </Text>
                                {i < 5 && (
                                    <Box
                                        as="span"
                                        w="3px"
                                        h="3px"
                                        borderRadius="full"
                                        bg="#C9A876"
                                        display={{ base: "none", md: "block" }}
                                    />
                                )}
                            </HStack>
                        ))}
                    </HStack>

                    <Divider borderColor="rgba(201,168,118,0.25)" borderWidth="1px" w="40%" opacity={0.8} pt={1} />

                    <Stack
                        direction={{ base: "column", md: "row" }}
                        spacing={{ base: 1, md: 3 }}
                        color="#8A8178"
                        fontSize={{ base: "2xs", md: "xs" }}
                        fontWeight="500"
                        letterSpacing="0.15em"
                        textTransform="uppercase"
                        align="center"
                    >
                        <Text>Envíos Nacionales Seguros</Text>
                        <Text aria-hidden="true" display={{ base: "none", md: "block" }}>·</Text>
                        <Text>Sede en CDMX</Text>
                        <Text aria-hidden="true" display={{ base: "none", md: "block" }}>·</Text>
                        <Text color="#C9A876">Autenticidad Garantizada</Text>
                    </Stack>
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
