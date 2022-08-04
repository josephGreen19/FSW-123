

import './styles.css';

function TodoList(props) {
    

    return  ( 
        <div>
            <h1>List of Todos</h1>
            <ul>
                
                 {props.data.map((todo)=>{
                    console.log(todo.text)
                    return (
                        <li>
                        <input id="Todo1"  type="checkbox" />
                         {todo.text}
                    </li>
                    )
                 })}

               
            </ul>
        </div>
        
    );
}

export default TodoList;