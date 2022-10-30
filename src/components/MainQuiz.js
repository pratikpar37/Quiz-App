import "./Options.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ReactStoreIndicator from 'react-score-indicator';
import { Link, useNavigate } from "react-router-dom";
// import ImageQuestion from "./ImageQuestion";



const MainQuiz = () => {

    const [quizData, setQuizData] = useState([]);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [check6, setCheck6] = useState(false);


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [inputValue, setinputValue] = useState(false);
    const [Label, setLabel] = useState("");
    const [percentage, setPercentage] = useState(10);
    const [image, setImage] = useState("./Images/denmark.png");


    useEffect(() => {


        const getResult = async () => {

            try {
                const response = await axios.get('https://opentdb.com/api.php?amount=9')
                console.log(response.data.results);
                let data = response.data.results;

                setQuizData(data);
                setCheck1(false);
                setCheck2(false);
                setCheck3(false);
                setCheck4(false);
                setCheck5(false);
                setCheck6(false);
                setLabel("");


            } catch (err) {
                console.log(err)
            }


        }

        getResult();
        // setQuizData(data);

    }, [currentQuestion]);

    let navigate = useNavigate();

    const handlenext = (correctanswer) => {

        console.log("next clicked");
        console.log(Label);
        if (check1 && Label === correctanswer) {
            setScore(score + 1);
        }
        if (check2 && Label === correctanswer) {
            setScore(score + 1);
        }
        if (check3 && Label === correctanswer) {
            setScore(score + 1);
        }
        if (check4 && Label === correctanswer) {
            setScore(score + 1);
        }

        if (check5 && Label === correctanswer) {
            setScore(score + 1);
        }
        if (check6 && Label === correctanswer) {
            setScore(score + 1);
        }





        const nextQuestion = currentQuestion + 1;
        if (nextQuestion <= quizData.length) {
            setCurrentQuestion(nextQuestion);
            setPercentage(percentage + 10);
            setImage("");
        } else {
            setShowScore(true);
        }
        console.log(score);


    }




    const quiz = quizData.slice(0, 1).map((quizdata) => {
        return (
            <div>



                <div key={quizdata.correct_answer}>
                    <div className="ui raised link purple card" style={{ marginLeft: "37%", marginTop: "80px", height: "650px", }}>
                        <div className="image" style={{ position: 'relative', }}>
                            <img src="./Images/bluewater.png" />
                        </div>
                        <div className="content" style={{ borderRadius: "18px" }}>
                            <div className="description" style={{ fontFamily: "arial", fontSize: "17px", color: "black" }}>

                                <div style={{ height: "65px", width: "65px", marginLeft: "89px", marginTop: "-11px", postiton: "relative", zIndex: "5000", }}  >
                                    <CircularProgressbar value={percentage} text={`${currentQuestion + 1}/${quizData.length + 1}`} styles={buildStyles({ textColor: "black", pathColor: "green", textSize: "29px" })} />

                                </div>
                                <div style={{ marginTop: "7px" }}>
                                    <b >{quizdata.question}

                                    </b>
                                </div>




                                <div>




                                    <div className="ui  checkbox"
                                        style={{ border: `${(check1) ? "2px solid green" : ""}` }}>
                                        <input type="checkbox" name="example"
                                            onClick={() => { setCheck1(!check1); setinputValue(!check1); setLabel(quizdata.incorrect_answers[0]) }} />
                                        <label for="checkbox">{quizdata.incorrect_answers[0]}</label>
                                    </div>

                                    <div className="ui  checkbox" style={{ border: `${(check2) ? "2px solid green" : ""}` }}>
                                        <input type="checkbox" name="example"
                                            onClick={() => { setCheck2(!check2); setinputValue(!check2); setLabel(quizdata.incorrect_answers[1]) }} />
                                        <label for="checkbox">{quizdata.incorrect_answers[1]}</label>
                                    </div>
                                    <br />
                                    <div className="ui  checkbox" style={{ border: `${(check3) ? "2px solid green" : ""}` }}>
                                        <input type="checkbox" name="example"
                                            onClick={() => { setCheck3(!check3); setinputValue(!check3); setLabel(quizdata.correct_answer) }} />
                                        <label for="checkbox">{quizdata.correct_answer}</label>
                                    </div>
                                    <br />
                                    <div className="ui  checkbox" style={{ border: `${(check4) ? "2px solid green" : ""}` }}>
                                        <input type="checkbox" name="example"
                                            onClick={() => { setCheck4(!check4); setinputValue(!check4); setLabel(quizdata.incorrect_answers[2]) }} />
                                        <label for="checkbox">{quizdata.incorrect_answers[2]}</label>
                                    </div>



                                </div>

                            </div>
                            <div style={{ marginTop: "7px", }} >
                                <button className="ui right labeled icon red button"
                                    style={{ marginLeft: "3px", width: "96%", height: "40px", borderRadius: "19px", padding: "5px" }}
                                    onClick={() => { handlenext(quizdata.correct_answer) }}
                                    disabled={inputValue === false}
                                >
                                    <i className="arrow right icon"></i>
                                    Next</button>


                            </div>

                        </div>

                    </div>
                    <br />
                    <br />
                    <br />
                </div>

            </div>
        );

    });




    return (
        <div>

            {(showScore) ? (
                <div>
                    <div className="ui raised link purple card" style={{ marginLeft: "37%", marginTop: "80px", height: "650px", }}>
                        <div className="image" style={{ position: 'relative', }}>
                            <img src="./Images/bluewater.png" />
                        </div>
                        <div className="content" style={{ borderRadius: "18px" }}>
                            <div className="description" style={{ fontFamily: "arial", fontSize: "17px", color: "black" }}>
                                <div style={{ marginTop: "7px", marginLeft: "85px" }}>
                                    <b >Your Score

                                    </b>
                                </div>
                                <div style={{ marginTop: "10px" }}  >
                                    <ReactStoreIndicator
                                        value={score}
                                        maxValue={quizData.length + 1}
                                        text="30%"
                                        style={buildStyles({ textSize: "29px" })}
                                        textStyle={buildStyles({ marginTop: "-10px" })}
                                    />

                                </div>


                                <div>

                                    <div className="item" style={{ backgroundColor: "lightgreen", height: "50px", width: "99%", padding: "16px", marginTop: "20px", borderRadius: "4px" }}>
                                        <div class="ui green empty circular label"

                                        >

                                        </div>
                                        <label for="checkbox" ><b style={{ fontSize: "17px", marginLeft: "9px" }}>{score}</b> Correct</label>

                                    </div>
                                    <div className="item" style={{ backgroundColor: "lightpink", height: "50px", width: "99%", padding: "16px", marginTop: "20px", borderRadius: '4px' }}>
                                        <div class="ui red empty circular label"

                                        >

                                        </div>
                                        <label for="checkbox" ><b style={{ fontSize: "17px", marginLeft: "9px" }}>{(quizData.length + 1) - score}</b> Incorrect</label>

                                    </div>

                                </div>

                            </div>
                            <div style={{ marginTop: "54px", }} >
                                <button className="ui  red button"
                                    style={{ marginLeft: "3px", width: "96%", height: "40px", borderRadius: "19px", padding: "5px" }}
                                    onClick={() => { navigate("/") }}
                                >

                                    Start Again
                                </button>


                            </div>

                        </div>

                    </div>
                    <br />
                    <br />
                    <br />
                </div>

            ) : (

                (image) ? (
                    <div>
                        <div className="ui raised link purple card" style={{ marginLeft: "37%", marginTop: "80px", height: "650px", }}>
                            <div className="image" style={{ position: 'relative', }}>
                                <img src="./Images/bluewater.png" />
                            </div>
                            <div className="content" style={{ borderRadius: "18px" }}>
                                <div className="description" style={{ fontFamily: "arial", fontSize: "17px", color: "black" }}>

                                    <div style={{ height: "65px", width: "65px", marginLeft: "89px", marginTop: "-11px", postiton: "relative", zIndex: "5000", }}  >
                                        <CircularProgressbar value={percentage} text={`${currentQuestion + 1}/${quizData.length + 1}`} styles={buildStyles({ textColor: "black", pathColor: "green", textSize: "29px" })} />

                                    </div>
                                    <div style={{ marginTop: "7px", marginLeft: '30px' }}>
                                        <b >This is the flag of which Scandinavian country?

                                        </b>
                                    </div>
                                    <div style={{ marginLeft: '55px', marginTop: "30px" }}>
                                        <img src={image} style={{ height: "140px", width: "140px" }} />

                                    </div>


                                    <div>

                                        <div className="ui  checkbox"
                                            style={{ border: `${(check5) ? "2px solid green" : ""}` }}>
                                            <input type="checkbox" name="example"
                                                onClick={() => { setCheck5(!check5); setinputValue(!check5); setLabel("Sweden") }} />
                                            <label for="checkbox">Sweden</label>
                                        </div>

                                        <div className="ui  checkbox" style={{ border: `${(check6) ? "2px solid green" : ""}` }}>
                                            <input type="checkbox" name="example"
                                                onClick={() => { setCheck6(!check6); setinputValue(!check6); setLabel("Denmark") }} />
                                            <label for="checkbox">Denmark</label>
                                        </div>
                                        <br />

                                    </div>

                                </div>
                                <div style={{ marginTop: "7px", }} >
                                    <button className="ui right labeled icon red button"
                                        style={{ marginLeft: "3px", width: "96%", height: "40px", borderRadius: "19px", padding: "5px" }}
                                        onClick={() => { handlenext("Denmark") }}
                                        disabled={inputValue === false}
                                    >
                                        <i className="arrow right icon"></i>
                                        Next</button>


                                </div>

                            </div>

                        </div>
                    </div>


                ) : (
                    <div>

                        {quiz}
                    </div>

                )


            )

            }

        </div>
    );

}

export default MainQuiz;