import './style.css';

function BoxProduct({img,title,preco}){
    return(
        <div className="box-product-container">
            <a href='#'>
            <div className='box-image-container'>
                <img src={img}/>
            </div>
            <div>
                <h1>
                    {title}
                </h1>
                <span>R$ {preco}</span>
            </div>
            </a>
        </div>
    );
}

export default BoxProduct;