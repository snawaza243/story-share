import { Form } from 'react-router-dom'
import { FormGroup, Label } from 'reactstrap'
import './contact.css'
export default function Contact(){
    return (
        <>
        <div className="contact">
            <span className="contactTitle">Contact</span>
            <form className="contactForm">
                <label >Name </label>
                <input type="email" className='contactInput' placeholder='Enter your name...' />
                <label >Email</label>
                <input type="email" className='contactInput' placeholder='Enter your email...' />
                <label >Message</label>
                {/* <input type="textbox" className='contactInput'  placeholder='Enter your password...' /> */}

                <textarea rows={4} >

                </textarea>
                <button className='contactButton'>Submit</button>
            </form>
            <button className='contactLoginButton'>Register</button>
        </div>
    </>
    )
}