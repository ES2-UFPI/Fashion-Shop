import './style.css';
import { Link } from 'react-router-dom';

function NavMascFem(){
    return(
        <div className='nav-home-container'>
            <ul>
                <li><Link to='/masculino'>MASCULINO</Link></li>
                <li><Link to='/feminino'>FEMININO</Link></li>
            </ul>
        </div>
    );
}

export default NavMascFem;