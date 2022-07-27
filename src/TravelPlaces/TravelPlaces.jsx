import './TravelPlaces.css';

export default function TravelPlaces(props) {
    return (
      <div className="app">
        <img src={props.imageUrl} className="main-image"/>
        <div className="description-section">
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
          <h2 className="heading">{props.title}</h2>
          <h5 className="dates">{`${props.startDate} - ${props.endDate}`}</h5>
          <p className="description">{props.description}</p>
        </div>
      </div>
    );
  }