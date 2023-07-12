export const Settings = ({
    setCompanyInsert, setNameInsert
}) => {

    function handleNameChange (e) {
        const {value} = e.target;
        setNameInsert(` ${value}`)
    }
    function handleCompanyChange (e) {
        const {value} = e.target;
        if (value.length < 1) {
            setCompanyInsert(" any team.")
        } else {
            setCompanyInsert(`${value}.`)
        }
    }

    return(
        <div className="settings-container">
            <div>
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
                <div>
                    <i className="fa-solid fa-droplet theme-btn"></i>
                    <i className="fa-solid fa-leaf theme-btn"></i>
                </div>
            </div>
            <button>close</button>
        </div>
    )
}