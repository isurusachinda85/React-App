import { Component } from "react";
import Input from '@mui/joy/Input';
import TextField from '@mui/material/TextField';

export class SignUp extends Component {
    render() {
        return (
            <>
                <div className="border border-black w-[100vw] h-[100vh] flex items-center justify-center">
                    <div className="w-[30%] h-[80%] shadow-2xl ">
                        <div className="border border-black w-full h-[10%] text-[#09bafa] font-bold text-[40px]">
                            <h1>Create an Account</h1>
                        </div>
                        <div className="border border-black w-full h-[20%]">
                            <Input placeholder="Username" />
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />
                        </div>
                        <div className="border border-black w-full h-[20%]"></div>
                        <div className="border border-black w-full h-[20%]"></div>
                    </div>
                </div>
            </>
        );
    }
}