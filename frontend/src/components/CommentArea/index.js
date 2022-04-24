import Comment from "../Comment";

import './style.css';

function CommentArea(props) {

    return (
        <div className="comentarios-container">
            <div className="comentarios-centro">
                <h1>Comentarios</h1>
                {
                    props.comentarios.map((comentario) => {
                        return (
                            <Comment key={comentario.nick} nick={comentario.nick} comentario={comentario.comentario} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default CommentArea;
