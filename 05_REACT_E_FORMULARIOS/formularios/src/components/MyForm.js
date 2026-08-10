import { useState } from "react";
import "./Myform.css";

const MyForm = ({ user }) => {
  // 3- gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");
  const [num, setNum] = useState(1);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulário");

    setName("");
    setEmail("");
    setBio("");
  };
  return (
    <div>
      {/* 1- Criação de form */}
      <form onSubmit={handleSubmit}>
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
            type="text"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <span>Nome: </span>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Bio</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>

      <p>nome: {name}</p>
      <p>email: {email}</p>
      <p>bio: {bio}</p>
      <p>funcao no sistema: {role}</p>
      <button onClick={() => setNum(num + num)}>{num}</button>
    </div>
  );
};

export default MyForm;
