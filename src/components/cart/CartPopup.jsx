// src/components/CartPopup/CartPopup.jsx
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";

export default function CartPopup({ isOpen, onClose }) {
    const { cart, removeFromCart, decreaseQty, totalPrice } = useCartStore();
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleCheckout = () => {
        onClose();
        navigate("/Contact-us");
    };

    return (
        <div className="fixed top-0 right-0 w-[320px] h-full bg-white shadow-xl z-50 rounded-l-2xl overflow-hidden">
            {/* Header */}
            <div className="h-16 flex justify-between items-center p-4 bg-[#b99272] text-white">
                <h2 className="text-lg font-bold">🛒 My Cart</h2>
                <button onClick={onClose} className="hover:text-red-200 text-2xl font-bold">
                    ✖
                </button>
            </div>

            {/* Body */}
            <div className="p-4 overflow-y-auto h-[calc(100%-160px)]">
                {cart.length === 0 ? (
                    <p className="text-gray-500 text-center mt-8">Your cart is empty 🛍️</p>
                ) : (
                    <ul className="space-y-3">
                        {cart.map((item) => (
                            <li key={item.id} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-sm">
                                <div>
                                    <h4 className="font-semibold text-sm text-gray-800">{item.title}</h4>
                                    <p className="text-xs text-gray-500">
                                        {item.qty} × ${item.price}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => decreaseQty(item.id)} className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-sm rounded">
                                        -
                                    </button>
                                    <button onClick={() => removeFromCart(item.id)} className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded">
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-[#faf7f4] border-t">
                <div className="flex justify-between mb-3">
                    <span className="text-gray-600 font-semibold">Total:</span>
                    <span className="text-[#b99272] font-bold">${totalPrice()}</span>
                </div>
                <button onClick={handleCheckout} className="w-full bg-[#b99272] hover:bg-[#a67d57] text-white py-2 rounded-lg font-semibold transition">
                    Contact Us
                </button>
            </div>
        </div>
    );
}
