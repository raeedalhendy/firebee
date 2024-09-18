import React, { useState } from 'react';
import Hero1 from "./../../assets/img/hero1.jpg";
import Hero2 from "./../../assets/img/hero2.png";
import Hero3 from "./../../assets/img/hero3.jpg";
import Hero4 from "./../../assets/img/hero4.jpg";
import Hero5 from "./../../assets/img/hero5.jpg";
import Hero7 from "./../../assets/img/hero7.svg";
import Hero8 from "./../../assets/img/hero8.svg";
import Hero9 from "./../../assets/img/hero9.svg";
import Hero10 from "./../../assets/img/hero10.svg";
import "./Hero.css"


export default function Heroitem1() {
    const [mainImage, setMainImage] = useState(Hero3); 

    return (
        <div className='w-2/4 con-hero1'>
            <div className='flex gap-4'>
                <img className='w-24 h-24' src={Hero1} alt="" />
                <img className='w-24 h-24' src={Hero2} alt="" />
            </div>
            <div className='flex flex-col gap-7 mt-4'>
                <div className='w-full'>
                <img className='w-3/4 h-96' src={mainImage} alt="Main" /> 
                </div>
                <div className='flex gap-4 mt-4 flex-wrap '>
                    <img className="w-16 h-16 cursor-pointer" src={Hero3} alt="" onClick={() => setMainImage(Hero3)} />
                    <img className="w-16 h-16 cursor-pointer" src={Hero5} alt="" onClick={() => setMainImage(Hero5)} />
                    <img className="w-16 h-16 cursor-pointer" src={Hero4} alt="" onClick={() => setMainImage(Hero4)} />
                    <img className="w-16 h-16 cursor-pointer" src={Hero5} alt="" onClick={() => setMainImage(Hero5)} />
                    <img className="w-16 h-16 cursor-pointer" src={Hero4} alt="" onClick={() => setMainImage(Hero3)} />
                </div>
            </div>
        <div className='w-full flex flex-col gap-8 mt-5'>
            <div className='flex flex-wrap gap-5  justify-between '>
                <div> <img src={Hero7} alt="" /></div>
                <div className='flex items-center gap-3'>
                    <img src={Hero8} alt="" />
                    <h1 className='w-52'>
                        Free Shipping
                        within USA
                    </h1>
                </div>
            </div>
            <div className='flex flex-wrap justify-between items-center gap-5 '>
                <div className='flex gap-3'>
                    <img src={Hero10} alt="" />
                    <h1 className='w-52'>
                    Signal Catalogue
                    Updates Included
                    </h1>
                </div>

                <div>
                    <div className='flex gap-3  items-center'>
                        <img src={Hero9} alt="" />
                        <h1 className='w-52'>
                        Customer Support via E-mail, Phone, and Chat
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
