import { useState } from 'react';
import './App.css';
import { Weather } from './components/Weather';
import normal from './img/normal.png';
import cloudy from './img/2.jpg';
import overcast from './img/background.jpg';


function App() {

  const [weather, setWeather] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [imgURL, setImgURL] = useState(normal);

  async function onClick () {
    setIsLoading(true);
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=55cbdff15f4f49aaa9f132150210303&q= ${query}`);
    let data = await response.json();
    setWeather(data);
    setIsLoading(false); 
    const condition = data.current.condition.text; 
    background(condition);
  }

  function background (description) {
         
      switch (description) {

        case "Partly cloudy":
          setImgURL(cloudy);
          console.log("cloudy");
        break;
    
        case "Clear":
          setImgURL(overcast);  
          console.log("clear");
        break;
      
        default:
          setImgURL(normal);
          console.log("default");
        break;
    }

  } 


  return (
    <div className="App" style={{backgroundImage: `url(${imgURL})`}}>
        <div className= "card">
            <input className='query' type="text" placeholder='Search a city...' value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className='btn' onClick={onClick}>RADEK</button>
            <Weather weather ={weather} isLoading={isLoading} />
        </div>
    </div>
  );

}


export default App;