import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Feelings from '../Feelings/Feelings.jsx';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Feedback from '../Feedback/Feedback';
import Admin from '../Admin/Admin';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>

        <Route path='/' exact>
          <Feelings />
        </Route>

         <Route path='/understanding'>
           <Understanding />
         </Route>

        <Route path='/support'>
          <Support />
        </Route>

        <Route path='/comments'>
          <Comments />
        </Route>

        <Route path='/review'>
          <Review />
        </Route>

        <Route path='/feedback'>
          <Feedback />
        </Route>
        
        <Route path='/admin'>
          <Admin />
        </Route>

      </Router>
    </div>
  );
}

export default App;
