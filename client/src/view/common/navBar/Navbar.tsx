import React, { Component } from "react";
import logo from "../../../image/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import CommonButton from "../Button/Button";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 2,
        border: `1px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export class Navbar extends Component {
    render() {
        return (

            <>
                {/*Nav 01*/}
                <nav className="p-4 h-24 flex justify-between items-center">

                    <div className="flex items-center h-full space-x-1">
                        <img className="w-[70px] " src={logo} alt="" />
                        <h1 className="text-[27px]  font-bold">Techno<span className={"text-[#09bafa] text-[30px]"}>Mobile</span></h1>
                    </div>

                    <div className="w-[43%] h-full flex items-center">
                        <input className="pl-2 float-right w-full h-12 border-[2px]  border-r-0 rounded rounded-r-none focus:outline-none"
                            type="text"
                            placeholder="Search items" />
                        <button className="rounded-r bg-[#09bafa] h-12 text-white w-32">{<SearchIcon />}</button>
                    </div>


                    <div className="h-full flex items-center">
                        <Link to="/mycart">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={5} color="error">
                                    <AddShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Link>
                    </div>


                    <div className="h-full flex items-center">
                        <Link to="/user">
                            <Button className="h-12" startIcon={<AccountCircleIcon />}>welcome user</Button>
                        </Link>
                    </div>

                    <div className="h-full flex items-center">
                        <Link to="/login">
                            {/* <Button className="h-10 w-28" variant="outlined" size="small">Login</Button> */}
                            <CommonButton className="h-10 w-28" variant="outlined" label="Login" />
                        </Link>
                    </div>

                    <div className="h-full flex items-center">
                        <Link to="/signup">
                            {/* <Button className="h-10 w-28" variant="contained" size="small">Sign Up</Button> */}
                            <CommonButton className="h-10 w-28" variant="contained" label="Sign Up" />
                        </Link>
                    </div>
                </nav>


                {/*Nav 02*/}

                <div className="p-4 bg-[#09bafa]  ">
                    <ul className="list-none flex justify-center gap-12 text-[#e6f0e6] text-[17px] font-bold">
                        <li className="hover:text-black  duration-500">
                            <Link to="/">Home</Link>
                        </li>

                        <li className="group relative hover:text-black cursor-pointer duration-500 flex items-center ">

                            Mobile Phones <ArrowDropDownOutlinedIcon />
                            <div
                                className="absolute -left-2 top-6 shadow-lg hidden w-[150px] bg-white p-2 group-hover:block">
                                <ul className="space-y-3 pt-5">
                                    <li>
                                        <Link to="/mobilephone">Apple</Link>
                                    </li>
                                    <li>Samsung</li>
                                    <li>Oppo</li>
                                    <li>Huawei</li>
                                </ul>
                            </div>
                        </li>

                        <li className="hover:text-black duration-500">
                            <Link to="/accessories">Accessories</Link>
                        </li>

                        <li className="hover:text-black duration-500">
                            <Link to="/aboutus">About Us</Link>
                        </li>

                        <li className="hover:text-black duration-500">
                            <Link to="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}