import logo from './logo.svg';
import './App.css';
import Parent from "./Parent"
import React, {useState} from "react";
import Contextfromcontextfile from './context';


function App() {

                    // valapp is the array that is created by the useState hook
  let valApp = useState(10);
// now passing useState hook to the context file by using .proivider syntax in form of value 
  return (
    
    <Contextfromcontextfile.Provider value = {valApp}>
      <div className="App">
        hellow world
        <Parent></Parent>
      </div>
    </Contextfromcontextfile.Provider>
  );
}

export default App;
