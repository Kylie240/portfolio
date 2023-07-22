import { useState } from "react"
import { Settings } from "./settings"

export const Topbar = ({setCompanyInsert, setNameInsert, }) => {
    const [toggleModal, setToggleModal] = useState(false)
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false)
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
                    {toggleMobileMenu && <div className="mobile-list">
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
                        </ul>
                    </div>}
                </div>
            </div>
        </div>
    )
}