import React from "react";

export default function ServicesOne() {
    return (
        <div className="w-[130vh] h-[35vh] bg-[#090b0f] flex justify-evenly items-center gap-[50px]" data-aos="fade-up">
            {/* Service 1 */}
            <div className="flex flex-col justify-center items-center gap-3" data-aos="zoom-in" data-aos-delay="100">
                <div className="w-[120px] h-[120px] flex justify-center items-center rounded-full bg-[#0e1317] hover:bg-[#b99272] hover:shadow-xl transition-all duration-700 text-white group">
                    <img
                        className="w-[50%] h-[60%] filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-700"
                        src="https://kaffen-reactjs.netlify.app/images/service_icon1.png"
                        alt=""
                    />
                </div>
                <h2 className="text-white text-[20px] font-bold">Birthday Cakes</h2>
                <p className="text-white opacity-70">Sed ut perspiciatis unde</p>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col justify-center items-center gap-3" data-aos="zoom-in" data-aos-delay="200">
                <div className="w-[120px] h-[120px] flex justify-center items-center rounded-full bg-[#0e1317] hover:bg-[#b99272] hover:shadow-xl transition-all duration-700 text-white group">
                    <img
                        className="w-[50%] h-[50%] filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-700"
                        src="https://kaffen-reactjs.netlify.app/images/service_icon2.png"
                        alt=""
                    />
                </div>
                <h2 className="text-white text-[20px] font-bold">Fresh Foods</h2>
                <p className="text-white opacity-70">Sed ut perspiciatis unde</p>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col justify-center items-center gap-3" data-aos="zoom-in" data-aos-delay="300">
                <div className="w-[120px] h-[120px] flex justify-center items-center rounded-full bg-[#0e1317] hover:bg-[#b99272] hover:shadow-xl transition-all duration-700 text-white group">
                    <img
                        className="w-[60%] h-[50%] filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-700"
                        src="https://kaffen-reactjs.netlify.app/images/service_icon3.png"
                        alt=""
                    />
                </div>
                <h2 className="text-white text-[20px] font-bold">Skills Chefs</h2>
                <p className="text-white opacity-70">Sed ut perspiciatis unde</p>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col justify-center items-center gap-3" data-aos="zoom-in" data-aos-delay="400">
                <div className="w-[120px] h-[120px] flex justify-center items-center rounded-full bg-[#0e1317] hover:bg-[#b99272] hover:shadow-xl transition-all duration-700 text-white group">
                    <img
                        className="w-[35%] h-[60%] filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-700"
                        src="https://kaffen-reactjs.netlify.app/images/service_icon4.png"
                        alt=""
                    />
                </div>
                <h2 className="text-white text-[20px] font-bold">Organic Juice</h2>
                <p className="text-white opacity-70">Sed ut perspiciatis unde</p>
            </div>
        </div>
    );
}
