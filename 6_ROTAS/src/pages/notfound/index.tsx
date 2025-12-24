import { Link } from "react-router-dom"

export function NotFound(){
    return(
        <div>
            <h1>ops essa pagina nao existe!!</h1>

            <Link to="/">Voltar para home</Link>
        </div>
    )
}