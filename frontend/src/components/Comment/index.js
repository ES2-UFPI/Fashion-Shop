import './style.css';

function Comment(props) {
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

export default Comment;
