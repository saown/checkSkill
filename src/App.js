import React, {useState, useEffect} from "react";
import {BrowserRouter, Routes ,Route} from "react-router-dom";
import Layout from "./routerLayout/Layout";
import Error404 from "./pages/error/Error404";
import Home from "./pages/home/Home";
import QuizChart from "./pages/quizChart/QuizChart";
import Blog from "./pages/blog/Blog";
import SingleQuiz from "./pages/singleQuiz/SingleQuiz";

import "./style.css"

const App = () => {
    const url = "https://openapi.programming-hero.com/api/quiz";

    const [quizzes, setQuizzes] = useState([]);

    useEffect(()=>{
        fetch(url,{
            method:"get",
        })
            .then(response => response.json())
            .then((responseData)=>{
                if (responseData.status) {
                    setQuizzes(responseData.data)
                }
            })
    },[])


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home
                  title={`Check Skill`}
                  allQuiz={quizzes}/>}
              />
              <Route path="/quizChart" element={<QuizChart quizzes={quizzes} title="Quiz Chart"/>}/>
              <Route path="/blog" element={<Blog title="Blog"/>}/>
              <Route path="/singleQuiz/:id" element={<SingleQuiz title="Single Quiz"/>}/>
          </Route>
            <Route path="/*" element={<Error404 title="404"/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
