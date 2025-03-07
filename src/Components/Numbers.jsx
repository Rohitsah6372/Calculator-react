import React, { useState } from "react";

function Numbers({onNumberClick}) {
 

    function funclick(event){
      let value = event.target.innerText
      // console.log(value)
      onNumberClick(value)
    }
  

  return (

    <div>
      <div className="row1" id="row1">
        <button onClick={funclick} className="one" id="one">
          1
        </button>
        <button onClick={funclick} className="two" id="two">
          2
        </button>
        <button onClick={funclick} className="three" id="three">
          3
        </button>
      </div>
      <div className="row2" id="row2">
        
        <button onClick={funclick} className="four" id="four">
          4
        </button>
        <button onClick={funclick} className="five" id="five">
          5
        </button>
        <button onClick={funclick} className="six" id="six">
          6
        </button>
      </div>
      <div className="row3" id="row3">
       
        <button onClick={funclick} className="seven" id="seven">
          7
        </button>
        <button onClick={funclick} className="eight" id="eight">
          8
        </button>
        <button onClick={funclick} className="nine" id="nine">
          9
        </button>
      </div>
      <div className="row4" id="row4">
      <button onClick={funclick} className="point" id="point">
          .
        </button><button onClick={funclick} className="zero" id="zero">
          0
        </button>
        <button onClick={funclick} className="equals" id="equals">
          =
        </button>
      </div>
    </div>
  );
}

export default Numbers;
