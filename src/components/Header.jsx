import { Link } from 'gatsby'
import React from 'react'
import '../styles/header.scss'

function Header() {
    return (
        <div className='header'>
            <div className='header__wrapper'>
                <div className='header__title'>
                    Welcome Back
                </div>
                <nav className='header__nav'>
                    <ul className='header__nav-list'>
                        <li className='header__nav-list__item'>
                        <Link to='/'>
                        <a className='header__nav-list__item-link'>Home</a>
                        </Link>
                        </li>
                        <li className='header__nav-list__item'>
                        <Link to='/about'>
                        <a className='header__nav-list__item-link'>About</a>
                        </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
