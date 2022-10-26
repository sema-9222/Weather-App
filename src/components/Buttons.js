import './Buttons.css';

export function Buttons (props) {
    return(
        <button className="btns" onClick={props.onClick}  value={props.value}>{props.Buttons}</button>
    )
}