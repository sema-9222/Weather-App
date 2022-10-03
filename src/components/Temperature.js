import './File.css';

export function Temperature (props) {
    return (
        <p className="temp">{props.Temperature} {props.title} {props.value} </p>
    )
}