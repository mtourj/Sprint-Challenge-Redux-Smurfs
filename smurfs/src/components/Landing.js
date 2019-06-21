import React from 'react';

const Landing = props => {
  return (
    <div className='landing'>
      <h1>Welcome to the Smurfs!</h1>
      <button onClick={() => props.history.push('/smurfs')}>Build your village</button>
    </div>
  )
}

export default Landing;