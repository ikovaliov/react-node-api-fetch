import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Pages/Home';
function App() {
  return (
    <Router>
      <div className='app'>
        <div className='content'>
          <div className='container'>
            <div className='columns'>
              <div className='column'>
                <Route exact path='/' component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
