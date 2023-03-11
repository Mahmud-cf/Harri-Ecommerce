import React from 'react'
import './CssFile/Contact.css'
import Navbar from '../Components/GlobalComponents/Navbar'
import { BsFillChatRightTextFill } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import Footer from '../Components/GlobalComponents/Footer';

function Contact() {
  return (
    <div>
      <Navbar/>
      <div className="container-fluid contact-page-wrapper">
        <div className="contact-header">
          <h1>how can we halp you</h1>
        </div>
        <div className="pd-4">
        <div className="contact-main-part">
          <div className="contact-title text-center">
            <h2>Contact Us</h2>
            <p>We can help. Our team of experts is on hand to answer your questions.</p>
          </div>
          <div className="row">
            <div className="col-md-6 col-11">
              <div className="contact-item-wrapper">
                <div className='d-flex' >
                  <div className='text-center' >
                    <BsFillChatRightTextFill/>
                  </div>
                  <div className='contact-item-details' >
                    <h2>Chat</h2>
                    <p>to start a chat with an agent from 7:00am to 7:00pm CST on Monday through Friday.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-11">
              <div className="contact-item-wrapper">
                <div className='d-flex' >
                  <div className='text-center' >
                    <FiPhoneCall/>
                  </div>
                  <div className='contact-item-details' >
                    <h2>Chat</h2>
                    <p>Give us a ring at 1.855.485.6300 to speak with an agent immediately.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact