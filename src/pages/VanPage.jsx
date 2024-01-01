import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function VanPage() {
  const params = useParams();
  const [vanInfo, setVanInfo] = useState(null);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanInfo(data.vans));
  }, [params.id]);
  console.log(vanInfo);

  return (
    <div className="van-details-container">
      {vanInfo ? (<div className="van-details">
        <Link to="/vans" className="go-back-to-vans">
          <FaArrowLeft />
          <p>Go back to all vans</p>
        </Link>
        <img src={vanInfo.imageUrl} />
        <span className={`van-type ${vanInfo.type}`}>Simple</span>
        <h1>{vanInfo.name}</h1>
        <p className="van-pricing">${vanInfo.price}/day</p>
        <p className="van-description">{vanInfo.description}</p>
        <button className="van-rent">Rent this van</button>
      </div>) : (<h2>Loading...</h2>)}
    </div>
  );
}

export default VanPage;
