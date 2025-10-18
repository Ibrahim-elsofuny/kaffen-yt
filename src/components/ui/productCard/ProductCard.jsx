import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { useCartStore } from "../../../store/useCartStore"; // ✅ استدعاء Zustand

export default function ProductCard({ item, onView }) {
    const addToCart = useCartStore((state) => state.addToCart); // ✅ جلب الدالة من store

    return (
        <div className="product-card-wrapper">
            <div className="product-card w-[40vh] h-[50vh] relative overflow-hidden group flex items-center justify-center flex-col border border-[#b99272] rounded-2xl">
                {/* صورة المنتج */}
                <img src={item.image} alt={item.title} className="w-[170px] h-[170px] rounded-2xl object-cover" />

                {/* المحتوى */}
                <div className="p-4 text-white flex flex-col gap-2 text-center">
                    <h2 className="text-[22px] font-semibold">{item.title}</h2>
                    <p className="text-[18px] text-[#b99272] font-medium">${item.price}</p>
                </div>

                {/* أيقونات */}
                <div className="absolute inset-0 rounded-2xl bg-black/40 opacity-0 group-hover:opacity-100 flex items-start justify-between px-4 py-4 transition-opacity duration-700 ease-in-out">
                    {/* زر السلة */}
                    <button
                        onClick={() => addToCart(item)} // ✅ يضيف المنتج للسلة
                        className="w-10 h-10 absolute top-5 right-5 cursor-pointer flex items-center justify-center text-white hover:text-[#b99272] transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                        <FaShoppingCart size={22} />
                    </button>

                    {/* زر التفاصيل */}
                    <button
                        onClick={() => onView(item)}
                        className="w-10 h-10 absolute top-5 left-5 cursor-pointer flex items-center justify-center text-white hover:text-[#b99272] transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                        <IoIosInformationCircle size={28} />
                    </button>
                </div>
            </div>
        </div>
    );
}
