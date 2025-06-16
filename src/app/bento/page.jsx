// BentoSelectionPage.js
import React from "react";
import BentoItem from "@/components/BentoItem";
import Image from "next/image";

export default function BentoSelectionPage() {
    const bentoItems = [
        { image: "/bento box pro.jpg", name: "Bento Pro", price: "349.00" },
        { image: "/bento box pro max.jpeg", name: "Bento Pro Max", price: "499.00" },
        { image: "/bento box pro max plus.jpeg", name: "Bento Pro Max Plus", price: "649.00" },
    ];

    return (
        <div className="mx-auto p-4 flex flex-col items-center justify-center min-h-screen"
            style={{
                backgroundImage: "url('/bento-background-2.jpg')",
                backgroundSize: 'contain',
                backgroundPosition: 'center'
            }}>
            {/* "flex flex-col items-center justify-center min-h-screen bg-[#f0f0f0] p-4"> */}
            <h1 className="text-4xl font-bold mb-4">Bento Selection</h1>
            <p className="text-2xl text-gray-600">Customize Your Bento</p>
            <ul className="flex flex-wrap justify-center gap-4 mt-4">
                {bentoItems.map((item, index) => (
                    <li key={index}>
                        <BentoItem
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={200}
                                height={200}
                                className="w-[200px] h-[200px] rounded-xl mb-4" />
                        </BentoItem>
                    </li>
                ))}
            </ul>
        </div>
    );
};
