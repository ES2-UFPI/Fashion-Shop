import Banner from '../../components/Banner';
import Header from '../../components/Header';
import NavMascFem from '../../components/NavMascFem';
import SearchBar from '../../components/SearchBar';
import Section from '../../components/Section';
import Footer from '../../components/Footer';

import { useEffect } from 'react';

import './styles.css';

function Home() {
  useEffect(() => {
    // recupera o produtos pela api usando fetch
  }, []);

  const dadosHome = [
    {
      id: '123',
      imagen: '',
      title: 'Título',
      preco: '100.00',
    },
    {
      id: '123',
      imagen: '',
      title: 'Título',
      preco: '100.00',
    },
    {
      id: '123',
      imagen: '',
      title: 'Título',
      preco: '100.00',
    },
    {
      id: '123',
      imagen: '',
      title: 'Título',
      preco: '100.00',
    },
  ];

  return (
    <div className="home-container">
      <Header />
      <SearchBar />
      <NavMascFem />
      <Banner />

      <Section titulo='Ofertas' />
      <Section titulo='Feminino' />
      <Section titulo='Masculino' />

      <Footer />
    </div>
  );
}

export default Home;
