import { useSelector } from 'react-redux';

function Admin(){
    const feedbacks = useSelector(store => store.feedback);
    console.log('feedback', feedbacks);

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