import React, { useRef } from 'react'
import './Header.css'
import { useRouter } from 'next/navigation'

const Header = ({ className, showHeader }) => {
  const route = useRouter()
  const RefProp = useRef(null)



  return (
    <div className={`header ${className} ${showHeader && "sticky-header"} `} ref={RefProp}>
      <div className='header-title'>
        {!showHeader && <div
          onClick={() => {
            route.push('/')
          }}
        > GAMING-APP</div>}
        {!showHeader && <summary>Search The Best Games...</summary>}
        <div className='header-list'>
          <li>FPS</li>
          <li>OPEN WORLD</li>
          <li>Story Mode</li>
        </div>
      </div>
      <input placeholder='Search The Latest Games...' className={`search ${showHeader && 'sticky-search '}`} />
    </div>

  )
}

export default Header