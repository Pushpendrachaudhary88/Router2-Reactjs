import React,{useState} from "react"
import About from "./Pages1/About"
import Blog from "./Pages1/Blog"
import Contact from "./Pages1/Contact"
import Home from "./Pages1/Home"
import {Routes,Route} from "react-router-dom"
import Navbar from "./Pages1/Navbar"


const App = () =>{
  const[count ,setCount] = useState(0);

  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog count={count} setCount={setCount} />} />
        <Route path="/Contact" element={<Contact count ={count}/>} />
        <Route path="/About" element={<About/>} />



      </Routes>
     

    </div>

  )
}

export default App