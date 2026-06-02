import { useState } from "react";
import Head from "next/head";
import api from "../api";
import CartList from "../components/CartList";
import Header from "../components/Header";
import ProductsGrid from "../components/ProductsGrid";
import Footer from "../components/Footer"; // <-- 1. Importamos el Footer

const Home = ({ products }) => {
    const [cart, setCart] = useState([]);

    return (
        <>
            <Head>
                {/* 2. Actualizamos el título de la pestaña del navegador */}
                <title>Mystical Style</title> 
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Boutique exclusiva de alta gama. Envíos seguros a todo México."></meta>
            </Head>

            <Header />
            <ProductsGrid products={products} setCart={setCart} />
            <CartList cart={cart} setCart={setCart} />
            
            {/* 3. Colocamos el Footer al final de la página */}
            <Footer /> 
        </>
    );
};

export const getStaticProps = async () => {
    const products = await api.list();

    return {
        revalidate: 10,
        props: {
            products,
        },
    };
};

export default Home;