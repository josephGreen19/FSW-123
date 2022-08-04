import './App.css';
import TodoList from './TodoList';
import {todos} from './STORE';

function App() {
  return (
    <TodoList data= {todos}/>
  );
}

export default App;
