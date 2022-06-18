import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';



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
    
        axios.post(`/feedback`, newFeedbackArray)
          .then((response) => {
            console.log("POST /feedback", response);
            dispatch({
              type: "FEEDBACK",
              payload: response.data,
            });
          })
          .catch((error) => {
            console.log("Error posting feedback", error);
          });
          history.push('/thanks')

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