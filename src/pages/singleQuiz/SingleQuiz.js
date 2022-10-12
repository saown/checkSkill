import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Quiz from "./Quiz";
const SingleQuiz = (props) => {
    const {title} = props;
    const {id} = useParams();
    const [quiz, setQuiz] = useState(null)
    const url = "https://openapi.programming-hero.com/api/quiz/"+id;

    useEffect(()=>{
        document.title = title
    },[title])


    useEffect(()=>{
        fetch(url, {method:"get"})
            .then(response=>response.json())
            .then((response)=>{
                if (response.status) {
                    setQuiz(response.data)
                }
            })
    },[url])


    return(
        <div>
            {quiz !== null ? quiz.questions.map((item,index)=>{
                return(
                    <Quiz key={index} quiz={item} nameOfInput={`answers${index}`}/>
                )
            }) : ''}

        </div>
    )
}
export default SingleQuiz;