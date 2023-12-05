import React from 'react'
import './Header.css'
import { useRouter } from 'next/navigation'

const Header = ({ className }) => {
  const route = useRouter()

  return (
    <div className={`header ${className}`}>
      <div className='header-title'>
        <div
          onClick={() => {
            route.push('/')
          }}
        > SHOPPING-APP</div>
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