import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

export default function Feedback() {
    const sliderData = [
        {
            prgaef: "Excellent service and classy treatment. Thank you!",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            title: "James M. London",
            title2: "Lawyer",
        },
        {
            prgaef: "One of the best experiences I've had. High quality and fast delivery.",
            image: "https://randomuser.me/api/portraits/women/45.jpg",
            title: "Olivia D. New York",
            title2: "Dentist",
        },
        {
            prgaef: "Great service and attention to detail. Highly recommended!",
            image: "https://randomuser.me/api/portraits/men/58.jpg",
            title: "Frederick S. France",
            title2: "Web Developer",
        },
        {
            prgaef: "Amazing team, responsive and professional all the way.",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            title: "Sarah K. Dubai",
            title2: "Interior Designer",
        },
        {
            prgaef: "They really care about the customer experience. Loved it!",
            image: "https://randomuser.me/api/portraits/men/72.jpg",
            title: "Michael B. Berlin",
            title2: "Photographer",
        },
        {
            prgaef: "Thank you for your excellent service. I’ll definitely come back.",
            image: "https://randomuser.me/api/portraits/women/81.jpg",
            title: "Aisha N. Riyadh",
            title2: "Chef",
        },
    ];

    return (
        <div className="w-full h-[100vh] bg-[url('https://kaffen-reactjs.netlify.app/images/testimonials_bg2.jpeg')] bg-cover bg-center flex flex-col justify-evenly items-center relative">
            {/* Section Title */}
            <div className="flex flex-col justify-center items-center" data-aos="fade-down">
                <p className="text-[#b99272] text-[20px]">Customer Feedback</p>
                <h1 className="text-white text-[30px] font-bold">What Our Customers Say</h1>
            </div>

            {/* Slider */}
            <div className="w-[70%] h-[400px] flex items-center justify-center relative" data-aos="fade-up" data-aos-delay="200">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    grabCursor={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        500: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}>
                    {sliderData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="w-full flex items-center justify-center h-[500px]"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100} // 👈 كل كارت يدخل بتأخير بسيط
                            >
                                <div className="w-[300px] h-[350px] bg-[#0E1317] flex flex-col items-center justify-center relative">
                                    <div className="w-[80px] h-[80px] rounded-full overflow-hidden absolute top-[-35px] z-40 border-2">
                                        <img className="w-full h-full object-cover" src={item.image} alt={`Slide ${index}`} />
                                    </div>
                                    <div className="flex flex-col items-center gap-[20px] relative justify-end h-[40%]">
                                        <div className="flex gap-1 mb-4 mt-2">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className="text-[#b99272]" />
                                            ))}
                                        </div>
                                        <p className="text-white text-[15px] w-[240px] text-center opacity-70">{item.prgaef}</p>
                                        <h2 className="text-white text-[20px] font-bold">{item.title}</h2>
                                        <h3 className="text-[#b99272] text-[15px]">{item.title2}</h3>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
