import React from "react";

export default function Kfcet() {
    return (
    <div className="kfcet w-full relative">
        {/* الخلفية مع تأثير البارالاكس */}
        <div
            className="absolute inset-0 bg-[url('https://kaffen-reactjs.netlify.app/images/cta_bg.jpg')] 
            bg-cover bg-center bg-fixed z-0"
        ></div>

        {/* طبقة التعتيم */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* النصوص */}
        <div className="relative z-10 w-full h-[300px] flex flex-col justify-center items-center text-center">
            <p className="text-[#b99272] text-lg mb-2" data-aos="fade-up">
                Need a Table On Coffee House
            </p>
            <h1
                className="text-white text-[30px] font-bold"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                Booking Table For Your & Family Members
            </h1>
        </div>
    </div>

    );
}
