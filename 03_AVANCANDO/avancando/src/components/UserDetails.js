const UserDetails = ({key, nome, idade, profissao}) => {
  return (
    <div>
      <h2>{nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissao: {profissao}</p>

        {idade >= 18 ? <p>Pode sim</p> : <p>Nao pode</p>}
    </div>
  );
};

export default UserDetails;
