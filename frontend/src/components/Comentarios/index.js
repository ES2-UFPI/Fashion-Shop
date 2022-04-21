import Comentario from "../Comentario";
import './style.css'
function Comentarios(props) {
    
    return ( 
        <div className="comentarios-container">
            <div className="comentarios-centro">
                <h1>Comentarios</h1>
                {
                    props.comentarios.map((comentario)=>{
                        return(
                            <Comentario key={comentario.nick} nick={comentario.nick} comentario={comentario.comentario}/>
                        );
                    })
                }
            </div>
        </div>
     );
}

export default Comentarios;