import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-1">
            <h3>Kylie Oliver</h3>
            <p>© 2023, Built and designed by Alejandro Aspinwall</p>
        </div>
        <div className="footer-2">
            <h5>Links</h5>
            <ul>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/about">Projects</a>
                </li>
                <li>
                    <a href="/about">Contact</a>
                </li>
                <li>
                    <a href="/about">Blank</a>
                </li>
            </ul>
        </div>
        <div className="footer-3">
            <h5>Get in touch</h5>
            <div className="footer-links">
                <i className="fa-solid fa-user fa-2x"></i>
                <i className="fa-brands fa-github fa-2x"></i>
                <i className="fa-brands fa-linkedin-in fa-2x"></i>
                <i className="fa-solid fa-file fa-2x"></i>
            </div>
        </div>
    </div>
  )
}

export default Footer