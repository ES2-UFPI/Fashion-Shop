import BannerImage from '../BannerImage';

import './style.css';

import { getProducts } from '../../products.js';

function Banner() {
    return (
        <div className='banner-container'>
            <div className='banner-container-centro'>
                <div className='banner-foto-esquerda'>
                    <BannerImage
                        id={getProducts()[1].id}
                        img={getProducts()[1].img}
                        description={getProducts()[1].description}
                        name={getProducts()[1].name}
                    />
                </div>

                <div className='banner-foto-centro'>
                    <BannerImage
                        id={getProducts()[4].id}
                        img={getProducts()[4].img}
                        description={getProducts()[4].description}
                        name={getProducts()[4].name}
                    />
                </div>

                <div className='banner-foto-direita'>
                    <BannerImage
                        id={getProducts()[7].id}
                        img={getProducts()[7].img}
                        description={getProducts()[7].description}
                        name={getProducts()[7].name}
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;
