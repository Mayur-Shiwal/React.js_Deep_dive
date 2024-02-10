import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function Todo({id}){

  const [todo, setTodo] = useState({});

  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(res => {
      setTodo(res.data.todo)
    })
  }, [id])

  return <div>
    id:{id}
    <h1>{todo.title}</h1>
    <h4>{todo.description}</h4>
  </div>
}

function App() {
  const [selectId, selectedId] = useState(1);

  return <div>
    <button onClick={()=>selectedId(1)}>1</button>
    <button onClick={()=>selectedId(2)}>2</button>
    <button onClick={()=>selectedId(3)}>3</button>
    <button onClick={()=>selectedId(4)}>4</button>
    <Todo id={selectId} />
  </div>
}


export default App
