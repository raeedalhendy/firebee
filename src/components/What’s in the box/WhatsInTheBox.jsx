import React from 'react'
import What from "./../../assets/img/what.jpg"
import What1 from "./../../assets/img/what 1.jpg"
import What2 from "./../../assets/img/what 2.jpg"
import What3 from "./../../assets/img/what 3.jpg"
import What4 from "./../../assets/img/what 4.jpg"
import What5 from "./../../assets/img/what 5.jpg"
import What6 from "./../../assets/img/what 6.jpg"
import truee from "./../../assets/img/true.svg"


export default function WhatsInTheBox() {
    return (
    <div className='mt-14 pb-20' id='Reviews'>
        <div className='flex items-center justify-center text-center'>
            <h1 className='text-5xl'>
            What’s in the box?
            </h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div>
                <img src={What} alt="" />
            </div>
            <div>
                <h1 className='text-2xl font-medium mt-4 '>
                featured on
                </h1>
            </div>
        </div>
        <div className='flex gap-6 justify-center items-center mt-4 flex-wrap border-b  border-black border-solid	pb-7'>
            <img src={What1} alt="" />
            <img src={What2} alt="" />
            <img src={What3} alt="" />
            <img src={What4} alt="" />
            <img src={What5} alt="" />
            <img src={What6} alt="" />
        </div>
        <div className='flex  justify-center gap-20 mt-10 w-full flex-wrap'>
            <div className='flex gap-6'>
                <img className='w-10 ' src={truee} alt="" />
                <h1 className='text-3xl '>1 Firebeeheadband </h1>
            </div>
            <div className='flex gap-6'>
                <img src={truee} alt="" />
                <h1 className='text-3xl w-60 '>1 Charging cable</h1>
            </div>
            <div className='flex gap-6'>
                <img src={truee} alt="" />
                <h1 className='text-3xl w-52'>1 User manual</h1>
            </div>
        </div>
    </div>
    )
}
