import { useSelector, useDispatch } from 'react-redux';

function Admin(){
    const feedbacks = useSelector(store => store.feedback)
    
    return ( 
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
                    return <tr>
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