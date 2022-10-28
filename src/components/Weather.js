
import { KeyValue } from './KeyValue';
import './File.css';
import { Temperature } from './Temperature';
import {Date} from './Date';
import loading from './loading.gif';
import weathericon from './temperature.png';
import { Icon } from '@iconify/react';
import { Icons } from './Icons';




export function Weather (props) {
    const {weather, isLoading} = props;

    if (isLoading) {
        return <img className='loading-gif' src={loading} alt="Loading..." ></img>;
    }

    const temperature = weather ? `${weather.current.temp_c}°C` : ""

    const iconcondition = <Icons className='fa fa-cloud' />;
    const iconlocation = <Icons  className='fa-solid fa-location-dot' />;
    const icontemp = <Icon style={{marginRight: "10px"}} className='icon' icon="carbon:temperature-feels-like" />
    const iconhumid = <Icons  className='fa-solid fa-droplet' />;
    const iconwind = <Icons  className='fa-solid fa-wind' />;
    const icondate = <Icons className='fas fa-calendar-alt' />;
    const weatheri = <img className='weathericon' src={weathericon} alt="weather icon" ></img>;
    const title = <div className='titlecont'>
        <p className= "title1">Current </p> <p className= "title1">Forecast</p>
        </div>;

    return(
        <div className="container">
            <div className="date">
                <Date title = {title}/>
            </div>
            <div className='line'></div> 
            <div className="first">
                <KeyValue value={weather && [weather.location.name, ",",  weather.location.country]} KeyValue={iconlocation}  />
                <KeyValue value={weather.current.last_updated} KeyValue={icondate} />
            </div>
            <div className="second">
                <Temperature value={temperature} Temperature={weatheri}/>
            </div>
            <div className="third">
                <KeyValue value={weather && [weather.current.feelslike_c, "°C"]} KeyValue={icontemp} />
                <KeyValue value={weather && weather.current.condition.text} KeyValue={iconcondition} />
            </div>
            <div className="fourth">
                <KeyValue value={weather && [weather.current.humidity, "%"]} KeyValue={iconhumid} />
                <KeyValue value={weather && [weather.current.wind_kph, " km/h"]} KeyValue={iconwind}/>
            </div>        
        </div>
    )
}