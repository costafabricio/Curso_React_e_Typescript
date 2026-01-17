import { Nome } from "../Nome"
import  {useContext} from 'react'
import { UserContext } from '../../contexts/user'

export function Alunos() {
    const { qtdAlunos, mudarNome } = useContext(UserContext)

    return(
      <div>
       <h3>Quantidade de Alunos: {qtdAlunos}</h3>
       <button onClick={ () => mudarNome("Matheus") }>
            mudar nome
       </button>

        <br /><br />
        <Nome/>
     </div>
    )
}