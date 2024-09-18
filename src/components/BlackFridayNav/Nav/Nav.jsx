import React from 'react'
import Navitems from './Navitems'
import { Navlinks } from "./../../../data";
import NavMobo from './NavMobo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.css";


const OpenNav = ()=>{
    const open = document.querySelector(".nav-mobo-open")
    const close = document.querySelector(".nav-mobo-close")
    const mobonav = document.querySelector(".Nav-Mobo")
    const none = document.querySelector(".none")
    const none2 = document.querySelector(".none2")
    
if (open.style.display = "flex") {
    open.style.display = "none"
    mobonav.style.display = "flex "
    none.style.display = "none "
    none2.style.display = "none "


}
if (close.style.display = "none") {
    close.style.display = "flex"
    none.style.display = "none "
    
}
}
const CloseNav = ()=>{
    const mobonav = document.querySelector(".Nav-Mobo")
    const open = document.querySelector(".nav-mobo-open")
    const close = document.querySelector(".nav-mobo-close")
    const none = document.querySelector(".none")
    const none2 = document.querySelector(".none2")

    if (close.style.display = "flex") {
        close.style.display = "none"
        mobonav.style.display= "none"
    }
    if (open.style.display = "none") {
        open.style.display = "flex"
        none.style.display = "flex "
        none2.style.display = "flex "
    }
}


export default function Nav() {
    return (
    <div className='Container-Nav  px-9 pt-3 '>
        <Navitems links ={Navlinks}/>
        <NavMobo links ={Navlinks}/>
        <div className='flex pt-4'>
            <h1 onClick={OpenNav} className=" nav-mobo-open hidden text-3xl text-customPurple"><FontAwesomeIcon icon="fa-solid fa-bars-staggered" /></h1>
            <h1 onClick={CloseNav} className=" nav-mobo-close hidden text-3xl text-customPurple"><FontAwesomeIcon icon="fa-solid fa-x" /></h1>
        </div>
    </div>
    )
}
