import { useEffect, useState } from 'react';

import Banner from '../../components/Banner';
import Header from '../../components/Header';
import NavMascFem from '../../components/NavMascFem';
import SearchBar from '../../components/SearchBar';
import Section from '../../components/Section';
import Footer from '../../components/Footer';

import './styles.css';
import { getProducts, setProducts } from '../../products';
import api from '../../api';

function Home() {
  useEffect(() => {
    // recupera o produtos pela api usando fetch
  }, []);
  const [product, setProduct] = useState(getProducts());
  async function getProductsApi() {
    const products = await (await api.get("/app/products"))?.data
    console.log(products)
    setProducts(products)

    setProduct(products)
  }
  useEffect(() => {
    if (!!!product.length) {
      getProductsApi()
    }
  }, [])
  console.log(product)
  return (
    product.length ?
      <div className="home-container">
        <Header />
        <SearchBar />
        <NavMascFem />
        <Banner />

        <Section titulo='Ofertas' />
        <Section titulo='Feminino' />
        <Section titulo='Masculino' />

        <Footer />
      </div> : null
  );
}

export default Home;
