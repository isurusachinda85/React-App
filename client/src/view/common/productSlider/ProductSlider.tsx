import React, { Component } from 'react'
import Slider from "react-slick";
import Product from '../Product/Product';

/* interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ ...style, display: "block", background: "green", width: "50px", height: "50px", border: "1px solid white", borderRadius: "50%", position: "absolute", right: "-20px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ ...style, display: "block", background: "green", width: "50px", height: "50px", border: "1px solid white", borderRadius: "50%", position: "absolute", right: "-20px", zIndex: "1" }}
            onClick={onClick}
        />
    );
} */

interface ProductSliProps {
    title: string
}


export default class Productslider extends Component<ProductSliProps> {
    constructor(props: ProductSliProps) {
        super(props)
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            /* nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow /> */
        };

        return (
            <>
                <div className='w-full h-[610px] mt-20 pl-32 pr-32'>
                    <div className='w-full h-[10%] font-bold text-3xl flex items-center justify-center'>
                        <h1 className='border-b-[3px] border-b-[#09bafa] pb-2'>{this.props.title}</h1>
                    </div>
                    <div className='w-full h-[90%] pt-5 '>

                        <Slider {...settings}>
                            <div className=''>
                                <Product />
                            </div>

                            <div className=''>
                                <Product />
                            </div>

                            <div className=''>
                                <Product />
                            </div>

                            <div className=''>
                                <Product />
                            </div>

                            <div className=''>
                                <Product />
                            </div>

                        </Slider>

                    </div>
                </div>
            </>
        )
    }
}
