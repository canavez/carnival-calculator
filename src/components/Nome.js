import "./Nome.css"

const Nome = ({lista, handleDelete, valorTotal, valorDiaPessoa}) => {

  return (
    <div className="pessoa-container">
        <div className="nome-container">
            {lista.name}
        </div>
        <div className="dias-container">
            {lista.dias} dias
        </div>
        <div className="valor-container">
            R${valorDiaPessoa * parseInt(lista.dias)}
        </div>
        <div className="delete-container" onClick={() => handleDelete(lista.id)}>
            <h6>excluir</h6>
        </div>
    </div>
  )
}

export default Nome