import React from 'react'

const Projects = () => {
  return (
    <div id='projects' class="projects-container">
        <h1>Projects</h1>
        
        <div className="project">
            <img className='project-img' src="/localhost_5173_ (1).png" alt="" />
            <div className="project-description">
                <h3 className="project-title">Ready shoot</h3>
                <p className="project-info">
                    A handy rental website for cameras, that utilizes authentication via JSONwebtoken and password encryption. Other features include CRUD operations, product filtering, and state management.
                </p>
                <p className="project-credentials"><i class="fa-solid fa-triangle-exclamation"></i> For quick login use email: "test@gmail.com" & password: "test"</p>
                <ul className="project-stack">
                    <li className="stack-item">HTML</li>
                    <li className="stack-item">CSS</li>
                    <li className="stack-item">Tailwind</li>
                    <li className="stack-item">Javascript</li>
                    <li className="stack-item">React</li>
                    <li className="stack-item">Express</li>
                    <li className="stack-item">Node.js</li>
                    <li className="stack-item">MongoDB</li>
                </ul>
                <div class="project-btns">
                    <a href="https://github.com/Kylie240/ready-shoot" target="_blank">Code <i class="fa-brands fa-github"></i></a>
                    <a href="https://ready-shoot.netlify.app/" target="_blank">Live Site <i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>
        </div><div className="project">
            <img className='project-img' src="localhost_5173_product_2.png" alt="" />
            <div className="project-description">
                <h3 className="project-title">Starting Line</h3>
                <p className="project-info">
                    A modern and responsive E-commerce site for men's footwear. This project includes product filtering, state management, and reusable components.
                </p>
                <ul className="project-stack">
                    <li className="stack-item">HTML</li>
                    <li className="stack-item">CSS</li>
                    <li className="stack-item">Javascript</li>
                    <li className="stack-item">React</li>
                </ul>
                <div class="project-btns">
                    <a href="https://github.com/Kylie240/ecommerce-store" target="_blank">Code <i class="fa-brands fa-github"></i></a>
                    <a href="https://starting-line.netlify.app/" target="_blank">Live Site <i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>
        </div>
        <div className="project">
            <img className='project-img' src="/localhost_5173_.png" alt="" />
            <div className="project-description">
                <h3 className="project-title">Word Search</h3>
                <p className="project-info">
                    A beautifully built dictionary site, created with API calls via Axios. This dictionary gives users the ability to adjust displayed results with several different filtering options.
                </p>
                <ul className="project-stack">
                    <li className="stack-item">HTML</li>
                    <li className="stack-item">CSS</li>
                    <li className="stack-item">Tailwind</li>
                    <li className="stack-item">Javascript</li>
                    <li className="stack-item">React</li>
                </ul>
                <div class="project-btns">
                    <a href="https://github.com/Kylie240/word-search" target="_blank">Code <i class="fa-brands fa-github"></i></a>
                    <a href="https://oliver-word-search.netlify.app/" target="_blank">Live Site <i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>
        </div>
        <div className="project">
            <img className='project-img' src="/oliver-smoothie-queen.netlify.app_ (2).png" alt="" />
            <div className="project-description">
                <h3 className="project-title">Smoothie Queen</h3>
                <p className="project-info">
                    Find, save, and create you favorite smoothie recipes. Features the ability to create an account, edit saved recipes, and create a shopping list of based off of listed ingredients.
                </p>
                <p className="project-credentials"><i class="fa-solid fa-triangle-exclamation"></i> For quick login use email: "test@gmail.com" & password: "test"</p>
                <ul className="project-stack">
                    <li className="stack-item">HTML</li>
                    <li className="stack-item">CSS</li>
                    <li className="stack-item">Tailwind</li>
                    <li className="stack-item">Javascript</li>
                    <li className="stack-item">React</li>
                    <li className="stack-item">Express</li>
                    <li className="stack-item">Node.js</li>
                    <li className="stack-item">MongoDB</li>
                </ul>
                <div class="project-btns">
                    <a href="https://github.com/Kylie240/recipe-app" target="_blank">Code <i class="fa-brands fa-github"></i></a>
                    <a href="https://oliver-smoothie-queen.netlify.app/" target="_blank">Live Site <i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects