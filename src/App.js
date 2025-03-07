import Numbers from "./Components/Numbers";
import Screen from "./Components/Screen";
import Lastcolumb from "./Components/Lastcolumb";
import Firstrow from "./Components/Firstrow";
import { useState } from "react";
import "./App.css";


function App() {

  const [selectedNumber, setSelectedNumber] = useState("")

  
  const handleClick = (value) => {
    if(value == '='){
      console.log('=')
      let data = eval(selectedNumber)
      setSelectedNumber(data)
      return
    }
    setSelectedNumber((prev) => prev + value); 
  };

  const handlefirstRow = (value) => {
    // console.log(value); 
    if (value === "AC") {
      setSelectedNumber((prev) => prev.slice(0, -1) || "0"); // Removes last digit
    } else if (value === "DEL") {
      setSelectedNumber(""); 
    }else{
      let data = value + '/'
      setSelectedNumber((prev)=> prev+'/')
    }
  }

  

  return (          
    <div className="container" id="container">
      <Screen value={selectedNumber} />
      <Firstrow  onfirstRowClick={handlefirstRow} />
      <div className="same" id="same"  >
        <Numbers onNumberClick={handleClick} />
        <Lastcolumb onLastColumbClick = {handleClick} />
      </div>
    </div>
  );
}

export default App;
