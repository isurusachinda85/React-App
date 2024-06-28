import { Component } from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import im1 from "../../../image/slider/im1.jpg";
import im2 from "../../../image/slider/im2.jpg";
import im3 from "../../../image/slider/im3.jpg";
import im4 from "../../../image/slider/im4.jpg";
import CommonButton from "../../common/Button/Button";
import iphone13 from "../../../image/iphone13.png"
import samsung from "../../../image/sam1.png"

import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import mobile from "../../../image/mobile.png"
import laptop from "../../../image/laptop.png"
import tablet from "../../../image/tablet.png"
import accessoris from "../../../image/access.png"
import ProductSlider from "../../common/productSlider/ProductSlider";
import BrandSlider from "../../common/BrandSlider/BrandSlider";

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            /* style={{ ...style, display: "none", width: "50px", height: "50px", border: "1px solid white", borderRadius: "50%", position: "absolute", right: "30px" }} */
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

export class Home extends Component {
    render() {
        const settings = {
            fade: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };

        const images = [
            { url: im1, title: "Image 1" },
            { url: im2, title: "Image 1" },
            { url: im3, title: "Image 1" },
            { url: im4, title: "Image 1" },
        ];

        return (
            <>
                {/* image slider */}
                <div className="h-[550vh]">
                    <Box className="mt-5 w-full h-[500px]  pr-32 pl-32">
                        {<Slider {...settings} className="w-[100%] h-[500px] ">
                            {images.map((image, index) => (
                                <Box key={index} className="relative">
                                    <img src={image.url} alt={image.title} className="w-full h-[500px]" />
                                    <CommonButton className="absolute left-28 bottom-24" variant="contained" label="Shop now" style={{ background: "#09bafa" }} />
                                </Box>
                            ))}
                        </Slider>}
                    </Box>


                    {/* deatails */}
                    <div className="w-full h-32 mt-20 flex flex-row pr-32 pl-32 gap-4">
                        <div className="border shadow-lg w-[25%] h-full flex flex-row">
                            <div className="w-[40%] h-full flex justify-center items-center">
                                <div className="border border-[#09bafa] rounded-full h-[75px] w-[75px]  text-[#09bafa] flex items-center justify-center">
                                    <LocalShippingOutlinedIcon sx={{ fontSize: 40 }} />
                                </div>
                            </div>

                            <div className="h-full w-[60%] flex flex-col items-center justify-center">
                                <div className="w-full h-[60%]">
                                    <h1 className="font-bold text-[20px]">Free shipping</h1>
                                    <h1>Free Shipping On All Order</h1>
                                </div>
                            </div>
                        </div>


                        <div className="border shadow-lg w-[25%] h-full flex flex-row">
                            <div className="w-[40%] h-full flex justify-center items-center">
                                <div className="border border-[#09bafa] rounded-full h-[75px] w-[75px]  text-[#09bafa] flex items-center justify-center">
                                    <CurrencyExchangeIcon sx={{ fontSize: 40 }} />
                                </div>
                            </div>

                            <div className="h-full w-[60%] flex flex-col items-center justify-center">
                                <div className="w-full h-[60%]">
                                    <h1 className="font-bold text-[20px]">Money Returns</h1>
                                    <h1>30 Days money return</h1>
                                </div>
                            </div>
                        </div>

                        <div className="border shadow-lg w-[25%] h-full flex flex-row">
                            <div className="w-[40%] h-full flex justify-center items-center">
                                <div className="border border-[#09bafa] rounded-full h-[75px] w-[75px]  text-[#09bafa] flex items-center justify-center">
                                    <GppGoodOutlinedIcon sx={{ fontSize: 40 }} />
                                </div>
                            </div>

                            <div className="h-full w-[60%] flex flex-col items-center justify-center">
                                <div className="w-full h-[60%]">
                                    <h1 className="font-bold text-[20px]">Payment Secure</h1>
                                    <h1>We ensure secure payment</h1>
                                </div>
                            </div>
                        </div>

                        <div className="border shadow-lg w-[25%] h-full flex flex-row">
                            <div className="w-[40%] h-full flex justify-center items-center">
                                <div className="border border-[#09bafa] rounded-full h-[75px] w-[75px]  text-[#09bafa] flex items-center justify-center">
                                    <HeadsetMicOutlinedIcon sx={{ fontSize: 40 }} />
                                </div>
                            </div>

                            <div className="h-full w-[60%] flex flex-col items-center justify-center">
                                <div className="w-full h-[60%]">
                                    <h1 className="font-bold text-[20px]">Support 24/ 7</h1>
                                    <h1>Contact us 24 hours a day</h1>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Our product */}
                    <div className="w-full h-48 mt-20 flex flex-row pr-32 pl-32">
                        <div className="h-full w-[25%] flex flex-col justify-center items-center gap-3">
                            <div className="  rounded-full w-[150px] h-[150px] flex items-center justify-center bg-[#f8f9fa] ">
                                <img className="w-[100px]" src={mobile} alt="" />
                            </div>
                            <div className="font-bold"><h1>Mobile Phone</h1></div>
                        </div>

                        <div className="h-full w-[25%] flex flex-col justify-center items-center gap-3 ">
                            <div className="rounded-full w-[150px] h-[150px] flex items-center justify-center bg-[#f8f9fa] ">
                                <img className="w-[150px]" src={laptop} alt="" />
                            </div>
                            <div className="font-bold"><h1>Computer & Laptop</h1></div>
                        </div>

                        <div className="h-full w-[25%] flex flex-col justify-center items-center gap-3">
                            <div className="rounded-full w-[150px] h-[150px] flex items-center justify-center bg-[#f8f9fa] ">
                                <img className="w-[100px]" src={tablet} alt="" />
                            </div>
                            <div className="font-bold"><h1>Tablet</h1></div>
                        </div>

                        <div className="h-full w-[25%] flex flex-col justify-center items-center gap-3">
                            <div className="rounded-full w-[150px] h-[150px] flex items-center justify-center bg-[#f8f9fa] ">
                                <img className="w-[130px]" src={accessoris} alt="" />
                            </div>
                            <div className="font-bold"><h1>Accessories</h1></div>
                        </div>
                    </div>

                    <ProductSlider title="Our Product" />

                    {/* sale product image */}
                    <div className="w-full h-[350px] mt-20 pl-32 pr-32 flex flex-row gap-12">
                        {/* sale product image 1 */}
                        <div className="w-[50%] h-full bg-[#bdc3c7] flex flex-row">
                            <div className="w-[60%] h-full flex items-center justify-center">
                                <div className="w-[80%] h-[50%]">
                                    <p className="w-full text-[18px]">Get up to 50% off Today</p>
                                    <h1 className="w-full font-bold text-[30px]">iPhone 13 Pro Max</h1>
                                    <div className="w-full mt-5">
                                        <CommonButton label="shop now" style={{ background: "#09bafa" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[40%] h-full flex items-center justify-center">
                                <img src={iphone13} alt="" />
                            </div>
                        </div>

                        {/* sale product image 2 */}
                        <div className="w-[50%] h-full bg-[#8ed1fb] flex flex-row">
                            <div className="w-[60%] h-full flex items-center justify-center">
                                <div className="w-[80%] h-[50%]">
                                    <p className="w-full text-[18px]">Get up to 50% off Today</p>
                                    <h1 className="w-full font-bold text-[30px]">Samsung Galaxy S23 Ultra</h1>
                                    <div className="w-full mt-5">
                                        <CommonButton label="shop now" style={{ background: "#09bafa" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[40%] h-full flex items-center justify-center">
                                <img src={samsung} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* <ProductSlider title="Mobile Phone" />

                    <ProductSlider title="Accessories" /> */}

                    <BrandSlider />
                </div>
            </>
        );
    }
}