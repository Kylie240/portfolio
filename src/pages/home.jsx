import { useState } from "react";
import { Topbar } from "../../components/topbar";

export const Home = () => {
    const [companyInsert, setCompanyInsert] = useState(" any team.")
    const [nameInsert, setNameInsert] = useState("")

    function handleHover () {
        const element = document.getElementById("header-insert");
        element.innerHTML = " and I love to create cool things with code."
    }
    function handleExitHover () {
        const element = document.getElementById("header-insert");
        element.innerHTML = " a frontend developer."
    }

    return (
        <div id="about" className="homepage">
            <Topbar setNameInsert={setNameInsert} setCompanyInsert={setCompanyInsert}/>
            <div className="homepage-containers">
                <div onMouseLeave={() => handleExitHover()} className="left-home-container">
                    <h1 className="homepage-header">{ nameInsert.length > 0 ? <span>Hi {nameInsert}! </span> : ""}I'm Kylie,
                    <span id="header-insert" onMouseEnter={() => handleHover()}> a frontend developer</span></h1>
                    <p className="homepage-paragraph">I am a self-starter with an arsenal of technical skills in front-end and back-end technologies. Currently looking for a new opportunity to put my expertise to use. As a hard-worker and avid learner, I would make a great addition to 
                        {companyInsert === " any team." ?  
                            <span>{companyInsert}</span> 
                            : 
                            <span id="company-insert"> {companyInsert}</span>
                        }
                    </p>
                    <div className="home-links">                        
                        <a href="#about" target="_blank"><i className="fa-solid fa-user fa-xl"></i></a>                        
                        <a href="https://github.com/Kylie240" target="_blank"><i className="fa-brands fa-github fa-xl"></i></a>                        
                        <a href="https://linkedin.com/in/kylie-oliver" target="_blank"><i className="fa-brands fa-linkedin-in fa-xl"></i></a>                        
                        <a href="Oliver Resume.pdf" target="_blank"><i className="fa-solid fa-file fa-xl"></i></a>
                    </div>
                </div>
                <div className="toolbox-container">
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