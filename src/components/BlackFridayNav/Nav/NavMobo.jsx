import React, { useState } from 'react'
import "./Nav.css";

export default function NavMobo({links}) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = (index) => {
        setSelectedIndex(index);
    };


    return (
        <ul className="Nav-Mobo absolute left-0  bg-green-400  bg-customPurple pt-10 pb-10 w-4/5 opacity-100 rounded-2xl 	flex-col items-center gap-12 hidden">
        {links.map((el, index) => (
            <li
            key={index}
            onClick={() => handleClick(index)}
            className={`text-white flex items-center justify-center rounded-2xl cursor-pointer ${selectedIndex === index ? 'text-white' : 'text-black'}`}
            >
            <a href={el.path}>{el.title}</a>
            </li>
        ))}
        </ul>
    );
    }
