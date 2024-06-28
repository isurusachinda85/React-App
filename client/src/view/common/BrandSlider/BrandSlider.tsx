import React, { Component } from 'react'
import Slider from "react-slick";
import logo1 from "../../../image/brand/logo1.png"
import logo2 from "../../../image/brand/logo2.png"
import logo3 from "../../../image/brand/logo3.png"
import logo4 from "../../../image/brand/logo4.png"
import logo5 from "../../../image/brand/logo5.png"
import logo6 from "../../../image/brand/logo6.png"
import logo7 from "../../../image/brand/logo7.png"

export default class BrandSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <>
                <div className='w-full h-36 mt-20 pl-32 pr-32'>
                    <div className='border h-full w-full'>
                        <Slider {...settings} className='h-full '>
                            <div className='h-[144px]'>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <img className='w-36' src={logo1} alt="" />
                                </div>
                            </div>

                            <div className='h-[144px] flex items-center justify-cente'>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <img className='w-36' src={logo2} alt="" />
                                </div>
                            </div>
                            <div className='h-[144px] flex items-center justify-cente'>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <img className='w-36' src={logo3} alt="" />
                                </div>
                            </div>
                            <div className='h-[144px] flex items-center justify-cente'>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <img className='w-36' src={logo4} alt="" />
                                </div>
                            </div>
                            <div className='h-[144px] flex items-center justify-cente'>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <img className='w-36' src={logo5} alt="" />
                                </div>
                            </div>
                            <div className='h-[144px] flex items-center justify-cente'>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <img className='w-36' src={logo6} alt="" />
                                </div>
                            </div>
                            <div className='h-[144px] flex items-center justify-cente'>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <img className='w-20' src={logo7} alt="" />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </>
        )
    }
}
