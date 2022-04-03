import Banner from '../../components/Banner-home';
import Header from '../../components/Header';
import NavMascFem from '../../components/Links-home';
import SearchBar from '../../components/SearchBar';

import './styles.css';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <SearchBar />
      <NavMascFem/>
      <Banner/>
    </div>
  );
}

export default Home;
