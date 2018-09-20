import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './style/App.css';

import Dashboard from './components/dashboard/dash-index';
import Landing from './components/landing/landing-index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <header className='Header'>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='dashboard'>Dashboard</Link></li>
              </ul>
            </nav>
          </header>

          <main>
            <Route exact path='/'
              component={Landing} />

            <Route exact path='/dashboard'
              component={Dashboard} />
          </main>
          <footer>
            &copy; 2018 John Miester

            <Route path='/dashboard'
              component={() => <p>Dashboard Footer</p>} />
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
