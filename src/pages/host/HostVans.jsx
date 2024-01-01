import React, { useEffect, useState } from "react";
import VanCardHost from "../../components/VanCardHost";

function HostVans({ vansData }) {
  const [vansInfo, setVansInfo] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVansInfo(data.vans));
  });
  const vanListElement = vansInfo.map((vanData) => (
    <VanCardHost
      key={vanData.id}
      id={vanData.id}
      imageUrl={vanData.imageUrl}
      name={vanData.name}
      price={vanData.price}
    />
  ))
  return (
    <div className="host-vans">
      <h1>Your listed vans</h1>
      <div className="host-vans-list">
        {vansInfo.length > 0 
        ? vanListElement
        : <h2>Loading...</h2>
        }
      </div>
    </div>
  );
}

export default HostVans;
