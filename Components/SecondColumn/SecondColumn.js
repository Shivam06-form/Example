import React, { useState, useRef } from 'react'
import RenderFpsGames from './RenderFpsGames'
import './SecondColumn.css'
import Overlay from '../Utlities/Overlay.jsx'
import { Observer } from '../Custom/Observer';






const SecondColumn = () => {
  const [isNext, setIsNext] = useState(0);
  const Ref = useRef(null)
  const Ref2 = useRef(null)

  const getObserver = Observer({ RefProp: Ref })


  return (
    <div className={`second ${!getObserver.show && "hidden"}`} ref={Ref}>
 
      <div className={`title`} >TOP 10 FPS GAMES</div>
      
          <RenderFpsGames Ref2={Ref2} isNext={isNext}/>
       
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