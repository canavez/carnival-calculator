import "./Nomes.css"

import Nome from "./Nome"

const Nomes = ({lista, handleDelete, valorTotal, valorDiaPessoa}) => {
  return (
    <div className="nomes-main-container">
      {lista.map((lista) => 
          <Nome
            key={lista.id}
            lista={lista}
            handleDelete={handleDelete}
            valorTotal={valorTotal}
            valorDiaPessoa={valorDiaPessoa}
            />
        )}
    </div>
  )
}

export default Nomes