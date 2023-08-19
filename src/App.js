import "./App.scss";
import { Outlet, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import Home from "./pages/Home/Home";
import { useRef, useState } from "react";

function App() {
  const [planetNumber, setPlanetNumber] = useState(0);
  const navigation = useRef();

  const tabChange = (e) => {
    setPlanetNumber(e.currentTarget.dataset.index);
    let children = navigation.current.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };

  const Layout = () => {
    return (
      <div className="container">
        <Routes>
          <Outlet />
        </Routes>
      </div>
    );
  };

  return (
    <div className="App">
      <Navbar />
      <Routes path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="destination"
          element={
            <Destination planetNumber={planetNumber} tabChange={tabChange} navigation={navigation} />
          }
        />

        <Route
          path="crew"
          element={<Crew planetNumber={planetNumber} tabChange={tabChange} navigation={navigation} />}
        />
        <Route path="technology" 
        element={<Technology planetNumber={planetNumber} tabChange={tabChange} navigation={navigation} />} />
      </Routes>
    </div>
  );
}

export default App;
