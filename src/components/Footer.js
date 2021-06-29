import React from 'react'

import './../styles/Footer.css'

export const Footer = () => {

    const list = ['Quienes Somos', 'Trabaja con nosotros', 'Nuestros clientes'];

    return (
        <footer className="footer-body">
            <ul>
                    {
                        list.map((item, i) => {
                            return <li key={ i } className="left">{item}</li> ;
                        })
                    }
            </ul>
        </footer>
    )
}
