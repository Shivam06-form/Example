import React, { useRef } from 'react'

import './FirstColumn.css'
import Image from 'next/image'
import { Observer } from '../Custom/Observer.js'

let image1 = 'https://assets.xboxservices.com/assets/f2/09/f2093a9f-81ef-4ddd-9128-7e409ab3e6ad.jpg?n=Red-Dead-Redemption-II_GLP-Page-Hero-1084_1920x1080.jpg'
let image2 = 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_2560x1440_Landscaped%20Store-2560x1440-79155f950f32c9790073feaccae570fb.jpg'
let image3 = 'https://th.bing.com/th/id/OIP.Xb3oFrbSp7c4_Vz50mdCHQAAAA?rs=1&pid=ImgDetMain'

const GamedownloadList = {
  RDR2: [
    {
      id: 1, Name: "STEAM",
      image: "https://www.videogameschronicle.com/files/2019/03/1024px-Steam_icon_logo.svg_.png"
      , Url: "https://store.steampowered.com/app/1174180/red_dead_redemption_2/"
    }
    , {
      id: 2, Name: "ROCKSTAR",
      image: "https://1000logos.net/wp-content/uploads/2020/09/Rockstar-Games-logo.jpg"
      , Url: "https://www.rockstargames.com/reddeadredemption2/"
    }
    , {
      id: 3, Name: "Epic",
      image: "https://cdn1.unrealengine.com/UnrealTournament/3475636/com/epicgames/plugins/clientDownload/logo-epic-cb4399a7ee205610531057537937045e.png"
      , Url: "https://store.epicgames.com/en-US/p/red-dead-redemption-2"
    }
  ],
  GTAV: [
    {
      id: 1, Name: "STEAM",
      image: "https://www.videogameschronicle.com/files/2019/03/1024px-Steam_icon_logo.svg_.png"
      , Url: "https://store.steampowered.com/agecheck/app/271590/"
    }
    , {
      id: 2, Name: "ROCKSTAR",
      image: "https://1000logos.net/wp-content/uploads/2020/09/Rockstar-Games-logo.jpg"
      , Url: "https://www.rockstargames.com/gta-v"
    }
    , {
      id: 3, Name: "Epic",
      image: "https://cdn1.unrealengine.com/UnrealTournament/3475636/com/epicgames/plugins/clientDownload/logo-epic-cb4399a7ee205610531057537937045e.png"
      , Url: "https://store.epicgames.com/en-US/p/grand-theft-auto-v"
    }
  ],
  PUBG: [
    {
      id: 1, Name: "STEAM",
      image: "https://www.videogameschronicle.com/files/2019/03/1024px-Steam_icon_logo.svg_.png"
      , Url: "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/"
    }
  ]
}


const FirstColumn = () => {
  const Ref1 = useRef()
  const Ref2 = useRef()
  const Ref3 = useRef()

  const getObserver1 = Observer({ RefProp: Ref1 })
  const getObserver2 = Observer({ RefProp: Ref2 })
  const getObserver3 = Observer({ RefProp: Ref3 })



  return (
    <div className='first'>
      <div className='title'>LATEST GAMES</div>
      <div className={`first-content  ${!getObserver1.show && "hidden"}`} ref={Ref1}>
        <Image src={image1} alt='rdr2' width={200} height={200} />
        <div className='first-discription'>
          <div className='second-title '>Explore the World of Red Dead Redemption 2</div>
          <summary
            className='summery'
          >Red Dead Redemption 2 is a 2018 action-adventure game
            developed and published by Rockstar Games.
            The game is the third entry in the
            Red Dead series and a prequel to the 2010 game Red Dead Redemption
          </summary>
          <div className='download-list'>
            <summary
              style={{ fontWeight: "bold" }}
            >Avaliable on</summary>
            {GamedownloadList.RDR2.map((game) => <a key={game.id} href={game.Url}
              target='_blank'
              rel='noreferrer'
            >
              <Image src={game.image} alt={game.Name} width={4} height={4} /></a>)}
          </div>

        </div>
      </div>
      <div className={`first-content  ${!getObserver2.show && "hidden"}`} ref={Ref2}>

        <div className='first-discription'>
          <div className='second-title '>Experince the Open World Of Grand Theft Auto V</div>
          <summary
            className='summery'
          >Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games.
            It is the seventh main entry in the Grand Theft Auto series,
            following {"2008's"} Grand Theft Auto IV, and the fifteenth instalment overall.
          </summary>
          <div className='download-list'>
            <summary
              style={{ fontWeight: "bold" }}
            >Avaliable on</summary>
            {GamedownloadList.GTAV.map((game) => <a key={game.id} href={game.Url}
              target='_blank'
              rel='noreferrer'
            >
              <Image src={game.image} alt={game.Name} width={4} height={4} /></a>)}
          </div>

        </div>
        <Image src={image2} alt='gtav' width={200} height={200} />
      </div>
      <div className={`first-content  ${!getObserver3.show && "hidden"}`} ref={Ref3}>
        <Image src={image3} alt='rdr2' width={200} height={200} />
        <div className='first-discription'>
          <div className='second-title '>PUBG stands for {"PlayerUnknown's"} Battlegrounds</div>
          <summary
            className='summery'
          >PUBG is a player versus player shooter game in which up to one hundred players
            fight in a battle royale,
            a type of large-scale last man standing deathmatch where players fight to remain the last alive.
          </summary>
          <div className='download-list'>
            <summary
              style={{ fontWeight: "bold" }}
            >Avaliable on</summary>
            {GamedownloadList.PUBG.map((game) => <a key={game.id} href={game.Url}
              target='_blank'
              rel='noreferrer'
            >
              <Image src={game.image} alt={game.Name} width={4} height={4} /></a>)}
          </div>

        </div>
      </div>
    </div>
  )
}

export default FirstColumn