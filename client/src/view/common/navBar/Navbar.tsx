import {Component} from "react";
import logo from "../../../image/logo.png";
export class Navbar extends Component {
    render() {
        return (

            <>
                <div className="p-3 flex">
                    <img className="w-[70px]" src={logo} alt=""/>
                    <h1 className="mt-2.5 text-[20px] text-[#0243E9] font-bold">Techno Mobile</h1>

                    {/*<ul className="list-none flex ml-5">
                        <li className="mr-5 text-[16px] text-[#e6f0e6]">Home</li>

                        <li className="mr-5 text-[16px] text-[#e6f0e6]">Mobile Phones</li>

                        <li className="mr-5 text-[16px] text-[#e6f0e6]">Accessories</li>

                        <li className="mr-5 text-[16px] text-[#e6f0e6]">About Us</li>

                        <li className="mr-5 text-[16px] text-[#e6f0e6]">Contact Us</li>
                    </ul>*/}
                </div>
                <div className="p-4 bg-[#2560F8] flex">
                <ul className="list-none flex ml-5">
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