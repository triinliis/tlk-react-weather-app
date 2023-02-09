import React from 'react';
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tallinn"/>
        <footer>
          This project was coded by {" "}
          <a href="https://beamish-pie-414eb4.netlify.app/" target="_blank" rel="noreferrer">
            Triin Liis
          </a>{" "}
          and is{" "}
          <a href="https://github.com/triinliis/tlk-react-weather-app" target="_blank" rel="noreferrer">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
