import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { MobilePhone } from "../../pages/mobilePhones/MobilePhone";
import { Accessories } from "../../pages/accessories/Accessories";
import { AboutUS } from "../../pages/aboutUs/AboutUS";
import { ContactUS } from "../../pages/contactUs/ContactUS";
import { MyCart } from "../../pages/mycart/MyCart";
import { User } from "../../pages/user/User";

export class MainContent extends Component {
    render() {
        return (
            <div className="mx-auto">
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/mobilephone" Component={MobilePhone}></Route>
                    <Route path="/accessories" Component={Accessories}></Route>
                    <Route path="/aboutus" Component={AboutUS}></Route>
                    <Route path="/contactus" Component={ContactUS}></Route>
                    <Route path="/mycart" Component={MyCart}></Route>
                    <Route path="/user" Component={User}></Route>
                </Routes>
            </div>
        );
    }
}