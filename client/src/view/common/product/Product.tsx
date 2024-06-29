import React, { Component } from 'react'
import Card from '@mui/material/Card';
import mo from "../../../image/iphone13.png"
import CommonButton from '../Button/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

export default class Product extends Component {
    render() {
        return (
            <div>
                <Card variant="outlined" className='h-[500px] w-[280px] shadow-md'>
                    <div className='w-full h-[45%] flex items-center justify-center bg-[#f8f9fa]'>
                        <img className='w-40' src={mo} alt="" />
                    </div>
                    <div className='w-full h-[55%] p-5'>
                        <div className='w-full h-[20%] font-bold text-[20px] flex items-center '>
                            <h1>Apple iPhone 15</h1>
                        </div>
                        <div className='w-full h-[30%] flex items-center '>
                            <h1>8GB RAM 1TB ROM 48MP Main |Ultra Wide | Telephoto</h1>
                        </div>
                        <div className='w-full h-[20%] text-[#09bafa] font-bold flex items-center '>
                            <h1>504,900.00 LKR</h1>
                        </div>
                        <div className='w-full h-[30%] flex items-center'>
                            <CommonButton className="h-[40px] w-56" label="Add cart" endIcon={<AddShoppingCartOutlinedIcon />} style={{ background: "#09bafa" }} />
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}
