import { useState } from "react"
import { App5 } from "./hm"
import { App3 } from "./Login"
import { App6 } from "./path"
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
export  const App1=()=>{
    const[user,setUser]=useState("")
    const[arr,setArr]=useState([])
     const YOUR_APP_ID = "c16118ad";
const YOUR_APP_KEY = "1abeca97e4b499e8955ceae480091c09  ";

    const my= (event)=>{
       event.preventDefault()

       // console.log(arr)
       fetch(`https://api.edamam.com/search?q=${user}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`)
       .then(Response=>Response.json()).then(data=>setArr(data.hits))
       setUser("")
    }
return(
    <div>
        <center>
            <h1>food recipes searching app</h1>
            <form onSubmit ={my}>
            <input type="text" placeholder="search here" required value={user} onChange={(e)=>setUser(e.target.value)}></input>
           <button class="btn btn-primary" >submit</button>
            </form>

        </center>
        <Router>
             <p > <Link to="/pat" >cart</Link></p>
            <Routes>
                <Route path="/pat"  element={<App6></App6>}></Route>
            </Routes>
             </Router>
      
     
        {arr.length>1?<App3 arr={arr}></App3>
        :<App5></App5>}
    
      </div>
      
)
    }