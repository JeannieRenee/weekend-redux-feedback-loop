import { useSelector } from 'react-redux'; 
import { useHistory } from 'react-router-dom';

function Admin(){
    // baby imports 
    const history = useHistory();
    const feedbacks = useSelector(store => store.feedback);
    console.log('feedback', feedbacks)

    return (
        <table>
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Comprehension</th>                
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Delete</th>
                    <th>Flag</th>
                </tr>
            </thead>
            <tbody>
                {feedbacks.map((feedback) => {
                    return <tr key={feedback.id}>
                        <td>{feedback.feeling}</td>
                        <td>{feedback.understanding}</td>                
                        <td>{feedback.support}</td>
                        <td>{feedback.comments}</td>
                        <td> <button>❌</button></td>
                        <td> <button>❓</button></td>
                </tr>
                })} 

            </tbody>
        </table>
    )
}

export default Admin; 