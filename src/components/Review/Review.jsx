import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Review() {
  const history = useHistory();
  const dispatch = useDispatch();

  // store imports
  const feeling = useSelector((store) => store.feeling);
  const understanding = useSelector((store) => store.understanding);
  const support = useSelector((store) => store.support);
  const comments = useSelector((store) => store.comments);

  // this function creates an object from items stored in state
  function handleSubmit() {
    let newFeedbackArray = {
      feeling,
      understanding,
      support,
      comments,
    };

    // axios call to post object
    axios
      .post(`/feedback`, newFeedbackArray)
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
    history.push("/thanks");
  }

  //handles back button
  const handleBack = (event) => {
    event.preventDefault();
    //kick to previous page
    history.push("/comments");
  };

  return (
    <>
      <h2>Review Your Feedback</h2>
      <p>Feelings: {feeling}</p>
      <p>Understanding: {understanding} </p>
      <p>Support: {support}</p>
      <p>Comments: {comments}</p>
      
      <div className='buttons'>
        <ButtonGroup variant="text" aria-label="text button group">
            <Button onClick={handleBack}>BACK</Button>
            <Button onClick={handleSubmit}>SUBMIT</Button>
        </ButtonGroup>
      </div>
      <p>Page 5/5</p>
    </>
  );
}

export default Review;
