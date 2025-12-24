import { Link } from "react-router-dom"

export function Contato(){
    return(
        <div>
            <h1>Contato</h1>
            <p>Meus Contatos</p>

        <hr />

             <Link to="/sobre">Sobre</Link> <br />
            <Link to="/">Voltar</Link>
        </div>
    )
}