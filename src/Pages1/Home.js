import React from "react"
import { useNavigate } from "react-router-dom"

const Home = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <h1>Home</h1>
            <p>This is the Home Page</p>
            <button onClick={() =>navigate(-1)}>Back</button>
            <button onClick={() =>navigate(+1)}>Forword</button>
            
        </div>

    )
}
export default Home