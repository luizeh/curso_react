const CarDetails = ({brand, km, color, newcar}) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
        {newcar === true ? <li>Novo: sim</li> : <li>Novo: não</li>}
      </ul>
    </div>
  )
}

export default CarDetails
