import React from 'react'
import './ThirdColumn.css'
import Image from 'next/image'

const ThirdColumn = () => {
    const Images = [
        {
            images: "https://wallpapercave.com/wp/wp3276797.jpg"
        },
        {
            images: ""
        },
        {
            images: ""
        },
        {
            images: ""
        }
    ]

    console.log(Images[0].images)

    return (
        <div className='third'>
            <Image width={500} height={500} src={Images[0].images} alt='Image' />
            <Image width={500} height={500} src={Images[0].images} alt='Image' />
            <Image width={500} height={500} src={Images[0].images} alt='Image' />
            <Image width={500} height={500} src={Images[0].images} alt='Image' />
        </div>
    )
}

export default ThirdColumn