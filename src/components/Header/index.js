import React from 'react'
import Hero from "../../assets/header/hero.jpg"

function Header() {
    return (
        <div className="container-fluid header">
            <div className="row justify-content-center">
                <img className='hero' alt='Model of City Skyline' src={Hero}></img>
                <h1 className="header-h1">Jacob Wilde</h1>
                <h2 className="header-h2">Full Stack Developer</h2>
            </div>
        </div>

    )
}

export default Header