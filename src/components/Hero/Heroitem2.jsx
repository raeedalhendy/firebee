import React from 'react'
import stars from "./../../assets/img/stars.svg"
import truee from "./../../assets/img/true.svg"
import arrow from "./../../assets/img/arrow.svg"
import card1 from "./../../assets/img/card 1.svg"
import card2 from "./../../assets/img/card 2.svg"
import card3 from "./../../assets/img/card 3.svg"
import card4 from "./../../assets/img/card 4.svg"
import card5 from "./../../assets/img/card 5.svg"




export default function Heroitem2() {
    return (
    <div className='w-2/4 flex flex-col gap-6 Hero'>
        <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-4xl'>
            Firebee Headband
            </h1>
            <div className='flex gap-3'>
                <img src={stars} alt="" />
                <h1>267 Reviews</h1>
            </div>
            <p>Order today and receive your Firebee by June 15th, 2021</p>
        </div>
        <div className='flex flex-col gap-4   pr-16 bg-white px-5 pt-5 pb-5 rounded-xl'>
        <div >
            <div className='flex justify-between gap-3 '>
                <h1 className='font-bold text-2xl'>Firebee Starter Kit</h1>
                <div className='flex gap-3 text-2xl flex-wrap'>
                <p className='line-through	decoration-red-500'>$999.00</p>
                <p>$379.00</p>
                </div>
            </div>
            <div className='flex items-center justify-center h-8 w-52 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl mt-2'>
                <h1>MOST POPULAR KIT</h1>
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='flex  gap-4'>
                <img src={truee} alt="" />
                <h1 className='text-base'>Access to 7 signals (and future signal releases) </h1>
            </div>
            <div className='flex  gap-4'>
                <img src={truee} alt="" />
                <h1 className='text-base'>Firebee Headband  </h1>
            </div>
            <div className='flex  gap-4'>
                <img src={truee} alt="" />
                <h1 className='text-base'>$19/month membership, first 2 months free </h1>
            </div>
        </div>
        <div>
            <p>The starter kit is the most affordable way to get started with Firebee. Pay $299 for the Firebee headband and access to the entire Firebee Signal Catalogue for only $19 a month. <span className='font-semibold'>Membership can be cancelled anytime. No contracts. Satisfaction guaranteed.</span></p>
        </div>
    </div>


    <div>
        <div className='flex flex-col gap-4   pr-16 bg-white px-5 pt-5 pb-5 rounded-xl'>
            <div >
                <div className='flex justify-between gap0 '>
                    <h1 className='font-bold text-2xl'>Firebee  Kit</h1>
                    <div className=' text-2xl'>
                    <p>$799.00</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex  gap-4'>
                    <img src={truee} alt="" />
                    <h1 className='text-base'>Access to 7 signals (and future signal releases) </h1>
                </div>
                <div className='flex  gap-4'>
                    <img src={truee} alt="" />
                    <h1 className='text-base'>Firebee Headband  </h1>
                </div>
                <div className='flex  gap-4'>
                    <img src={truee} alt="" />
                    <h1 className='text-base'>No Monthly Membership </h1>
                </div>
            </div>
            <div>
                <p>The Founders kit allows you to get the Firebee headband and lifetime access to the entire Firebee Signal Catalogue for a one-time payment. The Founders is kit can be paid through Affirm allowing customers to make small payments of $73 a month.</p>
            </div>
        </div>
    </div>
    <button className='w-full h-20 bg-green-400 flex items-center justify-center rounded-xl'>
        <img src={arrow} alt="" />
    </button>
    <div className='flex flex-wrap gap-4 justify-center pb-6'>
        <img src={card1} alt="" />
        <img src={card2} alt="" />
        <img src={card3} alt="" />
        <img src={card4} alt="" />
        <img src={card5} alt="" />
    </div>
    </div>
    )
}
