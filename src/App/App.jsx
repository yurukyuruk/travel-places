import './App.css';
import TravelPlaces from '../TravelPlaces/TravelPlaces.jsx';
import Header from '../Header/Header.jsx';
import data from "../data.js";

export default function App() {
  const travelSections = data.map(eachData => {
    return(
      <TravelPlaces 
        key={eachData.key}
        title={eachData.title}
        location= {eachData.location}
        googleMapsUrl= {eachData.googleMapsUrl}
        startDate= {eachData.startDate}
        endDate= {eachData.endDate}
        description= {eachData.description}
        imageUrl= {eachData.imageUrl}
      />
    )
  })
  return (
    <div>
      <Header />
      {travelSections}
    </div>
  );
}


