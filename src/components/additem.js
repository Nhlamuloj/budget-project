import React, {useState} from "react";
import "../css/add.css"
function AddItem(props){

    const [amougitt, setAmount] = useState("");
    const [item, setItem] = useState("");
    const [transactionType, setTransactionType] = useState("");




    const add = (()=>{
        console.log(item);
        console.log(amout)
        console.log(transactionType)
        props.add (amout, item, transactionType);
    })
    return(
     <div>
         <input placeholder="Enter item"
          onChange={(e)=>setItem(e.target.value)}
         /><br></br>
         <input placeholder="Enter amout"
         onChange={(e)=>setAmount(e.target.value)}
         /><br></br>
         <select  ><br></br>
             <option value="Income">Income</option><br></br>
             <option value="Expense">Expense</option><br></br>
         </select><br></br>
         <button id="btn" onClick={add}>Add</button>
     </div>  

    

        
    )
}



export default AddItem