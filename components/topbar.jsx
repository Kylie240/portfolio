import { useState } from "react"
import { Settings } from "./settings"

export const Topbar = ({setCompanyInsert, setNameInsert, }) => {
    const [toggleModal, setToggleModal] = useState(false)
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false)

    const contactElement = document.getElementById("contact")

    function themeToggler () {
        document.body.classList.toggle('active')
    }

    return (
        <div className="topbar">
            <h3 className="topbar-heading">KYLIE OLIVER</h3>
            <div className="topbar-right">
                <div>
                    <i id="topbar-gear" 
                        className="fa-solid fa-gear fa-xl"
                        onClick={() => setToggleModal(!toggleModal)}
                    ></i>
                    {toggleModal && <Settings setToggleModal={setToggleModal} 
                        toggleModal={toggleModal} 
                        setNameInsert={setNameInsert} 
                        setCompanyInsert={setCompanyInsert}/>
                    }
                </div>
                <div className="mobile-menu">
                    <i class="fa-solid fa-bars fa-xl"
                        onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
                    ></i>
                    {toggleMobileMenu && 
                    <div className="mobile-list">
                        <i class="fa-solid fa-xmark fa-lg"
                        onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
                        ></i>
                        <ul>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>}
                </div>
            </div>
        </div>
    )
}