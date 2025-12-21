import { Link } from "react-router-dom"

export function Home(){
    return(
        <div>
            <h1>Bem Vindo a pagina Home!</h1>
            <br />

            <Link to="/sobre">Sobre</Link> <br />
            <Link to="/contato">Contato</Link>
        </div>
    )
}