import React, { Fragment, useState } from 'react'
import './GameDetials.css'
import Overlay from '../Utlities/Overlay'
import Image from 'next/image'


const GameDetials = ({ onClose, show, game }) => {

    return (
        <Fragment >
            <div  >
                {show && <Overlay onClick={onClose}><div className='detials'>
                    <Image src={game.imageUrl} alt={game.name} width={400} height={400} />
                    <h1>
                    GO TO    <a
                            rel='noreferrer'
                            href={`GameInfo/${game.id}`}>{game.name}
                        </a></h1>
                    {game.steam && <a href={game.steam} target='_blank' rel='noreferrer' >STEAM</a>}
                    {game.epic && <a href={game.epic} target='_blank' rel='noreferrer' >EPIC</a>}
                    <button onClick={onClose}>CLOSE</button>
                </div></Overlay>}
            </div>
        </Fragment>
    )
}

export default GameDetials