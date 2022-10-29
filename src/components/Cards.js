
import React from "react";
import Card from 'react-animated-3d-card';
import {Link,useNavigate} from "react-router-dom";


const Cards = () => {



    let navigate=useNavigate();

    const handleClick=()=>{
        console.log("start button Clicked");
        navigate("/Quiz");
        // navigate("/TestQuiz")

    }

    return (
        <div>

            <div style={{marginLeft:"35%",marginTop:"150px"}}>
                <Card
                    // cursorPointer={false}
                    shineStrength={0.75}
                    style={{
                        backgroundColor: "lightBlue",
                        width: '370px',
                        height: '520px',
                        borderRadius: "2px",
                        cursor: 'pointer',
                        // zIndex:"-1",
                    }}
                    onClick={() => console.log('Card clicked')}
                >
                    

                    {/* <div>Upraised</div> */}
                    <div style={{marginLeft:"125px",marginTop:'20px'}}  >
                    <img  src="./Images/upraised2.jpg" style={{height:"25px"}} />

                    </div>
                    <div style={{fontFamily:"arial",fontSize:"18px",marginLeft:"150px",marginTop:"-28px",zIndex:"5000"}} ><b>upraised</b></div>
                    <div style={{marginLeft:"120px",marginTop:"110px"}}><img src="./Images/quiz.png" style={{height:"140px",width:"140px"}} /></div>

                    


                </Card>
                <div style={{ marginTop: "-70px" }} >
                    <button className="ui red button"
                        style={{ position: "relative", zIndex: "5000", marginLeft: "48px", width: "32%",height:"40px", borderRadius: "19px" }}
                        onClick={handleClick}>
                        Start</button>

                </div>

                





            </div>
        </div>
    )

}


export default Cards;