import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import { FaGitlab } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import ContactForm from './ContactForm/ContactForm';


function ContactMe() {
  return (
    <section className='contact-container' id='contactMe' >
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div style={{flex: 1}}>
                <ContactInfoCard
                    iconUrl={<IoMdMail />}
                    text="hammadfaisal0000yahoo@gmail.com"
                />
                <a href="https://gitlab.com/hammad98" target='_blank'>
                    <ContactInfoCard
                        iconUrl={<FaGitlab />} 
                        text="https://gitlab.com/hammad98"
                        />
                </a>
            </div>
            <div style={{flex: 1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactMe