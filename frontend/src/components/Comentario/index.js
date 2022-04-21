import './style.css'
function Comentario(props) {
    return ( 
        <div className="comentario-container">
            <div className="nick-container">
                <span>{props.nick}:</span>
            </div>
            <div className="coment-container">
                <p>{props.comentario}</p>
            </div>
        </div>
     );
}

export default Comentario;