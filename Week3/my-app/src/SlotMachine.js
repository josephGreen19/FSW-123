import { useState } from "react"
import Wheel from './Wheel';
//import image1.png from './images/'
let imgArry = [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png",
    "image5.png",
    "image6.png",
    "image7.png"
]





function SlotMachine() {
    let randomNumber1 = Math.floor(Math.random() * 7);
    const [num1, setNum1] = useState(randomNumber1);
    let randomNumber2 = Math.floor(Math.random() * 7);
    const [num2, setNum2] = useState(randomNumber2);
    let randomNumber3 = Math.floor(Math.random() * 7);
    const [num3, setNum3] = useState(randomNumber3);


    function buttonHandler() {
        setNum1(Math.floor(Math.random() * 7))
        setNum2(Math.floor(Math.random() * 7))
        setNum3(Math.floor(Math.random() * 7))
    }
    return (
        <div className="slot-machine">
            <div className="flexContainer">
                <Wheel src={imgArry[num1]} />
                <Wheel src={imgArry[num2]} />
                <Wheel src={imgArry[num3]} />
            </div>

            <button id="handle" onClick={buttonHandler}>Pull Handle</button>
        </div>



    )
}

export default SlotMachine