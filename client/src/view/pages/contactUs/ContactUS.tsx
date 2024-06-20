import { Component } from "react";
import TextField from '@mui/material/TextField';
import CommonButton from "../../common/Button/Button";
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneCallbackOutlinedIcon from '@mui/icons-material/PhoneCallbackOutlined';


export class ContactUS extends Component {
    render() {
        return (
            <>
                <div className="h-[100vh] w-full ">
                    <div className="w-full h-[10%] font-bold text-[35px] flex items-center justify-center text-[#09bafa]">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="w-full h-[90%] flex flex-row items-center justify-between">
                        <div className="w-[50%] h-[90%] ml-32 flex flex-wrap shadow-2xl p-7">
                            <div className="w-full h-[10%] font-bold text-[25px] flex items-center">
                                <h1>Send Your Message</h1>
                            </div>

                            <div className="w-[50%] pr-5 ">
                                <TextField
                                    fullWidth
                                    placeholder="First Name"
                                />
                            </div>

                            <div className="w-[50%] pl-5">
                                <TextField
                                    fullWidth
                                    placeholder="Last Name"
                                />
                            </div>

                            <div className="w-full">
                                <TextField
                                    fullWidth
                                    placeholder="Email"
                                />
                            </div>

                            <div className="w-full">
                                <TextField
                                    fullWidth
                                    placeholder="Subject"
                                />
                            </div>

                            <div className="w-full">
                                <TextField
                                    id="outlined-multiline-static"
                                    fullWidth
                                    multiline
                                    placeholder="Message"
                                    rows={4}
                                />
                            </div>
                            <div className="w-full flex justify-end ">
                                <CommonButton className="h-[65%] w-60" label="Send Message" endIcon={<SendIcon />} style={{ background: "#09bafa" }} />
                            </div>
                        </div>
                        <div className="w-[35%] h-[90%] mr-20 shadow-2xl p-7">
                            <div className="w-full h-[10%] font-bold text-[25px] flex items-center">
                                <h1>Get in touch</h1>
                            </div>

                            <div className="w-full h-[15%] flex flex-row items-center mt-5">
                                <div className="border border-[#09bafa] text-[#09bafa] rounded-full h-[50px] w-[50px] flex items-center justify-center text-[35px]">
                                    <RoomOutlinedIcon fontSize="large" />
                                </div>
                                <div className="w-[80%] h-[50%] font-bold flex items-center ml-4">
                                    <h1>Techno Mobile Galle 581/A, Gonapinuwala  ,<span> Hikkaduwa.</span></h1>
                                </div>
                            </div>

                            <div className="w-full h-[15%] flex flex-row items-center">
                                <div className="border border-[#09bafa] text-[#09bafa] rounded-full h-[50px] w-[50px] flex items-center justify-center text-[35px]">
                                    <PhoneCallbackOutlinedIcon fontSize="large" />
                                </div>
                                <div className="w-[80%] h-[50%] font-bold flex items-center ml-4">
                                    <h1>076 388 0467 , 077 558 0658</h1>
                                </div>
                            </div>

                            <div className="w-full h-[15%] flex flex-row items-center">
                                <div className="border border-[#09bafa] text-[#09bafa] rounded-full h-[50px] w-[50px] flex items-center justify-center text-[35px]">
                                    <EmailOutlinedIcon fontSize="large" />
                                </div>
                                <div className="w-[80%] h-[50%] font-bold flex items-center ml-4">
                                    <h1>technomobile@gmail.com</h1>
                                </div>
                            </div>

                            <div className="w-full h-[20%] flex flex-col mt-5">
                                <div className="w-full h-[40%] text-[20px] ">
                                    <h1>Follow Us</h1>
                                </div>
                                <div className="w-full h-[60%] flex flex-row gap-3 items-center">
                                    <div className="border border-[#909090] text-[#909090] cursor-pointer hover:bg-[#09bafa] hover:text-white hover:border-[#09bafa] transition duration-500 rounded-full h-[43px] w-[43px] flex items-center justify-center"><WhatsAppIcon fontSize="medium" /></div>
                                    <div className="border border-[#909090] text-[#909090] cursor-pointer hover:bg-[#09bafa] hover:text-white hover:border-[#09bafa] transition duration-500 rounded-full h-[43px] w-[43px] flex items-center justify-center"><FacebookRoundedIcon fontSize="medium" /></div>
                                    <div className="border border-[#909090] text-[#909090] cursor-pointer hover:bg-[#09bafa] hover:text-white hover:border-[#09bafa] transition duration-500 rounded-full h-[43px] w-[43px] flex items-center justify-center"><XIcon fontSize="medium" /></div>
                                    <div className="border border-[#909090] text-[#909090] cursor-pointer hover:bg-[#09bafa] hover:text-white hover:border-[#09bafa] transition duration-500 rounded-full h-[43px] w-[43px] flex items-center justify-center"><InstagramIcon fontSize="medium" /></div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}