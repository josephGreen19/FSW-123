import './Card.css';

function Card(props) {
    return (
   

        <div style={{backgroundColor: props.backgroundColor, width:'150px'}}>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <h4>{props.description}</h4>
        </div>

    )
}

export default Card;