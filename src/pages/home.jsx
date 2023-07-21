import { useState } from "react";
import { Topbar } from "../../components/topbar";

export const Home = () => {
    const [companyInsert, setCompanyInsert] = useState(" any team.")
    const [nameInsert, setNameInsert] = useState("")

    function handleHover () {
        const element = document.getElementById("header-insert");
        element.innerHTML = " like to create."
    }
    function handleExitHover () {
        const element = document.getElementById("header-insert");
        element.innerHTML = "'m a frontend developer."
    }

    return (
        <div className="homepage">
            <Topbar setNameInsert={setNameInsert} setCompanyInsert={setCompanyInsert}/>
            <div onMouseLeave={() => handleExitHover()} className="left-home-container grid-item">
                <div>
                    <h1 className="homepage-header">Hi<span id="name-insert">{nameInsert}!</span> I'm Kylie, </h1>
                    <h1>and I<span id="header-insert" onMouseEnter={() => handleHover()}>'m a frontend developer</span></h1>
                    <p className="homepage-paragraph">I am a self-starting developer who is passionate about crafting visually pleasing responsive projects, and would make a great addition to <span>{companyInsert}</span></p>
                </div>
            </div>
            <div className="right-home-container grid-item">
                <div className="right-middle-container">
                    <h3 className="toolbox-header">MY TOOLBOX</h3>
                    <ul className="toolbox-list">
                        <li className="toolbox-item">HTML</li>
                        <li className="toolbox-item">CSS</li>
                        <li className="toolbox-item">Tailwind</li>
                        <li className="toolbox-item">Javascript</li>
                        <li className="toolbox-item">React</li>
                        <li className="toolbox-item">Express</li>
                        <li className="toolbox-item">Node.js</li>
                        <li className="toolbox-item">MongoDB</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}