import {Link} from "react-router-dom";

const HeroSection = () => {
    return(
        <div className="col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="https://images.pexels.com/photos/7092614/pexels-photo-7092614.jpeg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"
                         width="700" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Check You Skill By Giving Quiz</h1>
                    <p className="lead">After completing our quiz text you can know how much your skills are improved. And you can also identify yourself what you should do and what don't. And after our quiz test, you will learn the most impotent thing which is how to chit in exams.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to="/blog" type="button" className="btn btn-primary btn-lg px-4 me-md-2">See Our Blog</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroSection;