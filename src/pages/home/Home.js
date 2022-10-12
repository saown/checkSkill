import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import HeroSection from "./HeroSection";

const Home = (props) =>{
    const {title, allQuiz} = props;
    useEffect(()=>{
        document.title = title;
    },[title])
    return(
        <div className="container">
            <HeroSection/>
            <div className="text-center text-uppercase h2 mb-5">Start Your Quiz Now</div>
            <div className="d-flex flex-wrap gap-4 justify-content-center align-items-center mb-5">
                {allQuiz.map((item,index)=>{
                    return(
                        <div className="custom-card" key={index}>
                            <img src={item.logo} className="card-img-top custom-card-img bg-dark" alt={item.name}/>
                            <div className="card-body">
                                <p className="card-title h5">{item.name}</p>
                                <p className="card-text">Total Quiz : {item.total}</p>
                                <Link to={`/singleQuiz/${item.id}`} className="btn btn-primary w-100">Start Quiz</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Home;