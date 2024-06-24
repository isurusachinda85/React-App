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

                <div className="h-[300vh]">

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

                </div>


            </>
        );
    }
}