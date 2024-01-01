import React from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

function HostVanDetail() {
  const params = useParams();
  const [vanInfo, setVanInfo] = useState(null);
  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanInfo(data.vans[0]));
  }, []);
  console.log(vanInfo);
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <div className="van-details-container">
      <Link to=".." relative="path" className="go-back-to-vans">
        <FaArrowLeft />
        <p>Go back to all vans</p>
      </Link>
      <div className="van-details-wrapper">
        {vanInfo ? (
          <div className="host-van-detail-wrapper">
            <div className="host-van-info">
              <img src={vanInfo.imageUrl} style={{ width: "150px" }} />
              <div>
                <span className={`van-type ${vanInfo.type} selected`}>
                  {vanInfo.type}
                </span>
                <p className="van-name">{vanInfo.name}</p>
                <p className="van-price">${vanInfo.price}/day</p>
              </div>
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}

        <nav className="host-van-detail-nav">
          <NavLink style={({isActive}) => isActive ? activeStyle : null} end to=".">Details</NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyle : null} to="pricing">Pricing</NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyle : null} to="photos">Photos</NavLink>
        </nav>

        <Outlet context={[vanInfo]}/>
      </div>
    </div>
  );
}

export default HostVanDetail;
