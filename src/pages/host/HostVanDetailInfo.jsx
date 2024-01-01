import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanDetailInfo() {
  const [vanInfo, setVanInfo] = useOutletContext();
  console.log(vanInfo);
  return (
    <div className="van-details-holder">
      {vanInfo ? (
        <>
          <h4>
            Name: <span>{vanInfo.name}</span>
          </h4>
          <h4>
            Category: <span>{vanInfo.type}</span>
          </h4>
          <h4>
            Description: <span>{vanInfo.description}</span>
          </h4>
          <h4>
            Visibility: <span>public</span>
          </h4>
        </>
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
}

export default HostVanDetailInfo;
