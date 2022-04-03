import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import NavMascFem from '../../components/NavMascFem';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

import './styles.css';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <SearchBar />
      <NavMascFem />
      <Banner />

      <Footer />
    </div>
  );
}

export default Home;
