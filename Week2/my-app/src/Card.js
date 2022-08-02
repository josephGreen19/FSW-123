import './Card.css';

function Card(props) {
    return (
    <div id="wrapped">
        <div style= {{backgroundColor: 'red', width:' 150px'}}>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <h4>{props.description}</h4>
        </div>
                

        <div style={{backgroundColor:' orange', width:' 150px'}}>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <h4>{props.description}</h4>
        </div>

        <div style={{backgroundColor:' yellow', width:' 150px'}}>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <h4>{props.description}</h4>
        </div>

        <div style={{backgroundColor:' green', width:'150px'}}>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <h4>{props.description}</h4>
        </div>
    </div>
    )
}

export default Card;