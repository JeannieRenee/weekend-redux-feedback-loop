import { Link } from 'react-router-dom';

function Support(){
    return (
        <>
        <h2>How well are you being supported?</h2>
        <form>
            <input type="radio" id="support1" name="support" value="1"/>
            <label for="support1">1</label>

            <input type="radio" id="support2" name="support" value="2"/>
            <label for="support2">2</label>

            <input type="radio" id="support3" name="support" value="3"/>
            <label for="support3">3</label>

            <input type="radio" id="support4" name="support" value="4"/>
            <label for="support4">4</label>
    
            <input type="radio" id="support5" name="support" value="5"/>
            <label for="support5">5</label>
        </form>
        <br/>
        <Link to='/Comments'>NEXT</Link>
    </>
    )
}

export default Support; 