
import ListItem from './ListItem';
import './styles.css';

function List(props) {


    return (
        <div>
            <h1>List of Todos</h1>
            <ul>

                {props.data.map((todo) => {
                    console.log(todo.text)
                    return (
                        <ListItem todo={todo} key={todo.id}
                            completeTodo={props.completeTodo}
                            deleteTodo={props.deleteTodo}
                        />

                    )
                })}


            </ul>
        </div>

    );
}

export default List;