import BannerImage from '../BannerImage';

import './style.css';

import { getProducts } from '../../products.js';

function Banner() {
    return (
        <div className='banner-container'>
            <div className='banner-container-centro'>
                <div className='banner-foto-esquerda'>
                    <BannerImage
                        id={getProducts()[0].id}
                        img={getProducts()[0].img}
                        description={getProducts()[0].description}
                        name={getProducts()[0].name}
                    />
                </div>

                <div className='banner-foto-centro'>
                    <BannerImage
                        id={getProducts()[1].id}
                        img={getProducts()[1].img}
                        description={getProducts()[1].description}
                        name={getProducts()[1].name}
                    />
                </div>

                <div className='banner-foto-direita'>
                    <BannerImage
                        id={getProducts()[2].id}
                        img={getProducts()[2].img}
                        description={getProducts()[2].description}
                        name={getProducts()[2].name}
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;
