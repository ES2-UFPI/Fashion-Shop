import Banner from '../../components/Banner';
import Header from '../../components/Header';
import NavMascFem from '../../components/NavMascFem';
import SearchBar from '../../components/SearchBar';
import Section from '../../components/section';
import Footer from '../../components/Footer';

import './styles.css';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <SearchBar />
      <NavMascFem />
      <Banner />

      <Section title='Ofertas' />
      <Section title='Feminino' />
      <Section title='Masculino' />

      <Footer />
    </div>
  );
}

export default Home;
