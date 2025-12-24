import { Link } from "react-router-dom"

export function Sobre(){
    return(
        <div>
            <h1>Pagina Sobre</h1>
            <br/>

            <hr />
        
             <Link to="/contato">Contato</Link> <br />
            <Link to="/">Voltar</Link>
        </div>
    )
}