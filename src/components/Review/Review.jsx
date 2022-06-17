import { Link } from 'react-router-dom';

function Review(){
    return (
        <>
            <h2>Review Your Feedback</h2>
            <p>Feelings: </p>
            <p>Understanding: </p>
            <p>Support: </p>
            <p>Comments: </p>

            <Link to='/Thanks'>SUBMIT</Link>
        </>
    )
}

export default Review; 