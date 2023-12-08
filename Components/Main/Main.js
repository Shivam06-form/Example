"use client"

import React, { useState } from 'react'
import Header from '../Header/Header'
import FirstColumn from '../FirstColumn/FirstColumn'
import SecondColumn from '../SecondColumn/SecondColumn'
import ThirdColumn from '../ThirdColumn/ThirdColumn'
import './Main.css'
import Banner from '../Banner/Banner'
import TopBanner from '../TopBanner/TopBanner'
import { useSelector } from 'react-redux'
import Search from '../Search/Search'

const Main = () => {
    const [showHeader, setShowHeader] = useState(false)
    const State = useSelector((state) => state);
    const show = (State.Search.searchTexts)

    return (
        <div className='main' style={{
            backgroundImage: `${show && "none"}`
        }}>
            <Header showHeader={showHeader} show={show} />
            {/* {!show && <TopBanner setShowHeader={setShowHeader} />} */}
            {!show && <FirstColumn setShowHeader={setShowHeader} />}
            {!show && <ThirdColumn />}
            {!show && <SecondColumn />}
            {!show && <Banner />}
            {show && <Search setShowHeader={setShowHeader} />}
        </div > 
    )
}

export default Main