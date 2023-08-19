import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="left">
          <h1>So, you want to travel to</h1>
          <span>Space</span>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="right">
          <div className="explore"> Explore</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
