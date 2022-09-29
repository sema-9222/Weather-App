
import { KeyValue } from './KeyValue';

export function Weather (props) {
    const {weather, isLoading} = props;

    if (isLoading) {
        return <div> LOading hehe </div>
    }

    const temperature = weather ? `${weather.current.temp_c} C` : ""


    return(
        <div>
            <KeyValue title="City" value={weather && weather.location.name}/>
            <KeyValue title= "Country" value={weather && weather.location.country}/>
            <KeyValue title= "Temperature" value={temperature}/>
            <KeyValue title = "Condition" value={weather && weather.current.condition.text} />
        </div>
    
    )
}