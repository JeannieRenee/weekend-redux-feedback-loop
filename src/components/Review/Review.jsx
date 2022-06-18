import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function Review() {
  const history = useHistory();
  const dispatch = useDispatch();

  const feeling = useSelector((store) => store.feeling);
  const understanding = useSelector((store) => store.understanding);
  const support = useSelector((store) => store.support);
  const comments = useSelector((store) => store.comments);

  function handleSubmit() {
    let newFeedbackArray = {
      feeling,
      understanding,
      support,
      comments,
    };

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

  //handles back
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

      <button onClick={handleBack}>BACK</button>
      <button onClick={handleSubmit}>SUBMIT</button>
    </>
  );
}

export default Review;
