import React from 'react';
import './Nav.css';
const Nav = () => {
  return (
    <div className='navbar'>
      <span className='title'><b>WOOKIE <br/> MOVIES</b></span>
      <span className='search'><input type="text" placeholder='Search'/></span>                       
    </div>
    
  )
}

export default Nav