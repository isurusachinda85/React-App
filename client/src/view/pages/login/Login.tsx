import { Component } from "react";
import TextField from '@mui/material/TextField';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CommonButton from "../../common/Button/Button";
import Googlelogo from "../../../image/google.png"
import { Link } from "react-router-dom";
import UserService from "../../../service/UserService";

interface LoginState {
    showPassword: boolean;
    formData: {
        username: string;
        password: string;
    }
}


export class Login extends Component<{}, LoginState> {

    constructor(props: {}) {
        super(props)
        this.state = {
            showPassword: false,
            formData: {
                username: "",
                password: "",
            }
        }
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);

    }

    handleClickShowPassword() {
        this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
    }


    loginUser = async () => {

        try {
            let formdata = this.state.formData;
            let res: any = await UserService.loginUser(formdata);
            console.log(res);
            localStorage.setItem('token', res.data.token);
            if (res.status === 200) {
                console.log("Login Success");

            }

        } catch (e) {
            console.log("Login Faill");
        }

    }

    render() {
        return (
            <>
                <div className="w-[100vw] h-[100vh] flex items-center justify-center">
                    <div className="w-[27%] h-[65%] shadow-2xl ">
                        <div className="w-full h-[15%] font-bold text-[25px] pl-8 text-[#09bafa] flex items-center">
                            <h1>WELCOME BACK !</h1>
                        </div>
                        <div className="w-full h-[50%] pl-8 pr-8 flex items-center">
                            <div className="h-[80%] w-full flex flex-col justify-between">
                                <TextField
                                    fullWidth
                                    placeholder="Username"
                                    value={this.state.formData.username}
                                    onChange={(e) => {
                                        let formdata = this.state.formData;
                                        formdata.username = e.target.value;
                                        // @ts-ignore
                                        this.setState({ formdata })
                                    }}
                                    InputProps={{
                                        startAdornment: <AccountCircleOutlinedIcon className="mr-5 text-[#09bafa]" />,
                                    }}
                                />

                                <TextField
                                    fullWidth
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    value={this.state.formData.password}
                                    onChange={(e) => {
                                        let formdata = this.state.formData;
                                        formdata.password = e.target.value;
                                        // @ts-ignore
                                        this.setState({ formdata })
                                    }}
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
                                <div className="h-[15%] flex justify-end text-[#09bafa] font-bold hover:underline">
                                    <h1>Frogot Password ?</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[35%] flex flex-col items-center justify-evenly">
                            <CommonButton className="w-60" label="Login" style={{ background: "#09bafa" }} onClick={this.loginUser} />
                            <CommonButton className="w-60" label="Sign in with google" variant="outlined" startIcon={<img src={Googlelogo} alt="Google Logo" className="w-[24px] h-[24px]" />} />
                            <h1 className="font-bold">Don't have an account..?
                                <Link to="/signup">
                                    <span className="pl-1 text-[#09bafa] hover:underline">Register Now </span>
                                </Link>
                            </h1>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}