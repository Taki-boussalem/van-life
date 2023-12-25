import React from 'react'

function VanComp({img, name, price, option}) {
  return (
    <div className="van">
      <img src={img}/>
      <div className="van-info">
        <h2>{name}</h2>
        <h3>${price}<span>/ day</span></h3>
      </div>  
      <span className={`van-option ${option} selected`}>{option}</span>
    </div>
  )
}

export default VanComp