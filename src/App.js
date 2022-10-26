
import { useState } from 'react';
import './App.css';
import { Weather } from './components/Weather';
import normal from './img/intro.jpg';
import cloudy from './img/cloudy.jpg';
import clear from './img/clear.jpg';
import foggy from './img/foggy.jpg';
import partlyc from './img/partlycloudy.jpg';
import rainy from './img/rainy.jpg';
import sunny from './img/sunny.jpg';
import snowy from './img/snowy.jpg';
import thunder from './img/thunder.jpg';
import { Buttons } from './components/Buttons';
import logo from './img/cloudy.png';



function App() {

  const [weather, setWeather] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [imgURL, setImgURL] = useState(normal);
  const [isShown, setIsShown] = useState(false);
  
  const handleClick = event => {
    setIsShown(true); 
  }

  async function onClick (e) {
    const cityName = e.target.value;
    setIsLoading(true);
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=55cbdff15f4f49aaa9f132150210303&q= ${query || cityName} `);
    let data = await response.json();
    setWeather(data);
    setIsLoading(false);
    const condition = data.current.condition.text;
    background(condition);
    handleClick();
  }

  async function onKeyPress(e){
    if(e.key === 'Enter'){
      onClick(e);
  }

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

        case "Fog":
        case "Mist":
          setImgURL(foggy);  
        break;
      
        case "Rainy":
        case "Light rain":
        case "Patchy rain possible":
        case "Light rain shower":
        case "Moderate rain at times":
          setImgURL(rainy);  
        break;

        case "Sunny":
          setImgURL(sunny);  
        break;

        case "Snowy":
        case "Patchy light snow":
        case "snow":
          setImgURL(snowy);  
        break;

        case "Thunder":
        case "Patchy light rain with thunder":
        case "Moderate or heavy rain with thunder":
          setImgURL(thunder);  
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
            <input className='query' type="text" placeholder='Search a city...' value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={onKeyPress} />
            <button className='btn'  onClick={onClick}>
                <i className="gg-search"></i>
            </button>
        </div> 
          <div className="buttons">
            <div className="firstcon">
              <Buttons Buttons = "New York" value = "New York"  onClick={onClick}/>
              <Buttons Buttons = "London" value = "London"  onClick={onClick}/>
              <Buttons Buttons = "Warsaw" value = "Warsaw"  onClick={onClick}/>
              <Buttons Buttons = "İstanbul" value = "İstanbul"  onClick={onClick}/>
            </div>
            <div className="secondcon">
              <Buttons Buttons = "Berlin" value = "Berlin"  onClick={onClick}/>
              <Buttons Buttons = "Paris" value = "Paris"  onClick={onClick}/>
              <Buttons Buttons = "Tokyo" value = "Tokyo"  onClick={onClick}/>
              <Buttons Buttons = "Seul" value = "Seul"  onClick={onClick}/>
            </div>
        </div>
      </div>
      <div>
        {
          isShown ? null :  <div className="cont">
                                <img src={logo} alt="logo" className='logo' />
                                <div className='below'> 
                                  <h1 className='h1title'>Weather Forecast</h1>
                                  <h3 className='h3info'>Get current weather report.</h3> 
                                </div>
                            </div>
                            
        }
        
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