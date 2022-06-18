import axios from 'axios'; 
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function Admin(){
    const dispatch = useDispatch();
    const feedbacks = useSelector(store => store.feedback)


    //page load 
    useEffect(() => {
        console.log('in useEffect');
        getFeedback();
    },[])

    const getFeedback = () => {
        axios.get('/feedback')
        .then((response) => {
            console.log('GET feedback', response.data);
            dispatch({ type: `GET_FEEDBACK`, payload: response.data });
        })
          .catch((err) => {
            console.log('GET error', error);
        });
      };

    return (
        <table>
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Comprehension</th>                
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
    )
}

export default Admin; 