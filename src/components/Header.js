import React from 'react'

import '../styles/Header.css'

export const Header = () => {
    return (
        <header>
            <a className="menu-item" href="#us">Nosotros</a>
            <a className="menu-item" href="#history">Historia</a>
            <a href="/#"><h4 className="logo nav-a">PageArt</h4></a>
            <a className="menu-item" href="#techs">Tecnologías</a>
            <a className="menu-item" href="#github">GitHub</a>
        </header>
    )
}
