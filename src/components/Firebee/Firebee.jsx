import React from 'react';
import Firebee1 from "./../../assets/img/Firebee 1.jpg"
import Firebee2 from "./../../assets/img/Firebee 2.jpg"
import Firebee3 from "./../../assets/img/Firebee 3.jpg"
import Firebee4 from "./../../assets/img/Firebee 4.jpg"
import Firebee5 from "./../../assets/img/Firebee 5.jpg"
import Firebee6 from "./../../assets/img/Firebee 6.jpg"
import Firebee7 from "./../../assets/img/Firebee 7.jpg"
import Firebee8 from "./../../assets/img/Firebee 8.jpg"

export default function Firebee() {
    return (
        <div className='mt-16 px-11' id='Signals'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-5xl'>Firebee Signals</h1>
                <p className='font-normal text-2xl mt-3 text-center'>A signal for every situation</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
                <div className='flex gap-3 sm:gap-5 items-center h-52 px-4 sm:px-8 md:px-12 bg-gray-200 rounded-xl'>
                    <img className="w-16 sm:w-20" src={Firebee1} alt="" />
                    <h1 className='text-xs sm:text-base md:text-lg'>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</h1>
                </div>
                <div className='flex gap-3 sm:gap-5 items-center h-52 px-4 sm:px-8 md:px-12 bg-gray-200 rounded-xl'>
                    <img className="w-16 sm:w-20" src={Firebee2} alt="" />
                    <h1 className='text-xs sm:text-base md:text-lg'>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</h1>
                </div>
                <div className='flex gap-3 sm:gap-5 items-center h-52 px-4 sm:px-8 md:px-12 bg-gray-200 rounded-xl'>
                    <img className="w-16 sm:w-20" src={Firebee3} alt="" />
                    <h1 className='text-xs sm:text-base md:text-lg'>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</h1>
                </div>
                <div className='flex gap-3 sm:gap-5 items-center h-52 px-4 sm:px-8 md:px-12 bg-gray-200 rounded-xl'>
                    <img className="w-16 sm:w-20" src={Firebee4} alt="" />
                    <h1 className='text-xs sm:text-base md:text-lg'>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</h1>
                </div>
                <div className='flex gap-3 sm:gap-5 items-center h-52 px-4 sm:px-8 md:px-12 bg-gray-200 rounded-xl'>
                    <img className="w-16 sm:w-20" src={Firebee5} alt="" />
                    <h1 className='text-xs sm:text-base md:text-lg'>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</h1>
                </div>
                <div className='flex gap-3 sm:gap-5 items-center h-52 px-4 sm:px-8 md:px-12 bg-gray-200 rounded-xl'>
                    <img className="w-16 sm:w-20" src={Firebee6} alt="" />
                    <h1 className='text-xs sm:text-base md:text-lg'>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</h1>
                </div>
                <div className='flex gap-3 sm:gap-5 items-center h-52 px-4 sm:px-8 md:px-12 bg-gray-200 rounded-xl'>
                    <img className="w-16 sm:w-20" src={Firebee7} alt="" />
                    <h1 className='text-xs sm:text-base md:text-lg'>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</h1>
                </div>
                <div className='flex gap-3 sm:gap-5 items-center h-52 px-4 sm:px-8 md:px-12 bg-gray-200 rounded-xl'>
                    <img className="w-16 sm:w-24" src={Firebee8} alt="" />
                    <h1 className='text-xs sm:text-base md:text-lg xl:'>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</h1>
                </div>
            </div>
        </div>
    )
}
