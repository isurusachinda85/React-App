import React, {Component} from "react";
import logo from "../../../image/logo.png";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export class Navbar extends Component {
    render() {
        return (

            <>
                <nav className="p-5 flex justify-between">

                    <div className="flex space-x-1">
                        <img className="w-[70px] " src={logo} alt=""/>
                        <h1 className="mt-2.5 text-[20px] text-[#0243E9] font-bold">Techno Mobile</h1>
                    </div>

                    <div className="w-[43%] flex ">
                        <input className="float-right w-full h-full border-[2px] border-[#2560F8] border-r-0 rounded rounded-r-none focus:outline-none"
                               type="text"
                               placeholder="Search items"/>
                        <button className="rounded-r bg-[#2560F8] text-white w-56">{<SearchIcon />}</button>
                    </div>


                    <div>
                        <Button className="h-full" startIcon={<AddShoppingCartIcon />}>
                            <Link to="/mycart">my cart (0)</Link>
                        </Button>
                    </div>


                    <div>
                        <Button className="h-full" startIcon={<AccountCircleIcon />}>
                            welcome user
                        </Button>
                    </div>

                    <div>
                        <Button className="h-full w-28" size="medium">
                            <Link to="/login">Login</Link>
                        </Button>
                    </div>

                    <div>
                        <Button className="h-full w-28" size="medium">
                            <Link to="/signup">Sign Up</Link>
                        </Button>
                    </div>

                </nav>


                <div className="p-4 bg-[#2560F8]  ">
                    <ul className="list-none flex justify-center text-[#e6f0e6] text-[17px] font-bold">
                        <li className="mr-10 hover:text-black  duration-500">
                            <Link to="/">Home</Link>
                        </li>

                        <li className="mr-10 hover:text-black duration-500">
                            <Link to="/mobilephone">Mobile Phones</Link>
                        </li>

                        <li className="mr-10 hover:text-black duration-500">
                            <Link to="/accessories">Accessories</Link>
                        </li>

                        <li className="mr-10 hover:text-black duration-500">
                            <Link to="/aboutus">About Us</Link>
                        </li>

                        <li className="mr-10 hover:text-black duration-500">
                            <Link to="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}