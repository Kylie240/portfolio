export const Settings = ({
    setCompanyInsert, setNameInsert, toggleModal, setToggleModal, 
}) => {

    function handleNameChange (e) {
        const {value} = e.target;
        if (value.length < 1) {
            setNameInsert("")
        } else {
            setNameInsert(` ${value}`)
        }
    }
    function handleCompanyChange (e) {
        const {value} = e.target;
        if (value.length < 1) {
            setCompanyInsert(" any team.")
        } else {
            setCompanyInsert(`${value}.`)
        }
    }

    function toggleTheme () {
        const cloudTheme = document.getElementById("fa-cloud")
        const mughotTheme = document.getElementById("fa-mug-hot")

        if (document.body.classList.contains("active")) {
            document.body.classList.remove("active")
            mughotTheme.classList.remove("active-theme")
            cloudTheme.classList.add("active-theme")
        } else {
            document.body.classList.add("active")
            cloudTheme.classList.remove("active-theme")
            mughotTheme.classList.add("active-theme")
        }
    }

    return(
        <div className="settings-container">
            <div className="settings-form">
                <h4>Settings</h4> 
                <p>Input your information to change the homepage.</p>
                <div className="settings-input">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    name="name" 
                    onChange={(e) => handleNameChange(e)}
                    placeholder="your name"/>
                </div>
                <div className="settings-input">
                    <label htmlFor="name">Company</label>
                    <input 
                        type="text" 
                        name="company" 
                        onChange={(e) => handleCompanyChange(e)}
                        placeholder="company's name"/>
                </div>
                <div className="theme-container">
                    <label htmlFor="theme-toggler">Theme:</label>
                    <div className="theme-toggler" onClick={() => toggleTheme()}>
                        <i id="fa-cloud" class="fa-solid fa-cloud active-theme fa-xs"></i>
                        <i id="fa-mug-hot" class="fa-solid fa-mug-hot fa-xs"></i>
                        <span></span>
                    </div>
                </div>
            </div>
            <button onClick={() => setToggleModal(!toggleModal)}>close</button>
        </div>
    )
}