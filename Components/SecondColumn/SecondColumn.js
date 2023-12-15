import React, { useState, useRef } from 'react'
import FPSGAMES from '../../JSON/FpsGames.json'
import './SecondColumn.css'
import Image from 'next/image';
import Link from 'next/link';
import { Observer } from '../Custom/Observer';



const RenderFpsGAmes = ({ Ref2 }) => FPSGAMES.GAMES.slice(0, 10).map((fps) => {

  return (
    <a key={fps.id} className={`fps-games`}
      onMouseEnter={(e) => {

      }}

      rel='noreferrer'
      href={`GameInfo/${fps.id}`}>
      < Image src={fps.imageUrl} alt={fps.name} width={250} height={250} />
      <div className={`platform`} ref={Ref2}>
        <div
        >Available on</div>
        <div className='platform-link' >
          {fps.platform.map((game) => {
            return (
              <Link
                key={game.id}
                href={game.Url} target='_blank' rel='noreferrer' >
                <Image
                // hidden
                  width={400} height={400}
                  src={game.image}
                  alt={fps.name} />
              </Link>
            )
          })}
        </div>

      </div>
      <div className={`fps-games-title `}>{fps.name}</div>
    </a >
  )
})


const SecondColumn = () => {
  const [isNext, setIsNext] = useState(0);
  const Ref = useRef(null)
  const Ref2 = useRef(null)

  const getObserver = Observer({ RefProp: Ref })

 
  return (
    <div className={`second ${!getObserver.show && "hidden"}`} ref={Ref}>
      <div className={`title`} >TOP 10 FPS GAMES</div>
      <div className={`fps-container `} >
        <div className='fps-card'
          style={{ transform: `translate(${isNext}%)` }}
        >
          {RenderFpsGAmes({ Ref2: Ref2 })}
        </div>
      </div>
      <div className='button-container'>
        <button className={isNext === 0 && `selected-button`}
          onClick={() => {
            setIsNext(0)
          }}

        ></button>
        <button className={isNext === -20 && `selected-button`}
          onClick={() => {
            setIsNext(-20)
          }}></button>
        <button className={isNext === -40 && `selected-button`}
          onClick={() => {
            setIsNext(-40)
          }}
        ></button>
        <button className={isNext === -60 && `selected-button`}
          onClick={() => {
            setIsNext(-60)
          }}
        ></button>
        <button className={isNext === -80 && `selected-button`}
          onClick={() => {
            setIsNext(-80)
          }}
        ></button>
      </div >
    </div >
  )
}

export default SecondColumn