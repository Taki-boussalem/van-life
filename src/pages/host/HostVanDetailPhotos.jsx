import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanDetailPhotos() {
  const [vanInfo, setVanInfo] = useOutletContext()
  console.log(vanInfo)
  return (
    <div className="van-details-holder">
    {vanInfo ? (<img src={vanInfo.imageUrl} width={150}/>): (<h2>loading...</h2>)}
  </div>
  )
}

export default HostVanDetailPhotos