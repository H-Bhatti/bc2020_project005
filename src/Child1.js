import React, {useReducer} from "react";
import numberReducerFromReducerFile from "./ReducerFile";


function Child1() {

    let [state, dispatch] = useReducer(numberReducerFromReducerFile, 100)

    return(
        <div>
            <p>
                child 1 is : {state}
            </p>
            <button onClick={()=>{dispatch({type:"Increase" , fig: 37})}}>Increamant</button>
            <button onClick={()=>{dispatch({type:"Decrease" , fig: 12})}}>Decreamant</button>
        </div>
    )
}

export default Child1;