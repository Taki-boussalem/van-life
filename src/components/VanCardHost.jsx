import React from 'react'
import { Link } from 'react-router-dom'

function VanCardHost({id, imageUrl, name, price}) {
  return (
    <Link to={`/host/vans/${id}`} className="van-card-host">
      <img src={imageUrl}/>
      <span>
        <p className="van-card-host-name">{name}</p>
        <p className="van-card-host-price">${price}/day</p>
      </span>
    </Link>
  )
}

export default VanCardHost