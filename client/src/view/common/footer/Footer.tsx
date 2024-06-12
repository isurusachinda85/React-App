import { Component } from "react";
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export class Footer extends Component {
    render() {
        return (
            <footer className="relative  bottom-0 border border-black h-[50vh] w-full bg-[#dee2e6] ">
                <div className="border border-black h-[80%] w-[90%] ml-20 mr-20 flex flex-row">
                    <div className="border border-black h-full w-[30%] flex flex-col justify-between">
                        <h1 className="text-[27px]  font-bold">Techno<span className={"text-[#09bafa] text-[30px]"}>Mobile</span></h1>
                        <ul>
                            <li><PlaceIcon />Techno Mobile Galle
                                581/A,
                                Gonapinuwala,
                                Hikkaduwa.</li>
                            <li><CallIcon />076 388 0467 , 077 558 0658</li>
                            <li><EmailIcon />technomobile.@gmail.com</li>
                        </ul>
                        <div className="border border-black w-full h-[20%] flex flex-row">
                            <div className="border border-black h-full w-[25%]"><WhatsAppIcon /></div>
                            <div className="border border-black h-full w-[25%]"><FacebookIcon /></div>
                            <div className="border border-black h-full w-[25%]"><XIcon /></div>
                            <div className="border border-black h-full w-[25%]"><InstagramIcon /></div>
                        </div>
                    </div>
                    <div className="border border-black h-full w-[30%]"></div>
                    <div className="border border-black h-full w-[30%]"></div>
                </div>
                <div className=" text-center h-[20%] w-full text-white p-4 bg-[#2560F8]">
                    <p>Copyright &copy; 2024 All Right Reserved</p>
                </div>
            </footer>
        );
    }
}