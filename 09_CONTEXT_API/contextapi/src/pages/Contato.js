import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleContext } from "../hooks/useTitleContext";

const Contato = () => {
  const { counter } = useCounterContext();
  const { color, dispatch } = useTitleContext();
  const setTitleColor = (color) =>{
    dispatch({type: color})
  }
  return (
    <div>
      <h1 style={{ color: color }}>Página Contato</h1>
      <p>Valor do Contador: {counter}</p>
      {/* alterando valor do context */}
      <ChangeCounter />
       <div>
        <button onClick={() => {setTitleColor("RED")}}>Vermelho</button>
         <button onClick={() => {setTitleColor("BLUE")}}>Azul</button>
          <button onClick={() => {setTitleColor("YELLOW")}}>Amarelo</button>
      </div>
    </div>
  );
};

export default Contato;
