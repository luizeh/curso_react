const Desafio2 = () => {

  let a = 20
  let b = 40

  return (
    <div>
      <p>{a}</p>
      <p>{b}</p>
      <button onClick={() => console.log(a + b)}>Somar</button>
    </div>
  );
};

export default Desafio2;
