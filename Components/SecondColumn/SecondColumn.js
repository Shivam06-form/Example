import React, { useState, useRef } from 'react'
import FPSGAMES from '../../JSON/FpsGames.json'
import './SecondColumn.css'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { Observer } from '../Custom/Observer';



const RenderFpsGAmes = FPSGAMES.GAMES.map((fps) => {
  return (
    <a key={fps.id} className={`fps-games `}
      rel='noreferrer'
      href={`GameInfo/${fps.id}`}>
      {/* <img src={fps.imageUrl} alt={fps.name} /> */}
      < Image src={fps.imageUrl} alt={fps.name} width={175} height={175} />
      <siv>{fps.name}</siv>
      <div className='platform'>
        <div
        // className='summery'
        >Avaliable on</div>
        {fps.steam &&
          <Link href={fps.steam} target='_blank' rel='noreferrer'>
            <Image
              style={{ width: "20px", height: "20px" }}
              width={2} height={24}
              src={'https://play-lh.googleusercontent.com/52_DMY5417awaEgJf3_9mWgEuO2t1JfkGab8kM-LD6l5u6cGm_1-GsoQ_IyWFHdbkA'}
              alt={fps.name} />   </Link>}
        {fps.epic && <Link href={fps.epic} target='_blank' rel='noreferrer'>

          <Image
            style={{ width: "20px", height: "20px" }}
            width={24} height={24}
            src={'https://lh3.googleusercontent.com/proxy/5VUQp85MIu2HYAnHQ8cHFPNRBcC4v6Z1h2abGug_9WosLoGLEl6YO8iwUW6hUxBYQ7XOtVkpG4FAsae1pRSLIdNecBb5htelvKO3z6JvY3TDeW9Q=s0-d'}
            alt={fps.name} />

        </Link>}
      </div>
    </a >
  )
})


const SecondColumn = () => {
  const [isNext, setIsNext] = useState(0);
  const Ref = useRef(null)

  const getObserver = Observer({ RefProp: Ref })


  return (
    <div className={`second ${getObserver.show && "hidden"}`} ref={Ref}>
      <div className={`title`} >TOP 10 FPS GAMES</div>
      <div className={`fps-container `} >
        <div className='fps-card'
          style={{ transform: `translate(${isNext}%)` }}
        >
          {RenderFpsGAmes}
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