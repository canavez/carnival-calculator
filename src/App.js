import './App.css';

import { useState } from 'react';

import Cadastro from './pages/Cadastro';
import Home from './pages/Home';

const stages = [
  {id: 1, name: "home"},
  {id: 2, name: "cadastro"},
  {id: 3, name: "calcular"},
  {id: 4, name: "lista"},
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const goHome = () => {
    setGameStage(stages[0].name)
  }
  const goCadastro = () => {
    setGameStage(stages[1].name)
  }
  // const goCalcular = () => {
  //   setGameStage(stages[2].name)
  // }
  // const goLista = () => {
  //   setGameStage(stages[3].name)
  // }

  return (
    <div className="App">
      {gameStage === 'home' && <Home
        goCadastro={goCadastro}
      />}
      {gameStage === 'cadastro' && <Cadastro
        goHome={goHome}
      />}
      {gameStage === 'calcular' && <Cadastro />}
      {gameStage === 'lista' && <Cadastro />}
    </div>
  );
}

export default App;
