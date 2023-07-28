import React from 'react'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-1">
            <p>© 2023, Built and designed by Kylie Oliver</p>
        </div>
            <div className="footer-links">
                <a href="#about">
                    <i className="fa-solid fa-user fa-2x"></i>
                </a>
                <a href="https://github.com/Kylie240" target="_blank">
                    <i className="fa-brands fa-github fa-2x text-white"></i>
                </a>            
                <a href="https://linkedin.com/in/kylie-oliver" target="_blank">
                    <i className="fa-brands fa-linkedin-in fa-2x text-white"></i>
                </a>            
                <a href="Oliver Resume.pdf" target="_blank">
                    <i className="fa-solid fa-file fa-2x text-white"></i>
                </a>
            </div>
    </div>
  )
}

export default Footer