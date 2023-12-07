import React, { useEffect, useRef } from 'react'
import './Search.css'
import { GAMES } from '../../JSON/FpsGames.json'
import { useSelector } from 'react-redux';
import Image from 'next/image';


const Search = ({ setShowHeader }) => {
    const State = useSelector((state) => state);
    const searchText = State.Search.searchTexts
    const Ref = useRef()

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (Ref.current) {
                setShowHeader(+Ref.current.getBoundingClientRect().top < window.scrollY)
            }
        })
    }, [setShowHeader])


    const SearchGames = (GAMES.filter((game) =>
        game.name.toLocaleLowerCase().trim().includes(searchText.toLocaleLowerCase().trim())))
    const RenderSearchGames = SearchGames.map((game) => {
        return (
            <div key={game.id} class='search-games-card'
                onClick={() => {
                    window.location.href = `GameInfo/${game.id}`
                }}
            >
                <Image src={game.imageUrl} width={250} height={250} alt={game.name} />
                <div className='summery' style={{ color: "black" }}>
                    {game.name}
                </div>
                <div className='platform'>
                    {game.platform.map((plat) => {
                        return (<div
                            key={plat.id}
                        >{<Image
                            width={150} height={150}
                            src={plat.image}
                            alt={plat.name} />
                            }</div>)
                    })}
                </div>
                <div>{game.title ? game.title : "TITLE"}</div>
            </div >
        )
    }
    )

    return (
        <div className='search-games' ref={Ref}>
            {RenderSearchGames}
        </div>
    )
}

export default Search