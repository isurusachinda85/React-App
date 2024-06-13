import { Component } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Master from "../../../image/masterd.png";
import Visa from "../../../image/visa.png";
import Amar from "../../../image/amar.png";
import Deliva from "../../../image/delivary.png";


export class Footer extends Component {
    render() {
        return (
            <footer className="relative  bottom-0 h-[50vh] w-full bg-[#222324] ">
                <div className=" h-[80%] w-[90%] ml-20 mr-20 flex flex-row justify-center">
                    <div className="h-full w-[30%] flex flex-col justify-around">

                        <div className="w-full h-[20%]">
                            <h1 className="text-[27px] text-white  font-bold">Techno<span className={"text-[#09bafa] text-[30px]"}>Mobile</span></h1>
                        </div>

                        <div className="w-full h-[45%] flex flex-col justify-around">
                            <p className="font-bold text-[#909090]"><RoomOutlinedIcon className="mr-2 text-[#09bafa]" />Techno Mobile Galle 581/A, Gonapinuwala ,
                                <br /><span className="ml-8">Hikkaduwa.</span></p>
                            <p className="font-bold text-[#909090]"><LocalPhoneOutlinedIcon className="text-[#09bafa] mr-2" />076 388 0467 , 077 558 0658</p>
                            <p className="font-bold text-[#909090]"><EmailOutlinedIcon className="text-[#09bafa] mr-2" />technomobile@gmail.com</p>
                        </div>
                        <div className="w-[75%] h-[20%] flex flex-row items-center justify-evenly gap-0">
                            <div className="border border-[#909090] text-[#909090] cursor-pointer hover:bg-white hover:text-[#09bafa] rounded-full h-[43px] w-[43px] flex items-center justify-center"><WhatsAppIcon fontSize="medium" /></div>
                            <div className="border border-[#909090] text-[#909090] cursor-pointer hover:bg-white hover:text-[#09bafa] rounded-full h-[43px] w-[43px] flex items-center justify-center"><FacebookRoundedIcon fontSize="medium" /></div>
                            <div className="border border-[#909090] text-[#909090] cursor-pointer hover:bg-white hover:text-[#09bafa] rounded-full h-[43px] w-[43px] flex items-center justify-center"><XIcon fontSize="medium" /></div>
                            <div className="border border-[#909090] text-[#909090] cursor-pointer hover:bg-white hover:text-[#09bafa] rounded-full h-[43px] w-[43px] flex items-center justify-center"><InstagramIcon fontSize="medium" /></div>
                        </div>
                    </div>
                    <div className="h-full w-[30%] flex flex-col justify-around">
                        <div className="h-[20%] w-full pl-36 flex items-end">
                            <h1 className="text-[18px] text-white  font-bold ">My Account</h1>
                        </div>
                        <div className="h-[70%] w-full ">
                            <ul className="font-bold text-[#909090] h-[70%] w-full pl-36 flex flex-col justify-around ">
                                <li>Manage Account</li>
                                <li>View Cart</li>
                                <li>Orders</li>
                                <li>Track Order</li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-full w-[30%] flex flex-col justify-around">
                        <div className="h-[20%] w-full pl-36 flex items-end">
                            <h1 className="text-[18px] text-white  font-bold">Information</h1>
                        </div>
                        <div className="h-[70%] w-full">
                            <ul className="font-bold text-[#909090] h-[53%] w-full pl-36 flex flex-col justify-around">
                                <li>About US</li>
                                <li>Contact US</li>
                                <li>Privacy policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="h-[20%] w-full text-white  bg-[#222324] flex ">
                    <div className="w-[65%] h-full flex items-center">
                        <p className="pl-36">Copyright &copy; 2024 All Right Reserved</p>
                    </div>

                    <div className="w-[30%] h-full flex items-center justify-around">
                        <div className="border border-[#909090] h-[45px] w-[80px] flex items-center justify-center">
                            <img className="w-[60px]" src={Master} alt="" />
                        </div>
                        <div className="border border-[#909090] h-[45px] w-[80px] flex items-center justify-center">
                            <img className="w-[60px]" src={Visa} alt="" />
                        </div>
                        <div className="border border-[#909090] h-[45px] w-[80px] flex items-center justify-center">
                            <img className="w-[60px]" src={Amar} alt="" />
                        </div>
                        <div className="border border-[#909090] h-[45px] w-[80px] flex items-center justify-center">
                            <img className="w-[60px]" src={Deliva} alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}