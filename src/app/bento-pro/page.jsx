'use client'

// Bento Pro Page
import React from "react";
import BentoItem from "@/components/BentoItem";
import { useState } from "react";

export default function BentoProPage() {
    const snackItems = [
        { name: "Snack Item 1", price: "$2.99" },
        { name: "Snack Item 2", price: "$3.49" },
        { name: "Snack Item 3", price: "$4.99" },
    ];

    const mainCourseItems = [
        { name: "Main Course Item 1", price: "$8.99" },
        { name: "Main Course Item 2", price: "$9.49" },
        { name: "Main Course Item 3", price: "$10.99" },
    ];

    const dessertItems = [
        { name: "Dessert Item 1", price: "$4.99" },
        { name: "Dessert Item 2", price: "$5.49" },
        { name: "Dessert Item 3", price: "$6.99" },
    ];

    const drinkItems = [
        { name: "Drink Item 1", price: "$1.99" },
        { name: "Drink Item 2", price: "$2.49" },
        { name: "Drink Item 3", price: "$2.99" },
    ];

    const [selectedItems, setSelectedItems] = useState({});

    const handleItemClick = (category, item) => {
        setSelectedItems((prevItems) => ({
            ...prevItems,
            [category]: item,
        }));
    };


    return (
        <div className="bento-pro-page">
            <h1>Bento Pro</h1>
            <section>
                <h2>Snack</h2>
                <ul className="flex flex-wrap justify-center">
                    {snackItems.map((item, index) => (
                        <li key={index} className="mr-4">
                            <BentoItem
                                name={item.name}
                                price={item.price}
                                isSelected={selectedItems.snack === item}
                                onClick={() => handleItemClick("snack", item)}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Main Course</h2>
                <ul className="flex flex-wrap justify-center">
                    {mainCourseItems.map((item, index) => (
                        <li key={index} className="mr-4">
                            <BentoItem
                                name={item.name}
                                price={item.price}
                                isSelected={selectedItems.mainCourse === item}
                                onClick={() => handleItemClick("mainCourse", item)}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Dessert</h2>
                <ul className="flex flex-wrap justify-center">
                    {dessertItems.map((item, index) => (
                        <li key={index} className="mr-4">
                            <BentoItem
                                name={item.name}
                                price={item.price}
                                isSelected={selectedItems.dessert === item}
                                onClick={() => handleItemClick("dessert", item)}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Drinks</h2>
                <ul className="flex flex-wrap justify-center">
                    {drinkItems.map((item, index) => (
                        <li key={index} className="mr-4">
                            <BentoItem
                                name={item.name}
                                price={item.price}
                                isSelected={selectedItems.drink === item}
                                onClick={() => handleItemClick("drink", item)}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <button>Confirm Your Bento</button>
            <p>Selected Items:</p>
            <ul>
                {Object.keys(selectedItems).map((category, index) => (
                    <li key={index}>
                        {category}: {selectedItems[category].name}
                    </li>
                ))}
            </ul>
        </div>
    );
};