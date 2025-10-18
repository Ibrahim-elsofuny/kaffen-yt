import clsx from "clsx";
import React from "react";

export default function CustomTabs({ data = [], setActiveTab, activeTab }) {
    return (
        <div className=" custom-tabs flex items-center justify-center gap-4">
            {data.map((item) => (
                <span
                    key={item.value}
                    className={clsx(
                        "button-mune flex items-center justify-center cursor-pointer transition-all duration-300",
                        activeTab === item.value ? "bg-[#b99272] text-white " : "bg-black text-white opacity-50" ,
                    )}
                    onClick={() => setActiveTab(item.value)}>
                    {item.label}
                </span>
            ))}
        </div>
    );
}
