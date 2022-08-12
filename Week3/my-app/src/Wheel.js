

function Wheel(props) {

    console.log(props.src)

    return (

        <div style={{
            backgroundColor: "Red", width: "300px",
            // marginTop:"225px",marginRight:"50px"
            height: "300px", display: "flex", justifyContent: "center", alignItems: "center"
        }}>

            <img src={"/images/" + props.src} />



        </div>

    )
}

export default Wheel