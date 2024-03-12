import React, { useState } from 'react'
import FPSGAMES from '../../JSON/FpsGames.json';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { OVERLAY } from '@/lib/store';





const RenderFpsGames = ({ isNext, Ref2 }) => {


    /// USING REDUX FOR OPENING AND CLOSING  OF OVERLAY  //
    // REDUX Folder Path - /lib   //
    const dispatch = useDispatch()


     /////////FOR OPENING THE OVERLAY///////
    const onOpen = () => {
        dispatch(OVERLAY.onOpen(true))
    }




    const render = FPSGAMES.GAMES.slice(0, 10).map((fps) => {
        return (
            <div key={fps.id} className={`fps-games`}
                onClick={(e) => {
                    onOpen()
                    dispatch(OVERLAY.SelectGame(fps))
                }}
            >
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
                                        width={400} height={400}
                                        src={game.image}
                                        alt={fps.name} />
                                </Link>
                            )
                        })}
                    </div>

                </div>
                <div className={`fps-games-title `}>{fps.name}</div>
            </div >
        )
    })

    return (<div className='fps-container' >

        <div className='fps-card'
            style={{ transform: `translate(${isNext}%)` }}
        >{render}
        </div>
    </div>
    )
}

export default RenderFpsGames