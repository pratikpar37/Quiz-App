
// import "./Checkbox.css";
// import React, { useState,useEffect } from "react";
// import axios from "axios";

// import {
//     CircularProgressbar,
//     CircularProgressbarWithChildren,
//     buildStyles
// } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// // import { easeQuadInOut } from "d3-ease";
// // import AnimatedProgressProvider from "./AnimatedProgressProvider";
// // import ChangingProgressProvider from "./ChangingProgressProvider";

// const TestMainQuiz = () => {

//     // const updateFeature=(checkbox)=>{
//     //     console.log(document.querySelector(".boxContent"));
//     //     document.querySelector(".boxContent").classList.remove("isChecked");
//     //     if (checkbox.checked) {
//     //       document.querySelector(".boxContent").classList.add("isChecked");
//     //     }

//     // }
//     const [quizData,setQuizData]=useState([]);
//     const [check1, setCheck1] = useState(false);
//     const [check2, setCheck2] = useState(false);
//     const [check3, setCheck3] = useState(false);
//     const [check4, setCheck4] = useState(false);
//     const [check5, setCheck5] = useState(false);

//     useEffect(()=>{

       
//         const getResult= async()=>{

//             try {
//                 const response = await axios.get('https://opentdb.com/api.php?amount=10')
//                 console.log(response.data.results);
//                 let data=response.data.results;
//                 setQuizData(data);
//                 console.log(quizData);
//                 console.log(data[0].question);
//                 console.log(data[0].correct_answer);
//                 console.log(data[0].incorrect_answers[0]);

                
//             } catch (err) {
//                 console.log(err)
//             }


//         }

//         getResult();


//     },[]);


//     const percentage = 10;

//     return (
//         <div >
//             <div className="ui raised link purple card" style={{ marginLeft: "37%", marginTop: "80px", height: "65s0px" ,}}>
//                 <div className="image" style={{ position: 'relative', }}>
//                     <img src="./Images/bluewater.png" />
//                 </div>
//                 <div className="content" style={{ borderRadius: "18px" }}>
//                     <div className="description" style={{ fontFamily: "arial", fontSize: "17px", color: "black" }}>

//                         <div style={{ height: "65px", width: "65px", marginLeft: "89px", marginTop: "-13px", postiton: "relative", zIndex: "5000", }}  >
//                             <CircularProgressbar value={percentage} text="1/3" styles={buildStyles({ textColor: "black", pathColor: "green", textSize: "29px" })} />

//                         </div>
//                         <div style={{marginTop:"7px"}}>
//                         <b >How do you judge what should be added in the next
//                             version of the app??s

//                         </b>
//                         </div>
                        



//                         <div>
//                             {/* <div class="container" style={{ marginTop: "20px", marginLeft: "12px", padding: '4px' }}>
//                                 <div class="round">
//                                     <input type="checkbox" id="checkbox" />
//                                     <label for="checkbox" ></label>

//                                 </div>
//                                 <div style={{ marginTop: '-19px' }}><label style={{ marginLeft: "30px" }}>Hi there honey this is me</label></div>


//                             </div>

//                             <div class="container" style={{ marginTop: "20px", marginLeft: "12px", padding: '4px' }}>
//                                 <div class="round">
//                                     <input type="checkbox" id="checkbox" />
//                                     <label for="checkbox" ></label>

//                                 </div>
//                                 <div style={{ marginTop: '-19px' }}><label style={{ marginLeft: "30px" }}>Hi there honey this is me</label></div>


//                             </div> */}



//                             <div class="ui  checkbox"
//                                 style={{ marginTop: "20px", marginLeft: "1px", padding: '16px', backgroundColor: "lightgray", height: "50px", width: "99%", border: `${(check1) ? "2px solid green" : ""}` }}>
//                                 <input type="checkbox" name="example" style={{ marginLeft: "9px", marginTop: "11px" }} onClick={() => { setCheck1(!check1) }} />
//                                 <label for="checkbox">Question 1 how is my office</label>
//                             </div>

//                             <div class="ui  checkbox" style={{ marginTop: "20px", marginLeft: "1px", padding: '16px', backgroundColor: "lightgray", height: "50px", width: "99%", border: `${(check2) ? "2px solid green" : ""}` }}>
//                                 <input type="checkbox" name="example" style={{ marginLeft: "9px", marginTop: "11px" }} onClick={() => { setCheck2(!check2) }} />
//                                 <label for="checkbox">Question 2</label>
//                             </div>
//                             <br />
//                             <div class="ui  checkbox" style={{ marginTop: "20px", marginLeft: "1px", padding: '16px', backgroundColor: "lightgray", height: "50px", width: "99%", border: `${(check3) ? "2px solid green" : ""}` }}>
//                                 <input type="checkbox" name="example" style={{ marginLeft: "9px", marginTop: "11px" }} onClick={() => { setCheck3(!check3) }} />
//                                 <label for="checkbox">Question 2</label>
//                             </div>
//                             <br />
//                             <div class="ui  checkbox" style={{ marginTop: "20px", marginLeft: "1px", padding: '16px', backgroundColor: "lightgray", height: "50px", width: "99%", border: `${(check4) ? "2px solid green" : ""}` }}>
//                                 <input type="checkbox" name="example" style={{ marginLeft: "9px", marginTop: "11px" }} onClick={() => { setCheck4(!check4) }} />
//                                 <label for="checkbox">Question 2</label>
//                             </div>
//                             <br />
//                             <div class="ui  checkbox" style={{ marginTop: "20px", marginLeft: "1px", padding: '16px', backgroundColor: "lightgray", height: "50px", width: "99%", border: `${(check5) ? "2px solid green" : ""}` }}>
//                                 <input type="checkbox" name="example" style={{ marginLeft: "9px", marginTop: "11px" }} onClick={() => { setCheck5(!check5) }} />
//                                 <label for="checkbox">Question 2</label>
//                             </div>







//                         </div>

//                     </div>
//                     <div style={{ marginTop: "7px", }} >
//                         <button className="ui right labeled icon red button"
//                             style={{ marginLeft: "3px", width: "96%", height: "40px", borderRadius: "19px", padding: "5px" }}
//                             onClick={() => { console.log("next clicked") }}
//                         >
//                             <i className="arrow right icon"></i>
//                             Next</button>


//                     </div>

//                 </div>

//             </div>
//             <br />
//             <br />
//             <br />
//         </div>
//     );

// }

// export default TestMainQuiz;