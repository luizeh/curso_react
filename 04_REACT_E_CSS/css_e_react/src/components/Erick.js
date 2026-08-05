import { useState } from "react";

const Erick = () => {
  const [nome, setNome] = useState("");
  const [saudacao, setSaudacao] = useState("");

  const Saudar = () => {
    setSaudacao(`saudações ${nome}`)
  };
  return (
    <div>
      <input type="text" id="nome" placeholder="digite seu nome..." value={nome} onChange={(e) => setNome(e.target.value)} />
      <button onClick={Saudar}>Saudar</button>
      <p>{saudacao}</p>
    </div>
  );
};

export default Erick;
