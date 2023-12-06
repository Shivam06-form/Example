import React, { useRef } from 'react'
import './Banner.css'
import Image from 'next/image'
import { Observer } from '../Custom/Observer'


const Banner = () => {
    const Ref = useRef(null)
    const getObserver = Observer({ RefProp: Ref })

    return (
        <div ref={Ref} className={`banner  ${!getObserver.show && 'hidden'}`}  >
            <div style={{ width: "85%", height: "100%" }}  >
                {/* <div className='banner-title'>SOCIAL ICONS</div> */}
                <div className='banner-icon-container'>
                    <Image className='banner-icons'
                        src='https://pngimg.com/d/facebook_logos_PNG19750.png'
                        alt='facebook'
                        width={40} height={40}
                    />
                    <Image className='banner-icons'
                        src='https://themayanagari.com/wp-content/uploads/2021/01/6-8.jpg'
                        alt="youtube"
                        width={40} height={40}
                    />
                    <Image className='banner-icons'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                        alt='instgram'
                        width={40} height={40}
                    />
                </div>
            </div>


            <summery className='summery'>
                Welcome to SHOPPING-APP!
                Here, you can find all your favorite games, from first-person shooters
                (FPS) to open-world adventures. Whether you're
                looking for a new challenge or just want to relax and explore, we have something for everyone.
            </summery>
        </div>
    )
}

export default Banner