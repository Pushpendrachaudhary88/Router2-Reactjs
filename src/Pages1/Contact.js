import React from "react"
import { useNavigate } from "react-router-dom"

const Contact = ({count}) =>{
    const navigate =useNavigate();
    return(
        <div>
            <h1>count :{count}</h1>
            <h1>Contact</h1>
            <p>This is the Contact Page</p>
            {/* <button onClick={() => navigate("/")}>G to Home</button> */}
            <button onClick={() =>navigate(-1)}>Back</button>
            <button onClick={() =>navigate(+1)}>Forword</button>
            
            
        </div>

    )
}
export default Contact