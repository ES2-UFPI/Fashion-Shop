import BarraPesquisa from '../componentes/BarraPesquisa';
import Header from '../componentes/Header';
import './Home.css';

function Home() {
    return (
      <div className="home-container">
        <Header/>
        <BarraPesquisa/>
      </div>
    );
  }
  
  export default Home;