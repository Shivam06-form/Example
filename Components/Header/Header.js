import React, { useState, useEffect, useRef } from 'react'
import './Header.css'
import { useRouter } from 'next/navigation'

const Header = ({ className }) => {
  const route = useRouter()
  const RefProp = useRef(null)
  const [showHeader, setShowHeader] = useState(false);


  return (
    <div className={`header ${className} ${showHeader && "sticky-header"} `} ref={RefProp}>
      <div className='header-title'>
        <div
          onClick={() => {
            route.push('/')
          }}
        > GAMING-APP</div>
        <summary>Search The Best Games...</summary>
        <div className='header-list'>
          <li>FPS</li>
          <li>OPEN WORLD</li>
          <li>Story Mode</li>
        </div>
      </div>
      <input placeholder='Search The Latest Games...' className='search' />
    </div>

  )
}

export default Header