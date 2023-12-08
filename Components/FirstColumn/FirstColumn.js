import React, { useEffect, useRef } from 'react'

import './FirstColumn.css'
import Image from 'next/image'
import { Observer } from '../Custom/Observer.js'
import { GAMES } from '../../JSON/FpsGames.json'
import { useRouter } from 'next/navigation'


const FirstColumn = ({setShowHeader}) => {
  const router = useRouter()

  const Ref1 = useRef()
  const Ref2 = useRef()
  const Ref3 = useRef()


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (Ref1.current) {
        setShowHeader(+Ref1.current.getBoundingClientRect().top < window.scrollY)
      }
    })
  }, [Ref1, setShowHeader])





  const getObserver1 = Observer({ RefProp: Ref1 })
  const getObserver2 = Observer({ RefProp: Ref2 })
  const getObserver3 = Observer({ RefProp: Ref3 })

  const LATEST = (GAMES.slice(GAMES.length - 3, GAMES.length))

  return (
    <div className='first'>
      <div className='title'>POPULAR GAMES</div>
      <div
        onClick={() => {

          window.location.href = `GameInfo/${LATEST[0].id}`
        }}

        className={`first-content  ${!getObserver1.show && "hidden"}`} ref={Ref1}>
        <Image src={LATEST[0].imageUrl} alt='rdr2' width={500} height={500} />
        <div className='first-discription'>
          <div className='second-title '>{LATEST[0].title}</div>
          <summary
            className='summery'
          >{LATEST[0].about}
          </summary>
          <div className='download-list'>
            <summary
              style={{ fontWeight: "bold" }}
            >Available on</summary>
            {LATEST[0].platform.map((game) => <a key={game.id} href={game.Url}
              target='_blank'
              rel='noreferrer'
            >
              <Image src={game.image} alt={game.Name} width={4} height={4} /></a>)}
          </div>

        </div>
      </div>
      <div
        onClick={() => {

          window.location.href = `GameInfo/${LATEST[1].id}`
        }}
        className={`first-content  ${!getObserver2.show && "hidden"}`} ref={Ref2}>

        <div className='first-discription'>
          <div className='second-title '>{LATEST[1].title}</div>
          <summary
            className='summery'
          >{LATEST[1].about}
          </summary>
          <div className='download-list'>
            <summary
              style={{ fontWeight: "bold" }}
            >Available on</summary>
            {LATEST[1].platform.map((game) => <a key={game.id} href={game.Url}
              target='_blank'
              rel='noreferrer'
            >
              <Image src={game.image} alt={game.Name} width={300} height={300} /></a>)}
          </div>

        </div>
        <Image src={LATEST[1].imageUrl} alt='gtav' width={500} height={500} />
      </div>
      <div
        onClick={() => {

          window.location.href = `GameInfo/${LATEST[2].id}`
        }}
        className={`first-content  ${!getObserver3.show && "hidden"}`} ref={Ref3}>
        <Image src={LATEST[2].imageUrl} alt='rdr2' width={500} height={500} />
        <div className='first-discription'>
          <div className='second-title '>{LATEST[2].title}</div>
          <summary
            className='summery'
          >{LATEST[2].about}
          </summary>
          <div className='download-list'>
            <summary
              style={{ fontWeight: "bold" }}
            >Available on</summary>
            {LATEST[2].platform.map((game) => <a key={game.id} href={game.Url}
              target='_blank'
              rel='noreferrer'
            >
              <Image src={game.image} alt={game.Name} width={300} height={300} /></a>)}
          </div>

        </div>
      </div>
    </div>
  )
}

export default FirstColumn