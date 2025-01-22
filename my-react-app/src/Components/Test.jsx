import {useState} from 'react'
function Test(){    
    let [name,updateName]=useState("Om")
    return(
        <div>
        <h2>name of the student is: {name}</h2>       
<button onClick={()=>updateName("Om Yeole")}>State</button>
        </div>
    )
}
export default Test;