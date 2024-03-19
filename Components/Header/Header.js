import React, { useRef, useState, useEffect } from 'react'
import './Header.css'
import { useRouter } from 'next/navigation'
import { GAMES } from '../../JSON/FpsGames.json'
import { SEARCH, useAppDispatch } from '../../lib/store'
import { useDispatch, useSelector } from 'react-redux'
import TopBanner from '../TopBanner/TopBanner'

const Header = ({ className, showHeader, show }) => {
  const [search, setSearch] = useState('')
  const route = useRouter()
  const RefProp = useRef(null)
  const dispatch = useDispatch()

  const Favourite = useSelector((fav) => fav.Favorite)
  const ListLength = (Favourite.List.length)



  // console.log(GAMES.filter((game) => game.name.toLowerCase().includes(search.toLowerCase())))

  return (
    <div className='header-image'>
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
            <li>Favourite <div>{ListLength}</div></li>
          </div>
        </div>
        {!showHeader && <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            dispatch(SEARCH.Search({ TEXT: e.target.value }))

          }}
          placeholder='Search The Latest Games...'
          className={`search ${showHeader && 'sticky-search '}`} />}
        {showHeader && <button
          className='button'
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          }}
        >SEARCH</button>}
      </div>
      {!show && <TopBanner />}
    </div>


  )
}

export default Header