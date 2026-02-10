import { useState } from 'react'
import { ButtonSubmit } from './Button'
import { NewUser } from './Transition'

function App() {
  const [message, setMessage] = useState("")

  async function handleRegister(formData: FormData) {
     // FAKE DELAY
    await new Promise(resolve => setTimeout(resolve,2500))

    const nome = formData.get("nome")
    const tarefa = formData.get("tarefa")

    console.log(nome)
    console.log(tarefa)

    setMessage("Bem vindo " + nome + " essa é sua tarefa " + tarefa)
  }

  return (
      <div>
        <h1>ACTTION + FORM</h1>
        <form action={handleRegister}>
          <input type="text" name='nome' placeholder='digite seu nome....'/>
          <input type="text" name='tarefa' placeholder='digite sua tarefa....'/>
          <ButtonSubmit/>
        </form>

        <h1>{message}</h1>

        <hr />

        <NewUser/>
    </div>
  )
}

export default App
