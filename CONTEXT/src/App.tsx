import { useState } from "react"
import { Alunos } from "./components/Alunos"

import UserProvider from "./contexts/user"
import { Footer } from "./components/Footer"


function App() {

  return (
    <UserProvider>
      <div>
        <h1>Escola</h1>
        <br />
        <hr />

        <Alunos/>

        <Footer/>

      </div>
    </UserProvider>
  )
}

export default App
