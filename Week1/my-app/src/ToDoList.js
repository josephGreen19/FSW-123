


import './styles.css';

function TodoList() {

    return  ( 
        <div>
            <h1>List of Todos</h1>
            <ul>
                 <li>
                     <input id="Todo1"  type="checkbox" />
                      go to gym
                 </li>

                 <li>
                     <input id="Todo1"  type="checkbox" />
                      do laundry
                 </li>

                 <li>
                     <input id="Todo1"  type="checkbox" />
                      food shopping
                 </li>

                 <li>
                     <input id="Todo1"  type="checkbox" />
                      do homework
                 </li>
            </ul>
        </div>
        
    );
}

export default TodoList;