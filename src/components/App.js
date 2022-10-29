

import React from "react";
import Cards from "./Cards";
import MainQuiz from "./MainQuiz";
import TestMainQuiz from "./TestMainQuiz";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
   
    Redirect,

} from "react-router-dom";

const App = () => {



    
    return (

        <div>
            <Router>
                <Routes>
                    <Route path="/" index element={<Cards />} />
                    <Route path="/Quiz" element={<MainQuiz />} />
                    <Route path="/TestQuiz" element={<TestMainQuiz />} />
                </Routes>
            </Router>

          





        </div>

    );

};

export default App;