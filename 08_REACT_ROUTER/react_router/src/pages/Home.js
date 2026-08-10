import {Link} from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'
import '../styles/Home.css'

const Home = () => {
  // carregamento de dados
  const url = 'http://localhost:3000/products'

  const {data: items, error} = useFetch(url)
  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <div className="products">
        {items && items.map(item =>(
          <div className="item">
            <p key={item.id}></p>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
