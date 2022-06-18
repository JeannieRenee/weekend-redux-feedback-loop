import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Comments(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [comment, setComment] = useState('');

    //handles comment change
    const handleComment = (event) => {
        setComment(
          event.target.value,
        );
    }

    //handles dispatch
    const handleSubmit = (event) => {
        event.preventDefault();
        // dispatch
        dispatch({
        type: 'COMMENTS',
        payload: comment
        });
        //kick to next page
        history.push('/review');
    };
    
    //handles back
    const handleBack = (event) => {
        event.preventDefault();
        //kick to previous page
        history.push('/support');
    };

    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <input 
                onChange={handleComment}
                id="comments" 
                type="text" 
                placeholder="feeling?"
                size="50"
            /> 
            <br/>
            <button onClick={handleBack}>BACK</button>
            <button onClick={handleSubmit}>NEXT</button>
        </>
    )
}

export default Comments; 
