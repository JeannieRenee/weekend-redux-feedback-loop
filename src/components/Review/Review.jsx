import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Review(){
    const history = useHistory(); 
    const store = useSelector(store => store);
    const dispatch = useDispatch();

    const feeling = useSelector(store => store.feeling);
    const comprehension = useSelector(store => store.comprehension);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);


    function handleSubmit(){
        let newFeedbackObject = {
            feeling: {feeling},
            understanding: {comprehension},
            support:  {support},
            comments: {comments}
        };
        console.log(newFeedbackObject)

        // dispatch
        dispatch({
            type: 'FEEDBACK',
            payload: newFeedbackObject
            });
            //kick to next page
            history.push('/thanks');
        };

    return (
        <>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {feeling}</p>
            <p>Understanding: {comprehension} </p>
            <p>Support:  {support}</p>
            <p>Comments:  {comments}</p>

            <button onClick={handleSubmit}>SUBMIT</button>
            <Link to="/comments">BACK</Link>

        </>
    )
}

export default Review; 