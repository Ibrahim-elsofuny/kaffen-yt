import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Kfcet from "../../components/cards/kfcet";
import Feedback from "../../components/Feedback/Feedback";
import Card from "../../components/cards/Card";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import ServicesOne from "../../components/ServicesOne/ServicesOne";
import { LuGem } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { LiaTrophySolid, LiaGrinStarsSolid } from "react-icons/lia";

export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // مدة الأنيميشن
            easing: "ease-in-out", // نوع الحركة
            once: true, // يشتغل مرة واحدة بس
        });
        AOS.refresh(); // مهم علشان يتأكد من العناصر
    }, []);

    return (
        <>
            {/* Hero Section */}
            <div className="menu w-full h-[80vh] bg-black relative">
                {/* الخلفية */}
                <div
                    className="absolute inset-0 bg-[url('https://kaffen-reactjs.netlify.app/images/history_inner_bg.jpg')] 
                   bg-cover bg-center  bg-fixed  opacity-45 z-0"></div>

                {/* النص */}
                <div className="relative z-10 w-full h-[60vh] flex justify-center items-center">
                    <h1 className="text-white text-[90px] font-bold absolute top-60 left-80" data-aos="fade-up">
                        About Us
                    </h1>
                </div>
            </div>
            {/* About Section */}
            <div className="about-us w-full z-11 h-[100vh] bg-[#0e1317] relative text-white flex justify-center items-center gap-20 overflow-hidden">
                {/* الجزء النصي */}
                <div className="w-[53vh] flex flex-col justify-center items-start gap-6">
                    {/* العنوان الصغير */}
                    <p className="text-[#b99272] text-[16px]" data-aos="fade-down" data-aos-duration="800">
                        Why Choose Us
                    </p>

                    {/* العنوان الكبير */}
                    <h1 className="text-[30px] font-bold" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                        New London Coffee Founded For Extraordinary Test
                    </h1>

                    {/* النص */}
                    <p className="text-[14px] w-[400px] opacity-70" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                        Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium...
                    </p>

                    {/* Feature 1 */}
                    <div className="w-full flex items-center gap-7 px-[20px]" data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000">
                        <img className="w-[70px]" src="https://kaffen-reactjs.netlify.app/images/choose_icon1.png" alt="" />
                        <div>
                            <h4 className="text-[20px] w-[300px] font-black">Natural Coffee Beans</h4>
                            <p className="text-[14px] w-[300px] opacity-70">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="w-full flex items-center gap-7 px-[20px]" data-aos="fade-right" data-aos-delay="800" data-aos-duration="1000">
                        <img className="w-[70px]" src="https://kaffen-reactjs.netlify.app/images/choose_icon2.png" alt="" />
                        <div>
                            <h4 className="text-[20px] w-[300px] font-black">100% ISO Certification</h4>
                            <p className="text-[14px] w-[300px] opacity-70">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                        </div>
                    </div>
                </div>

                {/* الصورة */}
                <img
                    className="w-[70vh] h-[80vh] rounded-xl shadow-lg"
                    src="https://kaffen-reactjs.netlify.app/images/about_img2.jpg"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-delay="1000"
                    data-aos-duration="1200"
                />
            </div>

            {/* Stats Section */}
            <div className="w-full h-[50vh] bg-[#090c0f] flex justify-center items-center gap-[100px] overflow-hidden" data-aos="fade-up">
                {/* الكرت الأول */}
                <div className="flex flex-col justify-center items-start gap-[20px]" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000">
                    <div className="w-[90px] h-[90px] hover:border border-[#b99272] opacity-70 rounded-[20px] bg-[#0e1317] flex justify-center items-center">
                        <LuGem className=" text-[#b99272] text-[35px]" />
                    </div>
                    <h1 className="text-[#b99272] text-[50px] font-mono">256+</h1>
                    <h2 className="text-white text-[25px] font-bold">Premium Clients</h2>
                    <p className="text-white opacity-70">Sed ut perspiciatis unde</p>
                </div>

                {/* الكرت الثاني */}
                <div className="flex flex-col justify-center items-start gap-[20px]" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div className="w-[90px] h-[90px] hover:border border-[#b99272] opacity-70 rounded-[20px] bg-[#0e1317] flex justify-center items-center">
                        <FaRegUser className=" text-[#b99272] text-[35px]" />
                    </div>
                    <h1 className="text-[#b99272] text-[50px] font-mono">36+</h1>
                    <h2 className="text-white text-[25px] font-bold">Professional Chefs</h2>
                    <p className="text-white opacity-70">Sed ut perspiciatis unde</p>
                </div>

                {/* الكرت الثالث */}
                <div className="flex flex-col justify-center items-start gap-[20px]" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                    <div className="w-[90px] h-[90px] hover:border border-[#b99272] opacity-70 rounded-[20px] bg-[#0e1317] flex justify-center items-center">
                        <LiaTrophySolid className=" text-[#b99272] text-[35px]" />
                    </div>
                    <h1 className="text-[#b99272] text-[50px] font-mono">753+</h1>
                    <h2 className="text-white text-[25px] font-bold">Winning Awards</h2>
                    <p className="text-white opacity-70">Sed ut perspiciatis unde</p>
                </div>

                {/* الكرت الرابع */}
                <div className="flex flex-col justify-center items-start gap-[20px]" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                    <div className="w-[90px] h-[90px] hover:border border-[#b99272] opacity-70 rounded-[20px] bg-[#0e1317] flex justify-center items-center">
                        <LiaGrinStarsSolid className=" text-[#b99272] text-[35px]" />
                    </div>
                    <h1 className="text-[#b99272] text-[50px] font-mono">100+</h1>
                    <h2 className="text-white text-[25px] font-bold">5 Star Reviews</h2>
                    <p className="text-white opacity-70">Sed ut perspiciatis unde</p>
                </div>
            </div>

            {/* Services Section */}
            <div className="w-full h-[50vh] bg-[#0e1317] flex flex-col justify-center items-center gap-[100px] " data-aos="fade-up">
                <ServicesOne />
            </div>

            {/* Team Section */}
            <div className="w-full h-[100vh] bg-[#090c0f] flex flex-col justify-center items-center gap-[100px]">
                {/* العنوان */}
                <div className="text-center" data-aos="zoom-in" data-aos-duration="800">
                    <p className="text-[#b99272]">WE PROVIDE</p>
                    <h2 className="text-white text-[30px] font-bold">Kaffen Services One</h2>
                </div>

                {/* البطاقات */}
                <div className="w-full h-[50vh] flex justify-center items-center gap-[20px]">
                    {/* بطاقة 1 */}
                    <div className="w-[35vh] h-[45vh] bg-[#0e1317] flex flex-col justify-center items-center" data-aos="fade-right" data-aos-delay="100" data-aos-duration="900">
                        {/* الاسم + الوظيفة */}
                        <div className="flex flex-col justify-center items-center gap-2 w-full h-[17vh]">
                            <h2 className="text-white text-[18px] font-bold">Anthony J. Bowman</h2>
                            <h5 className="text-[#b99272]">Senior Chefs</h5>
                        </div>

                        {/* الصورة + الهوفر */}
                        <div className="w-[25vh] h-[30vh] rounded-[10px] overflow-hidden relative group">
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                src="https://kaffen-reactjs.netlify.app/images/team1.jpg"
                                alt=""
                            />
                        </div>
                    </div>

                    {/* بطاقة 2 */}
                    <div className="w-[35vh] h-[45vh] bg-[#0e1317] flex flex-col justify-center items-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
                        <div className="flex flex-col justify-center items-center gap-2 w-full h-[17vh]">
                            <h2 className="text-white text-[18px] font-bold">Kenny V. Gonzalez</h2>
                            <h5 className="text-[#b99272]">Senior Chefs</h5>
                        </div>
                        <div className="w-[25vh] h-[30vh] rounded-[10px] overflow-hidden relative group">
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                src="https://kaffen-reactjs.netlify.app/images/team2.jpg"
                                alt=""
                            />
                        </div>
                    </div>

                    {/* بطاقة 3 */}
                    <div className="w-[35vh] h-[45vh] bg-[#0e1317] flex flex-col justify-center items-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="900">
                        <div className="flex flex-col justify-center items-center gap-2 w-full h-[17vh]">
                            <h2 className="text-white text-[18px] font-bold">Joseph M. Lawrence</h2>
                            <h5 className="text-[#b99272]">Senior Chefs</h5>
                        </div>
                        <div className="w-[25vh] h-[30vh] rounded-[10px] overflow-hidden relative group">
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                src="https://kaffen-reactjs.netlify.app/images/team3.jpg"
                                alt=""
                            />
                        </div>
                    </div>

                    {/* بطاقة 4 */}
                    <div className="w-[35vh] h-[45vh] bg-[#0e1317] flex flex-col justify-center items-center" data-aos="fade-left" data-aos-delay="400" data-aos-duration="900">
                        <div className="flex flex-col justify-center items-center gap-2 w-full h-[17vh]">
                            <h2 className="text-white text-[18px] font-bold">Charles K. Smith</h2>
                            <h5 className="text-[#b99272]">Senior Chefs</h5>
                        </div>
                        <div className="w-[25vh] h-[30vh] rounded-[10px] overflow-hidden relative group">
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                src="https://kaffen-reactjs.netlify.app/images/team4.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Card />
            {/* Extra Sections */}
            <Feedback />
            <Kfcet />
        </>
    );
}
