import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';

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
            <TextField multiline fullWidth id="comments" label="Comments?" variant="outlined" onChange={handleComment}/>
            <br/>
            <div className='buttons'>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button onClick={handleBack}>BACK</Button>
                    <Button onClick={handleSubmit} >NEXT</Button>
                </ButtonGroup>
            </div>
        </>
    )
}

export default Comments; 
