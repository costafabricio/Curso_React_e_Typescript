import { useState, useTransition } from "react"

export function NewUser() {
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const [user, setUser] = useState("")

  const [isPending, startTransition] = useTransition()
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    try {
      setLoading(true)

      await new Promise((resolve) => setTimeout(resolve, 2500))

      startTransition(() => {
        setUser("Bem vindo " + name)
        setName("")
      })

    } catch (err: any) {
      setError(err?.message || "Erro")
    } finally {
      setLoading(false)
    }
  }

  const estaCarregando = loading || isPending

  return (
    <div>
      <h1>Conhecendo o useTransition</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSubmit} disabled={estaCarregando}>
        {estaCarregando ? "Enviando usuário...." : "Cadastrar"}
      </button>

      {user && <p>{user}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  )
}
