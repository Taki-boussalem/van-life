import React from "react";
import VanComp from "../components/vanComp.jsx";
import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import getVans from "../api";

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  console.log(searchParams.getAll("type"));
  const [vansData, setVansData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(function () {
    async function loadVansData() {
      setLoading(true);
      const data = await getVans();
      setVansData(data);
      setLoading(false);
    }
    loadVansData();
  }, []);
  const displayedVansData = typeFilter
    ? vansData.filter((el) => el.type.toLowerCase() === typeFilter)
    : vansData;

  function handleFilterChange(key, value) {
    setSearchParams((previousParam) => {
      if (!value) {
        previousParam.delete(key);
      } else {
        previousParam.set(key, value);
      }
      return previousParam;
    });
  }

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="van-page">
      <div className="van-options">
        <h1>Explore our vans options</h1>
        <div>
          <button
            onClick={() => handleFilterChange("type", "simple")}
            className={`van-options-button simple ${
              typeFilter === "simple" ? "selected" : ""
            }`}
          >
            Simple
          </button>
          <button
            onClick={() => handleFilterChange("type", "luxury")}
            className={`van-options-button luxury ${
              typeFilter === "luxury" ? "selected" : ""
            }`}
          >
            Luxury
          </button>
          <button
            onClick={() => handleFilterChange("type", "rugged")}
            className={`van-options-button rugged ${
              typeFilter === "rugged" ? "selected" : ""
            }`}
          >
            Rugged
          </button>
          {typeFilter && (
            <button onClick={() => handleFilterChange("type", null)}>
              <p>clear filter</p>
            </button>
          )}
        </div>
      </div>
      <div className="display-vans-offers">
        {displayedVansData.map((van) => {
          return (
            <VanComp
              id={van.id}
              img={van.imageUrl}
              name={van.name}
              price={van.price}
              option={van.type}
              key={van.id}
              searchParams={searchParams}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Vans;
