import "./App.css";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";
import { useState } from "react";

function App() {
  const cars = [
    {id: 1, brand: "ferrari", color: "vermelha", newcar: true, km: 0},
    {id: 2, brand: "camaro", color: "amarelo", newcar: false, km: 5.000},
    {id: 3, brand: "onix", color: "preto", newcar: false, km: 42.000},
  ]

  function mensagem(){
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("")
  const handleMessage = (msg) =>{
    setMessage(msg);
  }

  const pessoas = [
    {id: 1, nome: "Jamilton", idade: 34, profissao: "Programador"},
    {id: 2, nome: "Pedro Silva", idade: 17, profissao: "Barbeiro"},
    {id: 3, nome: "Turca", idade: 20, profissao: "Professora"},
    {id: 4, nome: "Luis", idade: 15, profissao: "Aprendiz"}
  ]


  return (
    <div className="App">
      <h1>Avançando em react</h1>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name="Jamilton"/>
      {/* destructuring */}
      <CarDetails brand="bmw" km={100000} color="Azul" newcar={false}/>
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="Preto" km={0} newcar={true}/>
      <CarDetails brand="celta" color="Preto" km={67} newcar={false}/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
        key={car.id} 
        brand={car.brand}
        color={car.color} 
        km={car.km} 
        newcar={car.newcar}/>
      ))}
      <Fragment/>
      {/* children */}
      <Container>
        <p>Conteúdo container</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={mensagem}/>
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* Desafio */}
      {pessoas.map((pessoas) => (
        <UserDetails
        key={pessoas.id}
        nome={pessoas.nome}
        idade={pessoas.idade}
        profissao={pessoas.profissao}
        />
      ))}
    </div>
  );
}

export default App;
