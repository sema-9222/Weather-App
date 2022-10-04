import { useState } from 'react';
import './App.css';
import { Weather } from './components/Weather';
import normal from './img/background.jpg';
import cloudy from './img/cloudy.jpg';
import clear from './img/clear.jpg';
import foggy from './img/foggy.jpg';
import partlyc from './img/partlycloudy.jpg';
import rainy from './img/rainy.jpg';
import sunny from './img/sunny.jpg';
import snowy from './img/snowy.jpg';



function App() {

  const [weather, setWeather] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [imgURL, setImgURL] = useState(normal);
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(true); 
  }

  async function onClick () {
    setIsLoading(true);
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=55cbdff15f4f49aaa9f132150210303&q= ${query}`);
    let data = await response.json();
    setWeather(data);
    setIsLoading(false); 
    const condition = data.current.condition.text; 
    background(condition);
    handleClick();
  }

  function background (description) {
         
      switch (description) {

        case "Partly cloudy":
          setImgURL(partlyc);
        break;
    
        case "Clear":
          setImgURL(clear);  
        break;

        case "Cloudy":
        case "Overcast":
          setImgURL(cloudy);  
        break;

        case "Foggy":
        case "Mist":
          setImgURL(foggy);  
        break;
      
        case "Rainy":
        case "Light rain":
        case "Patchy rain possible":
          setImgURL(rainy);  
        break;

        case "Sunny":
          setImgURL(sunny);  
        break;

        case "Snowy":
          setImgURL(snowy);  
        break;

        default:
          setImgURL(normal);
        break;
    }

  } 


  return (
    <div className="App" >
      <div className="photo" style={{backgroundImage: `url(${imgURL})`}}>
        <div className= "card">
            <input className='query' type="text" placeholder='Search a city...' value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className='btn' onClick={onClick}>
                <i className="gg-search"></i>
            </button>
          </div>
      </div>
      <div className="info">
        {
           isShown ? <Weather weather ={weather} isLoading={isLoading} /> : null
        }
      </div>
    </div>
  );

}


export default App;