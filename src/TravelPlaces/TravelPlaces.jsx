import './TravelPlaces.css';

export default function TravelPlaces(props) {
    return (
      <div className="App">
        <img src={props.imageUrl} className="main-image"/>
        <div className="location-section">
          <div className="city-section">
            <img src="./photos/location-icon.jpg" className="location-symbol"/>
            <h5 className="city-name">{props.location}</h5>
          </div>
          <div className="map-section">
            <a href={props.googleMapsUrl} className="map-link">
              <p className="map-text">View on Google Maps</p>
            </a>
          </div>    
        </div> 
        <h2 className="header">{props.title}</h2>
        <h6 className="dates">{`${props.startDate} - ${props.endDate}`}</h6>
        <p className="description">{props.description}</p>
      </div>
    );
  }