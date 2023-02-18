import React, { useEffect } from "react";
import HomeScreen from './components/Screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SwapScreen from "./components/Screens/SwapScreen";
import ShopScreen from "./components/Screens/ShopScreen";
import AboutUs from "./components/Screens/AboutUs";
import ContactUs from "./components/Screens/ContactUs";
import ProductDetails from "./components/Screens/ProductDetails";
import SignIn from "./components/Screens/SignIn";
import SignUp from "./components/Screens/SignUp";
import Error404 from "./components/Screens/Error404";
import NavBar from "./components/NavBar/Navbar";
import Footer from './components/Standards/Footer'
import Profile from "./components/Standards/Profile";
import SwapListScreen from "./components/Screens/SwapListScreen";
import WishListScreen from "./components/Screens/WishListScreen";
import SwapListForm from "./components/Standards/SwapListForm";
import SwapEditForm from "./components/Standards/SwapEditForm";
import Messages from "./components/Standards/Messages";

function App(props) {

    const globalData = JSON.parse(localStorage.getItem('user12345'));
    console.log(globalData);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.location]);

    if (globalData !== null) {
        return (
            <>
                <BrowserRouter>
                    <NavBar user={globalData.currentUser} />
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/swap" element={<SwapScreen />} />
                        <Route path="/swapList/:_id" element={<SwapListScreen />} />
                        <Route path="/addProduct" element={<SwapListForm />} />
                        <Route path="/editProduct/:_id" element={<SwapEditForm />} />
                        <Route path="/wishList" element={<WishListScreen />} />
                        <Route path="/buy" element={<ShopScreen />} />
                        <Route path="/aboutUs" element={<AboutUs />} />
                        <Route path="/contactUs" element={<ContactUs />} />
                        <Route path="/product/:_id" element={<ProductDetails />} />
                        <Route path="/profile/:_id" element={<Profile />} />
                        <Route path="/messages" element={<Messages />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </>
        );
    } else {
        return (
            <>
                <BrowserRouter>
                    <NavBar user={""} />
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/swap" element={<SwapScreen />} />
                        <Route path="/buy" element={<ShopScreen />} />
                        <Route path="/aboutUs" element={<AboutUs />} />
                        <Route path="/signIn" element={<SignIn />} />
                        <Route path="/signUp" element={<SignUp />} />
                        <Route path="/contactUs" element={<ContactUs />} />
                        <Route path="/product/:_id" element={<ProductDetails />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </>
        );
    }


}

export default App;