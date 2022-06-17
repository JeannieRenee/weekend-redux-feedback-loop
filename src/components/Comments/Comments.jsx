import { Link } from 'react-router-dom';


function Comments(){
    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <input 
                id="comments" 
                type="text" 
                placeholder="feeling?"
            /> 
            <Link to='/Review'>NEXT</Link>
        </>
    )
}

export default Comments; 