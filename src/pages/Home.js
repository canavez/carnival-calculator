import "./Home.css"

import Button from "../components/Button"

const Home = ({goCadastro}) => {
  return (
    <div className="home-container">
        <h1>CALCULADORA CARNAVAL</h1>
        <div className="btn-cadastro" onClick={goCadastro}>
            <Button>LISTA</Button>
        </div>
    </div>
  )
}

export default Home