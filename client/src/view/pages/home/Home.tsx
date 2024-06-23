import { Component } from "react";
import img from "../../../image/maxresdefault.jpg"

import Slider from "react-slick";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import im1 from "../../../image/slider/im1.jpg";
import im2 from "../../../image/slider/im2.jpg";
import im3 from "../../../image/slider/im3.jpg";
import im4 from "../../../image/slider/im4.jpg";


export class Home extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        };

        const images = [
            { url: im1, title: "Image 1" },
            { url: im2, title: "Image 1" },
            { url: im3, title: "Image 1" },
            { url: im4, title: "Image 1" },
        ];
        return (
            <>

                <div className="border border-black h-[300vh]">
                    {/* <div className={"w-[full] h-[500px] mr-24 ml-24 mt-10 border border-black flex"}>
                        <img className="w-full" src={img} alt="" />
                    </div>
                    */}

                    <Box className="border-black  mt-5 w-[full] h-[500px] bg-blue-300 ">
                        {<Slider {...settings} className="border border-black w-full ">
                            {images.map((image, index) => (
                                <Box key={index} className="relative">
                                    {/* <img src={image.url} alt={image.title} className="w-full" /> */}

                                </Box>
                            ))}
                        </Slider>}
                    </Box>

                </div>


            </>
        );
    }
}