import './File.css';

export function Date (props) {
    return (
        <p className="cdate"> 
            <span className='title'>{props.title}</span>
            <span className='value'>{props.value}</span> 
        </p>
    )
}