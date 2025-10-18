import React, { useState } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "animate.css"; // استدعاء animate.css

const sliderData = [
    {
        prgaef: "Welcome to the Kaffen",
        image: "https://kaffen-reactjs.netlify.app/images/started_img_n6.jpg",
        title: " Great Coffee",
        title2: "Great Taste",
    },
    {
        prgaef: "Welcome to the Kaffen",
        image: "https://kaffen-reactjs.netlify.app/images/started_img_n3.jpg",
        title: " The Paris",
        title2: "Coffee House",
    },
    {
        prgaef: "Welcome to the Kaffen",
        image: "https://kaffen-reactjs.netlify.app/images/started_img_n5.jpg",
        title: "The London",
        title2: "Coffee House",
    },
];

export default function Banner() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            speed={1500}
            pagination={{ type: "bullets", clickable: true }}
            navigation={true}
            className="w-full h-[100vh]"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // تحديث رقم السلايد الحالي
        >
            {sliderData.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="banner w-full h-[100vh] overflow-hidden relative">
                        <div className="banner-abs w-full bg-black h-full overflow-hidden object-cover relative">
                            {/* النصوص مع animate.css */}
                            <div className="flex items-start justify-center gap-2 flex-col w-full h-[100px] absolute top-[340px] left-[500px]">
                                <div className={`flex items-center justify-center gap-2 ${activeIndex === index ? "animate__animated animate__fadeInLeft animate__slow" : ""}`}>
                                    <span className="w-[40px] h-[2px] bg-[#b99272] "></span>
                                    <p className=" text-white text-[13px] font-bold z-10">{item.prgaef}</p>
                                </div>
                                <div className={`text-white text-[90px] font-bold z-10 ${activeIndex === index ? "animate__animated animate__fadeInUp animate__slow" : ""}`}>{item.title}</div>
                                <div className={`text-white text-[90px] font-bold z-10 ${activeIndex === index ? "animate__animated animate__fadeInUp animate__delay-1s" : ""}`}>{item.title2}</div>
                            </div>
                            {/* الصورة */}
                            <img className="w-full h-full object-cover group-hover:scale-110 duration-300 opacity-70" src={item.image} alt={`Slide ${index}`} />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
