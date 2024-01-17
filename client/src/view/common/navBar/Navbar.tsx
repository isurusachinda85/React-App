import {Component} from "react";
import logo from "../../../image/logo.png";

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
                        <input className="float-right w-full border-[2px] border-[#2560F8] rounded focus:outline-none" type="text"
                               placeholder="Search items"/>
                    </div>


                    <button>My Cart</button>
                    <button>Welcome User</button>
                    <button>Login</button>
                    <button>Sign Up</button>
                </nav>


                <div className="p-4 bg-[#2560F8]">
                    <ul className="list-none flex ml-5 justify-center">
                        <li className="mr-5 text-[16px] text-[#e6f0e6]">Home</li>

                        <li className="mr-5 text-[16px] text-[#e6f0e6]">Mobile Phones</li>

                        <li className="mr-5 text-[16px] text-[#e6f0e6]">Accessories</li>

                        <li className="mr-5 text-[16px] text-[#e6f0e6]">About Us</li>

                        <li className="mr-5 text-[16px] text-[#e6f0e6]">Contact Us</li>
                    </ul>
                </div>
            </>
        );
    }
}