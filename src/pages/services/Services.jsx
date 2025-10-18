import React, { useEffect } from "react";
import KaffenServices from "../../components/kf-services/kaffenServices";
import ServicesOne from "../../components/ServicesOne/ServicesOne";
import Kfcet from "../../components/cards/kfcet";
import AOS from "aos";
import "aos/dist/aos.css";

import { BsCookie } from "react-icons/bs";
import { TbCarrot } from "react-icons/tb";
import { FaHamburger } from "react-icons/fa";
import { LiaFishSolid, LiaGlassCheersSolid, LiaSeedlingSolid } from "react-icons/lia";
import { CiPizza } from "react-icons/ci";
import { BiCoffee } from "react-icons/bi";

export default function Services() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
    }, []);

    // بيانات الكروت
    const services = [
        { icon: <BsCookie className="text-[#b99272] text-[35px]" />, title: "Birthday Cakes" },
        { icon: <TbCarrot className="text-[#b99272] text-[35px]" />, title: "Fresh Food" },
        { icon: <FaHamburger className="text-[#b99272] text-[35px]" />, title: "Fast Food" },
        { icon: <LiaFishSolid className="text-[#b99272] text-[35px]" />, title: "Sea Food" },
        { icon: <CiPizza className="text-[#b99272] text-[35px]" />, title: "Pizza" },
        { icon: <LiaGlassCheersSolid className="text-[#b99272] text-[35px]" />, title: "Drinks" },
        { icon: <BiCoffee className="text-[#b99272] text-[35px]" />, title: "Coffee" },
        { icon: <LiaSeedlingSolid className="text-[#b99272] text-[35px]" />, title: "Vegetables" },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="menu w-full h-[80vh] bg-black relative">
                <div
                    className="absolute inset-0 bg-[url('https://kaffen-reactjs.netlify.app/images/services_inner_bg.jpg')] 
          bg-cover bg-center bg-fixed opacity-45 z-0"></div>

                <div className="relative z-10 w-full h-[60vh] flex justify-center items-center">
                    <h1 className="text-white text-[90px] font-bold absolute top-60 left-80" data-aos="fade-up">
                        Services
                    </h1>
                </div>
            </div>

            {/* Section One */}
            <div className="w-full min-h-[80vh] bg-[#0e1317] flex flex-col justify-center items-center gap-[100px] px-6 py-16">
                <div className="text-center" data-aos="fade-down">
                    <p className="text-[#b99272]">WE PROVIDE</p>
                    <h2 className="text-white text-[30px] font-bold">Kaffen Services One</h2>
                </div>
                <KaffenServices />
            </div>

            {/* Grid Services */}
            <div className="w-full min-h-[100vh] bg-[#090c0f] flex flex-col justify-center items-center gap-[100px] px-6 py-16">
                <div className="text-center" data-aos="fade-down">
                    <p className="text-[#b99272]">WE PROVIDE</p>
                    <h2 className="text-white text-[30px] font-bold">Kaffen Services Two</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[60px]">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="flex flex-col justify-center gap-4 text-center transform transition duration-500 hover:scale-105 hover:shadow-xl"
                            data-aos="zoom-in"
                            data-aos-delay={i * 150}>
                            <div className="icon w-[70px] h-[70px] bg-[#0e1317] border border-transparent hover:border-[#b99272] flex justify-center items-center mx-auto rounded-lg">
                                {service.icon}
                            </div>
                            <h2 className="text-white text-[20px] font-bold">{service.title}</h2>
                            <p className="text-white opacity-70">Sed ut perspiciatis unde</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section Two */}
            <div className="w-full min-h-[90vh] bg-[#0e1317] flex flex-col justify-center items-center gap-[100px] px-6 py-16">
                <div className="text-center" data-aos="fade-down">
                    <p className="text-[#b99272]">WE PROVIDE</p>
                    <h2 className="text-white text-[30px] font-bold">Kaffen Services Three</h2>
                </div>
                <ServicesOne />
            </div>

            <Kfcet />
        </>
    );
}
