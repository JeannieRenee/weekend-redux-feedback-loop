import { Link } from 'react-router-dom';


function Understanding(){
    return (
        <>
        <h2>How well are you understanding the content?</h2>
        <input 
            id="understanding" 
            type="range" 
            min="0"
            max="10"
        /> 
        <Link to='/Support'>NEXT</Link>
    </>
    )
}

export default Understanding; 