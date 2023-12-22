import React from "react";
import secImg from "/public/image 56.png";
export function About() {
  return (
    <div className="about">
      <img src={secImg} />
      <div className="par-wrapper">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) 
        </p>
        <p>Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>
        <div className="exploring-vans">
          <h2>Your distany is waiting.</h2>
          <h2>Your van is ready.</h2>
          <button className="explore-van-btn">Explore our vans</button>
        </div>
      </div>
    </div>
  );
}
