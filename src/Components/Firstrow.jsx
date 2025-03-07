import React from "react";


export default function firstRow({onfirstRowClick}) {

  function funclick(event){
    let value = event.target.innerText
    // console.log(value)
    onfirstRowClick(value)
  }

  return (
    <div>
      <button onClick={funclick} className="ac" id="ac">
        AC
      </button>
      <button onClick={funclick} className="del" id="del">
        DEL
      </button>
      <button onClick={funclick} className="divide" id="divide">
        /
      </button>
    </div>
  );
}
