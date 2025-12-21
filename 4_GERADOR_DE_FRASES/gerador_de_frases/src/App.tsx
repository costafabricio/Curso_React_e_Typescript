import { useState } from 'react'
import logoImg from './assets/logo.png'
import './App.css'

function App() {
  const [textoFrase, setTextoFrase] = useState('')
  const [categoriaSelecionada, setcategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frase: [
        "Acredite em você, mesmo quando ninguém mais acreditar.",
        "Todo começo é difícil, mas todo esforço vale a pena.",
        "Disciplina vence o talento quando o talento não treina.",
         "Você é mais forte do que imagina.",
          "Um passo por dia ainda é progresso.",
       "Não desista hoje do que pode mudar seu amanhã.",
      "O impossível só existe até alguém provar o contrário.",
        "Grandes conquistas começam com pequenas atitudes.",
       "O sucesso é a soma de pequenos esforços repetidos diariamente.",
         "Erros não te definem, eles te ensinam.",
       "Trabalhe em silêncio e deixe o resultado fazer barulho.",
           "Quem tem foco não se perde no caminho.", 
         "A dor é temporária, o orgulho é para sempre.",
             "Sonhe grande e comece pequeno.",
         "Você não chegou até aqui para desistir agora.",
          "A persistência transforma sonhos em realidade.",
        "Cada dificuldade é uma oportunidade de crescimento.",
            "Seja consistente, não perfeito.",
         "O medo passa, o arrependimento fica.",
        "Faça hoje o que seu futuro vai agradecer."
      ]
    },
    {
      id: 2,
      nome: "Engraçada",
      frase: [
       "Fui adulto hoje. Não recomendo.",
        "Dormir é meu talento secreto.",
        "Café: porque matar pessoas é errado.",
        "Estou cansado desde 1998.",
         "Segunda-feira devia ser proibida por lei.",
         "Minha dieta começa… segunda que vem.",
          "Sou fitness: fit cansado.",
          "Acordei lindo. Pena que passou.",
          "Não sou preguiçoso, estou economizando energia.",
           "Minha motivação saiu e não voltou.",
          "Só funciono depois do café.",
             "Tô rico… em boletos.",
          "Expectativa alta, energia baixa.",
                "Foco, força e café.",
            "Sou uma pessoa simples: quero dormir.",
              "A vida me testa, eu falho.",
               "Trabalhar cansa mais que correr.",
                "O plano era dar certo.",
                  "Tô tentando, juro.",
               "Rindo de nervoso."
      ]
    }
  ]

  function handleSwitchCategory(index: number){
    setcategoriaSelecionada(index)
  }

  function gerarFrase(){
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frase.length)

    setTextoFrase(`"${allFrases[categoriaSelecionada].frase[numeroAleatorio]}"`)
  }

  return (
    <div className='container'>

      <img src={logoImg} alt="logo frase" className='logo'/>

      <h2 className='title'>Categorias</h2>

      <section className='category-area'>

        {allFrases.map( (item, index) => (
          <button key={item.id}
           className='category-button' 
          style={{
           borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
           borderColor: "#1fa4db"
          }}
          onClick={ () => handleSwitchCategory(index) }>
            {item.nome}
          
          </button>
        ))}
      </section>

      <button className='button-frase' onClick={gerarFrase}>Gerar Frases</button>

      {textoFrase !== '' && <p className='texto-frase'>{textoFrase}</p>}
    </div>
  )
}

export default App
