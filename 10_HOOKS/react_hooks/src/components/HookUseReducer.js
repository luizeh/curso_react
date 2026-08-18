import {useReducer, useState} from 'react'

const HookUseReducer = () => {
    // começando com o useReducer  
    const [number, dispatch] = useReducer((state, action) =>{
        return Math.random(state);
    })
    // avançando no useReducer
    const initialTasks =[
        {id: 1, text: "arrumar site lzdev"},
        {id: 2, text: "hospedar site lzdev"},
        {id: 3, text: "migrar repositorio para a organização 'lzdevelopers' no github."}
    ]

    const tasksReducer = (state, action) =>{
        switch(action.type){
            case "ADD":
                const newTask ={
                    id: Math.random(),
                    text: taskText,
                }
                setTaskText("")
                return [...state, newTask]
                case "DELETE":
                    return state.filter((task) => task.id !== action.id)
                default: 
                return state    
        }
    }

    const [taskText, setTaskText] = useState("")
    const [tasks, dispatchTasks] = useReducer(tasksReducer, initialTasks)
    

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatchTasks({type: "ADD"})
        
    }

    const removeTask = (id) =>{
        dispatchTasks({type: "DELETE", id: id})
    }
    

  return (
    <div>
      <h2>useReducer</h2>
      <p>Nùmero: {number}</p>
      <button onClick={dispatch}>Alterar Numero</button>
      <h3>Tarefas enzix 13/08/2026:</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText} />
        <input type="submit" value="enviar" />
      </form>
      {tasks.map((task) =>(
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
      ))}
      <hr />
    </div>
  )
}

export default HookUseReducer
