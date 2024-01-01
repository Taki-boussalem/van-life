import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanDetailPrice() {
  const [vanInfo, setVanInfo] = useOutletContext()
  return (
    <div className="van-details-holder">
      {vanInfo ? (<h2>${vanInfo.price}<span>/day</span></h2>): (<h2>loading...</h2>)}
    </div>
  )
}

export default HostVanDetailPrice