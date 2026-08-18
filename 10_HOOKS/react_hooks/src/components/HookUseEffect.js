import {useEffect, useState} from "react"

const HookUseEffect = () => {
    // // useEffect sem dependencias
    // useEffect(() =>{
    //     console.log("[sem array] Estou sendo executado!")
    // })
    
    // const [number, setNumber] = useState(1)

    // const changeSomething = () =>{
    //     setNumber(number + 1)
    // }

    // // array de dependencias vazio
    // useEffect(() =>{
    //     console.log("[array vazio] Serei executado apenas uma vez")
    // }, [])

    // // item no array de dependencias
    // const [num2, setNum2] = useState(0)

    // useEffect(() =>{
    //     console.log("[num2] Sou executado apenas quando o Num2 muda!")
    // }, [num2])


    // // cleanup do useEffect

    // useEffect(() =>{
    //     const timer = setTimeout(() =>{
    //         console.log("hello world")
    //         setNum2(num2 + 1)
    //     }, 2000)
         
    // }, [num2])

  return (
    <div>
      {/* <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>executar</button>
       <p>Number: {num2}</p>
      <button onClick={() => setNum2(num2 + 1)}>executar</button>
      <hr /> */}

    </div>
  )
}

export default HookUseEffect
