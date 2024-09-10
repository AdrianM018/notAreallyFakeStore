import React, { useEffect, useState, useRef } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  function expandSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }


  return (
    <>
      <header className='fixed-top b-color-main text-light'>
        <div className="container">
          <div className="d-flex justify-content-between py-3">
            <button onClick={expandSidebar} className='border-0 text-light b-color-main'>
              <svg xmlns="http://www.w3.org/2000/svg" width='30' height='30' fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
              </svg>
            </button>
            <img src="./src/assets/JustAFakeStore.png" alt="Logo" className='h-25 w-25' onClick={() => navigate('/')}/>
            <div className='d-flex gap-4'>
              <a className="nav-link active" aria-current="page" onClick={()=>{navigate('/Cart')}}>
                <svg xmlns="http://www.w3.org/2000/svg" width='30' height='30' fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
              </a>
              <a href="#" className="nav-link active" aria-current="page">
                <svg xmlns="http://www.w3.org/2000/svg" width='30' height='30' fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
      {isSidebarVisible && <Navbar/>}
    </>
  )
}

export default Header