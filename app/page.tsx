import Image from 'next/image'
import Main from '../Components/Main/Main'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <metadata>
        <title>GAMING APP</title>
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
