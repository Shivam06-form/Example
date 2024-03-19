"use client";

import { GAMES } from '../../..//JSON/FpsGames.json'
import React, { useEffect } from "react";
import Image from "next/image";
import './GameInfo.css'
import Link from "next/link";
import GameInfoHeader from '../../../Components/GameInfoHeader/GameInfoHeader'
import { useDispatch, useSelector } from 'react-redux';
import { FAVORITE } from '@/lib/store';


export default function RandomId(props) {

  const ID = props.params.id
  const Game = (GAMES.filter((fps) => fps.id === +ID))

  const dispatch = useDispatch()

  const Favourite = useSelector((favourite) => favourite.Favorite)

  useEffect(() => {
    dispatch(FAVORITE.getAllFav())
  }, [dispatch]);

  ///////////FILTER OBJECT IS ALREADY IN FAVORITE LIST ////////////
  const filter = Favourite.List.filter(favourite => (+favourite.id === +ID))


  return (<React.Fragment>
    <metadata>
      <title>{Game[0].name}</title>
      <meta name="description" content={Game[0].info ? Game[0].info : `"Search The Best In The World"`} />
      <link
        rel="icon"
        href={Game[0].imageUrl}
      />
    </metadata>
    <GameInfoHeader />
    <div className="gameinfo">
      <div className="gameinfo-content">
        <Image src={Game[0].imageUrl} alt={Game[0].name} width={320} height={320} />
        <div className="gameinfo-card">
          <div
            className="gameinfo-title"
          >{Game[0].name}</div>
          <div className="gameinfo-summery">{Game[0].about ? Game[0].about :
            `A first-person shooter (FPS) is a
             video game centered on gun fighting and other weapon-based 
             combat seen from a first-person perspective, 
             with the player experiencing the action directly through the eyes of the main character
            `}</div>
          <div>
            <div className="avalibale">Available in
              {filter.length !== 1 && <button className="Add-Button"
                onClick={() => {
                  // if (!filter[0]) {
                  dispatch(FAVORITE.AddToFav({ item: Game[0] }))
                  // }
                }}
              >ADD TO FAV</button>}
              {filter.length === 1 && <button className="Remove-Button"
                onClick={() => {
                  // if (!filter[0]) {
                  dispatch(FAVORITE.RemoveFav({ ID: +Game[0].id }))
                  // }
                }}
              >REMOVE FAVORITE</button>}
            </div>

            <div >
              {Game[0].platform.map((game) =>
                <div className="gameinfo-platform" key={game.id} >  <Link href={game.Url} target='_blank'>
                  {game.Name}
                </Link>
                  <Image src={game.image} alt={game.Name} width={100} height={100} />
                </div>
              )}

            </div>
          </div>
          <div className='gameinfo-tag'>
            <div>Tags</div>
            <div className='gameinfo-tag-list'>
              <li>#FPS</li>
              <li>#MULTIPLAYER</li>
              <li>#EPIC</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>)
}
