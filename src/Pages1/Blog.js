import React from "react"
import { useNavigate } from "react-router-dom"

const Blog = ({count, setCount}) =>{
    const navigate = useNavigate();
    return(
        <div>
            <h1>Blog</h1>
            <h2>Count is {count}</h2>
            <p>This is the Blog Page</p>
            <button onClick={() => setCount(count+1)}>Click Me</button>
            <button onClick={() =>navigate(-1)}>Back</button>
            <button onClick={() =>navigate(+1)}>Forword</button>

            
        </div>

    )
}
export default Blog