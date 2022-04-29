import './style.css';

import ProductsList from '../../products.js';

function Banner() {
    return (
        <div className='banner-container'>
            <div className='banner-container-centro'>
                <div className='banner-foto-esquerda'>
                    <img src={ProductsList[0].img} alt={ProductsList[0].description} />
                    <div>
                        <span>{ProductsList[0].name}</span>
                    </div>
                </div>

                <div className='banner-foto-centro'>
                    <img src={ProductsList[1].img} alt={ProductsList[2].description} />
                    <div>
                        <span>{ProductsList[1].name}</span>
                    </div>
                </div>

                <div className='banner-foto-direita'>
                    <img src={ProductsList[2].img} alt={ProductsList[2].description} />
                    <div>
                        <span>{ProductsList[2].name}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
