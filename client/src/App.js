import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Launch from "./components/Launch";
import spacexlogo from "./spacexlogo.png";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <div className="img-container" style={{ backgroundColor: "black" }}>
            <img
              src={spacexlogo}
              alt="SpaceX"
              style={{
                width: "auto",
                display: "block",
                margin: "auto"
              }}
            />
          </div>
          <br />
          <hr />
          <Route exact path="/" component={Home} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </>
  );
}

export default App;
