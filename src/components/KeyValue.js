import './File.css';

export function KeyValue (props) {
    return (
        <p className="data"> {props.KeyValue} {props.title} {props.value}</p>
    )
}