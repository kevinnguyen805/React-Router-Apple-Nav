import React from 'react';
import './App.css';
import apple from './apple.svg'

function App() {
  return (
    <div className="App">
      <nav>
        <img src={apple} alt="apple logo" />
        
      </nav>


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