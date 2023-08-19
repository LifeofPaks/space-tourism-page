import React, { useRef, useState } from "react";
import "./Destination.scss";
import { destinationsData } from "../../helpers/data";

const Destination = ({tabChange, planetNumber, navigation}) => {
  const item = destinationsData[planetNumber];

  return (
    <div className="destination">
      <div className="hero">
        <div className="left">
          <h1>
            <span>01</span>
            <p>Pick your destination</p>
          </h1>

          <img src={item.image} alt="mars" />
        </div>

        <div className="right">
          <div className="links" ref={navigation}>
            <button data-index={0} className="link active" onClick={tabChange}>
              <p>moon</p>
            </button>

            <button data-index={1} className="link" onClick={tabChange}>
              <p>mars</p>
            </button>

            <button data-index={2} className="link" onClick={tabChange}>
              <p>europa</p>
            </button>

            <button data-index={3} className="link" onClick={tabChange}>
              <p>titan</p>
            </button>
          </div>

          <div className="content">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
          </div>

          <div className="details">
            <div className="col">
              <p>{item.distance}</p>
              <h3>{item.travel}</h3>
            </div>

            <div className="col">
              <p> Est. travel time</p>
              <h3>7 years</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
