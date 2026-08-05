import { useState } from "react";
import "./Myform.css";

const MyForm = () => {
  // 3- gerenciamento de dados
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState(1);

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      {/* 1- Criação de form */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2- label envolvendo input */}
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
      <p>{name}</p>
      <button onClick={() => setNum(num + num)}>
        {num}
      </button>
    </div>
  );
};

export default MyForm;
