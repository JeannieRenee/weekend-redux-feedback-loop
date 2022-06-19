import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function Support(){
    const dispatch = useDispatch();
    const history = useHistory();

    // local states
    const [button, setButton] = useState(false);
    const [value, setValue] = useState();

    //handles change of the rating
    const handleRating = (event) => {
        setValue(
          event.target.value,
        );
    //reactivate button
    setButton(true)
    }
    
    //handles back
    const handleBack = (event) => {
        event.preventDefault();
        //kick to previous page
        history.push('/understanding');
    };

    //handles dispatch
    const handleSubmit = (event) => {
        event.preventDefault();
        // dispatch
        dispatch({
        type: 'SUPPORT',
        payload: Number(value)
        });
        //kick to next page
        history.push('/comments');
    };

    return (
        <>
            <h2>How well are you being supported?</h2>
            <FormControl >
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    row
                >
                    <FormControlLabel value="1" onChange={handleRating} control={<Radio />} label="1" labelPlacement="top"/>
                    <FormControlLabel value="2" onChange={handleRating} control={<Radio />} label="2" labelPlacement="top"/>
                    <FormControlLabel value="3" onChange={handleRating} control={<Radio />} label="3" labelPlacement="top"/>
                    <FormControlLabel value="4" onChange={handleRating} control={<Radio />} label="4" labelPlacement="top"/>
                    <FormControlLabel value="5" onChange={handleRating} control={<Radio />} label="5" labelPlacement="top"/>
                </RadioGroup>
            </FormControl>
            <br/>
            <div>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button onClick={handleBack}>BACK</Button>
                    { 
                    button ? 
                    <Button onClick={handleSubmit} >NEXT</Button>
                    :
                    <Button disabled >NEXT</Button>
                    }
                </ButtonGroup>
            </div>
        </>
    )
}

export default Support; 