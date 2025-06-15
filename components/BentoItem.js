// BentoItem.js
import React from "react";

export default function BentoItem({ image, name, price, isSelected, onClick }) {
    return (
        <div
            className={`inline-flex items-center p-[10px] border-b border-[#ddd] hover:bg-[#f9f9f9] transition-colors duration-200 ${
                isSelected ? "bg-[#f9f9f9]" : ""
            }`}
            onClick={onClick}
        >
            <img
                src={image}
                alt={name}
                className="w-[100px] h-[100px] rounded-xl mb-[10px]"
            />
            <div className="ml-[10px]">
                <h3 className="font-bold mb-[5px] text-[16px]">{name}</h3>
                <p className="text-[16px] text-[#666]">${price}</p>
            </div>
        </div>
    );
}
