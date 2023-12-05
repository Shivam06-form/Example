"use client";

import FPSGAMES from '../../../../JSON/FpsGames.json'
import React from "react";
import Image from "next/image";
import './GameInfo.css'
import Link from "next/link";
import GameInfoHeader from '../../../../Components/GameInfoHeader/GameInfoHeader'


export default function RandomId(props) {

  const ID = (window.location.pathname.replace("/GameInfo/FPS", ""))
  const Game = (FPSGAMES.FPS.filter((fps) => `/${fps.id}` === ID))

  return (<React.Fragment>
    <GameInfoHeader />
    <div className="gameinfo">
      <div className="gameinfo-content">
        <Image src={Game[0].imageUrl} alt={Game[0].name} width={320} height={320} />
        <div className="gameinfo-card">
          <div
            className="gameinfo-title"
          >{Game[0].name}</div>
          <div className="gameinfo-summery">{Game[0].info ? Game[0].info :
            `A first-person shooter (FPS) is a
             video game centered on gun fighting and other weapon-based 
             combat seen from a first-person perspective, 
             with the player experiencing the action directly through the eyes of the main character
            `}</div>
          <div>
            <div className="avalibale">Avaliable in</div>
            <div className="gameinfo-platform">
              {Game[0].steam && <Link href={Game[0].steam} >STEAM</Link>}
              {Game[0].epic && <Link href={Game[0].epic} >EPIC</Link>}
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
