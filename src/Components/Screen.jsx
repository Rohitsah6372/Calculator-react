import React from 'react'
import style from './Screen.module.css'

function Screen({data}) {
  return (
    <>
      <div className={`screen ${style.screen}`} id="screen">{data}</div>
    </>
  )
}

export default Screen
