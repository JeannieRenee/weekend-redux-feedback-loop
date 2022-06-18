import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios'; 


function Review(){
    const store = useSelector(store => store);

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

        axios.post(`/feedback`, newFeedbackObject)
        .then(response => {
            console.log('POST success');
        })
        .catch( error => {
            console.log('POST error', error);
        });
    }


    return (
        <>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {feeling}</p>
            <p>Understanding: {comprehension} </p>
            <p>Support:  {support}</p>
            <p>Comments:  {comments}</p>

            <button onClick={handleSubmit}>SUBMIT</button>
        </>
    )
}

export default Review; 