import React from 'react'

function Header() {
    return (
        <>
<header className='fixed-top'>
<div className="container">
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Categories</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Log In</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Sign Up</a></li>
      </ul>
    </header>
  </div>
  </header>
        </>
    )
}

export default Header