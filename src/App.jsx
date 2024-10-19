import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './componentes/Header'
import { MarketList } from './componentes/MarketList'
import { Login } from './componentes/Login'

const items = [
    {name: 'manzana', price: 5},
    {name: 'uva', price: 10},
    {name: 'limón', price: 3},
]

function App() {
  const [count, setCount] = useState(0)
  const [marketlist, setMarketList] = useState(false)
  const [session, setSession] = useState(false)

  const login = () => {
    if (!session){
      setSession(true)
    }
    else{
      setSession(false)
    }
  }
  return (
    <>
     <Header title ={'Mi primer componente'} color={'blue'}/>
     {session ? <div>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <button onClick={()=> setMarketList(!marketlist)}>
          {marketlist ? 'Ocultar lista': 'Mostrar lista'}
        </button>
        {marketlist === true ? <MarketList products= {items}/>
        : <p>Compra</p>}
          <button onClick={login}>Cerrar sesión</button>
        </div>
      </div>
      :
      <div>
        <Login log_in={login}/>
      </div> 
      }
    </>
  )
}

export default App
