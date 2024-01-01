import React from "react";
import VanComp from "../components/vanComp";
import { useState, useEffect } from "react";

function Vans() {
  
  const [vansData, setVansData] = useState([])


  useEffect(function () {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVansData(data.vans))
  }, [])
  console.log(vansData)
  return (
    <div className="van-page">
      <div className="van-options">
        <h1>Explore our vans options</h1>
        <div>
          <button>Simple</button>
          <button>Luxury</button>
          <button>Rugged</button>
          <p>clear filters</p>
        </div>
      </div>
      <div className="display-vans-offers">
        {vansData.map(van => {
          return <VanComp id={van.id} img={van.imageUrl} name={van.name} price={van.price} option={van.type} key={van.id}/>
        })}
      </div>
    </div>
  );
}

export default Vans;
