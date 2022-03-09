import React, { useContext } from "react";
import Contextfromcontextfile from "./context";

function Child (){

    let valueChild = useContext(Contextfromcontextfile)
   //now calling the previously passes useState Hook into this child component using the usecontext syntax and saving the array is valuechild
   //value child index 0 is inherantely the variable passed in to the useState hook
   // and the index 1 of the valueChild is the function that is from useState hook, here we use arrow function to increment the value of the number from index 0 of useState hook 
    

    return(
        <div>Child
            <p>
                Child0 number is :{valueChild[0]}
            </p>
            <button onClick={()=>{valueChild[1](++valueChild[0])}}>increament</button>
            
        </div>
    );
}
export default Child;