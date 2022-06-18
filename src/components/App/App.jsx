import React from 'react';
import './App.css';
import { HashRouter as Router, Route} from "react-router-dom";

// component imports
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';
import Thanks from '../Thanks/Thanks';

// stylesheets import
import './App.css';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

      {/* page 1 */}
      <Route path="/" exact>
        <Feeling />
      </Route>
      
      {/* page 2 */}
      <Route path="/Understanding" exact>
        <Understanding />
      </Route>
      
      {/* page 3 */}
      <Route path="/Support" exact>
        <Support />
      </Route>
      
      {/* page 4 */}
      <Route path="/Comments" exact>
        <Comments />
      </Route>
      
      {/* page 5 */}      
      <Route path="/Review" exact>
        <Review />
      </Route>
      
      {/* page 6 */}
      <Route path="/Thanks" exact>
        <Thanks />
      </Route>
      
      {/* admin */}      
      <Route path="/Admin" exact>
        <Admin />
      </Route>
      
      </div>
    </Router>
  );
}

export default App;
