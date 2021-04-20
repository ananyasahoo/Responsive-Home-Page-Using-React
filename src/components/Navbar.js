import React,{useState} from 'react';
import {Button }from  './Button';
import './Navbar.css';
import Dropdown from './Dropdown';
import {Link} from "react-router-dom";

function Navbar(){
    const[click,Setclick]=useState(false)
    const[dropdown,setDropdown]=useState(false);
    const handleClick= () =>Setclick(!click)
    const closeMobileMenu =() => Setclick(false);
    const onMouseEnter =()=>{
 if(window.innerWidth < 960){
     setDropdown(false);
 }else{
     setDropdown(true);
 }
    };

    const onMouseLeave =()=>{
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
           }
    return(
        <>
        <nav className='navbar'>
            <Link to="/"  className="navbar-logo">
                MAKAAN
            </Link>
            <div className="menu-icon" onClick={handleClick}>
<i className={click ? 'fas fa-times':'fas fa-bars' }/>
            </div>
            <ul className={click ? 'nav menu-active': 'nav-menu'}>
            <li className="nav-item">
                <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>

            </li>
           
        
            <li className='nav-item'
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}>
           
                <Link to="/services" className='nav-links' 
                onClick={closeMobileMenu}>Services
                <i className='fas fa-caret-down'>
                    </i>
                    </Link>
             {dropdown && <Dropdown/>}
            </li>
            <li className="nav-item">
                <Link to="/products" className='nav-links' onClick={closeMobileMenu}>Products
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/contact-us" className='nav-links' onClick={closeMobileMenu}>Contact Us
                </Link>
            </li>
           
            <li className="nav-item">
                <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
            </li>
            </ul>
            <Button/>
        </nav>
        </>
    )
}
export default Navbar;