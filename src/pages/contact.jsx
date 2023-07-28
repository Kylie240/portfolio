import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    return (
        <div id='contact' class="contact-container">
            <div>
                <h1>Contact me</h1>
                <p className="contact-paragraph">Feel free to reach out to me about any question or concern, by filling in your info in the contact form. I look forward to hearing from you!</p>
            </div>
            <form action="https://formspree.io/f/xjvqgboa" method="POST">
                    <input type="text" 
                        required
                        name='name' 
                        placeholder='Name'
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input type="email" 
                        required
                        name='email' 
                        placeholder='Email'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea name="message" 
                        required
                        placeholder='Message'
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                        id="" cols="30" 
                        rows="5">
                    </textarea>
                    <button>Send</button>                
            </form>
        </div>
      )
}

export default Contact