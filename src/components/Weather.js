
import { KeyValue } from './KeyValue';
import './File.css';
import { Temperature } from './Temperature';
import {Date} from './Date';

export function Weather (props) {
    const {weather, isLoading} = props;

    if (isLoading) {
        return <div> LOading hehe </div>
    }

    const temperature = weather ? `${weather.current.temp_c} C` : ""

    const iconcondition = <i className='fa fa-cloud'></i>;
    const iconlocation = <i className='fa-solid fa-location-dot'></i>;
    const icontemp = <i className='fa-solid fa-temperature-half'></i>
    const iconhumid = <i className='fa-solid fa-droplet'></i>;
    const iconwind = <i className='fa-solid fa-wind'></i>;
    const title = <p>Current<br />Forecast</p>;

    return(
        <div className="container">
            <div className="date">
                <Date title = {title} value={weather.current.last_updated} />
            </div>
            <div className="first">
                <KeyValue value={weather && [weather.location.name, ",",  weather.location.country]} KeyValue={iconlocation}  />
                <KeyValue value={weather && weather.current.condition.text} KeyValue={iconcondition} />
            </div>
            <div className="second">
                <Temperature value={temperature} Temperature={icontemp}/>
            </div>
            <div className="third">
                <KeyValue value={weather && [weather.current.humidity, "%"]} KeyValue={iconhumid} />
                <KeyValue value={weather && [weather.current.wind_kph, " km/h"]} KeyValue={iconwind}/>
            </div>        
        </div>
    )
}