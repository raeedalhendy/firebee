import React from 'react'
import Heroitem1 from './Heroitem1'
import Heroitem2 from './Heroitem2'
import "./Hero.css"

export default function Hero() {
    return (
    <div id='' className='flex pt-12 px-10 bg-gray-100 hero'>
        <Heroitem1/>
        <Heroitem2/>
    </div>
    )
}
