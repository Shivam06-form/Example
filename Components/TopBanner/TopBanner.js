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
                        src={"https://pngimg.com/d/pubg_PNG32.png"}
                        width={200}
                        height={200}
                        alt='pubg'
                    />
                    <Image
                        onClick={() => {
                            window.location.href = `GameInfo/13`
                        }}
                        src={"https://pngimg.com/d/red_dead_redemption_PNG27.png"}
                        width={200}
                        height={200}
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