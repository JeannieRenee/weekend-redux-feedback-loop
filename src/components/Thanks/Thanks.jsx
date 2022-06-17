import { Link } from 'react-router-dom';


function Thanks(){
    return (
        <>
            <h2>Thanks for your feedback!</h2>

            <Link to='/feeling'>LEAVE NEW FEEDBACK</Link>
            <br/>
            <Link to='/'>Exit to Home</Link>

        </>
    )
}

export default Thanks; 