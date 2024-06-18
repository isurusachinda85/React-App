import { Component } from "react";
import TextField from '@mui/material/TextField';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CommonButton from "../../common/Button/Button";
import Googlelogo from "../../../image/google.png";
import { Link } from "react-router-dom";


interface InputAdornmentsState {
    showPassword: boolean;
}

export class SignUp extends Component<{}, InputAdornmentsState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            showPassword: false,
        }
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);

    }

    handleClickShowPassword() {
        this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
    }


    render() {

        return (
            <>
                <div className="w-[100vw] h-[100vh] flex items-center justify-center">
                    <div className="w-[27%] h-[80%] shadow-2xl ">
                        <div className="w-full h-[12%]  font-bold text-[25px] pl-8 text-[#09bafa] flex items-center">
                            <h1>CREATE AN ACCOUNT</h1>
                        </div>

                        <div className="w-full h-[60%] pl-8 pr-8 flex flex-col justify-around">

                            <TextField
                                fullWidth
                                placeholder="Username"
                                InputProps={{
                                    startAdornment: <AccountCircleOutlinedIcon className="mr-5 text-[#09bafa]" />,
                                }}
                            />

                            <TextField
                                fullWidth
                                placeholder="Email"
                                InputProps={{
                                    startAdornment: <EmailOutlinedIcon className="mr-5 text-[#09bafa]" />,
                                }}
                            />


                            <TextField
                                fullWidth
                                type={this.state.showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                InputProps={{
                                    startAdornment: (
                                        <LockOutlinedIcon className="mr-5 text-[#09bafa]" />
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={this.handleClickShowPassword}
                                                edge="end"
                                            >
                                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />


                            <TextField
                                fullWidth
                                type={this.state.showPassword ? 'text' : 'password'}
                                placeholder="Confirm Password "
                                InputProps={{
                                    startAdornment: (
                                        <LockOutlinedIcon className="mr-5 text-[#09bafa]" />
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={this.handleClickShowPassword}
                                                edge="end"
                                            >
                                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                        </div>
                        <div className="w-full h-[28%] flex flex-col items-center justify-evenly">
                            <CommonButton className="w-60" label="Create Account" style={{ background: "#09bafa" }} />
                            <CommonButton className="w-60" label="Sign in with google" variant="outlined" startIcon={<img src={Googlelogo} alt="Google Logo" className="w-[24px] h-[24px]" />} />
                            <h1 className="font-bold">Already have an account..?
                                <Link to="/login">
                                    <span className="pl-1 text-[#09bafa] hover:underline">Login Now </span>
                                </Link>
                            </h1>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}
export default InputAdornmentsState;