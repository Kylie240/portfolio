import React from 'react'

const Contact = () => {
    return (
        <div class="contact-container">
            <h1>Contact</h1>
            <form>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name='name' placeholder='John Doe' />
                
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name='email' placeholder='johndoe@gmail.com' />
                
                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                
            </form>
        </div>
      )
}

export default Contact