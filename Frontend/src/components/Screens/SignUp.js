import React from 'react'
import NavBar from '../NavBar/Navbar'
import Breadcrumb from '../Standards/Breadcrumb'
import Footer from '../Standards/Footer'
import SignUpComponent from '../Standards/SignUpComponent'

function SignUp() {
    return (
        <>
            <Breadcrumb type={"Sign Up"} />
            <SignUpComponent />
        </>
    );
}

export default SignUp