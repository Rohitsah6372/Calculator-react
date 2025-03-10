import React from 'react';
import Button from './Components/Button';
import Screen from './Components/Screen';
import './App.css';
import { useState } from 'react';

function App() {
  let [data, setData]=useState(0)

  function handleButton(value) {
      if(value == '='){
        try{
          const result = new Function('return ' + data)();
          setData(String(result));
        }catch{
          setData("error")
        }
      }else if(value === "C"){
        setData(0)
      }else{
        setData((prevData)=> prevData + value)   
      }


  }

  return (
    <div className="container">
      <Screen data ={data}></Screen>
      <Button buttonClicked={handleButton} ></Button>
    </div>
  );
}

export default App;
