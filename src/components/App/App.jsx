import React from 'react';
import axios from 'axios';
import './App.css';
// component imports
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Feeling />
      <Understanding />
      <Support />
      <Comments />

    </div>
  );
}

export default App;
