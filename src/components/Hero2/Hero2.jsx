import React from 'react'
import bghero from "./../../assets/img/bghero.jpg"
import "./Hero2.css"
export default function Hero2() {
  return (
    <div className='px-16 mt-24 '>
        <div className='flex items-center gap-12 Hero2  '>
            <img className='w-64 h-64' src={bghero} alt="" />
            <div>
                <h1 className='text-5xl'>30 Day Money Back Guarantee</h1>
                <p className='text-2xl mt-7'>At Firebee we believe in building quality products that actually work. Firebee and its partners have invested over $85 million in research and development to create the highest quality wearable for customers to enjoy. If for any reason if you are not satisfied with your Firebee headband we will happily refund your purchase. </p>
            </div>
        </div>
    </div>
  )
}
