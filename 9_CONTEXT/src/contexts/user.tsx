import { type ReactNode, createContext, useState } from "react";

interface UserProviderProps {
    children: ReactNode
}

type UserContextData = {
    aluno: string
    qtdAlunos: number
    mudarNome: (nome: string) => void
    novoAluno: () => void
}

export const UserContext = createContext({} as UserContextData)

function UserProvider({children}: UserProviderProps) {
    const [aluno, setAluno] = useState("Maria Augusta")
    const [qtdAlunos, setQtdAlunos] = useState(40)

    function mudarNome(nome: string) {
        setAluno(nome)
    }

    function novoAluno() {
        setQtdAlunos(alunos => alunos+1)
    }

    return(
        <UserContext.Provider value={{ aluno, qtdAlunos, mudarNome, novoAluno}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider