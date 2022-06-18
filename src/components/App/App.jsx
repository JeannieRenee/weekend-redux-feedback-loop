import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route} from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// component imports
import Home from '../Home/Home';
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
  // baby imports
  const dispatch = useDispatch();

  //page load 
  useEffect(() => {
    console.log('in useEffect');
    getFeedback();
  },[])

  const getFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    })
    .then((response) => {
      dispatch({
        type: 'GET_FEEDBACK',
        payload: response.data
      })
    })
      .catch((err) => {
        console.log('Err in GET', err);
    })
  }

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

      {/* home */}
      <Route path="/" exact>
        <Home />
      </Route>

      {/* page 1 */}
      <Route path="/Feeling" exact>
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
