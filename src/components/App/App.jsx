import React from 'react';
import { HashRouter as Router, Route} from "react-router-dom";
//import stylesheet
import './App.css';
// component imports
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';
import Thanks from '../Thanks/Thanks';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <img 
            height="124.5"
            width="470"
            src="https://www.primeacademy.io/hs-fs/hubfs/Branding/Prime%20Brand/Prime%20Logo%20White%20Horizontal-1.png?width=1880&height=498&name=Prime%20Logo%20White%20Horizontal-1.png" 
            alt="Prime Logo"
          />
          <h1 className='App-title'>Daily Reflections</h1>
        </header>
        <div className='body'>
        {/* page 1/Home */}
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
        
        {/* admin page */}      
        <Route path="/Admin" exact>
          <Admin />
        </Route>
        </div>
        <div className='App-footer'
          style={{
            position: "fixed",
            left: 0,
            bottom: 0,
            right: 0,
          }}
        >
        </div>
      </div>
    </Router>
  );
}

export default App;
