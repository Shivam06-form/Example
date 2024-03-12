
"use client"
import React from 'react'
import Main from '../Components/Main/Main'
import { Fragment } from 'react'
import GameDetials from '../Components/Commen/GameDetials'
import { useDispatch, useSelector } from 'react-redux'
import { OVERLAY } from '@/lib/store'

export default function Home() {
  const dispatch = useDispatch()
  const Overlay = useSelector((state: any) => state.Overlay);

  /////////FOR CLOSING THE OVERLAY///////
  const onClose = () => {
    dispatch(OVERLAY.onClose(false))
  }

  return (
    <Fragment>
      <metadata>
        <title>GAMING APP</title>

        {/* GAME OVERLAY */}
        <GameDetials onClose={onClose} show={Overlay.openOverlay} game={Overlay.SelectedGame} />

        <meta name="viewport" content="width=device-width, initial-scale=0.78" />
        <meta name="description" content="Search The Best In The World" />
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/SteeledSlagle13/ApexLegendsImages/master/logoBG-3.png"
        />
      </metadata>
      <Main />
    </Fragment>
  )
}
