import {useSearchParams, Link} from "react-router-dom"
import {useFetch} from "../hooks/useFetch"
const Search = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q") || ""
    const url = "http://localhost:3000/products?name:contains=" + encodeURIComponent(query)
    const {data: items, loading, error} = useFetch(url)

  return (
    <div>
       {loading ? <p>Carregando...</p> : null}
       {error ? <p>{error}</p> : null}
      <h1>Resultados disponíveis:</h1>
       <div className="products">
        {items && items.map(item =>(
          <div className="item" key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search
