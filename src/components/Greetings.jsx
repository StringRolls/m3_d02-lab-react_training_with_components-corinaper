import '../App.css';

export default function Greetings(props){
    return(
    <div className='card'>
       <p>{props.lang}</p>
       {props.children}
    </div>
    )
}