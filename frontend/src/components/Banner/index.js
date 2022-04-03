import './style.css';

import img1 from '../../images/img-esquerda-banner.jpg';
import img2 from '../../images/img-centro-banner.jpg';
import img3 from '../../images/img-direita-banner.jpg';

function Banner() {
    return (
        <div className='banner-container'>
            <div className='banner-container-centro'>
                <div className='banner-foto-esquerda'>
                    <img src={img1} />
                    <div>
                        <span>BLUSA R$ 30,00</span>
                    </div>
                </div>

                <div className='banner-foto-centro'>
                    <img src={img2} />
                    <div>
                        <span>BLUSA R$ 30,00</span>
                    </div>
                </div>

                <div className='banner-foto-direita'>
                    <img src={img3} />
                    <div>
                        <span>BLUSA R$ 30,00</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
