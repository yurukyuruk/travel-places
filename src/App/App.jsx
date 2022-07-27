import './App.css';

export default function App() {
  return (
    <div className="App">
      <img className="main-image"/>
      <div className="location-section">
        <div className="city-section">
          <img className="location-symbol"/>
          <h5 className="city-name"></h5>
        </div>
        <div className="map-section">
          <a className="map-link">
            <p className="map-text"></p>
          </a>
        </div>    
      </div> 
      <h2 className="header"></h2>
      <h6 className="dates"></h6>
      <p className="description"></p>
    </div>
  );
}


