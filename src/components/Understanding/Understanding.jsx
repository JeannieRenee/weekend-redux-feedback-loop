import { Link } from 'react-router-dom';


function Understanding(){
    return (
        <>
        <h2>How well are you understanding the content?</h2>
        <form>
            <input type="radio" id="understanding1" name="understanding" value="1"/>
            <label for="understanding1">1</label>

            <input type="radio" id="understanding2" name="understanding" value="2"/>
            <label for="understanding2">2</label>

            <input type="radio" id="understanding3" name="understanding" value="3"/>
            <label for="understanding3">3</label>

            <input type="radio" id="understanding4" name="understanding" value="4"/>
            <label for="understanding4">4</label>
    
            <input type="radio" id="understanding5" name="understanding" value="5"/>
            <label for="understanding5">5</label>
        </form>
        <br/>
        <Link to='/Support'>NEXT</Link>
    </>
    )
}

export default Understanding; 