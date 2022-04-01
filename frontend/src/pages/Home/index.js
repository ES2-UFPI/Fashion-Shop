import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

import './styles.css';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <SearchBar />
    </div>
  );
}

export default Home;
