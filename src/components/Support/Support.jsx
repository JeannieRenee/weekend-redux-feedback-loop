import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Support(){
    const dispatch = useDispatch();
    const history = useHistory();

    const [value, setValue] = useState({
        support:3
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
        type: 'SUPPORT',
        payload: Number(value)
        });
        //kick to next page
        history.push('/comments');
    };

    //handles back
    const handleBack = (event) => {
        event.preventDefault();
        //kick to previous page
        history.push('/understanding');
    };

    return (
        <>
        <h2>How well are you being supported?</h2>
        <form>
                <input type="radio" onChange={handleRating} id="support1" name="support" value="1"/>
                <label htmlFor="support1">1</label>

                <input type="radio" onChange={handleRating} id="support2" name="support" value="2"/>
                <label htmlFor="support2">2</label>

                <input type="radio" onChange={handleRating} id="support3" name="support" value="3"/>
                <label htmlFor="support3">3</label>

                <input type="radio" onChange={handleRating} id="support4" name="support" value="4"/>
                <label htmlFor="support4">4</label>
            
                <input type="radio" onChange={handleRating} id="support5" name="support" value="5"/>
                <label htmlFor="support5">5</label>
            </form>
            <br/>
            <button onClick={handleBack}>BACK</button>
            <button onClick={handleSubmit}>NEXT</button>
    </>
    )
}

export default Support; 