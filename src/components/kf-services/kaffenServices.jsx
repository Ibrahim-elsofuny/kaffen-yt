import React from "react";
import { LiaUtensilsSolid } from "react-icons/lia";
import { BiCoffee } from "react-icons/bi";
import { LiaGlassCheersSolid } from "react-icons/lia";
import clsx from "clsx";

export default function KaffenServices() {
    return (
        <div className={clsx("w-full relative text-white flex justify-center items-center gap-31 flex-wrap")}>
            {/* Card 1 */}
            <div
                className="group w-[300px] h-[230px] relative flex justify-center items-center overflow-hidden cursor-pointer"
                data-aos="fade-up" // 👈 انيميشن أول كارت
                data-aos-delay="100" // تأخير بسيط
            >
                <div className="absolute inset-0 bg-[url('https://kaffen-reactjs.netlify.app/images/service1.jpg')] bg-cover bg-center opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-transform duration-1000 ease-in-out"></div>
                <div className="relative w-[250px] h-[190px] border border-[#b99272] flex flex-col justify-center items-center text-center gap-2 z-10">
                    <LiaUtensilsSolid className="text-white text-[55px] font-bold" />
                    <h1 className="text-white font-bold">Restaurant Menu</h1>
                </div>
            </div>

            {/* Card 2 */}
            <div
                className="group w-[300px] h-[230px] relative flex justify-center items-center overflow-hidden cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="200" // 👈 هيظهر بعد الأول
            >
                <div className="absolute inset-0 bg-[url('https://kaffen-reactjs.netlify.app/images/service2.jpg')] bg-cover bg-center opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-transform duration-1000 ease-in-out"></div>
                <div className="relative w-[250px] h-[190px] border border-[#b99272] flex flex-col justify-center items-center text-center gap-2 z-10">
                    <BiCoffee className="text-white text-[55px] font-bold" />
                    <h1 className="text-white font-bold">Coffee Menu</h1>
                </div>
            </div>

            {/* Card 3 */}
            <div
                className="group w-[300px] h-[230px] relative flex justify-center items-center overflow-hidden cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="300" // 👈 هيظهر بعد التاني
            >
                <div className="absolute inset-0 bg-[url('https://kaffen-reactjs.netlify.app/images/service3.jpg')] bg-cover bg-center opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-transform duration-1000 ease-in-out"></div>
                <div className="relative w-[250px] h-[190px] border border-[#b99272] flex flex-col justify-center items-center text-center gap-2 z-10">
                    <LiaGlassCheersSolid className="text-white text-[55px] font-bold" />
                    <h1 className="text-white font-bold">Food Services</h1>
                </div>
            </div>
        </div>
    );
}
