// BentoSelectionPage.js
import React from "react";
import BentoItem from "@/components/BentoItem";

const BentoSelectionPage = () => {
    const bentoItems = [
        { image: "item1.jpg", name: "Item 1", price: 5.99 },
        { image: "item2.jpg", name: "Item 2", price: 6.99 },
        { image: "item3.jpg", name: "Item 3", price: 7.99 },
    ];

    return (
        <div className="bento-selection-page">
            <h1>Bento Selection</h1>
            <ul>
                {bentoItems.map((item, index) => (
                    <li key={index}>
                        <BentoItem
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    </li>
                ))}
            </ul>
            <button>Bento Pro</button>
            <button>Customize Your Bento</button>
        </div>
    );
};

export default BentoSelectionPage;
