import Banner from '../../components/Banner';
import Header from '../../components/Header';
import NavMascFem from '../../components/NavMascFem';
import SearchBar from '../../components/SearchBar';

import './styles.css';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <SearchBar />
      <NavMascFem />
      <Banner />
    </div>
  );
}

export default Home;
