import { Link } from 'react-router-dom';

function Support(){
    return (
        <>
        <h2>How well are you being supported?</h2>
        <input 
            id="support" 
            type="range" 
            min="0"
            max="10"
        /> 
        <Link to='/Comments'>NEXT</Link>
    </>
    )
}

export default Support; 