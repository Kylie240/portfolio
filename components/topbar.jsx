import { useState } from "react"
import { Settings } from "./settings"

export const Topbar = ({setCompanyInsert, setNameInsert, }) => {
    const [toggleModal, setToggleModal] = useState(false)
    function themeToggler () {
        document.body.classList.toggle('active')
    }

    return (
        <div className="topbar">
            <h3 className="topbar-heading">KYLIE OLIVER</h3>
            <i id="topbar-gear" 
                className="fa-solid fa-gear fa-xl sidebar-icon"
                onClick={() => setToggleModal(!toggleModal)}
            ></i>
        {toggleModal && <Settings setNameInsert={setNameInsert} setCompanyInsert={setCompanyInsert}/>}
        </div>
    )
}