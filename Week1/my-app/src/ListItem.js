function ListItem(props) {


    return (


        <li>
            <input
                checked = { props.todo.isCompleted }
                onChange = {() =>props.completeTodo(props.todo.id)}
             id="Todo1" type="checkbox" />
            {props.todo.text}
            <button onClick={() => props.deleteTodo (props.todo.id)}>Delete</button>
        </li>


    );
}

export default ListItem;