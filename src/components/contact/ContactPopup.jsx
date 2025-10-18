import { useState } from "react";

export default function ContactPopup({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("✅ Order placed successfully after contact info submitted!");
        setFormData({ name: "", email: "", message: "" });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-[400px] rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-[#b99272]">Contact Information</h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows="3" className="w-full p-2 border rounded-lg" />
                    <button type="submit" className="w-full bg-[#b99272] hover:bg-[#a67d57] text-white py-2 rounded-lg font-semibold transition">
                        Confirm & Checkout
                    </button>
                </form>

                <button onClick={onClose} className="mt-3 text-sm text-gray-500 hover:text-red-500">
                    Cancel
                </button>
            </div>
        </div>
    );
}
