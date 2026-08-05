import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Erick from "./components/Erick";
import Btn from "./components/Btn";
import Title from "./components/Title";
import Carros from "./components/Carros";

function App() {
  const n = 70;
  const [name] = useState("Matheus");
  let res = name === "Matheus";
  
  if (name === "Matheus") {
    res = true;
  } else {
    res = false;
  }

  const redTitle = true;

    const carros = [
    {id: 1, brand: "ferrari", color: "vermelha", newcar: true, km: 0},
    {id: 2, brand: "camaro", color: "amarelo", newcar: false, km: 5.000},
    {id: 3, brand: "onix", color: "preto", newcar: false, km: 42.000},
  ]

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com css</h1>
      {/* css de componente */}
      <MyComponent />
      <p>paragrafo app.js</p>
      {/* css inline */}
      <p style={{ color: "blue", padding: "25px" }}>Inline css</p>
      {/* css inline dinamico */}
      <h2 style={n < 10 ? { color: "blue" } : { color: "purple" }}>
        css dinamico
      </h2>
      <h2 style={res === true ? { color: "green" } : null}>CSS dinâmico</h2>
      {/* desafios erick */}
      <Erick />
      <Btn />
      {/* classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Classe dinâmica</h2>
      {/* CSS modules */}
    <Title/>
    <h1 className="my_title">Teste</h1>
    {/* desafio curso */}
    <div className="carros-lista">
      {carros.map((carro) => (
        <Carros
          key={carro.id}
          marca={carro.brand}
          cor={carro.color}
          km={carro.km}
        />
      ))}
    </div>
    </div>
  );
}
export default App;
