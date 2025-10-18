import React from "react";

export default function OrdersPage() {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    return (
        <div className="orders bg-[#0e1317] min-h-screen text-white">
            <h1 className="text-3xl font-bold text-[#b99272] mb-8">📦 قائمة الطلبات</h1>

            {orders.length === 0 ? (
                <p className="text-gray-300">لا يوجد طلبات محفوظة حالياً.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-[#b99272] rounded-lg overflow-hidden">
                        <thead className="bg-[#1a1f25] text-[#b99272]">
                            <tr>
                                <th className="px-6 py-3 border-b border-[#b99272] text-left">#</th>
                                <th className="px-6 py-3 border-b border-[#b99272] text-left">الاسم</th>
                                <th className="px-6 py-3 border-b border-[#b99272] text-left">الإيميل</th>
                                <th className="px-6 py-3 border-b border-[#b99272] text-left">الهاتف</th>
                                <th className="px-6 py-3 border-b border-[#b99272] text-left">الرسالة</th>
                                <th className="px-6 py-3 border-b border-[#b99272] text-left">التاريخ</th>
                                <th className="px-6 py-3 border-b border-[#b99272] text-left">تفاصيل الطلب</th>
                                <th className="px-6 py-3 border-b border-[#b99272] text-left">الإجمالي</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index} className="hover:bg-[#222831] transition">
                                    <td className="px-6 py-4 border-b border-[#333]">{index + 1}</td>
                                    <td className="px-6 py-4 border-b border-[#333]">{order.name}</td>
                                    <td className="px-6 py-4 border-b border-[#333]">{order.email}</td>
                                    <td className="px-6 py-4 border-b border-[#333]">{order.phone}</td>
                                    <td className="px-6 py-4 border-b border-[#333]">{order.message}</td>
                                    <td className="px-6 py-4 border-b border-[#333]">{order.date}</td>
                                    <td className="px-6 py-4 border-b border-[#333]">
                                        <ul className="list-disc pl-4">
                                            {order.cart.map((item, i) => (
                                                <li key={i}>
                                                    {item.title} - ${item.price} × {item.qty}
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td className="px-6 py-4 border-b border-[#333] font-bold text-[#b99272]">${order.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
