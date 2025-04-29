import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [vida,setVida] = useState(100)
  const [alive, setAlive] = useState(true)
  const [fome, setFome] = useState(0)
  const [sede, setSede] = useState(0)
  const [energia, setEnergia] = useState(0)
  const [mana, setMana] = useState(100)
  const [experiencia, setExperiencia] = useState(0)
  const [ataque, setAtaque] = useState(0)
  const [defesa, setDefesa] = useState(0)
  const [inteligencia, setInteligencia] = useState(0)
  const [nivel, setNivel] = useState(1)
  const [pocao, setPocao] = useState(0)
  const [racao, setRacao] = useState(0)
  const [agua, setAgua] = useState(0)

  const [inimigo, setInimigo] = useState({
    vida: 100,
    ataque: 10,
    defesa: 5,
    experiencia: 20
  })

  const calcularDano = (ataque, defesa) => {
    const dano = ataque - defesa * 0.5
    return dano > 0 ? dano : 0
  }

  // useEffect(() => {
  //   const intervalo = setInterval(() => {
  //       if (vida <= 0) {
  //       setAlive(false)
  //       clearInterval(intervalo)
  //       return 0
  //     }
  //     setVida((vidaAtual) => vidaAtual - 1)
  //   }, 1000)
  //   return () => {clearInterval(intervalo)}
  // }, [vida])

  function acharItem() {
    const chance = Math.random()
    if (chance < 0.5) {
      setPocao(pocao + 1)
    } else if (chance < 0.8) {
      setFome(fome + 10)
    } else if (chance < 0.9) {
      setSede(sede + 10)
    } else {
      setEnergia(energia + 10)
    }
  }

  function usarItem() {
  }
  function atacar() {
    if (inimigo.vida <= 0) {
      setExperiencia(experiencia + inimigo.experiencia)
      setInimigo({ vida: 100, ataque: 10, defesa: 5, experiencia: 20 })
    } else {
      const dano = calcularDano(ataque, inimigo.defesa)
      setInimigo((inimigoAtual) => ({
        ...inimigoAtual,
        vida: inimigoAtual.vida - dano
      }))
    }
  }

  function usarPocao() {
    if (vida <= 90) {
      if(alive){
        if(vida <= 90 && pocao != 0){
          setVida(vida + 10)
          setPocao((pocoesAtuais) => pocoesAtuais - 1)
        }else{
          setVida(100)
        }
      }
    }
  }


  return (
    <>
      <div>
        Vida: {vida}
      </div>
      <div>
        Experiência: {experiencia}
      </div>
      <div>
        Nível: {nivel}
      </div>
      <div>
        Ataque: {ataque}
      </div>
      <div>
        Defesa: {defesa}
      </div>
      <div>
        Inteligência: {inteligencia}
      </div>
      <div>
        Poções: {pocao}
      </div>
      <div>
        Fome: {fome}
      </div>
      <div>
        Sede: {sede}
      </div>
      <div>
        Energia: {energia}
      </div>
      <div>
        Mana: {mana}
      </div>


      <button onClick={acharItem}>Achar Item</button>
      <button onClick={usarPocao}>Usar Poção</button>
      <div>
        {alive ? <p>Vivo</p> : <p>Morto</p>}
      </div>
    </>
  )
}

export default App
