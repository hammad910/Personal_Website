import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ContactForm from './ContactForm/ContactForm';


function ContactMe() {
  return (
    <section className='contact-container' id='contactMe' data-aos="slide-up" data-aos-duration="6000">
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div style={{flex: 1}}>
                <ContactInfoCard
                    iconUrl={<IoMdMail />}
                    text="hammadfaisal0000yahoo@gmail.com"
                />
                <ContactInfoCard
                    iconUrl={<FaGithub />}
                    text="https://github.com/hammad910"
                />
            </div>
            <div style={{flex: 1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactMe