import { useState, type FormEvent } from 'react'
import './App.css'

interface ResultProps {
  nome: string,
  idade: number
}

function App() {
  const [nome, setNome] = useState("")
  const [ano, setAno] = useState(0)
  const [result, setResult] = useState<ResultProps>()

  function calcularIdade(event: FormEvent){
    event.preventDefault()

    const idade = 2025 - ano

    setResult({
      nome: nome,
      idade: idade
    })  

  }

  return (
    <div className='container'>
      <h1 className='title'>Descubra sua idade</h1>

      <div className='form-control'>
        <form className='form' onSubmit={calcularIdade}>

          <label>Digite seu nome</label>
          <input type="text" placeholder='Digite seu nome...' value={nome} onChange={(e) => setNome(e.target.value)}/>

          <label>Digite o ano que voce nasceu</label>
          <input type="number" placeholder='Digite o ano que voce nasceu...' value={ano} onChange={(e) => setAno(Number(e.target.value))}/>

          <input type='submit' value="Descobrir idade" className='button'/>
        </form>
      </div>
        <br /><br />

       {result && result.nome !== '' && (
        <div className='result'>
          <p>Olá {result.nome} voce tem {result.idade} anos</p>
        </div>
       )}

    </div>
  )
}

export default App
