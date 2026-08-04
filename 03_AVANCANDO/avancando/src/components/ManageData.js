import { useState } from "react";

export default function ManageData() {
  let someData = 10;

  const [number, setNumber] = useState(15);

  return (
    <>
      {/* nao funciona */}
      <div>
        <p>valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar Valor</button>
      </div>
      {/* funciona */}
      <div>
        <p>valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar o state</button>
      </div>
    </>
  );
}

// export default ManageData;
