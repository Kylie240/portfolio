import React from 'react'

const Projects = () => {
  return (
    <div class="projects-container">
        <h1>Projects</h1>
        <div className="project">
            <img className='project-img' src="src/images/localhost_5173_ (1).png" alt="" />
            <div className="project-description">
                <h3 className="project-title">Ready shoot</h3>
                <p className="project-info">
                    A handy rental website for cameras, that utilizes authentication via JSONwebtoken and password encryption. Other features include CRUD operations, product filtering, and state management.
                </p>
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
                    <a href="https://github.com/Kylie240/rental-app" target="_blank">Code <i class="fa-brands fa-github"></i></a>
                    <a href="" target="_blank">Live Site <i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>
        </div>
        <div className="project">
            <img className='project-img' src="src/images/localhost_5173_.png" alt="" />
            <div className="project-description">
                <h3 className="project-title">Word Search</h3>
                <p className="project-info">
                    A beautifully built dictionary site, created with API calls via Axios and gives users the ability to adjust displayed results.
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
                    <a href="" target="_blank">Live Site <i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>
        </div>
        <div className="project">
            <img className='project-img' src="src/images/localhost_5174_.png" alt="" />
            <div className="project-description">
                <h3 className="project-title">Smoothie Queen</h3>
                <p className="project-info">
                    Find, save, and create you favorite smoothie recipes. Features the ability to create an account, edit saves, and create a shopping list.
                </p>
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
                    <a href="https://github.com/Kylie240/smoothie-app" target="_blank">Code <i class="fa-brands fa-github"></i></a>
                    <a href="" target="_blank">Live Site <i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects