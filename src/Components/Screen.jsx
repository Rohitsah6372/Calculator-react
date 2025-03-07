import React from 'react'

export default function Screen({value}) {


  return (
    <div>
      <span className="screen" id="screen">{value || "0"}</span>
    </div>
  )
}
