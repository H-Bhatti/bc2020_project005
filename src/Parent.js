import React from "react";
import Child from "./Child";
import Child1 from "./Child1";

function Parent () {

    return (
        <div> Parent component
            <Child></Child>
            <p>
                <Child1></Child1>
            </p>
        </div>
        
    );
}

export default Parent;