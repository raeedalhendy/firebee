import React from 'react'
import footer1 from "./../../assets/img/footer 1.svg"
import footer2 from "./../../assets/img/footer 2.svg"
import footer3 from "./../../assets/img/footer 3.svg"
import footer4 from "./../../assets/img/footer 4.svg"
import footer5 from "./../../assets/img/footer 5.svg"
import footerbg from "./../../assets/img/footerbg.png"


export default function Footer() {
  return (
    <div >
        <div className='h-3 bg-gradient-to-r from-green-300 to-blue-500 '></div>
        <div className='bg-black text-white flex flex-wrap gap-44 px-14 border-b-2 border-white border-solid py-8 '>
            <div>
                <h1 className='text-2xl'>About</h1>
                <div className='mt-6'>
                    <h1>Home</h1>
                    <h1>Product</h1>
                </div>
            </div>
            <div>
                <h1 className='text-2xl'>Support</h1>
                <div className='mt-6'>
                    <a>Activate</a>
                    <h1>Login</h1>
                </div>
            </div>
            <div>
                <h1 className='text-2xl'>Find Us On</h1>
                <div className='flex mt-6 gap-5'>
                    <img className=' cursor-pointer' src={footer1} alt="" />
                    <img className=' cursor-pointer' src={footer2} alt="" />
                    <img className=' cursor-pointer' src={footer3} alt="" />
                    <img className=' cursor-pointer' src={footer4} alt="" />
                    <img className=' cursor-pointer' src={footer5} alt="" />
                </div>
            </div>
        </div>
        <div className='bg-black text-white  px-14'>
            <div className='flex  justify-between items-center w-full py-12 flex-wrap'>
                <img src={footerbg} alt="" />
                <h1 className='text-gray-400'>Privacy Policy Terms of Service</h1>
            </div>
            <div className='w-full  to-blue-500 pb-12  '>
                <h1 className='my-6 text-gray-400'>Copyright © 2020 Firebee Technologies, Inc. All rights reserved.</h1>
                <p className='text-gray-400'>The statements on this page have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
            </div>
        </div>
    </div>
    )
}
