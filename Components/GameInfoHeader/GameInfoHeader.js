import React from 'react'
import './GameInfoHeader.css'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'


const GameInfoHeader = () => {
    const router = useRouter()
    const Favourite = useSelector((fav) => fav.Favorite)
    const ListLength = (Favourite.List.length)


    return (
        <div className='gameinfoheader'>
            <ul>
                <li
                    onClick={() => { router.push('/') }}
                >HOME </li>
                <div>/</div>
                <li onClick={() => {
                    router.push('/')
                }}>FPS </li>
                <div>/</div>
                <li onClick={() => {
                    router.push('/')
                }}>STORY MODE  </li>
                <div>/</div>
                <li
                    className='favourite'
                // onClick={() => {
                //     router.push('/')
                // }}
                >Favorite <div>{ListLength}</div></li>
                <div>/</div>
            </ul>
        </div>
    )
}

export default GameInfoHeader