import {useState, useEffect} from 'react'
function Test1(){
    const[count, updateCounter]=useState(0);
    useEffect(()=>{console.log("click")},[count])
    return(
        <div>
            <center>
        <h1>{count}</h1>
        <button onClick={()=>updateCounter(count+1)}>Change</button>
            </center>
        </div>
    )
}
export default Test1;