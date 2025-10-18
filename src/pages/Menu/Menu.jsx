import React from 'react'
import Card from '../../components/cards/Card';
import ShoppSection from '../../components/ui/ShopSection/ShopSection';
import AOS from "aos";
import "aos/dist/aos.css";
export default function Menu() {
    return (
        <>
            <div className="menu w-full h-[80vh] bg-black relative">
                {/* الخلفية */}
                <div
                    className="absolute inset-0 bg-[url('https://kaffen-reactjs.netlify.app/images/cta_bg.jpg')] 
                   bg-cover bg-center  bg-fixed  opacity-45 z-0"></div>

                {/* النص */}
                <div className="relative z-10 w-full h-[60vh] flex justify-center items-center">
                    <h1 className="text-white text-[90px] font-bold absolute top-60 left-80" data-aos="fade-up">
                        Coffee Menu
                    </h1>
                </div>
            </div>
            <ShoppSection />
            <Card />
        </>
    );
}
