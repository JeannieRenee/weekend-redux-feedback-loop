import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Feeling(){
    const dispatch = useDispatch();
    const history = useHistory();

    const [value, setValue] = useState({
        feeling:3
    });

    //handles change of the rating
    const handleRating = (event) => {
        setValue(
          event.target.value,
        );
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
            <form>
                <input type="radio" onChange={handleRating} id="feeling1" name="feeling" value="1"/>
                <label htmlFor="feeling1">1</label>

                <input type="radio" onChange={handleRating} id="feeling2" name="feeling" value="2"/>
                <label htmlFor="feeling2">2</label>

                <input type="radio" onChange={handleRating} id="feeling3" name="feeling" value="3"/>
                <label htmlFor="feeling3">3</label>

                <input type="radio" onChange={handleRating} id="feeling4" name="feeling" value="4"/>
                <label htmlFor="feeling4">4</label>
            
                <input type="radio" onChange={handleRating} id="feeling5" name="feeling" value="5"/>
                <label htmlFor="feeling5">5</label>
            </form>
            <br/>
            <button onClick={handleSubmit}>NEXT</button>
        </>  
    )
}

export default Feeling; 
