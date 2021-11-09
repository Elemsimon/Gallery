import React from 'react';

const Title = ({handleLogout}) => {
  return (
    <div className="title">
      <nav>
        <h1>FireGram</h1>
      
        <button onClick={handleLogout} className='logout'>Logout</button>
      </nav>
      <h2>Your Pictures</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
}

export default Title;