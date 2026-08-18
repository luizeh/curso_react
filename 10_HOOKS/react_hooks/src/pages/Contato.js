import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const Contato = () => {
  const { contextValue } = useContext(SomeContext);
  return (
    <div>
      <h1>Página contato</h1>
      <p>Valor do contexto: {contextValue}</p>
    </div>
  );
};

export default Contato;
