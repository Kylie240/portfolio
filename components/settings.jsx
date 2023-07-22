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
        const waterTheme = document.getElementById("fa-water")
        const mountainTheme = document.getElementById("fa-mountain")

        console.log(waterTheme.classList);

        if (document.body.classList.contains("active")) {
            document.body.classList.remove("active")
            mountainTheme.classList.remove("active-theme")
            waterTheme.classList.add("active-theme")
        } else {
            document.body.classList.add("active")
            waterTheme.classList.remove("active-theme")
            mountainTheme.classList.add("active-theme")
        }
    }

    return(
        <div className="settings-container">
            <div className="settings-form">
                <h4>Settings</h4> 
                <div className="settings-info">
                    <i class="fa-regular fa-circle-question"></i>
                    <p>Input your information to change the homepage.</p>
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    name="name" 
                    onChange={(e) => handleNameChange(e)}
                    placeholder="name"/>
                </div>
                <div>
                    <label htmlFor="name">Company</label>
                    <input 
                        type="text" 
                        name="company" 
                        onChange={(e) => handleCompanyChange(e)}
                        placeholder="company"/>
                </div>
                <div className="theme-container">
                    <label htmlFor="theme-toggler">Theme:</label>
                    <div className="theme-toggler" onClick={() => toggleTheme()}>
                        <i id="fa-water" class="fa-solid fa-water active-theme"></i>
                        <i id="fa-mountain" class="fa-solid fa-mountain"></i>
                        <span></span>
                    </div>
                </div>
            </div>
            <button onClick={() => setToggleModal(!toggleModal)}>close</button>
        </div>
    )
}