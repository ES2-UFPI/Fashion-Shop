import Banner from '../../components/Banner-home';
import Header from '../../components/Header';
import NavMascFem from '../../components/Links-home';
import SearchBar from '../../components/SearchBar';
import Section from '../../components/section';

import './styles.css';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <SearchBar />
      <NavMascFem/>
      <Banner/>
      <Section title='OFERTAS'/>
      <Section title='FEMININO'/>
      <Section title='MASCULINO'/>
    </div>
  );
}

export default Home;
