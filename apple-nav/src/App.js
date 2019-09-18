import React from 'react';
import {Route, NavLink} from 'react-router-dom'
import './App.css';

import Ipad from './Components/Ipad'


import apple from './apple.svg'
import search from './images/search.svg'

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <NavLink to="/" className="nav-links">
          <img src={apple} alt="apple logo" />
        </NavLink>
        <NavLink className="nav-links">Mac</NavLink>
        <NavLink to="/ipad" className="nav-links">iPad</NavLink>
        <NavLink className="nav-links">iPhone</NavLink>
        <NavLink className="nav-links">Watch</NavLink>
        <NavLink className="nav-links">TV</NavLink>
        <NavLink className="nav-links">Music</NavLink>
        <NavLink className="nav-links">Support</NavLink>
        <img src={search} alt="search logo" />
      </nav>

      <Route path="/" />
      <Route />
      <Route path="/ipad" component={Ipad}/>
      <Route />
      <Route />
      <Route />
      <Route />
    </div>
  );
}

export default App;

/*
You need to build out a few components here

1. variation of a NavWrapper component  (navigation header)

2. Reusable Nav component (turn into a navigation link for each parent category)

3. SubNav component (reusable and display sub-navigation link)


Planning phase
1. build the main top header containing Mac/iPad/Phone/Watch
    * each is a nav-link that 

*/