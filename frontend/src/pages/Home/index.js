import Banner from '../../components/Banner/index';
import Header from '../../components/Header/index';
import NavMascFem from '../../components/NavMascFem/index';
import SearchBar from '../../components/SearchBar/index';
import Section from '../../components/section/index';
import Footer from '../../components/Footer/index';

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
