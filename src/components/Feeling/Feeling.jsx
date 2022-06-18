import { Link } from 'react-router-dom';

function Feeling(){
    return (
        <>
            <h2>How are you feeling today?</h2>
            <form>
                <input type="radio" id="feeling1" name="feeling" value="1"/>
                <label for="feeling1">1</label>

                <input type="radio" id="feeling2" name="feeling" value="2"/>
                <label for="feeling2">2</label>

                <input type="radio" id="feeling3" name="feeling" value="3"/>
                <label for="feeling3">3</label>

                <input type="radio" id="feeling4" name="feeling" value="4"/>
                <label for="feeling4">4</label>
            
                <input type="radio" id="feeling5" name="feeling" value="5"/>
                <label for="feeling5">5</label>
            </form>
            <br/>
            <Link to='/Understanding'>NEXT</Link>
        </>  
    )
}

export default Feeling; 