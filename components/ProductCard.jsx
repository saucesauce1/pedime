import { useState, useEffect } from "react";
import {
    Grid,
    GridItem,
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

const ProductsGrid = ({ products = [], setCart }) => {
    const [searchField, setSearchFields] = useState("");
    const [categories, setCategories] = useState([]);

    const onSearchChange = event => {
        setSearchFields(event.target.value);
    };

    // 1. BLINDAJE EN LA BÚSQUEDA: Si no encuentra "title", busca "Producto" o deja vacío para evitar el colapso
    const filteredProducts = products.filter(product => {
        const title = product.title || product.Producto || "";
        return title.toLowerCase().includes(searchField.toLowerCase());
    });

    // 2. BLINDAJE EN LAS CATEGORÍAS: Genera las secciones dinámicamente sin fallar
    useEffect(() => {
        const categoryList = [...new Set(products.map(product => product.category || product.Categoría || "Colección"))];
        setCategories(categoryList);
    }, [products]);

    const handleSelectCategory = () => {
        const selectBox = document.getElementById("selectBox");
        if (!selectBox || selectBox.selectedIndex === -1) return;
        const selectedValue = selectBox.options[selectBox.selectedIndex].value;
        if (selectedValue) {
            window.location.replace(`/#${selectedValue.replace(/\s/g, "").toLowerCase()}`);
        }
    };

    return (
        <Box w="100%">
            {/* Barra de Búsqueda y Filtros */}
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

            {/* Listado de Productos */}
            {categories.map(category => {
                // Filtramos los productos asegurando que la categoría empate sin arrojar errores
                const categoryProducts = filteredProducts.filter(product => 
                    (product.category || product.Categoría || "Colección") === category
                );

                // Si no hay productos en esta categoría tras usar el buscador, la ocultamos para mantener limpio el diseño
                if (categoryProducts.length === 0) return null;

                return (
                    <Box key={category} id={category.replace(/\s/g, "").toLowerCase()} mb={16}>
                        <Flex mt={8} mb={8} align="center" gap={3}>
                            <Heading 
                                as="h3" 
                                size="xl" 
                                color="#121212" 
                                fontWeight="800" 
                                letterSpacing="tight"
                                fontFamily="'Playfair Display', serif"
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
                                {categoryProducts.length}
                            </Badge>
                        </Flex>
                    
                        <Grid 
                            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} 
                            gap={{ base: 3, md: 8 }} 
                        >
                            {categoryProducts.map((product, index) => {
                                const isHero = index === 0; 
                                const isWide = index === 3 || index === 4; 

                                return (
                                    <GridItem 
                                        key={product.id || index}
                                        colSpan={{ base: isHero ? 2 : 1, md: isHero ? 2 : 1, lg: isHero || isWide ? 2 : 1 }}
                                        w="100%"
                                        minW="0" 
                                        transition="all 0.3s ease"
                                    >
                                        <ProductCard product={product} setCart={setCart} />
                                    </GridItem>
                                );
                            })}
                        </Grid>
                    </Box>
                );
            })}
        </Box>
    );
};

export default ProductsGrid;
