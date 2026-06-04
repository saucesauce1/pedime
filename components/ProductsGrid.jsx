import { useState, useEffect } from "react";
import {
    Grid,        // <-- Cambiamos SimpleGrid por Grid avanzado
    GridItem,    // <-- Para controlar el espacio de cada tarjeta
    Box,
    Input,
    InputGroup,
    InputLeftElement,
    Select,
    Heading,
    Flex,
    Badge
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ProductCard from "./ProductCard";

const ProductsGrid = ({ products, setCart }) => {
    const [searchField, setSearchFields] = useState("");
    const [categories, setCategories] = useState([]);

    const onSearchChange = event => {
        setSearchFields(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchField.toLowerCase())
    );

    useEffect(() => {
        const categoryList = [...new Set(products.map(product => product.category))];
        setCategories(categoryList);
    }, [products]);

    const handleSelectCategory = () => {
        const selectBox = document.getElementById("selectBox");
        const selectedValue = selectBox.options[selectBox.selectedIndex].value;
        window.location.replace(`/#${selectedValue.replace(/\s/g, "").toLowerCase()}`);
    };

    return (
        <Box w="100%">
            {/* Barra de Búsqueda y Filtros con diseño premium */}
            <Flex 
                direction={{ base: "column", md: "row" }} 
                gap={4} 
                mb={10} 
                w="100%"
            >
                <InputGroup flex="1" size="lg">
                    <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="#E8C872" />}
                    />
                    <Input
                        aria-label="Buscar producto"
                        type="text"
                        placeholder="Buscar en la colección..."
                        onChange={onSearchChange}
                        bg="white"
                        color="#121212"
                        borderRadius="full"
                        border="1px solid"
                        borderColor="gray.200"
                        boxShadow="sm"
                        fontSize="md"
                        _placeholder={{ color: "gray.400" }}
                        _hover={{ borderColor: "#E0D4EC", boxShadow: "md" }}
                        _focus={{ borderColor: "#E8C872", boxShadow: "0 0 0 1px #E8C872" }}
                    />
                </InputGroup>

                <Select
                    size="lg"
                    placeholder="Todas las categorías"
                    bg="white"
                    color="#121212"
                    borderRadius="full"
                    border="1px solid"
                    borderColor="gray.200"
                    boxShadow="sm"
                    w={{ base: "100%", md: "280px" }}
                    onChange={() => handleSelectCategory()}
                    id="selectBox"
                    fontSize="md"
                    _hover={{ borderColor: "#E0D4EC", boxShadow: "md" }}
                    _focus={{ borderColor: "#E8C872", boxShadow: "0 0 0 1px #E8C872" }}
                >
                    {categories.map(category => (
                        <option
                            key={category}
                            value={category}
                            style={{ backgroundColor: "white", color: "#121212" }}
                        >
                            {category}
                        </option>
                    ))}
                </Select>
            </Flex>

            {/* Listado de Productos por Categoría con Layout Asimétrico */}
            {categories.map(category => (
                <Box key={category} id={category.replace(/\s/g, "").toLowerCase()} mb={16}>
                    {!!filteredProducts.filter(product => product.category === category).length && (
                        <Flex mt={8} mb={8} align="center" gap={3}>
                            <Heading 
                                as="h3" 
                                size="xl" 
                                color="#121212" 
                                fontWeight="800" 
                                letterSpacing="tight"
                                fontFamily="'Playfair Display', serif" // <-- Toque editorial en el título
                            >
                                {category}
                            </Heading>
                            <Badge 
                                bg="#E0D4EC" 
                                color="#121212" 
                                borderRadius="full" 
                                px={3} 
                                py={1} 
                                fontSize="sm"
                                textTransform="none"
                            >
                                {filteredProducts.filter(product => product.category === category).length}
                            </Badge>
                        </Flex>
                    )}
                    
                    {/* El nuevo Grid Asimétrico (Bento Box) */}
                    <Grid 
                        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} 
                        gap={{ base: 6, md: 8 }}
                    >
                        {filteredProducts
                            .filter(product => product.category === category)
                            .map((product, index) => {
                                // Lógica de asimetría: rompiendo el estándar
                                const isHero = index === 0; // El primer producto destaca
                                const isWide = index === 3 || index === 4; // Rompemos la monotonía más adelante

                                return (
                                    <GridItem 
                                        key={product.id || index}
                                        // En celular es 1 col. En PC/Tablet el héroe y los wide toman 2 columnas
                                        colSpan={{ base: 1, md: isHero ? 2 : 1, lg: isHero || isWide ? 2 : 1 }}
                                        w="100%"
                                        transition="all 0.3s ease"
                                    >
                                        <ProductCard product={product} setCart={setCart} />
                                    </GridItem>
                                );
                            })}
                    </Grid>
                </Box>
            ))}
        </Box>
    );
};

export default ProductsGrid;
