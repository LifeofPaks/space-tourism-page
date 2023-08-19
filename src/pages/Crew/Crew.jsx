import React from "react";
import "./Crew.scss";
import { crewData } from "../../helpers/data";


const Crew = ({tabChange, planetNumber, navigation}) => {
  const item = crewData[planetNumber]

  return (
    <div className="crew">
      <div className="hero">
        <div className="left">
          <h1>
            <span>02</span>
            Meet your crew
          </h1>

          <h2>{item.role}</h2>
          <h3>{item.name}</h3>
          <p>{item.bio}</p>

          <div className="navDots" ref={navigation}>
            <div data-index={0} className="dot active" onClick={tabChange}></div>
            <div data-index={1} className="dot" onClick={tabChange}></div>
            <div data-index={2} className="dot" onClick={tabChange}></div>
            <div data-index={3} className="dot" onClick={tabChange}></div>
          </div>
        </div>

        <div className="right">
            <img src={item.image} alt="image"/>
        </div>
      </div>
    </div>
  );
};

export default Crew;
