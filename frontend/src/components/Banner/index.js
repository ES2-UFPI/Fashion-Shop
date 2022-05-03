import BannerImage from '../BannerImage';

import './style.css';

import ProductsList from '../../products.js';

function Banner() {
    return (
        <div className='banner-container'>
            <div className='banner-container-centro'>
                <div className='banner-foto-esquerda'>
                    <BannerImage
                        id={ProductsList[0].id}
                        img={ProductsList[0].img}
                        description={ProductsList[0].description}
                        name={ProductsList[0].name}
                    />
                </div>

                <div className='banner-foto-centro'>
                    <BannerImage
                        id={ProductsList[1].id}
                        img={ProductsList[1].img}
                        description={ProductsList[1].description}
                        name={ProductsList[1].name}
                    />
                </div>

                <div className='banner-foto-direita'>
                    <BannerImage
                        id={ProductsList[2].id}
                        img={ProductsList[2].img}
                        description={ProductsList[2].description}
                        name={ProductsList[2].name}
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;
