import React from 'react'
import { Link } from 'react-router-dom'

function VanComp({id, img, name, price, option, searchParams}) {
  return (
    <Link to={`${id}`} state={{search: `${searchParams.toString()}`, type: searchParams.get("type")}}>
      <div className="van">
        <img src={img}/>
        <div className="van-info">
          <h2>{name}</h2>
          <h3>${price}<span>/ day</span></h3>
        </div>  
        <span className={`van-type ${option} selected`}>{option}</span>
      </div>
    </Link>
  )
}

export default VanComp