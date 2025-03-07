import React from 'react'

export default function lastColumb({onLastColumbClick}) {

  function funclick(event){
    let value = event.target.innerText
      onLastColumbClick(value)
  }

  return (
    <>
    <div className="lastCol1" id="lastCol1">
        <button className="mul" onClick={funclick} id="mul">*</button>
        <button className="diff" onClick={funclick} id="diff">-</button>
    </div>
    <div className="lastCol2" id="lastCol2">
        <button className="sum" onClick={funclick} id="sum">+</button>

    </div>
    </>

  )
}
