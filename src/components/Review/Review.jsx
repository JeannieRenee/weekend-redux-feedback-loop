import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Review(){
    const store = useSelector(store => store);
    

    return (
        <>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {store.feeling}</p>
            <p>Understanding: {store.comprehension} </p>
            <p>Support:  {store.support}</p>
            <p>Comments:  {store.comments}</p>

            <Link to='/Thanks'>SUBMIT</Link>
        </>
    )
}

export default Review; 