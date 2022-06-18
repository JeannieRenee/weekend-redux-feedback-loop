import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Review(){
    const history = useHistory(); 
    const dispatch = useDispatch();

    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);


    function handleSubmit(){
        let newFeedbackArray = {
            feeling,
            understanding,
            support,
            comments
        };
    
        // dispatch
        dispatch({
            type: 'FEEDBACK',
            payload: newFeedbackArray
        });

        //kick to next page
        history.push('/thanks');
        };

    return (
        <>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {feeling}</p>
            <p>Understanding: {understanding} </p>
            <p>Support:  {support}</p>
            <p>Comments:  {comments}</p>

            <button onClick={handleSubmit}>SUBMIT</button>
            <Link to="/comments">BACK</Link>
        </>
    )
}

export default Review; 