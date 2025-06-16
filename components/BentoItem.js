// BentoItem.js
import React from "react";

export default function BentoItem({ children, name, price, isSelected, onClick }) {
    return (
        <div
            className={`inline-flex items-center p-[10px] border-b border-[#ddd] hover:bg-[#f9f9f9] transition-colors duration-200 ${
                isSelected ? "bg-[#f9f9f9]" : ""
            }`}
            onClick={onClick}
        >
            {/* <img
                src={image}
                alt={name}
                className="w-[100px] h-[100px] rounded-xl mb-[10px]"
            /> */}
            { children }
            <div className="ml-[10px]">
                <h3 className="font-bold mb-[5px] text-[24px]">{name}</h3>
                {price && <p className="text-[24px] text-[#000]">₱{price}</p>}
            </div>
        </div>
    );
}
