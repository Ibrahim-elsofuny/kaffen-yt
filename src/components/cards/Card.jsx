import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Card() {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
    }, []);

    const logos = ["brand1.png", "brand2.png", "brand3.png", "brand4.png", "brand5.png", "brand6.png"];

    return (
        <div className="card w-full h-[300px] bg-[#0e1317] flex items-center gap-[4em] justify-center overflow-hidden relative">
            {logos.map((logo, i) => (
                <div key={i} data-aos="zoom-in" data-aos-delay={i * 150}>
                    <img className="w-[120px] h-[120px] opacity-20 hover:opacity-100 transition-opacity duration-700" src={`https://kaffen-reactjs.netlify.app/images/${logo}`} alt={`Logo ${i}`} />
                </div>
            ))}
        </div>
    );
}
