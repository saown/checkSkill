import React, {useEffect} from "react";
import {Bar} from "react-chartjs-2";
import {Chart,registerables} from "chart.js";

const QuizChart = (props) => {
    const {title, quizzes} = props;
    Chart.register(...registerables);

    let labels = [];
    let total = [];
    quizzes.map((item)=>{

        labels = [...labels, item.name]
        return  total = [...total, item.total]
    })
    const data = {
        labels: labels,
        datasets: [{
            label: "Total",
            data: total,
        }]
    };

    useEffect(()=>{
        document.title = title
    },[title])
    return(
        <div className="container mb-5 mt-5">
            <Bar data={data}/>
        </div>
    )
}
export default QuizChart;