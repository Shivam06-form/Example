import React from 'react'
import './GameInfoHeader.css'
import { useRouter } from 'next/navigation'


const GameInfoHeader = () => {
    const router = useRouter()

    return (
        <div className='gameinfoheader'>
            <ul>
                <li
                    onClick={() => {
                        router.push('/')
                    }}

                >HOME 🏡</li>
                <div>/</div>
                <li onClick={() => {
                    router.push('/')
                }}>FPS 🔫</li>
                 <div>/</div>
                <li onClick={() => {
                    router.push('/')
                }}>STORY MODE 📔</li>
                 <div>/</div>
            </ul>
        </div>
    )
}

export default GameInfoHeader