import { Link } from 'react-router-dom';

function Feeling(){
    return (
        <>
            <h2>How are you feeling today?</h2>
            <input 
                id="feeling" 
                type="range" 
                min="0"
                max="10"
            /> 
            <Link to='/Understanding'>NEXT</Link>
        </>  
    )
}

export default Feeling; 