import React from 'react';
import Nav from './Nav';
import Home from './Home';
import './App.css';
const App = () => {   
  return (
    <div className='movie-body'>
      <Nav />
      <br/>
      <Home />     
    </div>
  )
}

export default App