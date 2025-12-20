import {useState} from 'react'

interface InfoAlunoProps{
  nome: string,
  idade: string
}

export default function App() {
  const [input,setInput] = useState("")
  const [idade,setIdade] = useState("")

  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>()

  const [contador,setContador] = useState(0)

  function mostraAluno() {
   setInfoAluno({
    nome: input,
    idade: idade
   })
  }

  function aumentar(){
    setContador(valorAtual => valorAtual + 1)
  }

  function diminuir(){
    if(contador === 0) {
      return
    }
    setContador(valorAtual => valorAtual - 1)
  }
  return(
    <div>
      <h1>Conhecendo o useState</h1>

      <input 
        placeholder='Digite o nome'
        value={input}
          onChange={ (e) => setInput(e.target.value)}
       />

       <br /> <br />

       <input 
          placeholder='Digite a idade'
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
       />

       <br /> <br />

       <button onClick={mostraAluno}>Mostra aluno</button>

       <hr />

       <h3>Bem vindo {infoAluno?.nome}</h3>
       <h3>Idade: {infoAluno?.idade}</h3>

       <hr />
       <br />
        <h1>Contador com useState</h1>
        <button onClick={aumentar}>+</button> {contador} <button onClick={diminuir}>-</button>
    </div>
  )
}
