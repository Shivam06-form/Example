import React from 'react'
import './TopBanner.css'
import Image from 'next/image'

const TopBanner = () => {
    return (
        <div className='top'>
            <div className='top-title' >
                <h2>GAMMING APP WORLD</h2>
                <p className='summery'>
                    Search The Best in the World
                    Games Like Pubg CS And Much More...
                </p>
                <div className='top-button'>
                    <Image
                        onClick={() => {
                            window.location.href = `GameInfo/13`
                        }}
                        src={"https://www.freepnglogos.com/uploads/pubg-png/home-pubg-skins-21.png"}
                        width={350}
                        height={350}
                        alt='pubg'
                        className='pubg'
                    />
                    <Image
                    className='rdr2'
                        onClick={() => {
                            window.location.href = `GameInfo/11`
                        }}
                        src={"https://www.pngmart.com/files/22/Red-Dead-Redemption-II-Logo-PNG-Isolated-Pic.png"}
                        width={350}
                        height={350}
                        alt='rdr2'

                    />

                </div>
            </div>

            <Image src={"https://i.redd.it/4d3qhbf19wv41.png"}
                alt='PUBG'
                height={200}
                width={200}
                className='top-img'
            />
        </div >
    )
}

export default TopBanner