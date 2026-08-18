import {useState} from 'react'

const HookUseState = () => {
    // useState
    let username = "João"

    const [name, setName] = useState("Matheus")

    const changeNames = () =>{
        username = "joao souza"
        setName("Jamilton goat")
        console.log(username)
        console.log(name)
    }

    const [age, setAge] = useState(0)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(age)
    }

  return (
    <div>
      <h2>useState</h2>
      <p>Variável: {username}</p>
      <p>useState: {name}</p>   
      <button onClick={changeNames}>mudar nomes</button>
      <p>Digite a sua idade:</p>
      <form onSubmit={handleSubmit}>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          <input type="submit" value="enviar" />
      </form>
      <p>Você tem {age} anos!</p>

      <hr />
    </div>
  )
}

export default HookUseState
