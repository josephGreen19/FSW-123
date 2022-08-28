import{useState} from "react"
import { v4 as uuidv4} from "uuid";
import './App.css';
import TodoList from './TodoList';
import {data} from './STORE';

function App() {
  const[array,setArray] = useState(data)
  const completeTodo = id => {
    console.log("complete", id)
  }
  const deleteTodo = id => {
    console.log("delete", id)
  }
  return (
    <TodoList data= {array}
    completeTodo ={completeTodo}
    deleteTodo = {deleteTodo}
    />
  );
}

export default App;
