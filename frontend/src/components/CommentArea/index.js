import Comment from "../Comment";

import './styles.css';

function CommentArea({ comentarios }) {

    return (
        <div className="comentarios-container">
            <div className="comentarios-centro">
                <h2>Comentários</h2>
                {
                    comentarios.map((comentario) => {
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
