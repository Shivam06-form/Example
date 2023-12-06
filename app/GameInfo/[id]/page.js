"use client";

import { GAMES } from '../../..//JSON/FpsGames.json'
import React from "react";
import Image from "next/image";
import './GameInfo.css'
import Link from "next/link";
import GameInfoHeader from '../../../Components/GameInfoHeader/GameInfoHeader'


export default function RandomId(props) {



  const ID = (window.location.pathname.replace("/GameInfo", ""))
  const Game = (GAMES.filter((fps) => `/${fps.id}` === ID))

  console.log(Game)

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
            <div className="avalibale">Avaliable in</div>
            <div >
              {Game[0].platform.map((game) =>
                <div className="gameinfo-platform" key={game.id} >  <Link href={game.Url} target='_blank'>
                  {game.Name}
                </Link>
                <Image src={game.image} alt={game.Name} width={100} height={100}/>
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
