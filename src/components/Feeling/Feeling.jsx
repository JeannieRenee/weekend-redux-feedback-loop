import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

//mui imports
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

//mui icon imports
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

function Feeling(){
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

    //handles dispatch
    const handleSubmit = (event) => {
        event.preventDefault();
        // dispatch
        dispatch({
            type: 'FEELING',
            payload: Number(value)
        });
        //kick to next page
        history.push('/understanding');
    };

    return (
        <>
            <h2>How are you feeling today?</h2>
            <br/>
            <SentimentVeryDissatisfiedIcon fontSize="large" className="verybad"/>
            <SentimentDissatisfiedIcon fontSize="large" className="bad"/>
            <SentimentNeutralIcon fontSize="large" className="neutral"/>
            <SentimentSatisfiedIcon fontSize="large" className="good"/>
            <SentimentSatisfiedAltIcon fontSize="large" className="verygood"/>
            <br/>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    row
                >
                    <FormControlLabel value="1" onChange={handleRating} control={<Radio />} label="" labelPlacement="bottom"/>
                    <FormControlLabel value="2" onChange={handleRating} control={<Radio />} label="" labelPlacement="bottom"/>
                    <FormControlLabel value="3" onChange={handleRating} control={<Radio />} label="" labelPlacement="bottom"/>
                    <FormControlLabel value="4" onChange={handleRating} control={<Radio />} label="" labelPlacement="bottom"/>
                    <FormControlLabel value="5" onChange={handleRating} control={<Radio />} label="" labelPlacement="bottom"/>
                </RadioGroup>
            </FormControl>
            <br/>
            <div className="buttons">
                { 
                button ? 
                <Button onClick={handleSubmit} variant="text" >NEXT</Button>
                :
                <Button disabled variant="text" >NEXT</Button>
                }
            </div>
            <p>Page 1/5</p>
        </>  
    )
}

export default Feeling; 
