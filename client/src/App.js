import "./App.css";
import spacexlogo from "./spacexlogo.png";

function App() {
  return (
    <div className="App">
      <img
        src={spacexlogo}
        alt="SpaceX"
        style={{ width: 300, display: "block", margin: "auto" }}
      />
    </div>
  );
}

export default App;
