import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Understanding(){
    const dispatch = useDispatch();
    const history = useHistory();

    const [value, setValue] = useState({
        understanding:3
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
        type: 'UNDERSTANDING',
        payload: value
        });
        //kick to next page
        history.push('/support');
    };

    return (
        <>
        <h2>How well are you understanding the content?</h2>
        <form>
                <input type="radio" onChange={handleRating} id="understanding1" name="understanding" value="1"/>
                <label htmlFor="understanding1">1</label>

                <input type="radio" onChange={handleRating} id="understanding2" name="understanding" value="2"/>
                <label htmlFor="understanding2">2</label>

                <input type="radio" onChange={handleRating} id="understanding3" name="understanding" value="3"/>
                <label htmlFor="understanding3">3</label>

                <input type="radio" onChange={handleRating} id="understanding4" name="understanding" value="4"/>
                <label htmlFor="understanding4">4</label>
            
                <input type="radio" onChange={handleRating} id="understanding5" name="understanding" value="5"/>
                <label htmlFor="understanding5">5</label>
            </form>
            <br/>
            <button onClick={handleSubmit}>NEXT</button>
            <Link to="/Feeling">BACK</Link>

    </>
    )
}

export default Understanding; 