import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import CartPopup from "../cart/CartPopup";
import { useCartStore } from "../../store/useCartStore"; // ✅ بدل CounterContext خليها من store

export default function Navbar() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cart } = useCartStore(); // ✅ جلب السلة من zustand

    // حساب إجمالي الكمية
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

    return (
        <nav className="fixed top-0 left-0 right-0 z-20 h-[70px] bg-[#0e1317] flex justify-between items-center px-8 text-white">
            {/* الشعار */}
            <img className="logo max-w-[100px] max-h-[40px]" src="https://kaffen-reactjs.netlify.app/images/logo.png" alt="logo" />

            {/* روابط */}
            <ul className="flex justify-between items-center gap-8 text-lg">
                <NavLink to={"/"}>HOME</NavLink>
                <NavLink to={"/About"}>ABOUT</NavLink>
                <NavLink to={"/Menu"}>MENU</NavLink>
                <NavLink to={"/Services"}>SERVICES</NavLink>
                <NavLink to={"/Contact-us"}>CONTACTS</NavLink>
            </ul>

            {/* أيقونات */}
            <div className="flex items-center gap-4 relative">
                {/* أيقونة السلة */}
                <div className="relative cursor-pointer" onClick={() => setIsCartOpen(true)}>
                    <SlBasket className="text-2xl hover:text-[#b99272]" />

                    {/* البادج (عدد العناصر الكلي) */}
                    {totalItems > 0 && <span className="absolute -top-2 right- w-5 h-5 flex justify-center items-center bg-red-600 text-white text-xs font-bold rounded-full">{totalItems}</span>}
                </div>
            </div>

            {/* البوب أب بتاع السلة */}
            <CartPopup isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </nav>
    );
}
