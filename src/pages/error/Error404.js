import React, {useEffect} from "react";
const Error404 = (props) => {

    const {title} = props;

    useEffect(()=>{

        document.title = title;

    },[title])

    return(

        <div className="vh-100 d-flex justify-content-center align-items-center">
            <h1>This Page Is Not Found</h1>
        </div>

    )
}
export default Error404;