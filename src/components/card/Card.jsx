import React from "react";

export default function Card() {
    return (
        <div
            className="card border border-gray-400 rounded-2xl overflow-hidden group"
            data-aos="zoom-in" // نوع التأثير
            data-aos-delay="200" // تأخير (ms) اختياري
            data-aos-duration="1200" // مدة الحركة (اختياري)
        >
            <div className="card-image h-[69vh] border-b border-gray-400 overflow-hidden">
                <img
                    className="w-full h-full object-cover group-hover:scale-110 duration-300"
                    src="https://img.freepik.com/free-photo/travel-concept-with-lugagge-hat_23-2149030570.jpg?t=st=1751615999~exp=1751619599~hmac=a743e4a0d3213aac6359a263b16e06dfa1365757059f037761f12c0a91ba23db&w=1380"
                    alt=""
                />
            </div>
            <div className="card-content py-8 px-4">
                <h2 className="group-hover:text-green-500 duration-300">Card Title</h2>
                <p className="hover:text-green-500 duration-300">Card Description</p>
            </div>
        </div>
    );
}
