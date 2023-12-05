"use client"

import React from 'react'
import Header from '../Header/Header'
import FirstColumn from '../FirstColumn/FirstColumn'
import './Main.css'
import SecondColumn from '../SecondColumn/SecondColumn'
import Banner from '../Banner/Banner'

const Main = () => {
    return (
        <div className='main'>
            <Header />
            <FirstColumn />
            <SecondColumn />
            <Banner />
        </div >
    )
}

export default Main