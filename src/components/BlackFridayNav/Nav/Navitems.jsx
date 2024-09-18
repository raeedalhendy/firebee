import React, { useState } from 'react'
import user from "./../../../assets/img/user.svg"
import Logo from "./../../../assets/img/Logo.jpg"
import "./Nav.css";

export default function Navitems({links}) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = (index) => {
        setSelectedIndex(index);
    };
    return (
        <div className='flex items-center justify-between gap-4 '>
                <img className=' w-32 h-8 none' src={Logo} alt="#" />
            <ul className="ul-nav flex items-center gap-12">
                {links.map((el, index) => (
                    <li
                    key={index}
                    className={` hover:text-green-400
                        ${
                        selectedIndex === index ?'text-green-400':'text-black'
                    }`}
                    onClick={() => handleClick(index)}>
                    <a href={el.path}>{el.title}</a>
                    </li>
                ))}
            </ul>
                <div className='flex  gap-10  '>
                    <button className=' h-16 bg-green-400 none2 px-3 text-white rounded-3xl'>
                        Buy Now 
                    </button>
                    <div className='ul-nav flex items-center justify-center h-14 w-14 bg-blue-400 rounded-full'>
                        <img src={user} alt="" />
                    </div>
                </div>
        </div>

    );
    
}
