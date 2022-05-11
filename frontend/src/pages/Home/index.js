import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getProducts, setProducts } from '../../products';
import api from '../../api';

import Banner from '../../components/Banner';
import Header from '../../components/Header';
import NavMascFem from '../../components/NavMascFem';
import SearchBar from '../../components/SearchBar';
import Section from '../../components/Section';
import Footer from '../../components/Footer';

import './styles.css';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (api.defaults.headers['authorization'] === undefined)
      navigate('/registrar');
  }, [navigate]);

  const [product, setProduct] = useState(getProducts());

  async function getProductsApi() {
    const products = await (await api.get("/app/products"))?.data;

    setProducts(products);
    setProduct(products);
  }

  useEffect(() => {
    if (!!!product.length) {
      getProductsApi();
    }
  }, [product.length]);

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
