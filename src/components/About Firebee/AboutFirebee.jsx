import React from 'react'
import Firebeebg from "./../../assets/img/Firebeebg.jpg"
import truee from "./../../assets/img/true.svg"
export default function AboutFirebee() {
  return (
    <div className='mt-24 px-16 '>
        <div className='flex flex-col gap-5 items-center justify-center '>
            <h1 className='text-5xl'>What will Firebee do for me?</h1>
            <p className='font-normal'>Firebee will help you gently nudge yourself into a different mental state</p>
        </div>
        <div className='flex flex-wrap  justify-center '>
            <div>
                <img src={Firebeebg} alt="" />
            </div>
            <div>
                <div className='flex gap-6 mt-16'>
                    <img src={truee} alt="" />
                    <h1 className='text-3xl'>
                    Can’t sleep? Turn on the <span className='font-bold  bg-gradient-to-r from-black to-blue-600  bg-clip-text text-transparent'>deep sleep</span> signal
                    </h1>
                </div>
                <div className='flex gap-6 mt-16'>
                    <img src={truee} alt="" />
                    <h1 className='text-3xl'>
                    Feeling tired? Turn on the <span className='font-bold  bg-gradient-to-r from-pink-400 to-indigo-500  bg-clip-text text-transparent'>alert</span> signal
                    </h1>
                </div>
                <div className='flex gap-6 mt-16'>
                    <img src={truee} alt="" />
                    <h1 className='text-3xl'>
                    Feeling anxious? Turn on the  <span className='font-bold  bg-gradient-to-r from-green-300 to-blue-400  bg-clip-text text-transparent'>calm</span> signal
                    </h1>
                </div>
                <div className='flex gap-6 mt-16'>
                    <img src={truee} alt="" />
                    <h1 className='text-3xl'>
                    Feeling unproductive? Turn on the   <span className='font-bold  bg-gradient-to-r from-violet-300 to-blue-300  bg-clip-text text-transparent'>focus</span> signal
                    </h1>
                </div>
                <div className='flex gap-6 mt-16'>
                    <img src={truee} alt="" />
                    <h1 className='text-3xl'>
                    Feeling blue? Turn on the <span className='font-bold  bg-gradient-to-r from-violet-600 to-blue-800  bg-clip-text text-transparent'>happy </span> signal
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}
