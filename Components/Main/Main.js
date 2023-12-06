"use client"

import React, { useState } from 'react'
import Header from '../Header/Header'
import FirstColumn from '../FirstColumn/FirstColumn'
import './Main.css'
import SecondColumn from '../SecondColumn/SecondColumn'
import Banner from '../Banner/Banner'

const Main = () => {
    const [showHeader, setShowHeader] = useState(false)

    return (
        <div className='main'>
            <Header showHeader={showHeader} />
            <FirstColumn setShowHeader={setShowHeader} />
            <SecondColumn />
            <Banner />
        </div >
    )
}

export default Main