import on from "../img/on.jpg";
import off from "../img/off.jpg";
import { useState } from "react";

const Btn = () => {
  const [isOn, setOn] = useState(false);
  return (
    <div>
      <h2>Botao dinamico</h2>
      <button onClick={() => setOn(!isOn)}>
        <img src={isOn ? on : off} alt={isOn ? "On" : "Off"} />
      </button>
    </div>
  );
};

export default Btn;
