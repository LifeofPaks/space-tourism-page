import React from "react";
import "./Technology.scss";
import {technologyData} from '../../helpers/data'

const Technology = ({tabChange, planetNumber, navigation}) => {
  const item = technologyData[planetNumber]

  return (
    <div className="technology">
      <div className="hero">
        <div className="left">
          <h1>
            <span>03</span>
            Space launch 101
          </h1>

          <div className="wrapper">
            <div className="navigate" ref={navigation}>
              <div data-index={0} onClick={tabChange} className="active">1</div>
              <div data-index={1} onClick={tabChange}>2</div>
              <div data-index={2} onClick={tabChange}>3</div>
            </div>

            <div className="desc">
              <h2>The terminology...</h2>
              <h3> {item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </div>

        <div className="right">
          <img src={item.landscape} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
