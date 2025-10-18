import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { TfiLineDashed } from "react-icons/tfi";
import { LiaEnvelopeOpenTextSolid, LiaHeadsetSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

// ✅ استدعاء store
import { useCartStore } from "../../store/useCartStore";

export default function ContactUsPage() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    const [showPopup, setShowPopup] = useState(false);

    // ✅ جلب cart + clearCart + totalPrice من store
    const { cart, clearCart, totalPrice } = useCartStore();
    const navigate = useNavigate();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ تكوين بيانات الطلب
        const orderData = {
            ...formData,
            cart,
            total: totalPrice(),
            date: new Date().toLocaleString(),
        };

        // ✅ جلب الطلبات القديمة من localStorage
        const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

        // ✅ إضافة الطلب الجديد للقائمة
        existingOrders.push(orderData);

        // ✅ حفظ القائمة في localStorage
        localStorage.setItem("orders", JSON.stringify(existingOrders));

        setShowPopup(true);
    };

    return (
        <>
            {/* ✅ الهيدر */}
            <div className="menu w-full h-[80vh] bg-black relative mb-20">
                <div className="absolute inset-0 bg-[url('https://kaffen-reactjs.netlify.app/images/menu_reservation_inner_bg.jpg')] bg-cover bg-center bg-fixed opacity-45 z-0"></div>
                <div className="relative z-10 w-full h-[60vh] flex justify-center items-center">
                    <h1 className="text-white text-[90px] font-bold absolute top-60 left-1/2 -translate-x-1/2">Contact Us</h1>
                </div>
            </div>
            <div className="w-full min-h-[80vh] bg-[#0e1317] relative text-white flex flex-wrap justify-center items-center gap-10 p-10 mb-20">
                {/* كارت العنوان */}
                <div className="flex flex-col items-center justify-center gap-5 w-[350px] h-[400px] bg-[#090c0f] rounded-xl shadow-lg" data-aos="fade-up">
                    <FaMapMarkerAlt className="text-[70px] text-[#b99272]" />
                    <h1 className="text-[20px] font-bold">Main Location</h1>
                    <p className="text-[16px] w-[190px] text-center opacity-70">55 Main Street, 2nd Block, 3rd Floor, New York</p>
                    <div className="flex items-center justify-center gap-2">
                        <TfiLineDashed className="text-[50px] text-[#b99272]" />
                        <TfiLineDashed className="text-[50px] text-[#b99272]" />
                    </div>
                    <p className="text-[16px] w-[200px] text-center opacity-70">394 Main Street, USA</p>
                </div>
                {/* كارت الإيميل */}
                <div className="flex flex-col items-center justify-center gap-5 w-[350px] h-[400px] bg-[#090c0f] rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
                    <LiaEnvelopeOpenTextSolid className="text-[70px] text-[#b99272]" />
                    <h1 className="text-[20px] font-bold">Email Address</h1>
                    <p className="text-[16px] w-[180px] text-center opacity-70">supportkaffen@gmail.com</p>
                    <div className="flex items-center justify-center gap-2">
                        <TfiLineDashed className="text-[50px] text-[#b99272]" />
                        <TfiLineDashed className="text-[50px] text-[#b99272]" />
                    </div>
                    <p className="text-[16px] w-[190px] text-center opacity-70">www.kaffeninfo.net</p>
                </div>
                {/* كارت الهاتف */}
                <div className="flex flex-col items-center justify-center gap-5 w-[350px] h-[400px] bg-[#090c0f] rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="400">
                    <LiaHeadsetSolid className="text-[70px] text-[#b99272]" />
                    <h1 className="text-[20px] font-bold">Phone Number</h1>
                    <p className="text-[16px] w-[180px] text-center opacity-70">+012 (345) 678 99</p>
                    <div className="flex items-center justify-center gap-2">
                        <TfiLineDashed className="text-[50px] text-[#b99272]" />
                        <TfiLineDashed className="text-[50px] text-[#b99272]" />
                    </div>
                    <p className="text-[17px] w-[180px] text-center opacity-70">123456780</p>
                </div>
            </div>
            {/* ✅ Contact Form */}
            <div className="w-full min-h-[80vh] bg-[#0e1317] relative text-white flex justify-center items-center mb-20">
                <div className="flex flex-col items-center justify-center gap-5 h-auto w-[1100px] bg-[#090c0f] p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-bold text-[#b99272]">Contact Us</h2>
                    <h2 className="text-[40px] font-light w-[340px]">Send Us Message</h2>

                    <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center gap-4">
                        {/* 📝 Inputs */}
                        <div className="w-full flex flex-wrap justify-center items-center gap-6">
                            <div className="relative w-[300px]">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full h-[50px] pr-12 pl-3 py-3 bg-black border border-white text-white"
                                />
                                <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-lg" />
                            </div>
                            <div className="relative w-[300px]">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full pr-12 pl-3 p-3 bg-black border border-white text-white"
                                />
                                <FaEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-lg" />
                            </div>
                            <div className="relative w-full max-w-[360px]">
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Your Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full pr-12 pl-3 p-3 bg-black border border-white text-white"
                                />
                                <FaPhone className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-lg" />
                            </div>
                        </div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="p-3 w-full max-w-[1000px] border border-white bg-black text-white"
                        />
                        <button type="submit" className="w-[200px] h-12 text-[20px] bg-[#b99272] hover:bg-[#a67d57] text-white rounded-lg font-semibold transition">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* ✅ Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                    <div className="Popup bg-[#1a1f25] flex flex-col justify-between text-white rounded-xl w-[600px] h-[50vh] shadow-2xl relative p-6">
                        <h2 className="text-2xl font-bold text-center text-[#b99272]">✅ بياناتك المسجلة</h2>
                        <p>
                            <b>Name:</b> {formData.name}
                        </p>
                        <p>
                            <b>Email:</b> {formData.email}
                        </p>
                        <p>
                            <b>Phone:</b> {formData.phone}
                        </p>
                        <p>
                            <b>Message:</b> {formData.message}
                        </p>

                        {/* ✅ تفاصيل السلة */}
                        <div className="mt-4 overflow-y-auto max-h-[150px]">
                            <h3 className="text-lg font-semibold text-[#b99272]">🛒 تفاصيل الطلب</h3>
                            <ul className="list-disc pl-6">
                                {cart.map((item) => (
                                    <li key={item.id}>
                                        {item.title} - ${item.price} × {item.qty}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-2 font-bold">إجمالي السعر: ${totalPrice()}</p>
                        </div>

                        {/* ✅ أزرار */}
                        <div className="flex justify-center gap-4 mt-4">
                            <button
                                onClick={() => {
                                    alert("✅ تم تأكيد عملية الشراء بنجاح! شكراً لتواصلك معنا.");
                                    setShowPopup(false);
                                    setFormData({ name: "", email: "", phone: "", message: "" });
                                    clearCart();
                                    navigate("/"); // رجوع للهوم بعد التأكيد
                                }}
                                className="w-[150px] h-10 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition">
                                تأكيد عملية الشراء
                            </button>

                            <button onClick={() => setShowPopup(false)} className="w-[100px] h-10 bg-[#b99272] hover:bg-[#a67d57] text-white rounded-lg font-semibold">
                                إغلاق
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
