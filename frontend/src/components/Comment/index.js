import './styles.css';

function Comment({ nick, comentario }) {
    return (
        <div className="comentario-container">
            <div className="nick-container">
                <span>{nick}:</span>
            </div>

            <div className="coment-container">
                <p>{comentario}</p>
            </div>
        </div>
    );
}

export default Comment;
