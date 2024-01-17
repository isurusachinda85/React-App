import {Component} from "react";
import logo from "../../../image/logo.png";
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (

            <>
                <nav className="p-5 flex justify-between  ">

                    <div className="flex space-x-1">
                        <img className="w-[70px] " src={logo} alt=""/>
                        <h1 className="mt-2.5 text-[20px] text-[#0243E9] font-bold">Techno Mobile</h1>
                    </div>

                    <div className="w-[50%] flex space-x-5">
                        <input className="float-right w-full border-[2px] border-[#2560F8] rounded focus:outline-none"
                               type="text"
                               placeholder="Search items"/>
                    </div>


                    <button>
                        <Link to="/mycart">My Cart</Link>
                    </button>

                    <button>Welcome User</button>
                    <button>
                        <Link to="/login">Login</Link>
                    </button>
                    <button>
                        <Link to="/signup">Sign Up</Link>
                    </button>
                </nav>


                <div className="p-4 bg-[#2560F8]">
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