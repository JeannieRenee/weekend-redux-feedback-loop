import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route} from "react-router-dom";

// component imports
import Home from '../Home/Home';
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
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/Feeling" exact>
        <Feeling />
      </Route>

      <Route path="/Understanding" exact>
        <Understanding />
      </Route>

      <Route path="/Support" exact>
        <Support />
      </Route>

      <Route path="/Comments" exact>
        <Comments />
      </Route>
      
      <Route path="/Review" exact>
        <Review />
      </Route>

      <Route path="/Thanks" exact>
        <Thanks />
      </Route>
      
      <Route path="/Admin" exact>
        <Admin />
      </Route>
      
      </div>
    </Router>
  );
}

export default App;
