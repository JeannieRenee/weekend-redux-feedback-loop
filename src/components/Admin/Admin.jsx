import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import axios from 'axios';
// stylesheets import
import './Admin.css';

function Admin(){
    const dispatch = useDispatch();
    const feedbacks = useSelector(store => store.feedback);

    // this is like jQ ready now, runs on page load. 
    useEffect(() => {
        getFeedback();
      }, []);
    
    // Function that houses axios call to database 
    // to get the list of feedback.
    const getFeedback = () => {
      axios.get('/feedback')
        .then((response) => {
          console.log("GET /feedback", response);
          dispatch({
            type: "FEEDBACK",
            payload: response.data,
          });
        })
        .catch((error) => {
          console.log("Error getting feedback", error);
        });
    };

    return ( 
        <>
          <table>
            <thead>
              <tr>
                <th>Feeling</th>
                <th>Understanding</th>                
                <th>Support</th>
                <th>Comments</th>
              </tr>
           </thead>
            <tbody>
              {feedbacks.map((feedback) => {
                return <tr key={feedback.id}>
                  <td>{feedback.feeling}</td>
                  <td>{feedback.understanding}</td>                
                  <td>{feedback.support}</td>
                  <td>{feedback.comments}</td>
                </tr>
              })} 
            </tbody>
          </table>
        </>
    )
}

export default Admin; 