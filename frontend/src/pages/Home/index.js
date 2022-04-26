import Banner from '../../components/Banner';
import Header from '../../components/Header';
import NavMascFem from '../../components/NavMascFem';
import SearchBar from '../../components/SearchBar';
import Section from '../../components/Section';
import Footer from '../../components/Footer';

import './styles.css';

function Home() {
  const dadosHome = [
    { 
      id:'123',
      imagen:'',
      title:'Título',
      preco:'100.00',
    },
    { 
      id:'123',
      imagen:'',
      title:'Título',
      preco:'100.00',
    },
    { 
      id:'123',
      imagen:'',
      title:'Título',
      preco:'100.00',
    },
    { 
      id:'123',
      imagen:'',
      title:'Título',
      preco:'100.00',
    },
  ]
  return (
    <div className="home-container">
      <Header />
      <SearchBar />
      <NavMascFem />
      <Banner />

      <Section title='Ofertas' dados={dadosHome}/>
      <Section title='Feminino' dados={dadosHome} />
      <Section title='Masculino' dados={dadosHome} />

      <Footer />
    </div>
  );
}

export default Home;
