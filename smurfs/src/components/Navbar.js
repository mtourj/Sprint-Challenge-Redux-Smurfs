import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = props => {
  return (
    <div className='navbar'>
      <NavLink to='/smurfs'>Smurfs</NavLink>
      <NavLink to='/smurfs/add'>Add a Smurf</NavLink>
    </div>
  )
}

export default Navbar;