import "./Cadastro.css"

import { useEffect, useState } from "react"

import Button from "../components/Button"
import Nomes from "../components/Nomes"

const DEFAULT_LISTA = []

const Cadastro = ({goHome}) => {
    
    const [lista, setLista] = useState(JSON.parse(localStorage.getItem('lista')) || DEFAULT_LISTA)
    const [inputTxt, setInputTxt] = useState("")
    const [inputNum, setInputNum] = useState(0)

    useEffect(() => {
        localStorage.setItem('lista', JSON.stringify(lista))
      }, [lista])

    const handleAdicionar = (nome, num) => {
        const newLista = [...lista, {
            id: (lista.length + 1),
            name: nome,
            dias: num
        }]
        setLista(newLista)
        setInputNum(0)
        setInputTxt("")
    }

    const handleChange = (e) => {
        setInputTxt(e.target.value)
    }

    const handleChangeNum = (e) => {
        setInputNum(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAdicionar(inputTxt, inputNum)
    }

    const handleDelete = (listaId) => {
        const newLista = lista.filter((lista) => lista.id !== listaId)
        setLista(newLista)
    }
    
    const [aluguel, setAluguel] = useState(JSON.parse(localStorage.getItem('aluguel')) || 0)
    const [compras, setCompras] = useState(JSON.parse(localStorage.getItem('compras')) || 0)

    useEffect(() => {
        localStorage.setItem('aluguel', JSON.stringify(aluguel))
    }, [aluguel])

    useEffect(() => {
        localStorage.setItem('compras', JSON.stringify(compras))
    }, [compras])

    const handleAluguel = (e) => {
        setAluguel(e.target.value)
    }

    const handleCompras = (e) => {
        setCompras(e.target.value)
    }

    const valorTotal = parseFloat(aluguel) + parseFloat(compras)

    let valorDiasPessoas = lista.reduce(getValorDiasPessoas, 0)
    function getValorDiasPessoas(valorDiasPessoas, item) {
        return parseFloat(valorDiasPessoas) + parseFloat(item.dias)
    }

    let valorDiaPessoa = Math.ceil(parseFloat(valorTotal) / parseFloat(valorDiasPessoas))

    return (
    <div className="main-container">
        <div className="valores-container">
            <h1>Valores:</h1>
            <form>
                <div className="aluguel-container">
                    <h4>Aluguel:</h4>
                    <div className="input-aluguel">
                        <input type="number" min={0} value={aluguel} onChange={handleAluguel}/>
                    </div>
                </div>
                <div className="compras-container">
                    <h4>Compras:</h4>
                    <div className="input-compras">
                        <input type="number" min={0} value={compras} onChange={handleCompras}/>
                    </div>
                </div>
            </form>
            <div className="valortotal-container">
                <h4>Valor total: <span>R${valorTotal}</span></h4>
            </div>
        </div>
        
        <div className="adicionar-container">
            <form onSubmit={handleSubmit}>
                <div className="adicionar-form-container">
                    <div className="input-txt">
                        <h4>Nome:</h4>
                        <input type="text" placeholder="Nome" onChange={handleChange} value={inputTxt}/>
                    </div>
                    <div className="input-number">
                        <h4>Dias:</h4>
                        <input type="number" min={0} max={4} onChange={handleChangeNum} value={inputNum}/>
                    </div>
                </div>
                <div className="btn-add">
                        <Button>Adicionar</Button>
                    </div>
            </form>
        </div>
        <div className="nomes-container">
            <Nomes
                lista={lista}
                handleDelete={handleDelete}
                valorTotal={valorTotal}
                valorDiaPessoa={valorDiaPessoa}
            />
        </div>
        <div className="btn-gohome" onClick={goHome}>
            <Button>Início</Button>
        </div>
    </div>
  )
}

export default Cadastro