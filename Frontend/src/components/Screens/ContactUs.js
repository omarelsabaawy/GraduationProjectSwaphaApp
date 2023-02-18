import React from 'react'
import NavBar from '../NavBar/Navbar'
import BreadCrumb from '../Standards/Breadcrumb';
import Footer from '../Standards/Footer'
import ChatBot from "../ChatBot/ChatBot";

function ContactUs() {
    return (
        <div>
            <BreadCrumb type="Contact Us" />
            <div style={{ height: '200px' }}></div>
            <ChatBot />
        </div>
    )
}

export default ContactUs