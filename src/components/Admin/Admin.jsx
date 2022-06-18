import { useEffect } from 'react'; 
import axios from 'axios'; 

function Admin(){
    //page load 
    useEffect(() => {
        console.log('in useEffect');
        getFeedback();
    },[])

    const getFeedback = () => {
        axios({
          method: 'GET',
          url: '/feedback'
        })
        .then((response) => {
            console.log('GET feedback', response.data);
        })
          .catch((err) => {
            console.log('GET error', error);
        });
      };

      const feedbacks = getFeedback();

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