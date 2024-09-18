import React from 'react'
import BlackFriday from "./../../assets/img/BalckNav.png"

export default function BlackFridayNav() {
  return (
    <div>
        <div className=' flex  items-center justify-center '>
            <img className='h-20 ' src={BlackFriday} alt="" />
            <h1 className='font-extrabold text-white text-base absolute'>Black Friday Sale - Save $100</h1>
        </div>
    </div>
  )
}
