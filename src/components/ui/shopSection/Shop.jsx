import React, { useEffect } from "react";
import CustomContainer from "../customContainar/CustomContainer";
import CustomTabs from "../customTabs/CustomTabs";
import ProductCard from "../productCard/ProductCard";
import { products } from "../../../data/data";
import { IoMdClose } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ShopSection() {
    const [activeTab, setActiveTab] = React.useState("all");
    const [selectedProduct, setSelectedProduct] = React.useState(null);

    const categories = [
        { label: "ALL", value: "all" },
        { label: "HOT COFFEE", value: "Hot coffee" },
        { label: "FAST FOOD", value: "Fast food" },
        { label: "DESSERT", value: "Dessert" },
    ];

    const filteredProducts = activeTab === "all" ? products : products.filter((p) => p.category === activeTab);

    function openPopupFun(product) {
        setSelectedProduct(product);
    }

    function closePopupFun() {
        setSelectedProduct(null);
    }

    // ✅ تهيئة AOS
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="shop-section w-full h-full bg-[#0e1317] flex flex-col items-center justify-center gap-20">
            {/* العنوان */}
            <div className="text-center flex flex-col items-center justify-center gap-4" data-aos="fade-up">
                <p className="text-[#b99272]">WE PROVIDE</p>
                <h2 className="text-white text-[30px] font-bold">Kaffen Services One</h2>
            </div>

            <CustomContainer customClass={"w-[160vh] h-full"}>
                {/* التابس */}
                <div data-aos="fade-up">
                    <CustomTabs data={categories} setActiveTab={setActiveTab} activeTab={activeTab} />
                </div>

                {/* المنتجات كل عنصر لوحده */}
                <div className="shop-section-products bg-black grid grid-cols-2 justify-items-center gap-10 py-10">
                    {filteredProducts.map((item, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={index * 150} // 👈 كل كارت يدخل بعد التاني
                        >
                            <ProductCard item={item} onView={openPopupFun} />
                        </div>
                    ))}
                </div>

                {/* البوب أب */}
                <div className={`popup ${selectedProduct ? "active" : ""}`}>
                    <div className={`popup-container ${selectedProduct ? "active" : ""}`} data-aos="zoom-in">
                        {selectedProduct && (
                            <div className="flex gap-6 p-6 relative bg-[#1a1a1a] rounded-xl shadow-lg">
                                {/* أيكون إغلاق */}
                                <button onClick={closePopupFun} className="absolute top-3 right-3 text-gray-400 hover:text-[#b99272] cursor-pointer transition">
                                    <IoMdClose size={28} />
                                </button>

                                {/* صورة المنتج */}
                                <img src={selectedProduct.image} alt={selectedProduct.title} className="w-40 h-40 object-cover rounded-lg border border-gray-200" />

                                {/* تفاصيل المنتج */}
                                <div className="flex flex-col justify-center gap-5 flex-1">
                                    <div>
                                        <h1 className="text-2xl font-bold mb-2 text-white">{selectedProduct.title}</h1>
                                        <p className="text-white opacity-60">{selectedProduct.description}</p>
                                    </div>
                                    <p className="mt-4 text-lg font-semibold text-[#b99272]">${selectedProduct.price}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </CustomContainer>
        </section>
    );
}
