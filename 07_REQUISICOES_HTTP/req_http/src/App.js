import "./App.css";
import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
const url = "http://localhost:3000/products";
function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const { data: items, httpConfig, loading, error } = useFetch(url);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    httpConfig(product, "POST");
    setName("");
    setPrice("");
  };

  const handleRemove = (id) =>{
    httpConfig(id, "DELETE")
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {loading && <p>carregando dados...</p>}
      {error && {error}}
      {!loading && (
        <div id="lista">
          {items &&
            items.map((product) => (
              <p key={product.id}>
                {product.name} - R$: {product.price}
                <button className="btn" onClick={() => handleRemove(product.id)}>remover</button>
              </p>
            ))}
        </div>
      )}
      <hr />
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            <span>Preço:</span>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {loading && (
            <input type="submit" disabled value="Aguarde" class="btn" />
          )}
          {!loading && <input type="submit" value="Criar" class="btn" />}
        </form>
      </div>
    </div>
  );
}

export default App;
