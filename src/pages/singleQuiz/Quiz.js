import React, {useState} from "react";
import {BsFillEyeFill} from "react-icons/bs";

const Quiz = (props) => {
    const {quiz} = props
    const [alertMessage, setAlertMessage] = useState('')
    let answer = {status: 0, message: "Please choose your answer."};
    const onAnswerChange = (data) => {
        if (data === quiz.correctAnswer){
            answer = {status: true, message: "Answer is correct."};
        }else{
            answer = { status: false, message:`The correct answer is ( ${quiz.correctAnswer} ).`};
        }
    }
    const showAnswer = (data) => {
        if(data.status){
            setAlertMessage(`<div class="alert alert-success mb-2" role="alert">${data.message}</div>`);
        }else if(data.status === 0){
            setAlertMessage(`<div class="alert alert-warning mb-2" role="alert">${data.message}</div>`);
        }else {
            setAlertMessage(`<div class="alert alert-danger mb-2" role="alert">${data.message}</div>`);
        }
    }
    return(
        <div className="container">
            <div dangerouslySetInnerHTML={{__html: alertMessage}}></div>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title card-question" dangerouslySetInnerHTML={{__html: quiz.question}}></h5>
                        <button type="button" className="btn btn-light" onClick={()=>showAnswer(answer)}><BsFillEyeFill/></button>
                    </div>
                    <div className="mt-4">
                        {quiz.options.map((item,index)=>{
                            return(
                                <div key={index} className="mb-1 d-flex align-items-center gap-1">
                                    <input type="radio" name="answer" value={item} onChange={(e)=>onAnswerChange(e.target.value)}/>
                                    <label className="card-text">{item}</label>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Quiz;