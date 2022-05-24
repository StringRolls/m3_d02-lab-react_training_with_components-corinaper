import '../App.css';

export default function IdCard(props){
    return(
    <div className='card'>
        <img className="images" src={props.picture} alt=""></img>
        <div className='details'>
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            {/* <p>Gender: {props.gender}</p> */}
            <p>Country:  {props.country} </p>
        </div>
    </div>
    )
}